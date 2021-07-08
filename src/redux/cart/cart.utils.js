export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItems) =>
      cartItems.id === cartItemToAdd.id
        ? { ...cartItems, quantity: cartItems.quantity + 1 }
        : cartItems
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};


export const removeItemFromCart = (cartItems,cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === cartItemToRemove.id
  );
  if(existingCartItem.quantity === 1){
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItems) =>
    cartItems.id === cartItemToRemove.id
      ? { ...cartItems, quantity: cartItems.quantity - 1 }
      : cartItems
  );
}