import React, { useState, useEffect } from "react";
import AddFood from "./AddFood";
import FoodlistContent from "./FoodlistContent";
import styles from "./Database.module.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Consumption from "./Consumption";

export const FoodDataContext = React.createContext();

function Database() {
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
  
  useEffect(() => {
    localStorage.setItem("foodDatabase", JSON.stringify(foodData));
  }, [foodData]);
  
  useEffect(()=>{
    localStorage.setItem('consumptionDatabase', JSON.stringify(consumptionData))
    console.log(consumptionData);
  }, [consumptionData])

  return (
    <div>
      <h2>Add New Food</h2>
      <AddFood onAddData={handleAddData} />
      <BrowserRouter>
        <li>
          <Link to="/consumption">Consumption</Link>
        </li>
        <Route path="/consumption" component={Consumption}></Route>
      </BrowserRouter>
      <h2>Foodlist</h2>
      <FoodDataContext.Provider value={foodData}>
          <FoodlistContent onGetConsumption={handleGetConsumption}/>
      </FoodDataContext.Provider>
    </div>
  );
}

export default Database;
