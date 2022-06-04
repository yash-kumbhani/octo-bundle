import React from 'react';

import Price from '../../components/Price';

const ItemTotal = ({total, onclick}) => (
  <div className="container">
      <ul className="collection">
          <li className="collection-item">
            <Price price={6}> Delivery Cost  </Price>
          </li>
          <li className="collection-item">
            <Price price={total + 6}> Total </Price>
          </li>
      </ul>
      <div className="checkout">
          <button className="waves-effect waves-light btn" onClick={onclick}>Checkout</button>
      </div>
  </div>
);

export default ItemTotal;