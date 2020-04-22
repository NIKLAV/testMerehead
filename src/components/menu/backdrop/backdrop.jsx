import React from 'react';
import classes from './backdrop.module.css';

const Backdrop = props => {
    return <div onClick={props.deactivateMenu} className={classes.menu__backdrop}></div>
}

export default Backdrop;