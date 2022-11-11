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
  function Example() {
    return (
      <div
        tabIndex={1}
        onFocus={(e) => {
          if (e.currentTarget === e.target) {
            console.log('focused self');
          } else {
            console.log('focused child', e.target);
          }
          if (!e.currentTarget.contains(e.relatedTarget)) {
            // Not triggered when swapping focus between children
            console.log('focus entered self');
          }
        }}
        onBlur={(e) => {
          if (e.currentTarget === e.target) {
            console.log('unfocused self');
          } else {
            console.log('unfocused child', e.target);
          }
          if (!e.currentTarget.contains(e.relatedTarget)) {
            // Not triggered when swapping focus between children
            console.log('focus left self');
          }
        }}
      >
        <input id="1" />
        <input id="2" />
      </div>
    );
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <Compare /> */}
      <SideNav />
      <Backdrop />
      <WriteReview />
      <Example />
    </>
  );
}

export default Layout;
