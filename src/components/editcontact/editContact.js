import React, { useEffect, useState } from "react";
import CreateNewContact from "../book/createnewcontact/createnewcontact";
import useFetch from "../../Hooks/useFetch";
import { Redirect } from "react-router-dom";

const EditContact = (props) => {
  const url = `contacts/${props.itemId}`;
  const [{ response: fetchContactResponse }, doFetchContacts] = useFetch(url);
  const [{ response: updateContactResponse }, doUpdateContacts] = useFetch(url);
  const [initialValues, setInitialValues] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  /* const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [male, setMale] = useState("Male"); */

  const handleSubmit = (contacts) => {
    setIsSubmit(true);
    doUpdateContacts({
      method: "put",
      data: {
        name: contacts.name,
        phone: contacts.phone,
        male: contacts.male,
      },
    });
  };

  useEffect(() => {
    doFetchContacts();
  }, [doFetchContacts]);

  useEffect(() => {
    
    if (!fetchContactResponse) {
      return;
    }

    setInitialValues({
      name: fetchContactResponse.name,
      phone: fetchContactResponse.phone,
      male: fetchContactResponse.male,
    });
  }, [fetchContactResponse]);

  if (isSubmit) {
    return <Redirect to="/book" />;
  }

  return (
    <div>
      <CreateNewContact onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
};

export default EditContact;
