import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL;

class CartService {
  createCart() {
    return axios
      .post(API_URL + 'carts', {} ,{
           headers: authHeader(),
      })
      .then((response) => {
        if (response.data.cartToken) {
          localStorage.setItem('cart', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  addProduct(productId) {
    const {cartKey} = this.getCart();
    return axios
      .post(API_URL + 'carts/add',{cartKey: cartKey, productID: productId, quantity: 1} ,{
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  showCart() {
    const {cartKey} = this.getCart();
    return axios
      .get(API_URL + 'carts?cartKey=' + cartKey, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  removeItem(itemId) {
    return axios
      .delete(API_URL + 'cartitems/' + itemId, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  updateItem(id, quantity) {
    return axios.put(API_URL+'cartitems/'+id,{quantity},{
      headers: authHeader(),
    }).then(response => {
      return response.data;
    });
  }

  updateCart() {
    const {cartToken} = this.getCart();
    return axios
      .put(API_URL + 'carts/' + cartToken,{},{
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  checkoutCart(name, address) {
    const {cartKey} = this.getCart();
    return axios
      .post(API_URL + 'carts/checkout',{cartKey: cartKey, name, address} ,{
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  getCart() {
    return localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : null;
  }
}

export default new CartService();
