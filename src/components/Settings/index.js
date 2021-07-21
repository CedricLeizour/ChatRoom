import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Settings = ({ open, openToggle }) => (
  <div className={classNames('settings', { 'settings--active': open })}>
    <button type="button" onClick={openToggle}>+</button>
    <form>
      <input type="email" placeholder="Adresse email" />
      <input type="password" placeholder="Mot de passe" />
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
