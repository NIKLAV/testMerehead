import React from 'react';
import classes from './Pagination.module.css'
import { NavLink } from 'react-router-dom';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className={classes.pagination}>
          {pageNumbers.map(number => (
            <li key={number} className={classes.pagination__item}>
              <NavLink onClick={() => paginate(number)} to="/" className={classes.pagination__link}>
                {number}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default Pagination