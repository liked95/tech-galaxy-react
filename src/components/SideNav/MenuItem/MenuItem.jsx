import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSideNav, toggleSideNav, turnBackDropOff } from '../sideNav.slice'
import { motion } from "framer-motion"

function SmartphoneMenu({ category }) {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleCloseSideNavAndBackdrop = () => {
        dispatch(toggleSideNav())
        dispatch(turnBackDropOff())
    }


    return (
        <li className="menu-item">
            <div className="sidebar-main-menu">
                <Link to="/smartphone" onClick={handleCloseSideNavAndBackdrop}>{category}</Link>
                <span className="arrow-container" onClick={handleToggle}>
                    <i className={`fa-solid fa-chevron-right ${isOpen ? 'active' : ''}`}></i>
                </span>
            </div>

            {isOpen &&
                <motion.ul className="sub-menu"
                    initial={{ opacity: 0, height: "0", display: 'none' }}
                    animate={{ opacity: 1, height: "100%", display: 'block', overflow: 'hidden' }}
                    exit={{ opacity: 0, height: "0" }}
                    transition={{ duration: 0.3 }}>
                    <li className="sub-menu-item" onClick={handleCloseSideNavAndBackdrop}><Link to="smartphone?brand=apple">Apple</Link></li>
                    <li className="sub-menu-item" onClick={handleCloseSideNavAndBackdrop}><Link to="smartphone?brand=samsung">Samsung</Link></li>
                    <li className="sub-menu-item" onClick={handleCloseSideNavAndBackdrop}><Link to="smartphone?brand=xiaomi">Xiaomi</Link></li>
                    <li className="sub-menu-item" onClick={handleCloseSideNavAndBackdrop}><Link to="smartphone?brand=oppo">Oppo</Link></li>
                </motion.ul>
            }

        </li>
    )
}

export default SmartphoneMenu