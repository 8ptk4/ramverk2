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
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 

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

    label {
        color: black;
        font-weight: bold;
    }

    .secondary_label {
        float: right;
        color: black;
    }
`;


const INITIAL_STATE = {
    name: "",
    email: "",
    password: ""
};


const Register = (props) => {
    React.useEffect(() => {
        props.updateTitle('Register');
    }, [props.updateTitle]);

    const { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateAuth);
    
    const newDate = new Date();

    const getMonth = () => {
        const month = newDate.getMonth();

        return parseInt(month) + 1;
    };


 
    const getDay = () => {
        const day = newDate.getDate();

        return parseInt(day);
    };



    const getDaysOfMonth = (currentMonth, currentYear) => {
        const amountOfDays = new Date(currentYear, currentMonth, 0).getDate();

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

    const getMonthName = (monthNr) => {
        const monthArray = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        return monthArray[monthNr - 1];
    }

    

    const turnDay = (current, total) => {
        total = getDaysOfMonth(month, year);
        if (current < 1) {
            setDay(total)
        } else if (current > total) {
            setDay(1);
        } else {
            setDay(current)
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

    

    const calculateNextDay = (extraDay = 0) => {
        const total = getDaysOfMonth(month, year);
        console.log("Day: ", day)
        console.log(total)
        switch (day + extraDay) {
            case total - 1 + extraDay:
                return total;
                break;
            case total + extraDay:
                return 1 + extraDay;
                break;
            default:
                return (day + 1);
        }
    };

    const calculatePreviousDay = (extraDay = 0) => {
        const total = getDaysOfMonth(month, year);

        switch (day - extraDay) {
            case 2 - extraDay:
                return 1;
                break;
            case 1 - extraDay:
                return total - extraDay;
                break;
            default:
                return (day - 1);
        }
    };


    const handleLongPress = (value = 1, callback = setYear) => () => {
        callback(prevState => prevState + value);
    };

    const longPressHandlersPlus = useLongPress(handleLongPress(1));
    const longPressHandlersMinus = useLongPress(handleLongPress(-1));
    const longPressHandlersPlusDay = useLongPress(handleLongPress(1, setDay));
    const longPressHandlersMinusDay = useLongPress(handleLongPress(-1, setDay));

    return (
        <>
            <Section>
                <div className="container">
                    <FormStyle className="row" onSubmit={handleSubmit}>
                        <div className="col-sm">
                            <label>Choose a Name</label>
                            <Form.Control 
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                onBlur={handleBlur}
                                className={errors.name && 'error-input'}
                                type="text" 
                                autoComplete="off"
                            />
                            {errors.name && <p className="error-text">{errors.name}</p>} 
                            <br />
                            <label>Email Address</label>
                            <Form.Control 
                                onChange={handleChange}
                                name="email" 
                                type="email"
                                onBlur={handleBlur}
                                value={values.email}
                                className={errors.email && 'error-input'}
                                autoComplete="off"
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                            <br />
                            <label>Choose a Password</label><span className="secondary_label">Min. 6 characters</span>
                            <Form.Control
                                onChange={handleChange}
                                name="password" 
                                type="password"
                                onBlur={handleBlur}
                                className={errors.password && 'error-input'}
                                value={values.password}
                            />
                            {errors.password && <p className="error-text">{errors.password}</p>}
                            <br />                     
                        </div>
                        <DatePicker className="col-sm">
                            <label>Date of Birth</label>
                            <DateYear>
                                <span>
                                    <FontAwesomeIcon 
                                        onClick={() => setYear(year - 1)}
                                        id="leftArrow"
                                        size="2x"
                                        icon={faChevronLeft}
                                        {...longPressHandlersMinus}
                                    />
                                </span>
                                <span>{(year - 1)}</span>
                                <span className="active">{year}</span>
                                <span>{year + 1}</span>
                                <span>
                                    <FontAwesomeIcon
                                        size="2x"
                                        onClick={() => setYear(year + 1)} 
                                        icon={faChevronRight}
                                        {...longPressHandlersPlus}
                                    />
                                </span>
                            </DateYear>
                            <DateYear>
                                <span>
                                    <FontAwesomeIcon
                                        size="2x"
                                        icon={faChevronLeft}
                                        onClick={() => turnMonth(month - 1)}
                                    />
                                </span>

                                <span>{getMonthName(calculatePreviousMonth())}</span>
                                <span className="active">{getMonthName(month)}</span>
                                <span>{getMonthName(calculateNextMonth())}</span>
   
                                <span>
                                    <FontAwesomeIcon 
                                        size="2x"
                                        icon={faChevronRight}
                                        onClick={() => turnMonth(month + 1)}
                                    />
                                </span>
                            </DateYear>
                            <DateYear>
                                <span>
                                    <FontAwesomeIcon
                                        size="2x"
                                        icon={faChevronLeft} 
                                        onClick={() => turnDay(day - 1)}
                                        {...longPressHandlersMinusDay}
                                    />
                                </span>
                                <span>{calculatePreviousDay()}</span>
                                <span className="active">{day}</span>
                                <span>{calculateNextDay()}</span>
                                <span>
                                    <FontAwesomeIcon 
                                        size="2x"
                                        icon={faChevronRight}
                                        onClick={() => turnDay(day + 1)}
                                        {...longPressHandlersPlusDay}
                                    />
                                </span>
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