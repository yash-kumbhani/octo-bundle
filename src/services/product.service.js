import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL;

class ProductService {
    getProducts() {
        return axios.get(API_URL + 'products', { headers: authHeader() });
    }
}

export default new ProductService();