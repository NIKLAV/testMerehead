import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import malePhoto from "../../assets/man-1.png";
import femalePhoto from "../../assets/girl-1.png";
import classes from "./book.module.css";
import { Link } from "react-router-dom";

const Book = (props) => {
  const [{ isLoading, response, error }, doFetch] = useFetch("contacts");
  console.log(response, isLoading, error);
  const slug = props.match.params.slug
  useEffect(() => {
    doFetch()
  },[doFetch])

  return (
    <div className={classes.center}>
      <Link className={classes.add} to={`/create`}>Добавить новый контакт</Link>
      {!isLoading &&
        response &&
        response.map((user) => (
          <div className={classes.contact} key={user.id}>
            <div>
              <Link to={`/profile${user.id}`}>
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
                  to={`/profile${user.id}`}
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
          </div>
        ))}
    </div>
  );
};

export default Book;
