import React, { useState, useEffect } from "react";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import classes from "./createnewcontact.module.css";



const CreateNewContact = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues.name);
  const [surname, setSurname] = useState(initialValues.surname);
  const [desc, setDesc] = useState(initialValues.desc);


  const handleSubmit = (event) => {
    event.preventDefault();
    const contacts = {
      name,
      surname,
      desc,
    };
    onSubmit(contacts);
  };
  

  return (
    <div className={classes.form}>
      <form className={classes.center} onSubmit={handleSubmit}>
        <Input
          type="name"
          label="First name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="surname"
          label="Last name"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
        <Input
          type="description"
          label="About contact"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />
        
        <Button>Create</Button>
      </form>
    </div>
  );
};
CreateNewContact.defaultProps = {
  initialValues: [null],
};

export default CreateNewContact;
