import React from "react";
import Balance from "./Balance";
import DailyConsumption from "./DailyConsumption";

function Consumption() {
    const consumptionData = JSON.parse(localStorage.getItem("consumptionDatabase")) || []

  return (
    <div>
      <Balance />
      <DailyConsumption dailyConsumption={consumptionData} />
    </div>
  );
}

export default Consumption;
