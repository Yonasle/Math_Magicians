import React from 'react';
import './Calculator.css';
import Display from './Display'; // Import the Display component
import Button from './Button'; // Import the Button component

function Calculator() {
  return (
    <div className="calculator">
      <Display />
      {' '}
      {/* Render the Display component */}
      <div className="buttons">
        <div className="row">
          <Button type="number" label="AC" />
          <Button type="number" label="+/-" />
          <Button type="number" label="%" />
          <Button type="operator" label="÷" />
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
        {/* Add more rows of buttons using the Button component */}
      </div>
    </div>
  );
}

export default Calculator;
