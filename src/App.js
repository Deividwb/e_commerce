import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import Header from "./components/Header";
import { Provider } from "react-redux";
import Store from "./Store";

function App() {
  return (
    <>
    <Provider store={Store}>

      <Header />
      <Router />
      </Provider>
    </>
  );
}

export default App;
