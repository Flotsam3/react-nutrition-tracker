import React, {useRef, useEffect} from 'react';
import styles from './Archive.module.css';

function Archive(props) {
    let archiveList = [];
    const inputGramm = useRef([]);
    const inputName = useRef([]);
    const inputKcal = useRef([]);
    const inputCho = useRef([]);
    const inputPro = useRef([]);
    const inputFat = useRef([]);
    console.log(archiveList);

    useEffect(()=>{
        archiveList = props.onConsumptionArchive;
    },[])

    return (
        <div>
            <h1>Test</h1>
            {/* <div className={styles["verbrauch-inhalt"]}>
                {archiveList.map((item, index) => (
                <div key={index} className={styles["liste-verbrauch"]}>
                    <span key={index + 1} ref={el => inputName.current[index]=el} className={styles.data__food}>
                        {item.Name}<button id={index} >x</button>
                    </span>
                    <span key={index + 2} ref={el => inputGramm.current[index]=el} className={styles.data__gramm}>
                        {item.Gramm}
                    </span>
                    <span key={index + 3} ref={el => inputKcal.current[index]=el} className={styles.data__kcal}>
                        {item.Kcal}
                    </span>
                    <span key={index + 4} ref={el => inputCho.current[index]=el} className={styles.data__carbs}>
                        {item.CHO}
                    </span>
                    <span key={index + 5} ref={el => inputPro.current[index]=el} className={styles.data__protein}>
                        {item.Pro}
                    </span>
                    <span key={index + 6} ref={el => inputFat.current[index]=el} className={styles.data__fat}>
                        {item.Fat}
                    </span>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Archive
