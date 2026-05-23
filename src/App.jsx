import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";
import "./App.css"
const App = () => {
  console.log(router);
  return (
    <>
    <ScrollProgressBar></ScrollProgressBar>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
