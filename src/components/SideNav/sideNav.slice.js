import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isActive: false,
    isBackdropActive: false,
    isFilterSideNavActive: false
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
        },


        toggleBackdrop(state) {
            state.isBackdropActive = !state.isBackdropActive
        },
        turnBackDropOn(state) {
            state.isBackdropActive = true
        },
        turnBackDropOff(state) {
            state.isBackdropActive = false
        },

        toggleFilter(state) {
            state.isFilterSideNavActive = !state.isFilterSideNavActive
        },
        turnFilterOn(state) {
            state.isFilterSideNavActive = true
        },
        turnFilterOff(state) {
            state.isFilterSideNavActive = false
        },
    },
})


export const { toggleSideNav, openSideNav, closeSideNav, toggleBackdrop, turnBackDropOn, turnBackDropOff, toggleFilter, turnFilterOn, turnFilterOff } = sideNavSlice.actions
export default sideNavSlice.reducer
