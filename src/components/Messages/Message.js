import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Message = ({ author, message, isOther }) => (
  <div className={classNames('message', { 'message--other': isOther })}>
    <div className="message__author">
      { author }
    </div>
    <div className="message__body">
      { message }
    </div>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isOther: PropTypes.bool,
};

Message.defaultProps = {
  isOther: false,
};

export default Message;
