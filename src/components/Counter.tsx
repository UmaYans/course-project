import React, { useState } from 'react';
import classes from './Counter.module.scss';


export const Counter = () => {
    const [count, setCont] = useState(0);

    const increment = () => {
        setCont(count + 1);
    };

    return (
        <div className={classes.incrementButton}>
            <h1>{count}</h1>
            <button  onClick={increment}>increment</button>
        </div>
    );
};
