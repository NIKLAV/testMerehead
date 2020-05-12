export default function validateLogin(value) {
  let errors = {};

  if (!value.email) {
    errors.email = "Email adress is required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)
  ) {
    errors.email = "Email adress is invalid";
  }
  if (!value.password) {
    errors.password = "Password is required";
  } else if (value.password.length < 6) {
    errors.password = "Пароль должен быть длиннее 6 символов";
  } 
  console.log(errors);
  return errors;
}

