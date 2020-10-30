import React, { useRef, useEffect } from "react";
import styles from "./AddMenu.module.css";

function AddMenu(props) {
    const formRef = useRef({});

    function handleGetInputName(e){
        const input = e.target.value
        props.onAddMenu(input);
    }
    
  return (
    <>
      <div className={styles["neuer-eintrag"]}>
        <form ref={formRef} action="#">
          <div className={styles["form-content"]}>
            <input onBlur={(e)=>{handleGetInputName(e)}} type="text" name="name" placeholder="name" />
            <button onClick={props.onToggleButton} className={styles['switch-input']}><i className="fas fa-apple-alt"></i></button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddMenu;
