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
    console.log(inputGramm);
  };

  const handleDelete = (ev) => {
    props.onDelete(ev.target.id);
  }

  return (
    <>
      <div className={styles.data}>
      <div className={styles.data__title}>
        <button onClick={()=>{props.onSort('name')}} className={styles.data__food}>{(props.flagState === 'de')?'Food':'Lebensmittel'}</button>
        <button onClick={()=>{props.onSort('kcal')}} className={styles.data__kcal}>Kcal</button>
        <button onClick={()=>{props.onSort('carbs')}} className={styles.data__carbs}>{(props.flagState === 'de')?'CHO':'Kh'}</button>
        <button onClick={()=>{props.onSort('protein')}} className={styles.data__protein}>Pro</button>
        <button onClick={()=>{props.onSort('fat')}} className={styles.data__fat}>{(props.flagState === 'de')?'Fat':'Fett'}</button>
        <button onClick={handleGetConsumptionData} className={styles.data__button}>OK</button>
      </div>
        {foodList.map((item, index) => (
          <div key={index} className={styles.data__content}>
            <span key={index + 1} ref={el => inputName.current[index]=el} className={styles.data__food}>
              {item.name}<button id={index} onClick={handleDelete}>x</button>
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
