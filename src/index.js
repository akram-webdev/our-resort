
import React from "react";
import ReactDOM from "react-dom";
// import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import "./styles/index.scss";

import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // Provider connects the store (global states) to the entire App
  <BrowserRouter>
  <Provider store={store}>
        <App />
  
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);