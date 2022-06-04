import React from 'react';

const Currency = ({currencyConvert}) => {

  return (
    <div className="input-field col s12">
      <select
        className="browser-default"
        onChange={(e) => currencyConvert(e.target.value)}
        defaultValue={localStorage.getItem('currency') || 'USD'}
      >
        <option value="USD">
          USD
        </option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default Currency;
