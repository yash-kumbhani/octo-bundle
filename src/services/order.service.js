import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL;

class OrderService {
   getOrders() {
    return axios
    .get(API_URL + 'orders', {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
   }

   getSingleOrder(id) {
    return axios
      .get(API_URL + 'orders/'+id, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
   }
}

export default new OrderService();