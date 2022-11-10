import { closeSideNav, turnBackDropOff, turnFilterOff } from 'components/SideNav/sideNav.slice'
import React from 'react'
import { useDispatch, useSelector } from '../../../node_modules/react-redux/es/exports'

function Backdrop() {
    const dispatch = useDispatch()
    const isActive = useSelector(state => state.sideNav.isBackdropActive)

    const handleCloseBackdrop = () => {
        dispatch(closeSideNav())
        dispatch(turnBackDropOff())
        dispatch(turnFilterOff())
    }

    return (
        <div id="back-drop" className={isActive ? "active" : ""} onClick={handleCloseBackdrop}></div>
    )
}

export default Backdrop