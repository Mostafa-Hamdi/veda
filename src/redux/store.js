// src/redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { api } from "./Services/ApiSlice";

// Combine reducers
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

// Create store
const store = configureStore({
  reducer: rootReducer, // Directly use the rootReducer without persisting
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // still required for api middleware (redux-toolkit)
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in non-production environments
});

export default store;
