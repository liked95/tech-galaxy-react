import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
    reducerPath: "cartApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => "/cart",
        }),

        addToCart: builder.mutation({
            query: (data) => ({
                url: "/cart",
                method: "POST",
                body: data
            })
        }),

        updateCartItemCount: builder.mutation({
            query: (data) => ({
                url: `/cart/${data.id}`,
                method: "PUT",
                body: data,
            })
        }),

        toggleCheck: builder.mutation({
            query: (data) => ({
                url: `/cart/${data.id}`,
                method: "PUT",
                body: data,
            })
        }),

        increaseItemCount: builder.mutation({
            query: (data) => ({
                url: `/cart/${data.id}`,
                method: "PUT",
                body: data,
            })
        }),

        decreaseItemCount: builder.mutation({
            query: (data) => ({
                url: `/cart/${data.id}`,
                method: "PUT",
                body: data,
            })
        }),

        deleteItem: builder.mutation({
            query: (id) => ({
                url: `/cart/${id}`,
                method: "DELETE",
            }),
            transformResponse: (response, meta, arg) => {
                // console.log(response, meta, arg);
                return arg;
            }
        }),

        // deleteAll: builder.mutation({
        //     query: () => ({
        //         url: `/cart`,
        //         method: "DELETE",
        //     }),
        // }),



    }),
});


export const {
    useGetCartQuery,
    useAddToCartMutation,
    useUpdateCartItemCountMutation,
    useToggleCheckMutation,
    useIncreaseItemCountMutation, 
    useDecreaseItemCountMutation,
    useDeleteItemMutation,
    useDeleteAllMutation
} = cartApi