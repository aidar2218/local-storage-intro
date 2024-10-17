import React, {useEffect, useState} from 'react';
import './App.module.css';
import s from './App.module.css';

function LocalStorageWithUseEffect() {

    const [value, setValue] = useState(0);

    useEffect(() => {
        let newValueAsString = localStorage.getItem('counterValue');
        if (newValueAsString) {
            let newValue = JSON.parse(newValueAsString);
            setValue(newValue);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value));
    }, [value]);

    const incHandler = () => {
        setValue(value + 1);
    };

    return (
        <div className={s.App}>
            <h1>{value}</h1>
            <div>
                <button onClick={incHandler}>inc</button>
            </div>
        </div>
    );
}

export default LocalStorageWithUseEffect;
