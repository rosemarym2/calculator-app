import { useState } from 'react';
import './App.css';
import { evaluate } from "mathjs"

const App =() => {
  const [calculator, setCalulator] = useState("");
  const [output, setOutput] = useState("");

const ops = ['/', '*', '+', '-', '.'];

const currentCalc = (value) => {
 if (value === '='){
   setCalulator(evaluate(calculator))
 }else if (value === 'AC'){
   setCalulator = {clear} 
 }else if (NaN){
  setCalulator ('')
}else{
   setCalulator(calculator + value);
 }
}

const createDigits = () =>{
  const digits = [];
  
  for (let i = 1; i < 10; i++){
    digits.push(<button onClick ={() => currentCalc (i)} key = {i}>{i}</button>)
  } 

return digits;
}
const equation = () => {
  setCalulator(evaluate(calculator));
}

const backSpace = () =>{
  if (calculator == ''){
    return;
  }

  let value = calculator.slice(0, -1);

  setCalulator(value);
  setOutput(value);
}

const clear = () =>{
 setOutput("")
 setCalulator("")
}

  return (
    <div className="calculator">
      <body>Calculator
      <div className= "previous-input"></div>
      <div className= "current-input">
      {output ? <span className="output">({output})</span> : "" }
      { calculator || "0" }
      </div>
      <div className="operators">
      <button onClick ={clear}>AC</button>
      <button onClick ={backSpace}>Del</button>
      <button onClick ={() => currentCalc ('/')}>÷</button>
      <button onClick ={() => currentCalc ('*')}>*</button>
      <button onClick ={() => currentCalc ('+')}>+</button>
      <button onClick ={() => currentCalc ('-')}>-</button>
      </div>
      <div className="digits">
      { createDigits () }
      </div>
      <div className = "equation">
      <button onClick ={() => currentCalc ('0')}>0</button>
      <button onClick ={() => currentCalc ('.')}>.</button>
      <button onClick ={equation}>=</button>
      </div>
      </body> 
    </div>
  );
}

export default App;

