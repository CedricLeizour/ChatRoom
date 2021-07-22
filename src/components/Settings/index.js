import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputEmail from 'src/containers/Settings/inputEmail';
import InputPassword from 'src/containers/Settings/inputPassword';

import './styles.scss';

const Settings = ({ open, openToggle }) => (
  <div className={classNames('settings', { 'settings--active': open })}>
    <button type="button" onClick={openToggle}>+</button>
    <form>
      <InputEmail />
      <InputPassword />
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
