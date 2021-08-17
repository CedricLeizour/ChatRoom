//* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import { wsConnect } from 'src/actions';

import './styles.scss';

const ChatRoom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  return (
    <div className="chatroom">
      <Messages />
      <Form />
      <Settings />
    </div>
  );
};

export default ChatRoom;
