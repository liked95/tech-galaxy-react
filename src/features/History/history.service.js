import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const historyApi = createApi({
    reducerPath: "historyApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        getHistory: builder.query({
            query: () => "/history",
        }),

        addToHistory: builder.mutation({
            query: (data) => ({
                url: "/history",
                method: "POST",
                body: data
            })
        }),
       
    }),
});


export const {useGetHistoryQuery, useAddToHistoryMutation} = historyApi