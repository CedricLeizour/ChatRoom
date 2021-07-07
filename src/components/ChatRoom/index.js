// == Import npm
import React from 'react';

// == Import
import Messages from 'src/containers/Messages';
import Form from 'src/components/Form';
import './styles.scss';

// == Composant
const ChatRoom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
  </div>
);

// == Export
export default ChatRoom;
