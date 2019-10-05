/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import io from 'socket.io-client';
import Modal from 'react-bootstrap/Modal';
import ScrollToBottom from 'react-scroll-to-bottom';

import Messages from './Messages';

const ChatWrapper = styled.div`
  display: flex;
  align-items: center;

  .messages {
    width: 100%;
    height: 300px;

    overflow: auto;
  }

  .test {
    padding: 10px;
  }
`;

const ChatBox = styled.div``;

const MessageBox = styled.div`
  width: 80%;
  padding: 15px;
  .text-field {
    width: 100%;
  }
`;

const ButtonBox = styled.div`
  width: 20%;
  padding: 15px;
  text-align: center;
  .button {
    width: 100%;
    background-color: #0da5b3;
  }

  .button:hover {
    background-color: ;
  }
`;

const Chatter = styled.div`
  box-shadow: 1px -1px 0px #0da5b3, 2px 2px 0px #0da5b3, 3px 3px 0px #0da5b3,
    4px 4px 0px #0da5b3, 5px 5px 0px #0da5b3, 6px 6px 0px #0da5b3;
  border-left: 1px solid #0da5b3;
`;

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('main');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const [show, setShow] = useState(true);

  const ENDPOINT = 'localhost:5000';

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    socket = io(ENDPOINT);
  }, [ENDPOINT]);

  const chatConnect = () => {
    handleClose();

    socket.emit('join', { name, room }, () => {});

    socket.on('message', message => {
      //setMessages(messages => messages.push(message));
      setMessages(oldMessages => oldMessages.concat([message]));
      //setMessages([...messages, message]);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  };
  /*
  React.useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
    });
  }, [message]);
  */
  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  console.log(messages);
  return (
    <>
      <Chatter>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleShow}
        >
          <TextField
            id="standard-name"
            label="Select a chatname"
            className="text-field"
            onChange={event => setName(event.target.value)}
            margin="normal"
          />
          <Button onClick={chatConnect}>Save Changes</Button>
        </Modal>
        <ChatWrapper>
          <ScrollToBottom className="messages">
            <Messages className="test" messages={messages} name={name} />
          </ScrollToBottom>
        </ChatWrapper>
        <ChatWrapper>
          <MessageBox>
            <TextField
              id="standard-name"
              label="Send a message"
              className="text-field"
              value={message}
              onChange={event => setMessage(event.target.value)}
              onKeyPress={event =>
                event.key === 'Enter' ? sendMessage(event) : null
              }
              margin="normal"
            />
          </MessageBox>
          <ButtonBox>
            <Button variant="contained" color="primary" className="button">
              Send
            </Button>
          </ButtonBox>
        </ChatWrapper>
      </Chatter>
    </>
  );
};

export default Chat;
