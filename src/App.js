import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Database from "./Components/Database";
import Consumption from "./Components/Consumption";
import Archive from "./Components/Archive";
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
     
      <Link to="/database"><i id={styles["link-list"]} className="fas fa-file-alt"></i></Link>
      <Link to="/consumption"><i id={styles["link-pepper"]} className="fas fa-pepper-hot"></i></Link>
      
      <Switch>
        <Route path="/database" component={Database}></Route>
        <Route path="/consumption" component={Consumption}></Route>
        <Route path="/archive" component={Archive}></Route>
        <Database />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
