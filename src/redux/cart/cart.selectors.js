import {createSelector} from 'reselect';

//nicherta input selector, pura state ta nibe inpu hisebe, just part of it output hisebe back korbe 
const selectCart = (state) => state.cart;


//nicherta output selector, eta createSelector,input selector,otput selector sob use kore

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=> cart.cartItems
);
export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartQuantity = createSelector([selectCartItems], 
(cartItems) =>cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

