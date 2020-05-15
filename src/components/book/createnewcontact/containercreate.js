import React, { useState, useEffect } from 'react'
import CreateNewContact from './createnewcontact'
import { Redirect } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch';


const ContainerCreateNewContact = (props) => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [{response}, doFetch] = useFetch('contacts')
    
    const initialValues = {
        name: '',
        phone: '',
        male: 'Male', 
    }
    
    const handleSubmit = (contacts) => {
        setIsSubmit(true)
        doFetch({
          method: "post",
          data: {
            name: contacts.name,
            phone: contacts.phone,
            male: contacts.male,
          },
        }); 
      }; 

    
      if (isSubmit) {
       return <Redirect to='book'/>
      }
    
       return (
        <CreateNewContact onSubmit={handleSubmit} initialValues={initialValues}/>
    )
}

export default ContainerCreateNewContact;