import React, {useState, useEffect} from "react";
import Balance from "./Balance";
import DailyConsumption from "./DailyConsumption";

function Consumption() {

  const [consumptionData, setConsumptionData] = useState(
    JSON.parse(localStorage.getItem("consumptionDatabase")) || []
  );

  const [archiveData, setArchiveData] = useState(
    JSON.parse(localStorage.getItem('archiveDatabase')) || []
  );

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
    setConsumptionData(newList);
  }

  const handleClearConsumption = ()=>{
    localStorage.setItem("consumptionDatabase", JSON.stringify(''));
    setConsumptionData([]);
    setBalance([0, 0, 0, 0]);
  }

  const handleArchiveData = ()=>{
    let kcal = 0;
    let carbs = 0;
    let pro = 0;
    let fat = 0;
    const date = new Date();
    const currentDate = date.toLocaleString('de-DE', {dateStyle: "full"});

    consumptionData.map((item)=>{
        kcal += item.Kcal;
        carbs += item.CHO;
        pro += item.Pro;
        fat += item.Fat;
    });

    const newArchiveData = [{
        Date: currentDate,
        Kcal: kcal,
        CHO: carbs,
        Pro: pro,
        Fat: fat
    }]
  
    const oldArchiveData = [...archiveData];
    const updateArchiveData = newArchiveData.concat(oldArchiveData)
    handleArchiveLocalStorage(updateArchiveData);
  };

  const handleArchiveLocalStorage = (inputData) => {
    localStorage.setItem("archiveDatabase", JSON.stringify(inputData));
  };

  return (
    <div>
      <Balance showBalance={balance} onClear={handleClearConsumption} onCalcArchive={handleArchiveData} onArchiveData={archiveData} />
      <DailyConsumption dailyConsumption={consumptionData} onDelete={deleteConsumptionlistItem} />
    </div>
  );
}

export default Consumption;