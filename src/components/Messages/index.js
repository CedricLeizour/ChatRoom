import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import './styles.scss';

const Messages = ({ messages }) => (
  <div className="messages">
    {messages.map((message) => (
      <Message {...message} key={message.id} />
    ))}
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Messages.defaultProps = {
  messages: [],
};

export default Messages;
