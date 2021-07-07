import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});
    
//combine reducer return kore state jeta mainly ekta object, jar ekekta portion er value determine kore ekekta reducer