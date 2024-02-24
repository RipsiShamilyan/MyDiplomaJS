import React, { useEffect, useState } from "react";
import "./style.scss"
import { useParams } from "react-router-dom";
import { selectUser } from "../../features/user/userSlice";
import { useSelector } from "react-redux";


export const Inner = React.memo(() => {
    const {inner} = useSelector(selectUser)
    return (
        <div className="inner">
           <h3>{inner.name}</h3>
           <p>{inner.desc}</p>
        </div>
    )
})