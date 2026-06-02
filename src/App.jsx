import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
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
