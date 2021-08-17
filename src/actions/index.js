// Actions Types
export const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const SEND_LOGIN = 'SEND_LOGIN';
export const SET_PSEUDO = 'SET_PSEUDO';
export const SET_COLOR = 'SET_COLOR';
export const WS_CONNECT = 'WS_CONNECT';

// Actions Creators
export const setMessageValue = (inputValue) => ({
  type: SET_MESSAGE_VALUE,
  inputValue,
});

export const sendNewMessage = () => ({
  type: SEND_NEW_MESSAGE,
});

export const addMessage = (id, author, message) => ({
  type: ADD_MESSAGE,
  id,
  author,
  message,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const setFieldValue = (fieldName, value) => ({
  type: SET_FIELD_VALUE,
  fieldName,
  value,
});

export const sendLogin = () => ({
  type: SEND_LOGIN,
});

export const setPseudo = (pseudo) => ({
  type: SET_PSEUDO,
  pseudo,
});

export const setColor = (color) => ({
  type: SET_COLOR,
  color,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});
