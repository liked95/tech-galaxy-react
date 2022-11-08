import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSideNav } from '../sideNav.slice'

function TabletMenu() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const style = {
        display: isOpen ?  "block" : "none"
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleCloseSideNav = () => {
        dispatch(closeSideNav())
    }

    return (
        <li className="menu-item">
            <div className="sidebar-main-menu">
                <Link to="/smartphone" onClick={handleCloseSideNav}>Máy tính bảng</Link>
                <span className="arrow-container" onClick={toggleOpen}>
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
            </div>
            <ul className="sub-menu" style={style}>
                <li className="sub-menu-item"><Link to="smartphone?brand=apple">Apple</Link></li>
                <li className="sub-menu-item"><Link to="smartphone?brand=samsung">Samsung</Link></li>
                <li className="sub-menu-item"><Link to="smartphone?brand=xiaomi">Xiaomi</Link></li>
                <li className="sub-menu-item"><Link to="smartphone?brand=oppo">Oppo</Link></li>
            </ul>
        </li>
    )
}

export default TabletMenu