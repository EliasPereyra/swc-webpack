import { createBrowserRouter } from "react-router-dom";

import About from "./pages/about";
import Contact from "./pages/contact";
import MainApp from "./App";
import Posts from "./pages/posts";
import ErrorPage from "./pages/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
    ],
  },
]);
