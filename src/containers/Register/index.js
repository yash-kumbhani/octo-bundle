import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import {handleChange, validateForm} from '../../utils/formValidation';
import Loader from '../../components/PreLoader';

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setPasswordConfirmation] = useState();
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [check, setCheck] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const formSubmit = async (event) => {
    event.preventDefault();
    if(!check) {
      setErrors({password_confirmation: 'Required!',name: 'Required!', email: 'Required!', password: 'Required!'});
      return;
    }
    if (validateForm(errors)) {
      setLoading(true);
      await AuthService.register(
        name,
        email,
        password,
        password_confirmation
      ).then((response) => {
        setRedirect(true);
      }).catch(error => {

      });
      setLoading(false);
    }
  };

  if(redirect) {
    return <Redirect to="login" />
  }

  return (
    <div className="container">
      <div className="box">
        <h5 className="center">Login</h5>
        <Loader active={loading} />
        <div className="container">
          <div className="row">
            <form method="post" onSubmit={formSubmit}>
              <div className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="validate"
                      onChange={(e) =>
                        handleChange(e, setName, errors, setErrors)
                      }
                      onBlur={() => setCheck(true)}
                    />
                    <label>Name</label>
                    {errors.name.length > 0 && (
                      <span className="helper-text red-text">
                        {errors.name}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="validate"
                      onChange={(e) =>
                        handleChange(e, setEmail, errors, setErrors)
                      }
                      onBlur={() => setCheck(true)}
                    />
                    {errors.email.length > 0 && (
                      <span className="helper-text red-text">
                        {errors.email}
                      </span>
                    )}
                    <label>Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="validate"
                      onChange={(e) =>
                        handleChange(e, setPassword, errors, setErrors)
                      }
                      onBlur={() => setCheck(true)}
                    />
                    {errors.password.length > 0 && (
                      <span className="helper-text red-text">
                        {errors.password}
                      </span>
                    )}
                    <label>Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="confirm_password"
                      name="password_confirmation"
                      type="password"
                      className="validate"
                      onChange={(e) =>
                        handleChange(
                          e,
                          setPasswordConfirmation,
                          errors,
                          setErrors,
                          password
                        )
                      }
                      onBlur={() => setCheck(true)}
                    />
                    <label>Confirm Password</label>
                    {errors.password_confirmation.length > 0 && (
                      <span className="helper-text red-text">
                        {errors.password_confirmation}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
