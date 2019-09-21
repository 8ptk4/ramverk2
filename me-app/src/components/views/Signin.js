import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useFormSignIn from './UseFormSignIn'
import axios from 'axios';
import { tsConstructSignatureDeclaration } from "@babel/types";

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

const INITIAL_STATE = {
    email: '',
    password: ''
};


const Signin = (props) => {

    const { values, handleChange, handleSubmit } = useFormSignIn(INITIAL_STATE, login);
    const [isLoading, setIsLoading] = useState(false);

    function login() {
        if (!isLoading) {
            axios({
                method: 'post',
                url: 'http://localhost:8080/login/',
                data: {
                    email: values.email,
                    password: values.password
                }
            })
                .then(response => {
                    setIsLoading(true);
                    console.log("Response: ", response);
                    localStorage.setItem("token", response.data.hemlighet);
                    localStorage.setItem("username", response.data.username);
                    props.closeMe();
                    props.history.push('/about');
                })
                .catch(error => {
                    setIsLoading(false);
                    console.log(error.response);
                    if (error.response) {
                        console.log("Hej");
                    } else if (error.request) {
                        console.log("hehjehe");
                    } else {
                        console.log("tja");
                    }
                });
        };
    };
    
    return (
        <>             
            <h1 className="header"> Sign in </h1>
            <hr />
            <div className="content">
                <FormStyle className="row" onSubmit={handleSubmit}>
                    <div className="col-sm">
                        <label>Email</label>
                        <Form.Control
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            required
                        />
                        <br />
                        <label>Password</label>
                        <Form.Control
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={values.password}
                            required
                        />
                        <br />
                    </div>
                    <Button
                        type="submit"
                        block>Submit
                    </Button>
                </FormStyle>

                <p>Don't have an account? 
                    <a aria-current="page" href="/register"> Sign up here</a>
                </p>
            </div>
        </>
    );
};

export default Signin;
