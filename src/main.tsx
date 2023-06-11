// libraries
import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App";

// styles
import "@css/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
