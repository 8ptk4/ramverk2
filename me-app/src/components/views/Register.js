import React, { useState } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useFormValidation from './FormValidation';
import validateAuth from './ValidateAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useLongPress from './testtest';

const Section = styled.section`
    color: red;

    .error-text {
        color: red;
        margin: 0;
        padding: 0;
        position: absolute;
    }
`;

const DateYear = styled.div`
    display: flex;
    justify-content: space-between;

    .active {
        outline: 2px solid #E85A50
    }

    span {
        margin: 10px;
        padding: 10px;
    }
`;

const DatePicker = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


const INITIAL_STATE = {
    name: "",
    email: "",
    password: ""
};



const Register = ({updateTitle}) => {
    React.useEffect(() => {
        updateTitle('Register');
    }, [updateTitle]);

    const { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateAuth);
    //..................................................................
    /*
    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate(); 
    }
    
    var date = new Date();
    var month = 2;
    var year = 2019;
    console.log("Number of days in " + month
        + "nd month of the year " + year
        + " is " + daysInMonth(month, year));
    */
    const backspaceLongPress = useLongPress(props.longPressBackspaceCallback, 500);
    const [year, setYear] = useState(2019);

    //..................................................................

    return (
        <>
            <Section>
                <div className="container">
                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col-sm">
                            <label>Name:</label>
                            <Form.Control 
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                onBlur={handleBlur}
                                className={errors.name && 'error-input'}
                                type="text" 
                                autoComplete="off" 
                                placeholder="Your name" 
                            />
                            {errors.name && <p className="error-text">{errors.name}</p>} 
                            <br />
                            <label>Email:</label>
                            <Form.Control 
                                onChange={handleChange}
                                name="email" 
                                type="email"
                                onBlur={handleBlur}
                                value={values.email}
                                className={errors.email && 'error-input'}
                                autoComplete="off" 
                                placeholder="Your email" 
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                            <br />
                            <label>Password:</label>
                            <Form.Control
                                onChange={handleChange}
                                name="password" 
                                type="password"
                                onBlur={handleBlur}
                                className={errors.password && 'error-input'}
                                value={values.password}
                                placeholder="Your password" 
                            />
                            {errors.password && <p className="error-text">{errors.password}</p>}
                            <br />                     
                        </div>
                        <DatePicker className="col-sm">
                            <span>Datepicker: </span>
                            <DateYear> 
                                <span><FontAwesomeIcon {...backspaceLongPress} id="leftArrow" size="2x" onMouseDown={() => setYear(year - 4)} icon={faChevronLeft} /></span>
                                <span>{year -1}</span>
                                <span className="active">{year}</span>
                                <span>{year +1}</span>
                                <span><FontAwesomeIcon size="2x" onClick={() => setYear(year + 1)} icon={faChevronRight} /></span>
                            </DateYear>
                            <DateYear>
                                <span><FontAwesomeIcon icon={faChevronLeft} /></span>
                                <span>Jan</span>
                                <span>Feb</span>
                                <span className="active">Mar</span>
                                <span>Apr</span>
                                <span>May</span>
                                <span><FontAwesomeIcon icon={faChevronRight} /></span>
                            </DateYear>
                            <DateYear>
                                <span><FontAwesomeIcon icon={faChevronLeft} /></span>
                                <span>01</span>
                                <span>02</span>
                                <span className="active">03</span>
                                <span>04</span>
                                <span>05</span>
                                <span><FontAwesomeIcon icon={faChevronRight} /></span>
                            </DateYear>
                        </DatePicker>
                        <Button 
                            variant="primary" 
                            type="submit"
                            disabled={isSubmitting}
                            block>Submit
                        </Button>
                    </form> 
                </div>
            </Section>
        </>
    );
};



export default Register;