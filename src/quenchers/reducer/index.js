import { FETCH_QUENCHERS_LISTS } from "../../Constants"


const INITIAL_LIST = [{
    name:'BRWONIE FRAPPI', price:'150'
},{
    name:'BRRRISTA', price:'250'
},{
    name:'CHOCOLATE SMOOTHIE', price:'180'
},{
    name:'MOJITO', price:'350'
},{
    name:'JIRAMISU', price:'170'
},{
    name:'TROPICAL FRUIT SALAD', price:'230'
},{
    name:'GREEN APPLE LEMONADE', price:'160'
},]

export const quenchersLists = (quenchersLists = {items:INITIAL_LIST,iconName:'beer'}, action) => {
    if(action.type === FETCH_QUENCHERS_LISTS) {
        return quenchersLists;
    }
    return quenchersLists;
}