import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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

        <AnimatePresence>
          {show && <motion.ul
            className="sub-menu"
            initial={{ opacity: 0, y: "-5%", }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-5%", }}
          >
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
          </motion.ul>}
        </AnimatePresence>
      </div>
    </li>
  )
}

export default MenuItem
