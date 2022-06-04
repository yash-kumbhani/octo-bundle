import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Currency from './Currency';

const Li = styled.li`
   cursor: pointer;
`;

const Navbar = ({user, currencyConvert}) => {

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    document.location.reload();
  }
  return (
    <ul className="right">
      <li>
        <Link to="/">Shop</Link>
      </li>
      {user && user.access_token ? (
        <React.Fragment>
        <Li
          onClick={logout}
        >
          Logout
        </Li>
        <Li>
          <Link to="/orders">My Orders</Link>
        </Li>
        </React.Fragment>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      <li>
        <Link to="cart">My Cart</Link>
      </li>
      <li>
        <Link to="cart">
          <i className="material-icons">shopping_cart</i>
        </Link>
      </li>
      <li>
      <Currency currencyConvert={currencyConvert}/>

        </li>
    </ul>
  );
};

export default Navbar;
