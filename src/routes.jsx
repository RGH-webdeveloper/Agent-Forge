import { createBrowserRouter } from "react-router";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Integration from "./components/Integration";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    path: "/integration",
    element: <Integration />,
  },
  {
    path: "/Pricing",
    element: <Pricing />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
export default router;
