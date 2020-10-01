import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Database from "./Components/Database";
import Consumption from "./Components/Consumption";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <li>
        <Link to="/database">Database</Link>
      </li>
      <li>
        <Link to="/consumption">Consumption</Link>
      </li>
      <Route path="/database" component={Database}></Route>
      <Route path="/consumption" component={Consumption}></Route>
    </BrowserRouter>
  );
}

export default App;
