import React from "react";
import classes from "./button.module.css";

const Button = ({children, type, onClick}) => {
    const cls = [
        classes.button,
        classes[type]
    ]

    return <button onClick={onClick} className={cls.join(' ')}>{children}</button>
}

export default Button;