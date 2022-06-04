import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

import HomePage from './containers/HomePage';
import CartPage from './containers/Cart';
import LoginPage from './containers/Login';
import RegisterPage from './containers/Register';
import SuccessPage from './containers/Success';
import OrderPage from './containers/Order';

import Header from './components/Header';

import authService from './services/auth.service';

const App = () => {
  const [currency, setCurrency] = useState('USD');

  const currencyConvert = async (c) => {
    setCurrency(c);
    localStorage.setItem('currency', c);
    localStorage.setItem('rate', '');
    if (c === 'EUR') {
      await axios
        .get(
          'https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=c284e2802d023bfd8909'
        )
        .then((response) => {
          localStorage.setItem('currency', c);
          localStorage.setItem('rate', response.data.USD_EUR);
         
        });
    }
    document.location.reload();
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          user={authService.getCurrentUser()}
          currencyConvert={currencyConvert}
        />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/success" component={SuccessPage} />
          <Route exact path="/orders" component={OrderPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
