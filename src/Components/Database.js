import React, { useState, useEffect, useRef} from "react";
import AddFood from "./AddFood";
import AddMenu from "./AddMenu";
import FoodlistContent from "./FoodlistContent";
import styles from "./Database.module.css";
// import { BrowserRouter, Link, Route } from "react-router-dom";
import Consumption from "./Consumption";

export const FoodDataContext = React.createContext();

function Database(props) {
  const toggleSort = useRef('a');
  let menuName = useRef('');
    
  const [foodData, setFoodData] = useState(
    JSON.parse(localStorage.getItem("foodDatabase")) || []
  );

  const [consumptionData, setConsumptionData] = useState(
    JSON.parse(localStorage.getItem("consumptionDatabase")) || []
  )

  const handleAddData = (formData) => {
    handleLocalStorageUpdate(formData);
  };

  const handleAddMenu = (inputData) => {
    menuName = inputData;
  }

  const handleLocalStorageUpdate = (inputData) => {
    console.log(inputData);
    setFoodData(foodData.concat(inputData));
    foodData.push(inputData);
  };

  const [buttonToggle, setButtonToggle] = useState('food');

  const handleFoodMenuToggle = ()=>{
    if (buttonToggle === 'food'){
      setButtonToggle('menu');
    }else{
      setButtonToggle('food');
    }
  }

  const handleGetConsumption = (data)=>{
    if (buttonToggle === 'menu'){
      handleGetMenu(data);
    }else{

      let consumption = [];
      let counter = 0;
      console.log(data);

      for (let i = 0; i < data[0].current.length; i++) {
        if (data[0].current[i].value !== ""){
          let gramm = data[0].current[i].value;
          let name = data[1].current[i].textContent;
          const dummy = name.slice(0, -1);
          name = dummy;
          let kcal = data[2].current[i].textContent;
          let cho = data[3].current[i].textContent;
          let pro = data[4].current[i].textContent;
          let fat = data[5].current[i].textContent;

          consumption[counter] = {
            'Gramm': gramm,
            'Name': name,
            'Kcal': kcal * gramm/100,
            'CHO': cho * gramm/100,
            'Pro': pro * gramm/100,
            'Fat': fat * gramm/100}

          counter++;
        }
      }

      setConsumptionData(consumptionData.concat(consumption));

    }
  }

  const handleGetMenu = (data)=>{
    const name = menuName;
    let gramm = 0;
    let kcal = 0;
    let cho = 0;
    let pro = 0;
    let fat = 0;

    for (let i = 0; i < data[0].current.length; i++) {
        if (data[0].current[i].value !== ""){

          gramm = parseInt(data[0].current[i].value);
          kcal += parseInt(data[2].current[i].textContent) * gramm/100;
          cho += parseInt(data[3].current[i].textContent) * gramm/100;
          pro += parseInt(data[4].current[i].textContent) * gramm/100;
          fat += parseInt(data[5].current[i].textContent) * gramm/100;
        }
    }

    const menuData = {
      'name': name,
      'kcal': kcal,
      'carbs': cho,
      'protein': pro,
      'fat': fat
    }

    console.log(menuData);

    handleLocalStorageUpdate(menuData);
  }

  const handleSortFoodlist = (name)=>{
    const newList = [...foodData];

    newList.sort((a, b)=>{
      const aName = a[name].toLowerCase();
      const bName = b[name].toLowerCase();

      if (toggleSort.current === 'a'){
        if (aName < bName) {
          return -1;
        }
        if (aName > bName) {
            return 1;
        }
          return 0;

      }else{

        if (aName < bName) {
          return 1;
        }
        if (aName > bName) {
            return -1;
        }
          return 0;
      }
    })

    if (toggleSort.current === 'a'){
      toggleSort.current = 'd';
    }else{
      toggleSort.current = 'a';
    }

    setFoodData(newList);
  }

  const deleteFoodlistItem = (item)=>{
    const newList = [...foodData];
    newList.splice(item, 1);
    setFoodData(newList);
  }
  
  useEffect(() => {
    localStorage.setItem("foodDatabase", JSON.stringify(foodData));
  }, [foodData]);
  
  useEffect(()=>{
    localStorage.setItem('consumptionDatabase', JSON.stringify(consumptionData))
  }, [consumptionData])

  return (
    <div>
      {(buttonToggle === 'food')
      ?
      (<>
        <h2>{(props.flagStatus === 'de')?'Add New Food':'Lebensmittel hinzufügen'}</h2>
        <AddFood onAddData={handleAddData} onToggleButton={handleFoodMenuToggle} flagStatus={props.flagStatus}/>
      </>)
      :
      (<>
        <h2>{(props.flagStatus === 'de')?'Add New Menu':'Neues Menü hinzufügen'}</h2>
        <AddMenu onAddMenu={handleAddMenu} onToggleButton={handleFoodMenuToggle}/>
      </>)}
      <h2>{(props.flagStatus === 'de')?'Foodlist':'Lebensmittelliste'}</h2>
      <FoodDataContext.Provider value={foodData}>
          <FoodlistContent onGetConsumption={handleGetConsumption} onDelete={deleteFoodlistItem} onSort={handleSortFoodlist} flagState={props.flagStatus}/>
      </FoodDataContext.Provider>
    </div>
  );
}

export default Database;
