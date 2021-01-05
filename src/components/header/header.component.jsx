/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container" title="HOME">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option" title="SHOP">SHOP</Link>
      <Link to="/contact" className="option" title="CONTACT">CONTACT</Link>
      {currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGNOUT</div> : <Link to="/signin" className="option" title="SIGNIN">SIGNIN</Link>}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
