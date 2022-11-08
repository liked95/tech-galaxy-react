import { MODIFY_PRODUCT } from "./constants";
import products from "data/index";

export const initProducts = JSON.parse(localStorage.getItem("products")) || products

const productReducer = (state, action) => {
    switch (action.type) {
        

        default:
            return state
    }
}


export default productReducer