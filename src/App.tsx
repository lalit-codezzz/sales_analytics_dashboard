import React from "react";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.Fragment>
  )
}

