import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { global, reset } from "./style/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global styles={global} />
    <Global styles={reset} />
    <App />
  </>
);
