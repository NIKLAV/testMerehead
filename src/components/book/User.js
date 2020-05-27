import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/button/Button";
import classes from './Contacts.module.css'
import Photo from "../../assets/man-1.png"

const Users = ({ users, deleteContact }) => {
  return (
    <div>
      {users.map((user) => (
        <div className={classes.contact} key={user.id}>
          <div>
            <Link to={`/user/${user.id}`}>
              <img className={classes.contact__ava} src={Photo} alt="" />
            </Link>
          </div>
          <div className={classes.contact__info}>
            <div>
              <Link className={classes.contact__name} to={`/user/${user.id}`}>
                {user.name}
              </Link>
            </div>
            <div>
              <Link
                className={classes.contact__surname}
                to={`/user/${user.id}`}
              >
                {user.surname}
              </Link>
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

export default Users