import React from 'react';

import './styles.scss';

const Settings = () => (
  <div className="settings">
    <button type="button">+</button>
    <form>
      <input type="email" placeholder="Adresse email" />
      <input type="password" placeholder="Mot de passe" />
      <button type="submit">Envoyer</button>
    </form>
  </div>
);

export default Settings;
