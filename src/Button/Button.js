const Button = ({ symbol, handleClick }) => {
  return (
    <button
      onClick={() => {
        handleClick(symbol);
      }}
    >
      {symbol}
    </button>
  );
};

export default Button;
