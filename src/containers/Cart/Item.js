import React from 'react';
import {Link} from 'react-router-dom';

import Price from '../../components/Price';
import {Li, Img, SpanTitle, PText} from './styled';

const Item = ({item, handleRemove, handleUpdate}) => (
  <Li className="collection-item avatar">
    <div className="item-img">
      <Img src={item.image} alt="" />
    </div>
    <div className="item-desc">
      <SpanTitle className="title">{item.name}</SpanTitle>
      <PText>{item.detail}</PText>
      <PText>
        <Price price={item.price * item.quantity}></Price>
      </PText>
      <PText>
        <b>Quantity: {item.quantity}</b>
      </PText>
      <div className="add-remove">
        <Link to="/cart">
          <i className="material-icons" onClick={() => handleUpdate(item.item_id, (item.quantity + 1))}>
            arrow_drop_up
          </i>
        </Link>
        <Link to="/cart">
          <i className="material-icons" onClick={() => handleUpdate(item.item_id, (item.quantity - 1)) }>
            arrow_drop_down
          </i>
        </Link>
      </div>
      <button className="waves-effect waves-light btn teal remove" onClick={handleRemove}>Remove</button>
    </div>
  </Li>
);

export default Item;
