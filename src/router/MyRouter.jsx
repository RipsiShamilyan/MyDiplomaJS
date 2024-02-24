import React from "react";
import { useRoutes } from "react-router-dom";
import { Layaut } from "../page/Layout";
import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
import { Profile } from "../page/Profile";
import { AboutMe } from "../page/AboutMe";
import { Advantage } from "../page/Advantage";
import { Inner } from "../page/Lessons/Inner";
import Lessons from "../page/Lessons";


export const MyRouter=React.memo(()=>{
    const router=useRoutes([
        {
            path: '/',
            element: <Layaut/>,
            children: [
              { path: "", element: <Home/> },
              { path: "login", element: <Login/>  },
              { path: "register", element: <Register/> },
              { path: "profile", element: <Profile/> },
              { path: "aboutMe", element: <AboutMe /> },
              { path: "advantage", element: <Advantage /> },
              {
                path: "lessons",
                element: <Lessons />,
                children: [
                  { path: ":name", element: <Inner /> }
                ]
              }
            ]
          },
          {
            path: "*",
            element: <h1>404, Page not found</h1>,
          }
        ]);
    return router
})