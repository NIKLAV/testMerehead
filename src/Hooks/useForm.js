import { useState, useEffect } from "react";

const useForm = (callback, validateLogin) => {
  const [value, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSuccessfullSubmiting, setSsSuccessfullSubmiting] = useState(false) 
  const handleChange = (event) => {
   
    setValues({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateLogin(value));
    // callback();
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setSsSuccessfullSubmiting(true) 
      
  } }, [errors, isSubmitting]);

  return {
    handleChange,
    handleSubmit,
    value,
    errors,
    isSuccessfullSubmiting 
  };
};

export default useForm;
