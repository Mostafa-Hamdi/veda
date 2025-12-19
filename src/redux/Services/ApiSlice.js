// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// ===== Token Refresh State =====
let isRefreshing = false;
let subscribers = [];

const onTokenRefreshed = (newToken) => {
  subscribers.forEach((callback) => callback(newToken));
  subscribers = [];
};

const addSubscriber = (callback) => {
  subscribers.push(callback);
};

// ===== Axios instance for refresh =====
const axiosInstance = axios.create({
  baseURL: "https://blog.letsveda.com/",
});

// ===== Custom baseQuery with refresh logic =====
const baseQuery = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://blog.letsveda.com/",
    prepareHeaders: (headers, { endpoint }) => {
      const token = localStorage.getItem("VedaToken");
      const language = localStorage.getItem("Lan") || "en";

      headers.set("lang", language);
      headers.set("Accept", "application/json");

      if (token && endpoint !== "login") {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });

  let result = await rawBaseQuery(args, api, extraOptions);

  // ===== Handle token expired =====
  if (result?.error?.data?.message === "This token is expired.") {
    if (!isRefreshing) {
      isRefreshing = true;

      axiosInstance
        .post(
          "https://blog.letsveda.com/",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("VedaToken")}`,
            },
          },
        )
        .then((response) => {
          const newToken = response?.data?.data?.token;
          if (newToken) {
            localStorage.setItem("VedaToken", newToken);
            localStorage.setItem("isLogin", "true");
            onTokenRefreshed(newToken);
          }
        })
        .catch(() => {
          localStorage.setItem("isLogin", "false");
        })
        .finally(() => {
          isRefreshing = false;
        });
    }

    return new Promise((resolve) => {
      addSubscriber((newToken) => {
        rawBaseQuery(args, api, extraOptions).then(resolve);
      });
    });
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog.letsveda.com/wp-json/", // WordPress API base URL
  }),
  endpoints: (builder) => ({
    getStories: builder.query({
      query: () => "wp/v2/stories?_embed", // Fetch stories with _embed parameter
    }),
    getStoryData: builder.query({
      query: (id) => `wp/v2/stories/${id}?_embed`, // Fetch stories with _embed parameter
    }),
    getBlogs: builder.query({
      query: () => `wp/v2/posts?_embed`, // Fetch stories with _embed parameter
    }),
    getBlogData: builder.query({
      query: (id) => `wp/v2/posts/${id}?_embed`, // Fetch stories with _embed parameter
    }),
    getFaqs: builder.query({
      query: () => `wp/v2/faqs?_embed`, // Fetch stories with _embed parameter
    }),
    getTestmonials: builder.query({
      query: () => `wp/v2/testmonial`, // Fetch stories with _embed parameter
    }),
  }),
});

export const {
  useGetStoriesQuery,
  useGetStoryDataQuery,
  useGetBlogsQuery,
  useGetBlogDataQuery,
  useGetFaqsQuery,
  useGetTestmonialsQuery,
} = api;
