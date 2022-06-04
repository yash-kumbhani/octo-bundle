import React from 'react';

const Price = ({price, children}) => {
  const currency = localStorage.getItem('currency') || 'USD';
  const rate = localStorage.getItem('rate');
  let symbol = '$';
  if(currency === 'EUR') {
      price = price * rate;
      symbol = '€';
  }

  return (
    <p>
      <b>{children} {symbol}{parseFloat(price).toFixed(2)}</b>
    </p>
  );
};

export default Price;
