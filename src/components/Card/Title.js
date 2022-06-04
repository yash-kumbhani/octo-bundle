import React from 'react';
import PropTypes from 'prop-types';

const Title = (prop) => <div className="card-image">{prop.children}</div>;

Title.propTypes = {
  children: PropTypes.array.isRequired
}

export default Title;
