import Layout from './components/Layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from 'pages/Home/index';
import SmartPhone from 'pages/SmartPhone/index';
import Detail from 'pages/Detail/index';
import Cart from 'pages/Cart/index';
import Register from 'pages/Register/index';
import Login from 'pages/Login/index';
import PrivateRoutes from 'components/private/PrivateRoutes';



function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/smartphone" element={<SmartPhone />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />


          <Route element={<PrivateRoutes />}>
            <Route path="/cart" element={<Cart />} />
          </Route>


        </Route>
      </Routes>
    </div>
  );
}

export default App;
