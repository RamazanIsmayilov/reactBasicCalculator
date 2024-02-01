import React, { useState } from 'react'
export const Calculator = () => {
    const [value, setValue] = useState(null);


    const resetFunc = () => {

    }

    const clearFunc = () => {

    }

    const percentFunc = () => {

    }

    const operatorFunc = () => {

    }

    const numberFunc = () => {

    }

    const equalsFunc = () => {

    }


    return (
        <div className='container'>
            <div className="calculator mt-5">
                <input type="text" className='form-control' id='result' />
                <div className="buttons mt-4 gap-3">
                    <button className="clear">C</button>
                    <button className="operator plus-minus">x</button>
                    <button className="operator percentage">%</button>
                    <button className="operator" onClick={operatorFunc} >/</button>
                    <button className="number" onClick={numberFunc} >7</button>
                    <button className="number" onClick={numberFunc}>8</button>
                    <button className="number" onClick={numberFunc}>9</button>
                    <button className="operator" onClick={operatorFunc}>*</button>
                    <button className="number" onClick={numberFunc}>4</button>
                    <button className="number" onClick={numberFunc}>5</button>
                    <button className="number" onClick={numberFunc}>6</button>
                    <button className="operator" onClick={operatorFunc}>-</button>
                    <button className="number" onClick={numberFunc}>1</button>
                    <button className="number" onClick={numberFunc}>2</button>
                    <button className="number" onClick={numberFunc}>3</button>
                    <button className="operator" onClick={operatorFunc}>+</button>
                    <button className="number zero" onClick={numberFunc}>0</button>
                    <button className="decimal" onClick={numberFunc}>,</button>
                    <button className="equals" onClick={equalsFunc}>=</button>
                </div>
            </div>
        </div>
    )
}

