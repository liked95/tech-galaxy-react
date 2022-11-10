import React from 'react'
import { Link } from 'react-router-dom'
import techLogo from "../../assets/images/header/TECH GALAXY.png"
import MenuItem from './MenuItem/MenuItem'
import { useSelector, useDispatch } from 'react-redux'
import { closeSideNav, turnBackDropOff } from './sideNav.slice'




function SideNav() {
    const dispatch = useDispatch()
    const isActive = useSelector(state => state.sideNav.isActive)

    const handleCloseSideNav = () => {
        dispatch(closeSideNav())
        dispatch(turnBackDropOff())
    }

    return (
        <div id="side-nav-container" className={isActive ? "active" : ""}>
            <div className="side-nav-title">
                <Link to="/" className="sidebar-logo">
                    <img src={techLogo} alt={techLogo} />
                </Link>

                <span id="close-btn" onClick={handleCloseSideNav}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
            </div>

            <ul className="side-menu">

                <MenuItem category={"Điện thoại"}/>
                <MenuItem category={"Máy tính bảng"}/>
                <MenuItem category={"Laptop"}/>
               
                <li className="menu-item">
                    <div className="sidebar-main-menu">
                        <Link href="contact.html">Liên hệ</Link>
                    </div>
                </li>



                <li className="menu-item fst-italic" id="sidebar-login-logout">
                    <div className="sidebar-main-menu d-flex">
                        <Link href="login.html">Đăng nhập</Link>
                        <span>/</span>
                        <Link href="register.html">Đăng ký</Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SideNav