import styles from './Counter.module.css'

const Counter = ({count, setCount}) => {
    return (
    <div className={styles.counter}>
        <div className={styles.counter2}>
            <button className={styles.btn_minus} onClick={() => setCount(count - 1)}>-</button>
            <button className={styles.btn_plus} onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button className={styles.btn_clear} onClick={() => setCount(count = 0)}>Clear</button>
    </div>
    );
}

export default Counter;
