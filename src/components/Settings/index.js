import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputField from 'src/containers/Settings/InputField';

import './styles.scss';

const Settings = ({ open, openToggle }) => (
  <div className={classNames('settings', { 'settings--active': open })}>
    <button type="button" onClick={openToggle}>+</button>
    <form>
      <InputField
        inputName="email"
        type="email"
        placeholder="Adresse email"
      />
      <InputField
        inputName="password"
        type="password"
        autoComplete="new-password"
        placeholder="Mot de passe"
      />
      <button type="submit">Envoyer</button>
    </form>
  </div>
);

Settings.propTypes = {
  open: PropTypes.bool,
  openToggle: PropTypes.func,
};

Settings.defaultProps = {
  open: false,
  openToggle: () => { },
};

export default Settings;
