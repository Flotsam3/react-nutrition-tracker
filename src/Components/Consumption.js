import React, {useState, useEffect} from "react";
import Balance from "./Balance";
import DailyConsumption from "./DailyConsumption";

function Consumption() {

  const [consumptionData, setConsumptionData] = useState(
    JSON.parse(localStorage.getItem("consumptionDatabase")) || []
  )
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    if (consumptionData !== []){
      let balanceKcal = 0;
      let balanceCho = 0;
      let balancePro = 0;
      let balanceFat = 0;

      consumptionData.map((item)=>{
        balanceKcal += item.Kcal;
        balanceCho += item.CHO;
        balancePro += item.Pro;
        balanceFat += item.Fat;
      })

      setBalance([balanceKcal, balanceCho, balancePro, balanceFat]);
    }
  }, [consumptionData])

  const deleteConsumptionlistItem = (item)=>{
    const newList = [...consumptionData];
    newList.splice(item, 1);
    console.log(newList);
    setConsumptionData(newList);
  }

  const handleClearConsumption = ()=>{
    localStorage.setItem("consumptionDatabase", JSON.stringify(''));
    setConsumptionData([]);
    setBalance([0, 0, 0, 0]);
  }

  useEffect(()=>{
    localStorage.setItem('consumptionDatabase', JSON.stringify(consumptionData))
  }, [consumptionData])

  return (
    <div>
      <Balance showBalance={balance} onClear={handleClearConsumption} onConsumptionData={consumptionData} />
      <DailyConsumption dailyConsumption={consumptionData} onDelete={deleteConsumptionlistItem} />
    </div>
  );
}

export default Consumption;