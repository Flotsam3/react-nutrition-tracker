import React, {useState} from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Database from "./Components/Database";
import Consumption from "./Components/Consumption";
import Archive from "./Components/Archive";
import styles from './App.module.css';

function App() {
  const [flag, setflag] = useState(localStorage.getItem('flag') || localStorage.setItem('flag', 'de'));

  const onHandleSetFlag = (flag)=>{
    console.log(flag);
    setflag(flag);
  }

  return (
    <BrowserRouter>
      <Link to="/database"><i id={styles["link-list"]} className="fas fa-file-alt"></i></Link>
      <Link to="/consumption"><i id={styles["link-pepper"]} className="fas fa-pepper-hot"></i></Link>
      {(flag === 'de')
      ?
      <button onClick={()=>{onHandleSetFlag('uk')}} className={styles.flag}>
        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="33" viewBox="0 0 640 480">
          <path fill="#ffce00" d="M0 320h640v160.002H0z"/>
          <path d="M0 0h640v160H0z"/>
          <path fill="#d00" d="M0 160h640v160H0z"/>
        </svg>
      </button>
      :
      <button onClick={()=>{onHandleSetFlag('de')}} className={styles.flag}>
        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="33" viewBox="0 0 640 480">
        <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M-85.333 0h682.67v512h-682.67z"/>
        </clipPath>
        </defs>
        <g clipPath="url(#a)" transform="translate(80) scale(.94)">
          <g strokeWidth="1pt">
            <path fill="#006" d="M-256 0H768.02v512.01H-256z"/>
            <path d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z" fill="#fff"/>
            <path d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z" fill="#fff"/>
            <path d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z" fill="#c00"/>
          </g>
        </g>
        </svg>
      </button>
      }
      
      <Switch>
        <Route path="/Database"><Database flagStatus={flag} /></Route>
        <Route path="/Consumption"><Consumption flagState={flag} /></Route>
        <Route path="/archive"><Archive flagStage={flag} /></Route>
        <Database />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
