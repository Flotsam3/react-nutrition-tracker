import React, { useRef } from "react";
import styles from "./AddFood.module.css";

function AddFood(props) {
  const formRef = useRef({});

  const handleGetFormData = () => {
    const formData = new FormData(formRef.current);
    const addDataInput = {};
    
    for (const pair of formData.entries()) {
      const [key, value] = pair;
      addDataInput[key] = value;
    }

    if (!addDataInput.name || !addDataInput.kcal || !addDataInput.carbs || !addDataInput.protein || !addDataInput.fat){
      alert('You need to fill in every field')
    }else{
      props.onAddData(addDataInput);
    }
    
  };

  return (
    <>
      <div className={styles["neuer-eintrag"]}>
        <form ref={formRef} action="#">
          <div className={styles["form-content"]}>
            <input type="text" name="name" placeholder="Name" />
            <input type="number" name="kcal" placeholder="Kcal" />
            <input type="number" name="carbs" placeholder="CHO" />
            <input type="number" name="protein" placeholder="Pro" />
            <input type="number" name="fat" placeholder="Fat" />
          </div>
        </form>
      </div>
      <div className={styles["top-bar"]}>
        <button onClick={handleGetFormData}>OK</button>
      </div>
    </>
  );
}

export default AddFood;
