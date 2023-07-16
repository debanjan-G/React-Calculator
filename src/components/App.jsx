import React, { useState } from "react";
import buttons from "../buttons";
import Button from "./Button";

const year = new Date().getFullYear();

function App() {
  const [currentValue, setCurrentValue] = useState("");

  return (
    <div className="calculator">
      <div className="calc-grid">
        <div className="output">
          <div className="current-screen">{currentValue}</div>
        </div>
        {buttons.map(function (elem, index) {
          return elem === "AC" || elem === "=" ? (
            <Button
              key={index}
              class="span-two"
              name={elem}
              currentVal={setCurrentValue}
              result={currentValue}
            />
          ) : (
            <Button key={index} name={elem} currentVal={setCurrentValue} />
          );
        })}
      </div>
      <footer>© Debanjan Ghosal {year}</footer>
    </div>
  );
}

export default App;
