import {
  SET_MESSAGE_VALUE,
  SEND_NEW_MESSAGE,
} from 'src/actions';

import {
  getHighestId,
} from 'src/selectors';

const INITIAL_STATE = {
  currentMessage: '',
  messages: [{
    id: 1,
    author: 'Super Chat',
    message: 'Salut, ça va ?',
    isOther: true,
  },
  {
    id: 2,
    author: 'Super Chat',
    message: 'Salut, t\'as pas des super croquettes ?',
    isOther: true,
  },
  {
    id: 3,
    author: 'Super Chat',
    message: 'Stp !',
    isOther: true,
  },
  {
    id: 4,
    author: 'Me',
    message: 'Je peux pas, j\'ai un chat dans la gorge !',
    isOther: false,
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
            author: 'Me',
            message: state.currentMessage,
            isOther: false,
          },
        ],
        currentMessage: '',
      };
    default:
      return state;
  }
};

export default reducer;
