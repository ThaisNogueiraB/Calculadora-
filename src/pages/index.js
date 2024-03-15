import Image from "next/image";
import { Syncopate } from "next/font/google";
import React, { useState } from 'react';


const inter = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display));
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('');
  };

  const deleteLastCharacter = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="calculator">
        <input className="input-cursor" type="text" value={display} readOnly />
        <div className="buttons">

          <div className="flex justify-between w-full">
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('+')} className="buttons-color" >+</button>
          </div>
          <div className="flex justify-between w-full">
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('-')} className="buttons-color" >-</button>
          </div>
          <div className="flex justify-between w-full">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')} className="buttons-color"  >*</button>
        </div>
        <div className="flex justify-between w-full">
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={clear}>C</button>
          <button onClick={() => handleClick('/')} className="buttons-color" >/</button>
          </div>
          <div className="flex justify-between w-full">
            <button onClick={deleteLastCharacter} className="buttons-delete" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-delete"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" /><line x1="18" x2="12" y1="9" y2="15" /><line x1="12" x2="18" y1="9" y2="15" /></svg></button>
            <button onClick={calculate} className="buttons-color buttons-result">=</button>
          </div>

        </div>
      </div>
    </main>
  );
}
