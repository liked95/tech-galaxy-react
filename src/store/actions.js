import { ADD_TO_CART, CREATE_USER, DECREASE_COUNT, DELETE_CART_ITEM, INCREASE_COUNT, LOGIN, LOGOUT, TOGGLE_CHECKED, TOGGLE_CHECKED_ALL } from "./constants"

// user and login
export const createUser = (payload) => {
    return {
        type: CREATE_USER,
        payload,
    }
}

export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

// cart
export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const toggleChecked = (payload) => {
    return {
        type: TOGGLE_CHECKED,
        payload
    }
}

export const toggleCheckedAll = (payload) => {
    return {
        type: TOGGLE_CHECKED_ALL,
        payload
    }
}

export const decreaseCount = (payload) => {
    return {
        type: DECREASE_COUNT,
        payload
    }
}
export const increaseCount = (payload) => {
    return {
        type: INCREASE_COUNT,
        payload
    }
}

export const deleteCartItem = (payload) => {
    return {
        type: DELETE_CART_ITEM,
        payload
    }
}


