import React from 'react';
import styles from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to='.' end>Подбор насоса</NavLink>
            <NavLink to='electricmotor'>Электродвигатель</NavLink>
            <NavLink to='generatepump'>Формирование кода</NavLink>
        </nav>
    );
};

export default Menu;