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
  }],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
