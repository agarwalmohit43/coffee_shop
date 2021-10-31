import { FETCH_BEVERAGES_LISTS } from "../../Constants"


const INITIAL_LIST = [{
    name:'ESPRESSO', price:'150'
},{
    name:'AFFOGATO', price:'250'
},{
    name:'CONPANNA', price:'180'
},{
    name:'CAFÉ AMERICANO', price:'350'
},{
    name:'CAPPUCCINO', price:'170'
},{
    name:'CAFÉ LATTE', price:'230'
},{
    name:'CAFÉ MOCHA', price:'160'
},{
    name:'HOT CHOCOLATE', price:'190'
},{
    name:'BREEZY APPLE SPLASH', price:'650'
},]

export const beveragesLists = (beveragesLists = {items: INITIAL_LIST, iconName:'coffee'}, action) => {
    if(action.type === FETCH_BEVERAGES_LISTS) {
        return beveragesLists;
    }
    return beveragesLists;
}