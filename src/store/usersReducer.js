import { CREATE_USER } from './constants'

export const initUsers = JSON.parse(localStorage.getItem("users")) || []

const usersReducer = (state, action) => {
    let newState = []
    switch (action.type) {
        case CREATE_USER:
            newState = [...state, action.payload]
            break
        default:
            newState =[...state]
            break
    }
    localStorage.setItem('users', JSON.stringify(newState))

    return newState
}

export default usersReducer