import React from "react";
import routes from "./routes";

import { useRoutes } from "react-router-dom";

import SideBar from "./Components/SideBar/SideBar";
import './App.css'



export default function App(){

  let router = useRoutes(routes)
  return(
    <>
    
    <div className="Container">
      <SideBar/>
     {router}
    </div>
    </>
  )
}