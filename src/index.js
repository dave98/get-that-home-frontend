import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { global, reset } from "./style/global";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global styles={global} />
    <Global styles={reset} />
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </>
);
