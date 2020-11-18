import React from "react";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import Router from "./Router";
import "./App.css";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
