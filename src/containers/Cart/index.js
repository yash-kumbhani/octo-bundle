import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom'

import Loader from '../../components/PreLoader';
import Checkout from './Checkout';
import CartService from '../../services/cart.service';
import {CartDiv} from './styled';
import Item from './Item';
import ItemTotal from './ItemTotal';

const Cart = () => {
  const [cart, setCart] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    if (CartService.getCart()) {
      setLoading(true);
      CartService.showCart().then((response) => {
        if (response.items) {
          setCart(response.items);
          let t = 0;
          response.items.map((item) => (t = t + item.price * item.quantity));
          setTotal(t);
        }
        setLoading(false);
      });
    }
  };

  const removeCart = (id) => {
    setLoading(true);
    CartService.removeItem(id).then(response=> getCart());
  }

  const updateCart = (id, quantity) => {
    setLoading(true);
    CartService.updateItem(id, quantity).then(response => getCart());
  }
  if(success) {
     return (<Redirect to={{pathname: 'success', message: success}}/>)
  }

  return (
    <div className="container">
      <Loader active={loading} />
      <CartDiv className="cart">
        {cart && cart.length > 0 ? (
          <h5>You have ordered:</h5>
        ) : (
          <h5>Your cart is empty.</h5>
        )}

        <ul className="collection">
          {cart &&
            cart.map((item) => {
              return <Item key={item.sku} item={item} handleRemove={ () => removeCart(item.item_id)} handleUpdate={updateCart}/>;
            })}
        </ul>
      </CartDiv>
      {cart && cart.length && <ItemTotal total={total} onclick={() => setOpen(!open) } />}
      {open && <Checkout loader={setLoading} message={setSuccess} onclick={() => setOpen(!open)} />}
    </div>
  );
};

export default Cart;
