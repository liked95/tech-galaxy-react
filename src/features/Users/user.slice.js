import { createSlice } from '@reduxjs/toolkit'
import { userApi } from './users.service';
import { createRandomId } from 'utils/index';


const initialState = {
    status: "",
    users: [],
    auth: JSON.parse(localStorage.getItem('auth')),
}

const userSlice = createSlice({
    name: "userList",
    initialState,
    reducers: {
        login(state, action) {
            // console.log(action);
            state.auth = action.payload
            localStorage.setItem('auth', JSON.stringify(action.payload))
        },
        logout(state) {
            state.auth = null
            localStorage.setItem('auth', null)
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(userApi.endpoints.getUsers.matchFulfilled, (state, action) => {
            // console.log(action);
            state.users = action.payload
        })

        builder.addMatcher(userApi.endpoints.createUser.matchFulfilled, (state, action) => {
            state.users.push(action.payload)
        });
    }
});

export const { login, logout } = userSlice.actions

export default userSlice.reducer