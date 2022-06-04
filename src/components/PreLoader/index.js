import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoaderDiv = styled.div`
  position: fixed !important;
  left: 50%;
  right: 50%;
  top: 50%;
  z-index: 9999999;
`;

const PreLoader = ({active}) => {
  const activeClass = active ? 'active' : '';

  return (
    <LoaderDiv className={`preloader-wrapper big ${activeClass}`}>
      <div className="spinner-layer spinner-tile-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </LoaderDiv>
  );
};

PreLoader.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default PreLoader;
