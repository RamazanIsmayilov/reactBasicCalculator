import React from 'react'

export const Calculator = () => {
    return (
        <div className='container'>
            <div className="calculator mt-5">
                <input type="text" className='form-control' id='result' />
                <div className="buttons mt-5">
                        <button className="clear">C</button>
                        <button className="operator" style={{backgroundColor: '#a2a2a2', color: '#000'}}>+/-</button>
                        <button className="operator" style={{backgroundColor: '#a2a2a2', color: '#000'}}>%</button>
                        <button className="operator">/</button>
                        <button className="number">7</button>
                        <button className="number">8</button>
                        <button className="number">9</button>
                        <button className="operator">*</button>
                        <button className="number">4</button>
                        <button className="number">5</button>
                        <button className="number">6</button>
                        <button className="operator">-</button>
                        <button className="number">1</button>
                        <button className="number">2</button>
                        <button className="number">3</button>
                        <button className="number">+</button>
                        <button className="number" style={{gridColumn: 'span 2', borderRadius: '30px'}}>0</button>
                        <button className="operator">,</button>
                        <button className="equals">=</button>
                </div>
            </div>
        </div>
    )
}

