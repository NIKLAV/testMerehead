import React, { useEffect, useState } from 'react'
import CreateNewContact from '../book/createnewcontact/createnewcontact'
import useFetch from '../../Hooks/useFetch'

const EditContact = (props) => {
    const url = `contacts/1`
    const [{reponse: fetchContactResponse}, doFetchContacts] = useFetch(url)
    const [{reponse: updateContactResponse}, doUpdateContacts] = useFetch(url)
    const [initValues, setInitValues] = useState(null)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [male, setMale] = useState("Male");
    

    useEffect (() => {
        doFetchContacts()
    },[doFetchContacts])

    useEffect(() => {
        if (!fetchContactResponse) {
            return
        }
        setInitValues()

    })
    return (
        <div>
            <CreateNewContact />
        </div>
    )
}

export default EditContact