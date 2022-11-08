import { LOGIN, LOGOUT } from "./constants"


export const initAuth = JSON.parse(localStorage.getItem('auth')) || {}

const authReducer = (state, action) => {
    let newState = {}
    switch (action.type) {
        case LOGIN:
            newState = { ...action.payload }
            break;

        case LOGOUT:
            newState = {}
            break;

        default:
            newState = { ...state }
            break;
    }

    localStorage.setItem('auth', JSON.stringify(newState))
    return newState
}

export default authReducer