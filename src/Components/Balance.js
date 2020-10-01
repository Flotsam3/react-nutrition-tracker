import React from 'react';
import styles from './Balance.module.css';

function Balance() {
    return (
        <div>
            <h2 className={styles.bilanz}>Balance</h2>
            <div className={styles['bilanz-inhalt']}>
                <div className={styles['bilanz-title']}>
                    <span className={styles['bilanz-kcal']}>Calories</span>
                    <span className={styles['bilanz-kh']}>Carbohydrates</span>
                    <span className={styles['bilanz-ew']}>Protein</span>
                    <span className={styles['bilanz-fe']}>Fat</span>
                </div>
                <div className={styles['bilanz-summe']}>
                    <span className={styles.data__kcal}>82</span>
                    <span className={styles.data__carbs}>18.2</span>
                    <span className={styles.data__protein}>1.2</span>
                    <span className={styles.data__fat}>0.2</span>
                </div>
                <button className={styles['alle-loeschen']}>Delete</button>
                <a href="index.html" className={styles['link-lebensmittel']}><i className={styles['fas fa-pepper-hot']}></i></a>
            </div>
        </div>
    )
}

export default Balance
