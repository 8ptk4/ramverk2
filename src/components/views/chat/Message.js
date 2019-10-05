/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const OwnMessage = styled.div`
  word-wrap: break-word;
  .message-name {
    color: #e85a50;
  }

  .date-time {
    font-size: 1em;
    color: #999;
  }
`;

const OtherMessage = styled.div`
  word-wrap: break-word;
  .message-name {
    color: #05a2b1;
  }

  .date-time {
    font-size: 1em;
    color: #999;
  }
`;

const Wrapper = styled.div`
  display: flex;
  .row {
    width: 100%;
  }
`;

const ChatText = styled.div`
  padding-left: 15px;
  height: auto;

  .text {
    word-break: break-all;
  }
`;

const Message = ({ message: { user, text, time }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  console.log(user);

  return isSentByCurrentUser ? (
    <Wrapper>
      <Row className="row">
        <Col
          md={{
            span: 3
          }}
        >
          <OwnMessage>
            <span className="date-time">
              {user !== '*' ? '(' + time + ')' : null}
            </span>
            &nbsp; &nbsp;
            <span className="message-name">
              {user !== '*' ? '<' + trimmedName + '>' : user}
            </span>
          </OwnMessage>
        </Col>
        <Col
          md={{
            span: 9
          }}
        >
          <ChatText>
            <span className="text">{text}</span>
          </ChatText>
        </Col>
      </Row>
    </Wrapper>
  ) : (
    <Wrapper>
      <Row className="row">
        <Col
          md={{
            span: 3
          }}
        >
          <OtherMessage>
            <span className="date-time">
              {user !== '*' ? '(' + time + ')' : null}
            </span>
            &nbsp; &nbsp;
            <span className="message-name">
              {user !== '*' ? '<' + user + '>' : user}
            </span>
          </OtherMessage>
        </Col>
        <Col
          md={{
            span: 9
          }}
        >
          <ChatText>
            <span className="text">{text}</span>
          </ChatText>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Message;
