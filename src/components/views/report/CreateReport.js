import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import { Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ListReports from './ListReports';
import axios from 'axios';

const Section = styled.section`
  textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    resize: none;
    border: 1px solid grey;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  textarea:focus {
    border-radius: 5px !important;
    outline: none;
    border: 1px solid #2999a3 !important;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .report_list {
    border-right: 1px solid #c8c8c8;
  }

  .form_field {
    border: 1px solid grey;
    outline-offset: none !important;
    margin-bottom: 10px;
  }

  .form_field:focus {
    box-shadow: none !important;
    border: 1px solid #2999a3;
  }

  .btn {
    width: 50%;
    background-color: rgb(41, 153, 163);
    color: white;
    border: none;
  }

  button:hover {
    background-color: rgb(41, 153, 163, 0.8);
  }

  h6 {
    color: #e85a50;
    font-weight: bold;
  }
`;

const CreateReport = props => {
  React.useEffect(() => {
    props.updateTitle('Create report');
  });

  const INITIAL_VALUES = {
    title: '',
    content: ''
  };

  const handleContentChange = e => {
    INITIAL_VALUES.content = e.target.value;
  };

  const handleTitleChange = e => {
    INITIAL_VALUES.title = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/reports/`,
        {
          title: INITIAL_VALUES.title,
          content: INITIAL_VALUES.content
        },
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        }
      )
      .then(res => {
        props.history.push(`/reports/week/${INITIAL_VALUES.title}`);
        window.location.reload();
      })
      .catch(e => console.log(e.response));
  };

  return (
    <>
      <Section>
        <Row>
          <Col className="report_list" md={3}>
            <ListReports />
          </Col>
          <Col md={{ span: 8, offset: 1 }}>
            <h3>Create new report</h3>
            <form className="row" onSubmit={handleSubmit}>
              <label>Title</label>
              <Form.Control
                className="form_field"
                name="name"
                onChange={handleTitleChange}
                type="text"
                autoComplete="off"
              />
              <label>Content</label>
              <TextareaAutosize
                onChange={handleContentChange}
                name="textarea"
              />
              <Button className="btn" variant="primary" type="submit" block>
                Create
              </Button>
            </form>
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default CreateReport;
