import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const roots = document.getElementById("root");
const root = createRoot(roots);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
