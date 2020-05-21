import React, { useEffect, useState } from "react";
import classes from "./Contacts.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/actions";
import Pagination from "../common/Pagination/Pagination";
import Users from "./User";

const Contacts = ({ fetchContacts, users, deleteContact }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <div className={classes.center}>
      <Link className={classes.add} to={`/create`}>
        Create new contact
      </Link>
      <Users deleteContact={deleteContact} users={currentUsers} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={users.length}
        paginate={paginate}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = { fetchContacts, deleteContact };

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
