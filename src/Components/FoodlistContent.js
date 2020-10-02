import React, { useContext, useRef } from "react";
import Database from "./Database";
import styles from "./FoodlistContent.module.css";
import { FoodDataContext } from "./Database";

function FoodlistContent(props) {
  const foodList = useContext(FoodDataContext);
  const inputGramm = useRef([]);
  const inputName = useRef([]);
  const inputKcal = useRef([]);
  const inputCho = useRef([]);
  const inputPro = useRef([]);
  const inputFat = useRef([]);

  const handleGetConsumptionData = () => {
    props.onGetConsumption([inputGramm, inputName, inputKcal, inputCho, inputPro, inputFat]);
  };

  return (
    <>
      <div className={styles.data}>
      <div className={styles.data__title}>
        <button className={styles.data__food}>Food</button>
        <button className={styles.data__kcal}>Kcal</button>
        <button className={styles.data__carbs}>CHO</button>
        <button className={styles.data__protein}>Pro</button>
        <button className={styles.data__fat}>Fat</button>
        <button onClick={handleGetConsumptionData} className={styles.data__button}>OK</button>
      </div>
        {foodList.map((item, index) => (
          <div key={index} className={styles.data__content}>
            <span key={index + 1} ref={el => inputName.current[index]=el} className={styles.data__food}>
              {item.name}
            </span>
            <span key={index + 2} ref={el => inputKcal.current[index]=el} className={styles.data__kcal}>
              {item.kcal}
            </span>
            <span key={index + 3} ref={el => inputCho.current[index]=el} className={styles.data__carbs}>
              {item.carbs}
            </span>
            <span key={index + 4} ref={el => inputPro.current[index]=el} className={styles.data__protein}>
              {item.protein}
            </span>
            <span key={index + 5} ref={el => inputFat.current[index]=el} className={styles.data__fat}>
              {item.fat}
            </span>
            <input key={index} ref={el => inputGramm.current[index]=el} type="number" className={styles.data__menge} placeholder="gramm"
            ></input>
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodlistContent;
