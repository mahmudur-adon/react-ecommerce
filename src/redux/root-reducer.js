import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});
    
//combine reducer return kore state jeta mainly ekta object, jar ekekta portion er value determine kore ekekta reducer