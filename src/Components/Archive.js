import React, {useRef, useState} from 'react';
import styles from './Archive.module.css';

function Archive(props) {
    const [archiveList, setArchiveList] = useState(JSON.parse(localStorage.getItem('archiveDatabase')) || [])
    const toggleSort = useRef('a');
    const inputName = useRef([]);
    const inputKcal = useRef([]);
    const inputCho = useRef([]);
    const inputPro = useRef([]);
    const inputFat = useRef([]);

    const handleDelete = (ev) => {
        const newList = [...archiveList];
        newList.splice(ev.target.id, 1);
        setArchiveList(newList);
        localStorage.setItem("archiveDatabase", JSON.stringify(newList))
    }

    const handleDeleteAll = ()=>{
      localStorage.setItem("archiveDatabase", JSON.stringify([]));
      setArchiveList([]);
    }

    const handleSortArchivelist = (name)=>{
        const newList = [...archiveList];
    
        newList.sort((a, b)=>{
          const aName = a[name];
          const bName = b[name];
    
          if (toggleSort.current === 'a'){
            if (aName < bName) {
              return -1;
            }
            if (aName > bName) {
                return 1;
            }
              return 0;
    
          }else{
    
            if (aName < bName) {
              return 1;
            }
            if (aName > bName) {
                return -1;
            }
              return 0;
          }
        })
    
        if (toggleSort.current === 'a'){
          toggleSort.current = 'd';
        }else{
          toggleSort.current = 'a';
        }
    
        setArchiveList(newList);
      }

    return (
        <div>
            <div className={styles.archive}>Archive</div>
            <button onClick={handleDeleteAll} className={styles['alle-loeschen']}>Clear</button>
            <div className={styles["verbrauch-inhalt"]}>
                <div className={styles["verbrauch-title"]}>
                    <button onClick={()=>{handleSortArchivelist('DateId')}} className={styles.data__food}>Date</button>
                    <button onClick={()=>{handleSortArchivelist('Kcal')}} className={styles.data__kcal}>Kcal</button>
                    <button onClick={()=>{handleSortArchivelist('CHO')}} className={styles.data__carbs}>CHO</button>
                    <button onClick={()=>{handleSortArchivelist('Pro')}} className={styles.data__protein}>Pro</button>
                    <button onClick={()=>{handleSortArchivelist('Fat')}} className={styles.data__fat}>Fat</button>
                </div>
                {archiveList.map((item, index) => (
                <div key={index} className={styles["liste-verbrauch"]}>
                    <span key={index + 1} ref={el => inputName.current[index]=el} className={styles.data__food}>
                        {item.Date}<button id={index} onClick={handleDelete} >x</button>
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
            </div>
        </div>
    )
}

export default Archive
