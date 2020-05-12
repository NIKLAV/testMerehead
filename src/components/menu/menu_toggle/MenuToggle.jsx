import React from "react";
import classes from "./MenuToggle.module.css";
import { useState } from "react";
console.log(classes);

const MenuToggle = (props) => {
  /*   let [toggler, setToggler] = useState(false);
    const activateMenu = () => {
        setToggler(true)
    }
    const deactivateMenu = () => {
        setToggler(false)
    }
*/
  const styles = [];

  if (!props.toggler) {
    styles.push("MenuToggle_menu__active__Gbepr");
  }
  console.log(props.toggler);
  return (
    <div
      onClick={props.toggler ? props.activateMenu : props.deactivateMenu}
      className={classes.menu__toggle + " " + styles.join(" ")}
    >
      <span className={classes.menu__lines}></span>
    </div>
  );
};

export default MenuToggle;
