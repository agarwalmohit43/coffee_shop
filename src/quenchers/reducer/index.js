import { FETCH_QUENCHERS_LISTS } from "../../Constants"


const INITIAL_LIST = [{
    name:'BRWONIE FRAPPI', price:'150', discount: 7
},{
    name:'BRRRISTA', price:'250', discount: 5
},{
    name:'CHOCOLATE SMOOTHIE', price:'180', discount: 7
},{
    name:'MOJITO', price:'350', discount: 4
},{
    name:'JIRAMISU', price:'170', discount: 8
},{
    name:'TROPICAL FRUIT SALAD', price:'230', discount: 8
},{
    name:'GREEN APPLE LEMONADE', price:'160', discount: 5
},]

export const quenchersLists = (quenchersLists = {items:INITIAL_LIST,iconName:'beer'}, action) => {
    if(action.type === FETCH_QUENCHERS_LISTS) {
        return quenchersLists;
    }
    return quenchersLists;
}