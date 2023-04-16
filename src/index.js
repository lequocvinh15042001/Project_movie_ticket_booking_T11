import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./styles/normalize.css";
// import MessengerCustomerChat from 'react-messenger-customer-chat';

const enhanced = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);
const store = createStore(rootReducer, enhanced);


ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* Chỉ cần add https của cái host lên setting tin nhắn nâng cao của fb là chat được + FPT Ai */}
    {/* <MessengerCustomerChat
      pageId="100088543873922"
      appId="1049723576425832"
    />, */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
