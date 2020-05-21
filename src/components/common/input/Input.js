import React from "react";
import classes from "./input.module.css";

const Input = ({type, name, value, onChange, label, errors }) => {
  const inputType = type || "text";
  const cls = [classes.input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (errors) {
    cls.push(classes.invalid);
  }
  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{label}</label>
      <div>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          id={htmlFor}
          placeholder={type}
        />
        {errors && <span className="error">{errors}</span>}
      </div>
    </div>
  );
};

export default Input;
