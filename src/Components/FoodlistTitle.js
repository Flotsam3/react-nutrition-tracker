import React from "react";
import styles from "./FoodlistTitle.module.css";

function FoodlistTitle() {
  return (
    <div className={styles.data}>
      <div className={styles.data__title}>
        <button className={styles.data__food}>Food</button>
        <button className={styles.data__kcal}>Kcal</button>
        <button className={styles.data__carbs}>CHO</button>
        <button className={styles.data__protein}>Pro</button>
        <button className={styles.data__fat}>Fat</button>
        <button className={styles.data__button}>OK</button>
      </div>
    </div>
  );
}

export default FoodlistTitle;
