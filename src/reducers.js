import { combineReducers } from "redux"


import { beveragesLists } from "./beverages/reducer";
import { cartLists } from "./cart/reducer";
import { foodsLists } from "./food/reducer"
import { quenchersLists } from "./quenchers/reducer";



export default combineReducers({
    beveragesLists, cartLists, foodsLists, quenchersLists
});