import React, { useState, useEffect, createContext } from "react";
import AddFood from "./AddFood";
import Foodlist from "./Foodlist";
import styles from "./Database.module.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Consumption from "./Consumption";

export const FoodDataContext = React.createContext();

function Database() {
  const [foodData, setFoodData] = useState(
    JSON.parse(localStorage.getItem("foodDatabase")) || []
  );

  const handleAddData = (formData) => {
    handleLocalStorageUpdate(formData);
  };

  const handleLocalStorageUpdate = (inputData) => {
    setFoodData(foodData.concat(inputData));
    foodData.push(inputData);
  };

  useEffect(() => {
    localStorage.setItem("foodDatabase", JSON.stringify(foodData));
  }, [foodData]);

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
        <Foodlist />
      </FoodDataContext.Provider>
    </div>
  );
}

export default Database;
