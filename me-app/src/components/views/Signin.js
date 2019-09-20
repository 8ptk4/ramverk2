import React from "react";
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormStyle = styled.form`
    button {
        margin-top: 30px;
    }

    label {
        color: black;
        font-weight: bold;
    }

    .secondary_label {
        float: right;
        color: black;
    }

    .arrow {       
        svg {
            margin: 0 auto;
        }
    }

    .arrow:hover {
        cursor: pointer;

        svg {
            color: #E85A50 !important;
        }
    }
`;


const Signin = () => {
    return (
        <>             
            <h1 className="header"> Sign in </h1>
            <hr />
            <div className="content">
                <FormStyle className="row">
                    <div className="col-sm">
                        <label>Username</label>
                        <Form.Control
                            name="name"
                            type="text"
                            autoComplete="off"
                        />
                        <br />
                        <label>Password</label>
                        <Form.Control
                            name="email"
                            type="email"
                            autoComplete="off"
                        />
                        <br />
                    </div>
                    <Button
                        variant="primary"
                        type="submit"
                        block>Submit
                    </Button>
                </FormStyle>
                <a aria-current="page" href="/register">Register</a>
            </div>
        </>
    );
};

export default Signin;
