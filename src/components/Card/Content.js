import React from 'react';
import PropTypes from 'prop-types';

const Content = (prop) => <div className="card-content"> {prop.children}</div>;

Content.propTypes = {
    children: PropTypes.array.isRequired
}

export default Content;
