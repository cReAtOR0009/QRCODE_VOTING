import { Outlet } from "react-router-dom";
import React from 'react'
import  NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const PageLayout = () => {
  return (
    <>
       <NavBar />
       <Outlet />
       {/* <Footer />  */}
    </>
  )
}

export default PageLayout