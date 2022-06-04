import React, {useState} from 'react';

import {ModalDiv} from '../../components/Modal';
import CartService from '../../services/cart.service';
import {handleChange, validateForm} from '../../utils/formValidation';

const Checkout = ({onclick, message, loader}) => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [errors, setErrors] = useState({name:'', address: ''});
  const [check, setCheck] = useState(false);

  const formSubmit = () => {
      if(!check) {
         setErrors({name: 'Required!', address: 'Required!'});
         return;
      }
      if(validateForm(errors)) {
        loader(true);
        CartService.checkoutCart(name, address).then( response => {
           if(response.success) {
             localStorage.removeItem('cart');
             message(response.message);
             loader(false);
           }
        })
      }
  }

  return (
    <React.Fragment>
    <ModalDiv id="modal1" className="modal">
      <div className="modal-content">
        <h5 className="center">Checkout</h5>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="validate"
                  onChange={(e) => handleChange(e, setName, errors, setErrors)}
                  onBlur={() => setCheck(true)}
                />
                <label>Name</label>
                {errors.name.length > 0 && (
                  <span className="helper-text red-text">{errors.name}</span>
                )}
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  id="textarea1"
                  name="address"
                  class="materialize-textarea"
                  onChange={(e) =>
                    handleChange(e, setAddress, errors, setErrors)
                  }
                  onBlur={() => setCheck(true)}
                ></textarea>
                <label>Address</label>
                {errors.address.length > 0 && (
                  <span className="helper-text red-text">{errors.address}</span>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <button
          class="btn waves-effect waves-light"
          type="button"
          name="action"
          onClick={formSubmit}
        >
          Place Order
        </button>
        &nbsp;&nbsp;
        <button
          type="button"
          onClick={onclick}
          className="btn waves-effect waves-green"
        >
          Close
        </button>
      </div>
    </ModalDiv>
    </React.Fragment>
  );
};

export default Checkout;
