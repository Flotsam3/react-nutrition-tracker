import React, { useState, useEffect, useRef} from "react";
import AddFood from "./AddFood";
import FoodlistContent from "./FoodlistContent";
import styles from "./Database.module.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Consumption from "./Consumption";

export const FoodDataContext = React.createContext();

function Database() {
  const toggleSort = useRef('a');
  
  const [foodData, setFoodData] = useState(
    JSON.parse(localStorage.getItem("foodDatabase")) || []
  );

  const [consumptionData, setConsumptionData] = useState(
    JSON.parse(localStorage.getItem("consumptionDatabase")) || []
  )

  const handleAddData = (formData) => {
    handleLocalStorageUpdate(formData);
  };

  const handleLocalStorageUpdate = (inputData) => {
    setFoodData(foodData.concat(inputData));
    foodData.push(inputData);
  };

  const handleGetConsumption = (data)=>{
    let consumption = [];
    let counter = 0;

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
      <h2>Add New Food</h2>
      <AddFood onAddData={handleAddData} />
      <h2>Foodlist</h2>
      <FoodDataContext.Provider value={foodData}>
          <FoodlistContent onGetConsumption={handleGetConsumption} onDelete={deleteFoodlistItem} onSort={handleSortFoodlist}/>
      </FoodDataContext.Provider>
    </div>
  );
}

export default Database;
