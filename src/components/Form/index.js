import React from 'react';
import { Send } from 'react-feather';
import './styles.scss';

const Form = ({}) => (
  <form className="form">
  <input 
  type="text" 
  className="form__input" 
  placeholder="Saisissez votre message"
  />
  <button type submit="submit" className="form__submit">
    <Send size={32} />
  </button>
  </form>
);

export default Form;
