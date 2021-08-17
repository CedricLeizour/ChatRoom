import {
  WS_CONNECT,
  SEND_NEW_MESSAGE,
  addMessage,
} from 'src/actions';

// On sort la variable du middleware afin de garder sa valeur dedans
// Ce qui fait que si on revient dans le middleware,
// la variable socket existera toujours
let socket = null;
export default (store) => (next) => (action) => {
  const { currentMessage, pseudo } = store.getState();

  switch (action.type) {
    case WS_CONNECT:
      // on créer un canal d'échange avec le serveur
      socket = window.io('http://localhost:3001');
      socket.on('receive_message', (messagePayload) => {
        store.dispatch(
          addMessage(
            messagePayload.id,
            messagePayload.author,
            messagePayload.message,
          ),
        );
      });
      return next(action);
    case SEND_NEW_MESSAGE:
      socket.emit('send_message', {
        author: pseudo,
        message: currentMessage,
      });
      return next(action);
    default:
      return next(action);
  }
};
