import React from "react";
import Header from "components/Header/index";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer/index";
import Compare from "components/Compare/index";
import SideNav from "components/SideNav/index";
import Backdrop from "components/Backdrop/index";
import WriteReview from "pages/Detail/Review/WriteReview";
import AllReviews from "pages/Detail/Review/AllReviews";


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <Compare /> */}
      <SideNav />
      <Backdrop />
      <WriteReview />
    </>
  );
}

export default Layout;
