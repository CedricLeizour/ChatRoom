/* eslint-disable arrow-body-style */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from 'src/containers/Messages/Message';
import notificationMP3 from 'src/assets/mp3/notification.mp3';

import './styles.scss';

const Messages = ({ messages, pseudo }) => {
  const messagesContainer = useRef(null);
  useEffect(() => {
    messagesContainer.current.scrollTo(0, messagesContainer.current.scrollHeight);
  }, [messages]);

  useEffect(() => {
    // On regarde si y'a des message et que
    // le dernier message nous appartient
    if (
      messages.length
      && messages[messages.length - 1].author !== pseudo
    ) {
      // Si c'est le cas on joue le son s inon on fait rien
      const audioElement = new Audio(notificationMP3);
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }, [messages]);

  return (
    <div className="messages" ref={messagesContainer}>
      {messages.map((message) => (
        <Message {...message} key={message.id} />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string,
    }),
  ),
  pseudo: PropTypes.string.isRequired,
};

Messages.defaultProps = {
  messages: [],
};

export default Messages;
