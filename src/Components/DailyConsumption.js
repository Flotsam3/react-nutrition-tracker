import React, {useRef} from "react";
import styles from "./DailyConsumption.module.css";

function DailyConsumption(props) {
  const consumptionList = props.dailyConsumption;
  console.log(consumptionList);
  const inputGramm = useRef([]);
  const inputName = useRef([]);
  const inputKcal = useRef([]);
  const inputCho = useRef([]);
  const inputPro = useRef([]);
  const inputFat = useRef([]);

  const handleDelete = (ev) => {
    props.onDelete(ev.target.id);
  }

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
          {/* <p className={styles.data__menge}>
            <button className={styles.data__button}>OK</button>
          </p> */}
        </div>
        <div className={styles["verbrauch-inhalt"]}>
        {consumptionList.map((item, index) => (
          <div key={index} className={styles["liste-verbrauch"]}>
              <span key={index + 1} ref={el => inputName.current[index]=el} className={styles.data__food}>
                {item.Name}<button id={index} onClick={handleDelete}>x</button>
              </span>
              <span key={index + 2} ref={el => inputGramm.current[index]=el} className={styles.data__gramm}>
                {item.Gramm}
              </span>
              <span key={index + 3} ref={el => inputKcal.current[index]=el} className={styles.data__kcal}>
                {item.Kcal}
              </span>
              <span key={index + 4} ref={el => inputCho.current[index]=el} className={styles.data__carbs}>
                {item.CHO}
              </span>
              <span key={index + 5} ref={el => inputPro.current[index]=el} className={styles.data__protein}>
                {item.Pro}
              </span>
              <span key={index + 6} ref={el => inputFat.current[index]=el} className={styles.data__fat}>
                {item.Fat}
              </span>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default DailyConsumption;
