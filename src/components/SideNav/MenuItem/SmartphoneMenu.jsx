import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSideNav, toggleSideNav } from '../sideNav.slice'
import { motion } from "framer-motion"

function SmartphoneMenu({ category }) {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <li className="menu-item">
            <div className="sidebar-main-menu">
                <Link to="/smartphone" onClick={()=> dispatch(toggleSideNav())}>{category}</Link>
                <span className="arrow-container" onClick={handleToggle}>
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
            </div>

            {isOpen &&
                <motion.ul className="my-menu"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, height: "0" }}
                    animate={{ opacity: 1, height: "100%" }}
                    exit={{ opacity: 0, height: "0" }}>
                    <li className="sub-menu-item" onClick={()=> dispatch(toggleSideNav())}><Link to="smartphone?brand=apple">Apple</Link></li>
                    <li className="sub-menu-item" onClick={()=> dispatch(toggleSideNav())}><Link to="smartphone?brand=samsung">Samsung</Link></li>
                    <li className="sub-menu-item" onClick={()=> dispatch(toggleSideNav())}><Link to="smartphone?brand=xiaomi">Xiaomi</Link></li>
                    <li className="sub-menu-item" onClick={()=> dispatch(toggleSideNav())}><Link to="smartphone?brand=oppo">Oppo</Link></li>
                </motion.ul>
            }

        </li>
    )
}

export default SmartphoneMenu