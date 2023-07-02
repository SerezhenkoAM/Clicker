import Counter from '../../ui/counter/Counter';
import styles from './Home.module.css'
import { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={styles.home}>
            <h1 className={styles.h1}>Counter</h1>
            <p className={styles.p}>{count}</p>
            <Counter count={count} setCount={setCount}/>
        </div>
    );
}

export default Home;