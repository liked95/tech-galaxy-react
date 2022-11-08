import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isActive: false,
}

const sideNavSlice = createSlice({
    name: 'sideNav',
    initialState,
    reducers: {
        toggleSideNav(state) {
            state.isActive = !state.isActive
        },
        openSideNav(state) {
            state.isActive = true
        },
        closeSideNav(state) {
            state.isActive = false
        }
    },
})


export const {toggleSideNav, openSideNav, closeSideNav} = sideNavSlice.actions
export default sideNavSlice.reducer
