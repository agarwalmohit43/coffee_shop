import { FETCH_FOOD_LISTS } from "../../Constants"


const INITIAL_LIST = [{
    name:'VEGETARIANO PUFF', price:'150'
},{
    name:'CHICKEN PUFF', price:'250'
},{
    name:'CHICKEN SEEKH ROLL', price:'180'
},{
    name:'CHICKEN TIKKA SANDWICH', price:'350'
},{
    name:'PASTA CHEESE SAUCE & SUNDRIED TOMATO', price:'170'
},{
    name:'FRESH HERB ARABIATTA', price:'230'
},{
    name:'CRUNCHY OAT MEAL COOKIE', price:'160'
},{
    name:'ORANGE CHOCOLATE FANTASY', price:'190'
},{
    name:'CHOCO CARAMEL DUET', price:'650'
},]

export const foodsLists = (foodsLists = {items: INITIAL_LIST, iconName: 'certificate'}, action) => {
    if(action.type === FETCH_FOOD_LISTS) {
        return foodsLists;
    }
    return foodsLists;
}