import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL+'auth/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(name, email, password, password_confirmation) {
    return axios.post(`${API_URL}auth/signup`, {
      name,
      email,
      password,
      password_confirmation,
    });
  }

  getCurrentUser() {
      return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();