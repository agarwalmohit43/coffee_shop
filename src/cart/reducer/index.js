import { ADD_TO_CART, CLEAR_CART, DELETE_ITEM_CART } from "../../Constants";


export const cartLists = (lists={items:[], total:0}, action) => {
    if(action.type === ADD_TO_CART) {
        let itemAlreadyPresent = lists.items.some(item => item.name === action.payload.name);
        if(itemAlreadyPresent) {
            let itemIndex = lists.items.findIndex(item => item.name === action.payload.name);
            let newArray = lists.items;
            let item = lists.items[itemIndex];
            let qty = item.qty + action.payload.qty;
            let totalPrice = qty * item.price;
            newArray[itemIndex] = {...item, qty, totalPrice};
            return {...lists,items: newArray, total : +lists.total + +action.payload.price };
        } else {
            return {...lists, items: [...lists.items, {...action.payload, totalPrice: action.payload.price}], total: +lists.total + +action.payload.price};
        }
    } else if(action.type === CLEAR_CART) {
        return {items:[], total:0};
    } else if(action.type === DELETE_ITEM_CART) {
        return {...lists, items: lists.items.filter(item=> item.name !== action.payload.item.name), total: lists.total - action.payload.item.totalPrice};
    }
    return lists;
}