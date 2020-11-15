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

    handleResetInput();
  };

  const handleResetInput = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  };

  return (
    <>
      <div className={styles["neuer-eintrag"]}>
        <form ref={formRef} action="#">
          <div className={styles["form-content"]}>
            <input type="text" name="name"  placeholder="Name" />
            <input type="number" name="kcal" placeholder="Kcal" />
            <input type="number" name="carbs" placeholder={(props.flagStatus === 'de') ? "CHO" : "Kh"} />
            <input type="number" name="protein" placeholder="Pro" />
            <input type="number" name="fat" placeholder={(props.flagStatus === 'de') ? "Fat" : "Fett"} />
            <button onClick={props.onToggleButton} className={styles['switch-input']}><span className="material-icons">
            restaurant_menu
            </span></button>
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
