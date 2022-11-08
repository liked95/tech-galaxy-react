import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from '../../../node_modules/react-redux/es/exports';

function PrivateRoutes() {
    const isAuth = useSelector(state=>state.userList.auth);

    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes