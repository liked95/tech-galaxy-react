import React from 'react';
import './App.css';

import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import SideNav from 'components/SideNav/index';
import Backdrop from 'components/Backdrop/index';
import WriteReview from 'pages/Detail/Review/WriteReview';
import AnimatedRoutes from 'components/AnimatedRoutes/index';



function App() {


  return (
    <div className="App">
      <Header />
      <AnimatedRoutes/>
      <Footer />

      <SideNav />
      <Backdrop />
      <WriteReview />
    </div>
  );
}

export default App;
