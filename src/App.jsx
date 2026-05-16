import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router";
import router from "./routes";
import { Col, Container, Row } from "react-bootstrap";
const App = () => {
  console.log(router);
  return (
    <>
      <RouterProvider router={router} />
      <div className="container d-flex">

      </div>
    </>
  );
};

export default App;
