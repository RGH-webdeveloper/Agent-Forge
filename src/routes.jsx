import { createBrowserRouter } from "react-router";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import RootLayout from "./components/Layouts/RootLayout";
import Platform from "./components/Platform/Platform";
import Integrations from "./components/Integration/Integrations"
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"/platform",
        element: <Platform/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/integrations",
        element : <Integrations/>
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
export default router;
