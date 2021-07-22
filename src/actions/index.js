// Actions Types
export const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';
export const SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE';

// Actions Creators
export const setMessageValue = (inputValue) => ({
  type: SET_MESSAGE_VALUE,
  inputValue,
});

export const sendNewMessage = () => ({
  type: SEND_NEW_MESSAGE,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const setEmailValue = (value) => ({
  type: SET_EMAIL_VALUE,
  value,
});

export const setPasswordValue = (value) => ({
  type: SET_PASSWORD_VALUE,
  value,
});
