import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

import Home from 'pages/Home/index';
import SmartPhone from 'pages/SmartPhone/index';
import Detail from 'pages/Detail/index';
import Cart from 'pages/Cart/index';
import Register from 'pages/Register/index';
import Login from 'pages/Login/index';
import PrivateRoutes from 'components/private/PrivateRoutes';
import Promotion from 'pages/Promotion/index';
import AboutUs from 'components/AboutUs/index';
import Contact from 'components/Contact/index';

function AnimatedRoutes() {
  const location = useLocation()


  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/smartphone" element={<SmartPhone />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />



        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


        <Route element={<PrivateRoutes />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes