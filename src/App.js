import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./store";

import Routes from "./routes";

import "./App.css";

function App() {
  return (
    <section className="app">
      <BrowserRouter>
        <Provider store={Store}>
          <Routes />
        </Provider>
      </BrowserRouter>
    </section>
  );
}

export default App;
