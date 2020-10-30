import React from 'react';
import {Route, useHistory} from 'react-router-dom';
import styles from './Balance.module.css';
import Archive from './Archive';

function Balance(props) {
    const history = useHistory();
    const consumptionData = props.onConsumptionArchive;

    const handleRouteToArchive = ()=>{
        history.push("/archive");
    }

    return (
        <div>
            <h2 className={styles.bilanz}>Balance</h2>
            <div className={styles['bilanz-inhalt']}>
                <div className={styles['bilanz-title']}>
                    <span className={styles['bilanz-kcal']}>Calories</span>
                    <span className={styles['bilanz-kh']}>Carbohydrates</span>
                    <span className={styles['bilanz-ew']}>Protein</span>
                    <span className={styles['bilanz-fe']}>Fat</span>
                </div>
                <div className={styles['bilanz-summe']}>
                    <span className={styles.data__kcal}>{props.showBalance[0]}</span>
                    <span className={styles.data__carbs}>{props.showBalance[1]}</span>
                    <span className={styles.data__protein}>{props.showBalance[2]}</span>
                    <span className={styles.data__fat}>{props.showBalance[3]}</span>
                </div>
                <div className={styles.buttons}>
                    <button onClick={props.onClear} className={styles['alle-loeschen']}>Clear</button>
                    <button onClick={handleRouteToArchive} className={styles.archive}>Archive</button>
                </div>
                <a href="index.html" className={styles['link-lebensmittel']}><i className={styles['fas fa-pepper-hot']}></i></a>
            </div>
            <Route path="/archive" component={Archive} onConsumptionArchive={consumptionData} />
        </div>
    )
}

export default Balance
