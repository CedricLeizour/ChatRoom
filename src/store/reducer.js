import {
  SET_MESSAGE_VALUE,
  SEND_NEW_MESSAGE,
  TOGGLE_SETTINGS,
  SET_FIELD_VALUE,
  SEND_LOGIN,
  SET_PSEUDO,

} from 'src/actions';

import {
  getHighestId,
} from 'src/selectors';

const INITIAL_STATE = {
  settings: {
    open: false,
    email: '',
    password: '',
    loading: false,
  },
  currentMessage: '',
  pseudo: 'Me',
  messages: [{
    id: 1,
    author: 'Super Chat',
    message: 'Salut Cédric !',
  },
  {
    id: 2,
    author: 'Super Chat',
    message: 'Montre-moi ce que tu sais faire avec React.',
  },
  {
    id: 3,
    author: 'Super Chat',
    message: 'Stp ;)',
  },
  {
    id: 4,
    author: 'Me',
    message: 'Ok, let\'s go !',
  }],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MESSAGE_VALUE:
      return {
        ...state,
        currentMessage: action.inputValue,
      };
    case SEND_NEW_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: (getHighestId(state.messages) + 1),
            author: state.pseudo,
            message: state.currentMessage,
            isOther: false,
          },
        ],
        currentMessage: '',
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          open: !state.settings.open,
        },
      };
    case SET_FIELD_VALUE:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.fieldName]: action.value,
        },
      };
    case SEND_LOGIN:
      return {
        ...state,
        settings: {
          ...state.settings,
          loading: true,
        },
      };
    case SET_PSEUDO:
      return {
        ...state,
        settings: {
          ...state.settings,
          loading: false,
        },
        pseudo: action.pseudo,
      };
    default:
      return state;
  }
};

export default reducer;
