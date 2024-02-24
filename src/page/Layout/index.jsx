import React from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "../../component/Menu";


export const Layaut = React.memo(() => {
    return (
        <div>
            <Menu/>
            <Outlet />
        </div>
    )
})