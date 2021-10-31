import { ADD_TO_CART, CLEAR_CART, DELETE_ITEM_CART } from "../../Constants";

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload:item
    }
}

export const deleteItemFromCart = (item) => {
    return {
        type: DELETE_ITEM_CART,
        payload:{item}
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}
