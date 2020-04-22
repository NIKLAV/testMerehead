import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'
import MenuToggle from './menu_toggle/MenuToggle';
import { useState } from 'react';
import Backdrop from './backdrop/backdrop';
const Navbar = (props) => {
    
     let [toggler, setToggler] = useState(true);
    const deactivateMenu = () => {
        setToggler(true)
    }
    const activateMenu = () => {
        setToggler(false)
    }

    const styles = []
    
    if (toggler) {
        styles.push('Navbar_close__2_vvG')
    }
 
    return (
        
        <div>
            <MenuToggle
                activateMenu={activateMenu}
                deactivateMenu={deactivateMenu}
                toggler={toggler}/>
 
            <nav className={classes.menu + ' ' + styles.join(' ')}>
                <ul>
                    <li>
                        <NavLink to='/auth' onClick={deactivateMenu} className={classes.menu__link}>Авторизация</NavLink>
                    </li>
                    <li>
                        <NavLink to='/book' onClick={deactivateMenu} className={classes.menu__link}>Книга</NavLink>
                    </li>
                </ul>
            </nav>
            {toggler ? null : <Backdrop deactivateMenu={deactivateMenu}/>}
        </div>
    )
}

export default Navbar;