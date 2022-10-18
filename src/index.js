import React from "react";
import ReactDOM from "react-dom/client";

// Componetns
import App from "./App";

// Styles
import "./index.css";

// React-router-dom
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);