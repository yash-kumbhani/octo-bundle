import React from 'react';
import PropTypes from 'prop-types';

import "./card.scss";

export {default as CartTitle} from './Title';
export {default as CardContent} from './Content';
export {default as CardAction} from './Action';

const Card = (prop) => {
  return <div className={`card  ${prop.className}`}>{prop.children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
