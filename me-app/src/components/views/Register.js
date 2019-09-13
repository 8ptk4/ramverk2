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
        display: flex;
        margin: 10px;
        padding: 10px;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
`;

const DatePicker = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FormStyle = styled.form`
    button {
        margin-top: 30px;
    }
`;


const INITIAL_STATE = {
    name: "",
    email: "",
    password: ""
};

const monthsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


const Register = (props) => {
    React.useEffect(() => {
        props.updateTitle('Register');
    }, [props.updateTitle]);

    const { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateAuth);
    
    const getMonth = () => {
        const newDate = new Date();
        const month = newDate.getMonth();

        return parseInt(month) + 1;
    };

    const getDay = () => {
        const newDate = new Date();
        const day = newDate.getDate();

        return parseInt(day);
    };

    const getDaysOfMonth = (currentMonth, currentYear) => {
        const amountOfDays = new Date(currentYear, currentMonth, 0).getDate();
        console.log("Number of days in " + currentMonth
            + "nd month of the year " + currentYear
            + " is " + amountOfDays);

        return amountOfDays;
    };

    const [year, setYear] = useState(2019);
    const [month, setMonth] = useState(getMonth());
    const [day, setDay] = useState(getDay());
    const [isPressed, setIsPressed] = useState(false);

    const turnMonth = (current) => {
        if (current < 1) {
            setMonth(12)
        } else if (current > 12) {
            setMonth(1);
        } else {
            setMonth(current)
        }

        return (current)
    }

    const calculateNextMonth = (extraDay = 0) => {
        switch (month + extraDay) {
            case 11 + extraDay:
                return 12;
                break;
            case 12 + extraDay:
                return 1 + extraDay;
                break;
            default:
                return (month + 1 + extraDay);
        }
    };

    const calculatePreviousMonth = (extraDay = 0) => {
        switch (month - extraDay) {
            case 2 - extraDay:
                return 1;
                break;
            case 1 - extraDay:
                return 12 - extraDay;
                break;
            default:
                return (month - 1 - extraDay);
        }
    };

    const handleLongPress = (value = 1, callback = setYear) => () => {
        callback(prevState => prevState + value);
    };

    const longPressHandlersPlus = useLongPress(handleLongPress(1));
    const longPressHandlersMinus = useLongPress(handleLongPress(-1));

    return (
        <>
            <Section>
                <div className="container">
                    <FormStyle className="row" onSubmit={handleSubmit}>
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
                                <span>
                                    <FontAwesomeIcon 
                                        onClick={() => setYear(year - 1)}
                                        id="leftArrow" 
                                        icon={faChevronLeft}
                                        {...longPressHandlersMinus}
                                    />
                                </span>
                                <span>{(year - 1)}</span>
                                <span className="active">{year}</span>
                                <span>{year + 1}</span>
                                <span>
                                    <FontAwesomeIcon
                                        onClick={() => setYear(year + 1)} 
                                        icon={faChevronRight}
                                        {...longPressHandlersPlus}
                                    />
                                </span>
                            </DateYear>
                            <DateYear>
                                <span>
                                    <FontAwesomeIcon 
                                        icon={faChevronLeft}
                                        onClick={() => turnMonth(month - 1)}
                                    />
                                </span>

                                <span>{calculatePreviousMonth()}</span>
                                <span className="active">{month}</span>
                                <span>{calculateNextMonth()}</span>
   
                                <span>
                                    <FontAwesomeIcon 
                                        icon={faChevronRight}
                                        onClick={() => turnMonth(month + 1)}
                                    />
                                </span>
                            </DateYear>
                            <DateYear>
                                <span>
                                    <FontAwesomeIcon 
                                        icon={faChevronLeft} 
                                    
                                    />
                                </span>
                                <span>{day - 2}</span>
                                <span>{day - 1}</span>
                                <span className="active">{day}</span>
                                <span>{day + 1}</span>
                                <span>{day + 2}</span>
                                <span><FontAwesomeIcon icon={faChevronRight} /></span>
                            </DateYear>
                        </DatePicker>
                        <Button 
                            variant="primary" 
                            type="submit"
                            disabled={isSubmitting}
                            block>Submit
                        </Button>
                    </FormStyle> 
                </div>
            </Section>
        </>
    );
};



export default Register;