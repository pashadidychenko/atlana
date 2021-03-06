import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import store from "./store/store";
import { Provider } from "react-redux";

const rootEl = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);
