import React from 'react';
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <div>Подбор насоса</div>
            <div>Электродвигатель</div>
            <div>Формирование кода</div>
        </div>
    );
};

export default Nav;