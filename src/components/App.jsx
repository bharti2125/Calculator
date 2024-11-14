import React, { useState } from 'react';


function App() {
 
   const [inputValue, setInputValue] = useState(" ");
   

   const handleButtonClick = (value) => {
    console.log(value);
      if(value == '+' || value =="-" || value == "*" || value == "/"){
        if(inputValue[inputValue.length-1] == '+' || inputValue[inputValue.length-1] =="-" || inputValue[inputValue.length-1] == "*" || inputValue[inputValue.length-1] == "/"){
          setInputValue(inputValue.slice(0, -1)+value);
          return;
        }
      }
      setInputValue(inputValue + value);
   }
   const handleDelete = () => {
    setInputValue(inputValue.slice(0, -1));
   }

   const handleReset = () => {
    setInputValue(' ');
   }

  const calculateResult = () => {
    let finalValue = inputValue;
    if (
      inputValue[inputValue.length - 1] == '+' ||
      inputValue[inputValue.length - 1] == '-' ||
      inputValue[inputValue.length - 1] == '*' ||
      inputValue[inputValue.length - 1] == '/'
    ) {
      finalValue = inputValue.slice(0, -1);
    }
    const result = eval(finalValue);
    setInputValue(result.toString());
  };
  

  return (
    <div className="calculator">
      <div>
        <h1>CALCULATOR</h1>
      </div>
      <div className="container">
          <h3>calc</h3>
          <input className="input" type="text" value={inputValue} /> 
         
          <div className="btn-group">
              <button className="btn"  onClick={() => handleButtonClick('7')}>7</button> 
              <button className="btn"  onClick={() => handleButtonClick('8')}>8</button>
              <button className="btn"  onClick={() => handleButtonClick('9')}>9</button>
              <button className="btn-md"  onClick={handleDelete}>DEL </button>
              <br />
              <button className="btn" onClick={() => handleButtonClick('4')}>4</button>
              <button className="btn"  onClick={() => handleButtonClick('5')}>5</button>
              <button className="btn"  onClick={() => handleButtonClick('6')}>6</button>
              <button className="btn"  onClick={() => handleButtonClick('+')}>+</button>
              <br />
              <button className="btn"  onClick={() => handleButtonClick('1')}>1</button>
              <button className="btn"  onClick={() => handleButtonClick('2')}>2</button>
              <button className="btn"  onClick={() => handleButtonClick('3')}>3</button>
              <button className="btn"  onClick={() => handleButtonClick('-')}>-</button>
              <br />
              <button className="btn"  onClick={() => handleButtonClick('.')}>.</button>
              <button className="btn"  onClick={() => handleButtonClick('0')}>0</button>
              <button className="btn"  onClick={() => handleButtonClick('*')}>*</button>
              <button className="btn"  onClick={() => handleButtonClick('/')}>/</button>
              <br />
              <button className="btn-lg" id="reset"  onClick={handleReset}>RESET</button> 
              <button className="btn-lg"  onClick={calculateResult}>=</button>
          </div>   
      </div>
    </div>
  );


}

export default App;
 