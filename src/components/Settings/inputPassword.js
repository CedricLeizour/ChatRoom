import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputPassword = ({ value, setPasswordValue }) => (
  <input
    type="password"
    placeholder="Mot de passe"
    password={value}
    onChange={(event) => setPasswordValue(event.target.value)}
  />
);

InputPassword.propTypes = {
  value: PropTypes.string,
  setPasswordValue: PropTypes.func,
};

InputPassword.defaultProps = {
  value: '',
  setPasswordValue: () => { },
};

export default InputPassword;
