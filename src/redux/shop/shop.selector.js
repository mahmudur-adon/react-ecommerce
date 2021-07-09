import { createSelector } from "reselect";

 const selectShop = (state) => state.shop;

 console.log(selectShop);

export const selectCollections = createSelector(
    [selectShop],
    (shop)=>shop.collection);

//state holo pura webapp er state, shop hocche root reducer er moddhe defined, oikhan theke collection state(initial state e leekha ase) 