import React, { useContext, useEffect, useRef } from "react";
import Database from "./Database";
import styles from "./FoodlistContent.module.css";
import { FoodDataContext } from "./Database";

function FoodlistContent() {
  const foodList = useContext(FoodDataContext);
  let inputData = useRef([React.createRef(), React.createRef()]);

  const handleGetConsumptionData = () => {
    console.log(inputData.current[0].value);
    console.log(inputData.current[1].value);
  };

  return (
    <>
      <div className={styles.data}>
        {foodList.map((item, index) => (
          <div key={index} className={styles.data__content}>
            <span key={index + 1} className={styles.data__food}>
              {item.name}
            </span>
            <span key={index + 2} className={styles.data__kcal}>
              {item.kcal}
            </span>
            <span key={index + 3} className={styles.data__carbs}>
              {item.carbs}
            </span>
            <span key={index + 4} className={styles.data__protein}>
              {item.protein}
            </span>
            <span key={index + 5} className={styles.data__fat}>
              {item.fat}
            </span>
            <input
              onChange={handleGetConsumptionData}
              ref={inputData.current[index]}
              key={index}
              type="number"
              className={styles.data__menge}
              placeholder="g"
            ></input>
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodlistContent;
