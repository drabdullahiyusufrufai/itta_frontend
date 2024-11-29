import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import { UserContextProvider } from "./context/UserContext";
import { DarkModeProvider } from "./context/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
