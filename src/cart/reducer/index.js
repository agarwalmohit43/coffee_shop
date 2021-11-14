import { ADD_TO_CART, CLEAR_CART, DELETE_ITEM_CART } from "../../Constants";


export const cartLists = (lists={items:[], total:0}, action) => {
    if(action.type === ADD_TO_CART) {
        let priceOfAnItem = action.payload.price;
        let itemAlreadyPresent = lists.items.some(item => item.name === action.payload.name);
        if(itemAlreadyPresent) {
            let itemIndex = lists.items.findIndex(item => item.name === action.payload.name);
            let newArray = lists.items;
            let item = lists.items[itemIndex];
            let qty = item.qty + action.payload.qty;
            let totalPrice = qty * item.price;
            let priceAfterDiscount = totalPrice - (totalPrice * item.discount / 100);
            newArray[itemIndex] = {...item, qty, totalPrice, priceAfterDiscount};
            return {...lists,items: newArray, total : +lists.total + +(priceOfAnItem - (priceOfAnItem * action.payload.discount / 100)) };
        } else {
            let totalPrice = priceOfAnItem;
            let priceAfterDiscount = totalPrice - (totalPrice * action.payload.discount / 100);
            return {...lists, items: [...lists.items, {...action.payload, totalPrice, priceAfterDiscount}], total: +lists.total + +priceAfterDiscount};
        }
    } else if(action.type === CLEAR_CART) {
        return {items:[], total:0};
    } else if(action.type === DELETE_ITEM_CART) {
        return {...lists, items: lists.items.filter(item=> item.name !== action.payload.item.name), total: lists.total - action.payload.item.priceAfterDiscount};
    }
    return lists;
}