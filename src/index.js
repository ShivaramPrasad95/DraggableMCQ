import React from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.css";

import TestApp from "./TestApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
  rootElement
);
