import React, { useState, useEffect } from 'react'
import CreateNewContact from './СreateNewContact'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addContacts } from '../../../redux/actions';

const ContainerCreateNewContact = ({addContacts}) => {
    const [isSubmit, setIsSubmit] = useState(false);

     const handleSubmit = (contacts) => {
        setIsSubmit(true)
        addContacts(
           contacts.name,
            contacts.surname,
            contacts.desc,
    
        ); 
      };  
    
       if (isSubmit) {
       return <Redirect to='/'/>
      } 
    
       return (
        <CreateNewContact onSubmit={handleSubmit} /* initialValues={initialValues} *//>
    )
       }

export default connect(null, {addContacts}) (ContainerCreateNewContact);