import React from 'react'
import { Link } from 'react-router-dom'
import techLogo from "../../assets/images/header/TECH GALAXY.png"
import SmartphoneMenu from './MenuItem/SmartphoneMenu'
import { useSelector, useDispatch } from 'react-redux'
import TabletMenu from './MenuItem/TabletMenu'
import { closeSideNav } from './sideNav.slice'
import LaptopMenu from './MenuItem/LaptopMenu'



function SideNav() {
    const dispatch = useDispatch()
    const isActive = useSelector(state => state.sideNav.isActive)

    const handleCloseSideNav = () => {
        dispatch(closeSideNav())
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

                <SmartphoneMenu category={"Điện thoại"}/>
                <SmartphoneMenu category={"Máy tính bảng"}/>
                <SmartphoneMenu category={"Laptop"}/>
               
                {/* 

                <li className="menu-item">
                    <div className="sidebar-main-menu">
                        <Link href="smartphone.html">Laptop</Link>
                        <span className="arrow-container" onclick="toggleSubMenu(this)">
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>
                    </div>
                    <ul className="sub-menu">
                        <li className="sub-menu-item"><a href="smartphone.html?brand=apple">Macbook</a></li>
                        <li className="sub-menu-item"><a href="smartphone.html?brand=samsung">Samsung</a></li>
                        <li className="sub-menu-item"><a href="smartphone.html?brand=xiaomi">Xiaomi</a></li>
                        <li className="sub-menu-item"><a href="smartphone.html?brand=oppo">Oppo</a></li>
                    </ul>
                </li>

                <li className="menu-item">
                    <div className="sidebar-main-menu">
                        <Link href="promotion.html">Khuyến mãi</Link>
                    </div>
                </li>

                <li className="menu-item">
                    <div className="sidebar-main-menu">
                        <Link href="about.html">Về chúng tôi</Link>
                    </div>
                </li> */}

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