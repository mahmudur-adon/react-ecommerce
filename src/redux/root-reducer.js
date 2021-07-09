import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer'
import directoryReducer from './directory/directory.reducer'
import storage from 'redux-persist/lib/storage';

//kon jayga theke store kora shuru korbo- key bole dey,kothay korbo-storage e, root-reducer er kon kon jinish store korbo-whitelist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
    
//combine reducer return kore state jeta mainly ekta object, jar ekekta portion er value determine kore ekekta reducer
//user,cart,directory ekekta key