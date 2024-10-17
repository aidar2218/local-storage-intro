import React, {useState} from 'react';
import './App.module.css';
import s from './App.module.css';

function LocalStorage() {

    const [value, setValue] = useState(0);

    const incHandler = () => {
        setValue(value + 1);
    };

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value));
        localStorage.setItem('counterValue + 2', JSON.stringify(value + 2));
    };

    const getFromLocalStorageHandler = () => {
        let newValueAsString = localStorage.getItem('counterValue');
        if (newValueAsString) {
            let newValue = JSON.parse(newValueAsString);
            setValue(newValue);
        }
    };

    const clearLocalStorageHandler = () => {
        localStorage.clear();
        setValue(0);
    }

    const removeItemFromLocalStorageHandler = () => {
        localStorage.removeItem('counterValue + 2');
    }

    return (
        <div className={s.App}>
            <h1>{value}</h1>
            <div>
                <button onClick={incHandler}>inc</button>
            </div>
            <div>
                <button onClick={setToLocalStorageHandler}>set to local storage</button>
            </div>
            <div>
                <button onClick={getFromLocalStorageHandler}>get from local storage</button>
            </div>
            <div>
                <button onClick={clearLocalStorageHandler}>clear local storage</button>
            </div>
            <div>
                <button onClick={removeItemFromLocalStorageHandler}>remove item from local storage</button>
            </div>
        </div>
    );
}

export default LocalStorage;
