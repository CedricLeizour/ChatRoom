// == Import npm
import React from 'react';

// == Import
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';
import './styles.scss';


// == Composant
const ChatRoom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
    <Settings />
  </div>
);

// == Export
export default ChatRoom;
