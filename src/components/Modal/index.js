import React from 'react';
import styled from 'styled-components';

export const ModalDiv = styled.div`
  z-index: 1003;
  display: block;
  opicity: 1;
  top: 10%;
  transform: scaleX(1) scaleY(1);
`;

const Modal = ({content, onclick}) => {
  if (!content) {
    return '';
  }
  return (
    <ModalDiv id="modal1" className="modal">
      <div className="modal-content">
        <h5 className="center">{content}</h5>
      </div>
        <div className="modal-footer">
           <button type="button" onClick={onclick} className="modal-close waves-effect waves-green btn-flat">Close</button>
        </div>
    </ModalDiv>
  );
};

export default Modal;
