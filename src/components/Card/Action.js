import React from 'react';

const Action = (prop) => (
  <div className={`card-action ${prop.className}`}>
      {prop.children}
  </div>
);

export default Action;