import React from 'react';
import classes from './button.module.css';

const Button = props => {
    const cls = [
        classes.button,
        classes[props.type]
    ]

    return <button className={cls.join(' ')}>{props.children}</button>
}

export default Button;