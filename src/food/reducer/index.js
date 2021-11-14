import { FETCH_FOOD_LISTS } from "../../Constants"


const INITIAL_LIST = [{
    name:'VEGETARIANO PUFF', price:'150', discount: 7
},{
    name:'CHICKEN PUFF', price:'250', discount: 8
},{
    name:'CHICKEN SEEKH ROLL', price:'180', discount: 9
},{
    name:'CHICKEN TIKKA SANDWICH', price:'350', discount: 4
},{
    name:'PASTA CHEESE SAUCE & SUNDRIED TOMATO', price:'170', discount: 8
},{
    name:'FRESH HERB ARABIATTA', price:'230', discount: 2
},{
    name:'CRUNCHY OAT MEAL COOKIE', price:'160', discount: 18
},{
    name:'ORANGE CHOCOLATE FANTASY', price:'190', discount: 14
},{
    name:'CHOCO CARAMEL DUET', price:'650', discount: 20
},]

export const foodsLists = (foodsLists = {items: INITIAL_LIST, iconName: 'certificate'}, action) => {
    if(action.type === FETCH_FOOD_LISTS) {
        return foodsLists;
    }
    return foodsLists;
}