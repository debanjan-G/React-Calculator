import React from "react";
function Button(props) {
  function handleClick(event) {
    const output = event.target.name;

    if (output === "=") {
      props.currentVal(eval(props.result));
    } else if (output === "AC") {
      props.currentVal("");
    } else if (output === "⌫") {
      props.currentVal((prev) => prev.slice(0, -1));
    } else {
      props.currentVal(function (prev) {
        return prev + output;
      });
    }
  }
  return (
    <button className={props.class} onClick={handleClick} name={props.name}>
      {props.name}
    </button>
  );
}

export default Button;
