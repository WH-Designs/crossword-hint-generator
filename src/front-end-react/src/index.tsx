import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>
);
