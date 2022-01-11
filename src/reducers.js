import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { beveragesLists } from './beverages/reducer';
import { cartLists } from './cart/reducer';
import { foodsLists } from './food/reducer';
import { quenchersLists } from './quenchers/reducer';

// export default combineReducers({
//   beveragesLists,
//   cartLists,
//   foodsLists,
//   quenchersLists,
// });

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['beveragesLists', 'cartLists', 'foodsLists', 'quenchersLists'],
};

const rootReducer = combineReducers({
  beveragesLists,
  cartLists,
  foodsLists,
  quenchersLists,
});

export default persistReducer(persistConfig, rootReducer);
