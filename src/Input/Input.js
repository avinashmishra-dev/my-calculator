import classes from "./Input.module.css";

const Input = ({ text }) => {
  return (
    <div>
      <input
        className={classes.input}
        type="text"
        defaultValue={Array.isArray(text) ? text.join("") : ""}
      />
    </div>
  );
};
export default Input;
