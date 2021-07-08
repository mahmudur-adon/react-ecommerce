import React from 'react';
import {connect} from 'react-redux';

import './checkout-item.styles.scss';

import {
  ClearItemFromCart,
  removeItem,
  addItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, remove, arrowadd, arrowremove }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => arrowremove(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => arrowadd(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => remove(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  remove: (item) => dispatch(ClearItemFromCart(item)),
  arrowadd: (item) => dispatch(addItem(item)),
  arrowremove: (item) => dispatch(removeItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);