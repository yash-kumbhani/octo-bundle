const validEmailRegex = RegExp(
  /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i
);

export const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

export const handleChange = (event, setFunction, errors, setErrors, match = '') => {
  event.preventDefault();
  const {name, value} = event.target;
  setFunction(value);

  switch (name) {
    case 'email':
      errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
      break;
    case 'name':
      errors.name =
        value.length < 5 ? 'Name must be 5 characters long!' : '';
      break;
    case 'password':
      errors.password =
          value.length < 8 ? 'Password must be 8 characters long!' : '';
      break;
    case 'password_confirmation':
      errors.password_confirmation =
        value.length < 8 ? 'Password must be 8 characters long!' : '';
      errors.password_confirmation = value !== match ? 'Confirm password is not match with password!' : '';
      break;
    case 'address':
      errors.address = value.trim() === '' ? 'Required field!' : '';
      break;
    default:
      break;
  }
  setErrors(errors);
};
