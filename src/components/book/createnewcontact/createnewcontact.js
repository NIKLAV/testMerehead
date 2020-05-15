import React, { useState, useEffect } from "react";
import Input from "../../common/input/input";
import Button from "../../common/button/button";
import useFetch from "../../../Hooks/useFetch";
import classes from "./createnewcontact.module.css"
import { Redirect } from "react-router-dom";


const CreateNewContact = ({onSubmit, initialValues}) => {
   const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [male, setMale] = useState("Male"); 
  const [{ response }, doFetch] = useFetch("contacts");
/*   const [isSubmit, setIsSubmit] = useState(false) */
  
 /*  console.log(props)
   const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmit(true);
    let maleToBool = male === 'Male' ? true : false;
    console.log(maleToBool);
    doFetch({
      method: "post",
      data: {
        name,
        phone,
        male: maleToBool,
      },
    }); 
  }; 

    if (isSubmit) {
   return <Redirect to='book'/>
  }  
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    let maleToBool = male === 'Male' ? true : false;
    const contacts = {
      name,
      phone,
      male: maleToBool,
      
    };
    onSubmit(contacts);
  };

  useEffect(() => {
    if (!initialValues) {
      return;
    }
    setName(initialValues.name);
    setPhone(initialValues.phone);
    setMale(initialValues.male);
  }, [initialValues])
  
  return (
    <div className={classes.form}>
      <form className={classes.center} onSubmit={handleSubmit}>
        <Input
          type="name"
          label="Имя контакта"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="phone"
          label="Номер телефона"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <div>
          <select value={male} onChange={(event) => setMale(event.target.value)}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <Button>Создать</Button>
      </form>
    </div> 
 
  );
};

export default CreateNewContact;
