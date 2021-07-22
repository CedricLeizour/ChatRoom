import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const InputEmail = ({ value, setEmailValue }) => (
  <input
    type="email"
    placeholder="Adresse email"
    value={value}
    onChange={(event) => setEmailValue(event.target.value)}
  />
);

InputEmail.propTypes = {
  value: PropTypes.string,
  setEmailValue: PropTypes.func,
};

InputEmail.defaultProps = {
  value: '',
  setEmailValue: () => { },
};

export default InputEmail;
