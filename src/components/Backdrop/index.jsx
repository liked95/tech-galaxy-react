import { closeSideNav } from 'components/SideNav/sideNav.slice'
import React from 'react'
import { useDispatch, useSelector } from '../../../node_modules/react-redux/es/exports'

function Backdrop() {
    const dispatch = useDispatch()
    const isActive = useSelector(state => state.sideNav.isActive)
    const handleCloseSideNav = () => {
        dispatch(closeSideNav())
    }
    return (
        <div id="back-drop" className={isActive ? "active" : ""} onClick={handleCloseSideNav}></div>
    )
}

export default Backdrop