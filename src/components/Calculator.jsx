import React, { useState } from 'react'
export const Calculator = () => {
    const [value, setValue] = useState("");

    const handleClick = (e) => {
        setValue(value.concat(e.target.name));
    }

    const resetFunc = () => {
        setValue("");
    }

    const clearFunc = () => {
        setValue(value.slice(0, -1));
    }

    const equalsFunc = () => {
        setValue(eval(value))
    }


    return (
        <div className='container'>
            <div className="calculator mt-5">
                <input type="text" className='form-control' id='result' value={value} />
                <div className="buttons mt-4 gap-3">
                    <button className="clear" onClick={resetFunc}>C</button>
                    <button className="operator plus-minus" onClick={clearFunc} >x</button>
                    <button className="operator percentage">%</button>
                    <button name='/' className="operator" onClick={handleClick} >/</button>
                    <button name='7' className="number" onClick={handleClick} >7</button>
                    <button name='8' className="number" onClick={handleClick}>8</button>
                    <button name='9' className="number" onClick={handleClick}>9</button>
                    <button name='*' className="operator" onClick={handleClick}>*</button>
                    <button name='4' className="number" onClick={handleClick}>4</button>
                    <button name='5' className="number" onClick={handleClick}>5</button>
                    <button name='6' className="number" onClick={handleClick}>6</button>
                    <button name='-' className="operator" onClick={handleClick}>-</button>
                    <button name='1' className="number" onClick={handleClick}>1</button>
                    <button name='2' className="number" onClick={handleClick}>2</button>
                    <button name='3' className="number" onClick={handleClick}>3</button>
                    <button name='+' className="operator" onClick={handleClick}>+</button>
                    <button name='0' className="number zero" onClick={handleClick}>0</button>
                    <button name=',' className="decimal" onClick={handleClick}>,</button>
                    <button className="equals" onClick={equalsFunc} >=</button>
                </div>
            </div>
        </div>
    )
}

