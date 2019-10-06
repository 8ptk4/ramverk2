import React from 'react';
import Message from './Message';
import styled from 'styled-components';

const MessagesDiv = styled.div`
  padding: 10px;
`;

const Messages = ({ messages, name }) => (
  <MessagesDiv>
    {messages.map((message, i) => (
      <Message key={i} message={message} name={name} />
    ))}
  </MessagesDiv>
);

export default Messages;
