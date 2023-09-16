import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Display from './Display'; // Import the Display component

export default function Calculator() {
  const [theState, setTheState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleEvent = (value) => {
    const result = calculate(theState, value);
    setTheState(result);
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Use the Display component */}
        <Display displayValue={theState.next || theState.total || '0'} />
        <div className="calculator-buttons">
          <div className="row">
            <button type="button" onClick={() => handleEvent('AC')}>AC</button>
            <button type="button" onClick={() => handleEvent('+/-')}>+/-</button>
            <button type="button" onClick={() => handleEvent('%')}>%</button>
            <button type="button" className="operator" onClick={() => handleEvent('÷')}>÷</button>
          </div>
          <div className="row">
            <button type="button" onClick={() => handleEvent('7')}>7</button>
            <button type="button" onClick={() => handleEvent('8')}>8</button>
            <button type="button" onClick={() => handleEvent('9')}>9</button>
            <button type="button" className="operator" onClick={() => handleEvent('x')}>x</button>
          </div>
          <div className="row">
            <button type="button" onClick={() => handleEvent('4')}>4</button>
            <button type="button" onClick={() => handleEvent('5')}>5</button>
            <button type="button" onClick={() => handleEvent('6')}>6</button>
            <button type="button" className="operator" onClick={() => handleEvent('-')}>-</button>
          </div>
          <div className="row">
            <button type="button" onClick={() => handleEvent('1')}>1</button>
            <button type="button" onClick={() => handleEvent('2')}>2</button>
            <button type="button" onClick={() => handleEvent('3')}>3</button>
            <button type="button" className="operator" onClick={() => handleEvent('+')}>+</button>
          </div>
          <div className="row">
            <button type="button" className="double" onClick={() => handleEvent('0')}>0</button>
            <button type="button" onClick={() => handleEvent('.')}>.</button>
            <button type="button" className="operator" onClick={() => handleEvent('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
