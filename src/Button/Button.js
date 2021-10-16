import classes from "./Button.module.css";

const Button = ({ symbol, handleClick }) => {
  return (
    <button
      className={classes.button}
      onClick={() => {
        handleClick(symbol);
      }}
    >
      {symbol}
    </button>
  );
};

export default Button;
