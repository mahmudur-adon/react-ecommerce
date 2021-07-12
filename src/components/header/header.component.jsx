import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon-in-header/cart-icon.component';

import {createStructuredSelector} from 'reselect';

import {selectHidden} from '../../redux/cart/cart.selectors.js';

import {selectCurrentUser} from '../../redux/user/user.selector.js'



import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    { hidden? null:<CartDropDown />}
  </div>
);
//nicher state ta root reducer ar current user hocche header er prop
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden
});

export default connect(mapStateToProps)(Header);