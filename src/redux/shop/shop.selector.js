import { createSelector } from "reselect";


 const selectShop = (state) => state.shop;



//state holo pura webapp er state, shop hocche root reducer er moddhe defined, oikhan theke collection state(initial state e leekha ase) 

export const selectCollections = createSelector(
    [selectShop],
    (shop)=>shop.collection);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections=> Object.keys(collections).map( key => collections[key]));


export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

