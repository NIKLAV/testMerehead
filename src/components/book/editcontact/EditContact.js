import React, {useState } from "react";
import CreateNewContact from "../createnewcontact/СreateNewContact";
import { Redirect } from "react-router-dom";
import { editContact, fetchContacts } from "../../../redux/actions";
import { connect } from "react-redux";

const EditContact = ({
  itemId,
  editContact,
  name,
  surname,
  desc,
  fetchContacts,
}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const initialValues = {
    name,
    surname,
    desc,
  };
  const handleSubmit = (contacts) => {
    setIsSubmit(true);
    editContact(itemId, contacts.name, contacts.surname, contacts.desc);
  };

  if (isSubmit) {
    fetchContacts();
    return <Redirect to="/" />;
  }

  return (
    <div>
      <CreateNewContact onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
};

const mapStateToProps = (state, { itemId }) => {
  let { name, surname, desc } = state.users.find(({ id }) => id === +itemId);
  return {
    name,
    surname,
    desc,
  };
};

export default connect(mapStateToProps, { editContact, fetchContacts })(
  EditContact
);
