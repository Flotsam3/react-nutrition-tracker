import React from "react";
import styles from "./Balance.module.css";

function DailyConsumption() {
  return (
    <div>
      <h2 className={styles.verbrauch}>Daily Consumption</h2>
      <div className={styles["verbrauch-container"]}>
        <div className={styles["verbrauch-title"]}>
          <p className={styles.data__food}>Food</p>
          <p className={styles.data__gramm}>Gramm</p>
          <p className={styles.data__kcal}>Kcal</p>
          <p className={styles.data__carbs}>CHO</p>
          <p className={styles.data__protein}>Pro</p>
          <p className={styles.data__fat}>Fat</p>
          <p className={styles.data__menge}>
            <button className={styles.data__button}>OK</button>
          </p>
        </div>
        <div className={styles["verbrauch-inhalt"]}></div>
      </div>
    </div>
  );
}

export default DailyConsumption;
