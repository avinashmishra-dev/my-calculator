import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import Input from "./Input/Input";
import classes from "./App.module.css";
import * as math from "mathjs";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];
  const addToText = (val) => {
    const lastInput = text[text.length - 1];
    if (
      (operators.includes(lastInput) && operators.includes(val)) ||
      (operators.includes(val) && !text.length)
    ) {
      return;
    }
    setText((text) => [...text, val + ""]);
  };

  const clearHandler = () => {
    setText("");
    setResult("");
  };

  const resultHandler = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  return (
    <div className={`${classes.card}`}>
      <Input text={text} result={result} handleClick={addToText} />
      <div>
        <Button symbol={"7"} handleClick={addToText} />
        <Button symbol={"8"} handleClick={addToText} />
        <Button symbol={"9"} handleClick={addToText} />
        <Button symbol={"/"} handleClick={addToText} />
      </div>
      <div>
        <Button symbol={"4"} handleClick={addToText} />
        <Button symbol={"5"} handleClick={addToText} />
        <Button symbol={"6"} handleClick={addToText} />
        <Button symbol={"*"} handleClick={addToText} />
      </div>
      <div>
        <Button symbol={"1"} handleClick={addToText} />
        <Button symbol={"2"} handleClick={addToText} />
        <Button symbol={"3"} handleClick={addToText} />
        <Button symbol={"+"} handleClick={addToText} />
      </div>
      <div>
        <Button symbol={"0"} handleClick={addToText} />
        <Button symbol={"."} handleClick={addToText} />
        <Button symbol={"="} handleClick={resultHandler} />
        <Button symbol={"-"} handleClick={addToText} />
      </div>
      <Button handleClick={clearHandler} symbol={"Clear"}></Button>
      <p className={classes.output}> Output: {result} </p>
    </div>
  );
};

export default App;
