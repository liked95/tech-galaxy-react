import React from "react";
import Header from "components/Header/index";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer/index";
import Compare from "components/Compare/index";
import SideNav from "components/SideNav/index";
import Backdrop from "components/Backdrop/index";


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Compare />
      <SideNav/>
      <Backdrop />
    </>
  );
}

export default Layout;
