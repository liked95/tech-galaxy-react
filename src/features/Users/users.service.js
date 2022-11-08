import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NODE_ENV == "development" ? "http://localhost:3001" : "https://tech-galaxy-react.herokuapp.com"}),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users",
        }),
        createUser: builder.mutation({
            query: (data) => ({
                url: "/users",
                method: "POST",
                body: data
            })
        })
       
    }),
});


export const {useGetUsersQuery, useCreateUserMutation} = userApi