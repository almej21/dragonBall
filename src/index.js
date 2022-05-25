import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import appReducer from "./features/appState";
import player1Reducer from "./features/player1state";
import player2Reducer from "./features/player2state";

const store = configureStore({
  reducer: {
    appState: appReducer,
    player1state: player1Reducer,
    player2state: player2Reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

reportWebVitals();
