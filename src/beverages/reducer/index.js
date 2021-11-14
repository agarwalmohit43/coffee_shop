import { FETCH_BEVERAGES_LISTS } from "../../Constants"


const INITIAL_LIST = [{
    name:'ESPRESSO', price:'150', discount: 5
},{
    name:'AFFOGATO', price:'250', discount: 8
},{
    name:'CONPANNA', price:'180', discount: 10
},{
    name:'CAFÉ AMERICANO', price:'350', discount: 15
},{
    name:'CAPPUCCINO', price:'170', discount: 5
},{
    name:'CAFÉ LATTE', price:'230', discount: 12
},{
    name:'CAFÉ MOCHA', price:'160', discount: 23
},{
    name:'HOT CHOCOLATE', price:'190', discount: 6
},{
    name:'BREEZY APPLE SPLASH', price:'650', discount: 7
},]

export const beveragesLists = (beveragesLists = {items: INITIAL_LIST, iconName:'coffee'}, action) => {
    if(action.type === FETCH_BEVERAGES_LISTS) {
        return beveragesLists;
    }
    return beveragesLists;
}