import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HomeContext } from "./providers/HomeStoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeContext>
      <App />
    </HomeContext>
  </React.StrictMode>
);
