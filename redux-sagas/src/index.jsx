import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/configureStore";
import "semantic-ui-css/semantic.min.css";

const result = store(); // !god

ReactDOM.render(
  <React.StrictMode>
    <Provider store={result}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
