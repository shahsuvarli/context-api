import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HomeContext } from "./providers/HomeStoreProvider";
import { HomeProvider } from "./providers/HomeStoreProviderReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeProvider>
      <HomeContext>
        <App />
      </HomeContext>
    </HomeProvider>
  </React.StrictMode>
);
