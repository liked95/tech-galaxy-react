import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NODE_ENV == "development" ? "http://localhost:3001" : "https://tech-galaxy-react.herokuapp.com"}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
        }),
       
    }),
});


export const {useGetProductsQuery} = productApi