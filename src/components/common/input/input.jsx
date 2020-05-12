import React from "react";
import classes from "./input.module.css";

const Input = (props) => {
  const inputType = props.type || "text";
  const cls = [classes.input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (props.errors) {
    cls.push(classes.invalid);
  }
  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <div>
        <input
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          id={htmlFor}
          placeholder={props.type}
        />
        {props.errors && <span className="error">{props.errors}</span>}
      </div>
    </div>
  );
};

export default Input;
