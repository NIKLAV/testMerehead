import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import malePhoto from "../../assets/man-1.png";
import femalePhoto from "../../assets/girl-1.png";
import classes from "./book.module.css";
import { Link, Redirect } from "react-router-dom";
import Button from "../common/button/button";
import axios from "axios";

const Book = (props) => {
  const [{ isLoading, response: fetchContactRespose }, doFetch] = useFetch("contacts");
  /* const [{ response: deleteContactResponse }, doDeleteContact] = useFetch(url); */

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  console.log(fetchContactRespose);
  /* const deleteContact = () => {
     doDeleteContact ({
      method: 'delete'
    })
    
  } */
  const deleteContact =  (id) => {
     axios.delete(`http://localhost:3000/contacts/${id}`).then(doFetch());
  };

  /* 
  useEffect(() => {
    if (!deleteContactResponse) {
      return
    }
    setIsSuccessfullDelete(true)
  },[deleteContactResponse]) */

  /* if (isSuccessfullDelete) {
    return <Redirect to='/book'/>
  } */

  return (
    <div className={classes.center}>
      <Link className={classes.add} to={`/create`}>
        Добавить новый контакт
      </Link>
      {!isLoading &&
        fetchContactRespose &&
        fetchContactRespose.map((user) => (
          <div className={classes.contact} key={user.id}>
            <div>
              <Link to={`/profile/${user.id}`}>
                <img
                  className={classes.contact__ava}
                  src={user.male === true ? malePhoto : femalePhoto}
                  alt=""
                />
              </Link>
            </div>
            <div className={classes.contact__info}>
              <div>
                <Link
                  className={classes.contact__name}
                  to={`/profile/${user.id}`}
                >
                  {user.name}
                </Link>
              </div>
              <div>
                <a
                  className={classes.contact__phone}
                  href={"tel:" + user.phone}
                >
                  {user.phone}
                </a>
              </div>
            </div>
            <Button type="delete" onClick={() => deleteContact(user.id)}>
              Delete
            </Button>
          </div>
        ))}
    </div>
  );
};

export default Book;
