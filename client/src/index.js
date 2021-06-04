import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContactListProvider } from "./context/ContactListProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContactListProvider>
      <App />
    </ContactListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
