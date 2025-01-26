import React from "react";
import ReactDOM from "react-dom/client"; // Dodaj ovaj uvoz
import { Provider } from "react-redux";
import store from "./Redux/store"; // Tvoj Redux store
import App from "./App"; // Glavna komponenta
import "./index.css"; // Stilovi aplikacije

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
