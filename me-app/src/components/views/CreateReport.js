import React from "react";
import styled from "styled-components";
import TextareaAutosize from 'react-autosize-textarea';
import { Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


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
        border: 1px solid #E85A50 !important;
    }

    ul {
        list-style-type: none;
    }

    .report_list {
        border-right: 1px solid black;
    }

    .form_field {
        border: 1px solid grey;
        outline-offset: none !important;
        margin-bottom: 10px;
    }

    .form_field:focus {
        box-shadow: none !important;
        border: 1px solid #E85A50;
    }

    .btn {
        width: 50%;
    }
`;

const ReportList = styled.div`
  display: flex;
  flex-direction: column;
  span {
      display: block;
  }
`;



const CreateReport = ({ updateTitle }) => {
    React.useEffect(() => {
        updateTitle('Create Report');
    }, [updateTitle]);

    const data = "testtest";

    const handleChange = () => {

    };

    const handleSubmit = () => {

    };

    return (
        <>
            <Section>
                <Row>
                    <Col className="report_list" md={3}>
                        <h6>Created Reports</h6>
                        <ul>
                            <li>report 1</li>
                            <li>report 2</li>
                            <li>report 3</li>
                            <li>report 4</li>
                        </ul>

                    </Col>
                    <Col md={{ span: 8, offset: 1 }}>
                        <h3>New report</h3>
                        <form className="row" onSubmit={handleSubmit}>
                            <label>Title</label>
                            <Form.Control
                                className="form_field"
                                name="name"
                                type="text"
                                autoComplete="off"
                            />
                            <label>Content</label>
                            <TextareaAutosize onChange={handleChange} defaultValue={data} name="textarea" />
                            <Button
                                className="btn"
                                variant="primary"
                                type="submit"
                                block>
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