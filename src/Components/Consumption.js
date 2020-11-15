import React, {useState, useEffect} from "react";
import Balance from "./Balance";
import DailyConsumption from "./DailyConsumption";

function Consumption(props) {

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

      setBalance([balanceKcal.toFixed(1), balanceCho.toFixed(1), balancePro.toFixed(1), balanceFat.toFixed(1)]);
    }
  }, [consumptionData])

  const deleteConsumptionlistItem = (item)=>{
    const newList = [...consumptionData];
    newList.splice(item, 1);
    localStorage.setItem("consumptionDatabase", JSON.stringify(newList))
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
    const dateId = date.getTime();

    consumptionData.map((item)=>{
        kcal += item.Kcal;
        carbs += item.CHO;
        pro += item.Pro;
        fat += item.Fat;
    });

    const newArchiveData = [{
        Date: currentDate,
        Kcal: kcal.toFixed(1),
        CHO: carbs.toFixed(1),
        Pro: pro.toFixed(1),
        Fat: fat.toFixed(1),
        DateId: dateId
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
      <Balance showBalance={balance} onClear={handleClearConsumption} onCalcArchive={handleArchiveData} onArchiveData={archiveData} flagStatus={props.flagState} />
      <DailyConsumption dailyConsumption={consumptionData} onDelete={deleteConsumptionlistItem} flagState={props.flagState} />
    </div>
  );
}

export default Consumption;