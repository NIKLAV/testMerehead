import React from "react";
import classes from "./auth.module.css";
import Button from "../common/button/button";
import Input from "../common/input/input";
import useForm from "../../Hooks/useForm";
import validateLogin from "../validateLogin";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const { handleChange, handleSubmit, value, errors, isSuccessfullSubmiting } = useForm(
    submit,
    validateLogin
  );
    function submit() {
      console.log('zdorovo')
    }
 if (isSuccessfullSubmiting) {
  return <Redirect to='/book'/>
 }

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit} noValidate>
        <Input
          errors={errors.email}
          label="Login"
          type="email"
          name="email"
          onChange={handleChange}
          value={value.email}
        />
        <Input
          errors={errors.password}
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={value.password}
        />

        <Button type="submit">Проникнуть</Button>
      </form>
    </div>
  );
};

export default Login;
