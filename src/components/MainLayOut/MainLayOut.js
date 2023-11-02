import React from 'react';
import Menu from "../Menu/Menu";
import {Outlet} from "react-router-dom";

const MainLayOut = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};

export default MainLayOut;
