import React from 'react';

const Success = (props) => {
  return (
    <div className="container">
      <div className="box">
        <div className="container">
            <h5 className="center">{props.location.message}</h5>
        </div>
      </div>
    </div>
  );
};

export default Success;
