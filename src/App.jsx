import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./i18n";
import Layout from "./Layout";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Blog from "./pages/blog";
import BlogPage from "./pages/blog page";
import About from "./pages/about";
import store from "./redux/store";
import { Provider } from "react-redux";
import StoryPage from "./pages/story page";
import TermsConditions from "./pages/terms and conditions";
import PrivacyPolicy from "./pages/privacy policy";
import ThankYouPage from "./pages/thankYou";
import ContactJordan from "./pages/contact social";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blog/:id",
          element: <BlogPage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/story/:id",
          element: <StoryPage />,
        },
        {
          path: "/terms-and-conditions",
          element: <TermsConditions />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/thank-you",
          element: <ThankYouPage />,
        },
      ],
    },
    {
      path: "/jordan",
      element: <ContactJordan />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
