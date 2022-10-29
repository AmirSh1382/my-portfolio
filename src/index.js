import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Componetns
import App from "./App";

// Styles
import "./styles/index.scss";

// React-router-dom
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);