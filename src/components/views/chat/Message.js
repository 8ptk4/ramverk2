import React from 'react';
import styled from 'styled-components';

const OwnMessage = styled.div`
  width: 30%;
  .message-name {
    color: #94c2ed;
  }
`;

const OtherMessage = styled.div`
  width: 70%;
  .message-name {
    color: #87bd71;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <Wrapper>
      <OwnMessage>
        <span className="date-time">[20:01.08]</span> &nbsp; &nbsp;
        <span className="message-name">{trimmedName}</span>&nbsp; &nbsp;
      </OwnMessage>
      <div>
        <span className="text">{text}</span>
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <OwnMessage>
        <span className="date-time">[20:01.08]</span> &nbsp; &nbsp;
        <span className="message-name">{user}</span>&nbsp; &nbsp;
      </OwnMessage>
      <div>
        <span className="text">{text}</span>
      </div>
    </Wrapper>
  );
};

export default Message;
