import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";

function MenuItem(props) {
    const { image, title } = props
    const [show, setShow] = useState(false)

    const handleToggleShow = () => {
        setShow(!show)
    }

    const subMenuRef = useRef()

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!subMenuRef.current?.contains(e.target)) setShow(false)
        }
        document.addEventListener("click", handleClickOutside)

        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    return (
        <li className="menu-icon" ref={subMenuRef}>
            <div>
                <div className="icon-box" onClick={handleToggleShow}>
                    <img src={image} alt="phone" className="filter-white" />
                    <i className="fa-solid fa-caret-down"></i>
                </div>
                <p onClick={handleToggleShow}>{title}</p>

                {show && <ul className="sub-menu" >
                    <Link to="smartphone?brands[]=apple" onClick={() => setShow(false)}>
                        <li className="sub-menu-item">iPhone</li>
                    </Link>
                    <Link to="smartphone?brands[]=samsung" onClick={() => setShow(false)}>
                        <li className="sub-menu-item">Samsung</li>
                    </Link>
                    <Link to="smartphone?brands[]=xiaomi" onClick={() => setShow(false)}>
                        <li className="sub-menu-item">Xiaomi</li>
                    </Link>
                    <Link to="smartphone?brands[]=oppo" onClick={() => setShow(false)}>
                        <li className="sub-menu-item">Oppo</li>
                    </Link>
                </ul>}
            </div>
        </li>
    )
}

export default MenuItem