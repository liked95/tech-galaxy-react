import { ADD_TO_CART, DECREASE_COUNT, DELETE_CART_ITEM, INCREASE_COUNT, TOGGLE_CHECKED } from "./constants";
// const a = [
//     {
//         userId,
//         productId,
//         count,
//         alterOption,
//         color,
//         name,
//         image,
//         oldPrice,
//         price,
//     },
// ]


export const initCart = JSON.parse(localStorage.getItem('cart')) || []

const cartReducer = (state, action) => {
    let newState


    switch (action.type) {
        case ADD_TO_CART:
            const newItem = action.payload
            // console.log('newItem', newItem);

            if (state.length == 0) {
                localStorage.setItem('cart', JSON.stringify([newItem]))

                return [newItem]
            }

            let isExist = false
            newState = [...state].map(item => {
                // console.log('map item', item);
                if (item.userId == newItem.userId && item.productID == newItem.productID && item.alterOption == newItem.alterOption && item.color == newItem.color) {
                    isExist = true
                    return { ...item, count: item.count + newItem.count }
                } else {
                    return item
                }
            })

            if (!isExist) newState = [...state, newItem]
            break;

        case TOGGLE_CHECKED: {
            const { userId, productID, alterOption, color } = action.payload

            newState = [...state].map(item => {
                if (item.userId == userId && item.productID == productID && item.alterOption == alterOption && item.color == color) {
                    item.checked = !item.checked
                }
                return item
            })
            break;
        }

        case INCREASE_COUNT: {
            const { userId, productID, alterOption, color } = action.payload
            newState = [...state].map(item => {
                if (item.userId == userId && item.productID == productID && item.alterOption == alterOption && item.color == color) {
                    item.count++
                }
                return item
            })
            break
        }

        case DECREASE_COUNT: {
            const { userId, productID, alterOption, color } = action.payload
            newState = [...state].map(item => {
                if (item.userId == userId && item.productID == productID && item.alterOption == alterOption && item.color == color) {
                    item.count--
                }
                return item
            })
            break
        }

        case DELETE_CART_ITEM: {
            const { userId, productID, alterOption, color } = action.payload
            console.log(action.payload);
            newState = [...state].filter(item => 
                item.userId != userId ||
                item.productID != productID ||
                item.alterOption != alterOption ||
                item.color != color)
            break
        }

        default:
            newState = [...state]
            break;
    }
    localStorage.setItem('cart', JSON.stringify(newState))
    return newState
}

export default cartReducer