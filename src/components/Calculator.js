import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value="0" readOnly />
      </div>
      <div className="buttons">
        <div className="row">
          <button type="button" className="number">AC</button>
          <button type="button" className="number">+/-</button>
          <button type="button" className="number">%</button>
          <button type="button" className="operator">÷</button>
        </div>
        <div className="row">
          <button type="button" className="number">7</button>
          <button type="button" className="number">8</button>
          <button type="button" className="number">9</button>
          <button type="button" className="operator">×</button>
        </div>
        <div className="row">
          <button type="button" className="number">4</button>
          <button type="button" className="number">5</button>
          <button type="button" className="number">6</button>
          <button type="button" className="operator">-</button>
        </div>
        <div className="row">
          <button type="button" className="number">1</button>
          <button type="button" className="number">2</button>
          <button type="button" className="number">3</button>
          <button type="button" className="operator">+</button>
        </div>
        <div className="row">
          <button type="button" className="zero">0</button>
          <button type="button" className="number">.</button>
          <button type="button" className="operator">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
