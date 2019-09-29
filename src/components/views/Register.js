import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useFormValidation from './FormValidation';
import validateAuth from './ValidateAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import useLongPress from './testtest';

const Section = styled.section`
  color: red;

  .error-text {
    color: red;
    margin: 0;
    padding: 0;
    position: absolute;
  }

  .error {
    color: red;
    margin: 0;
    padding: 0;
    text-align: center;
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
        box-shadow: 0 0 10px #E85A50;
        background: #E85A50;
        color: white;
        font-size: 1.2em;
    }

    span {
        display: flex;
        width: 25%;
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

  .arrow {
    svg {
      margin: 0 auto;
    }
  }

  .arrow:hover {
    cursor: pointer;

    svg {
      color: #e85a50 !important;
    }
  }
`;

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  year: '',
  month: '',
  day: ''
};

const Register = ({ updateTitle }) => {
  React.useEffect(() => {
    updateTitle('Register');
  }, [updateTitle]);

  /**
   * Get todays month number.
   *
   * @return {number} month number.
   */
  const getMonth = () => {
    const month = newDate.getMonth();

    return parseInt(month) + 1;
  };

  /**
   * Get todays day number.
   *
   * @return {number} day number.
   */
  const getDay = () => {
    const day = newDate.getDate();

    return parseInt(day);
  };

  const newDate = new Date();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateAuth);
  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(getMonth());
  const [day, setDay] = useState(getDay());

  /**
   * Get how many days there are in a specified month.
   *
   * @param {number} currentMonth
   * @param {number} currentYear
   * @return {number} amount of days.
   */
  const getDaysOfMonth = (currentMonth, currentYear) => {
    const amountOfDays = new Date(currentYear, currentMonth, 0).getDate();

    return amountOfDays;
  };

  /**
   *
   *
   * @param {*} current
   * @return {}
   */
  const turnMonth = current => {
    if (current < 1) {
      setMonth(12);
    } else if (current > 12) {
      setMonth(1);
    } else {
      setMonth(current);
    }

    return current;
  };

  /**
   * Convert the current month number into its name.
   *
   * @param {number} monthNr Number of the current month.
   * @return {string} Current month name.
   */
  const getMonthName = monthNr => {
    const monthArray = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];

    return monthArray[monthNr - 1];
  };

  /**
   *
   *
   * @param {*} current
   * @param {*} total
   * @return {}
   */
  const turnDay = (current, total) => {
    total = getDaysOfMonth(month, year);
    if (current < 1) {
      setDay(total);
    } else if (current > total) {
      setDay(1);
    } else {
      setDay(current);
    }
    return current;
  };

  /**
   *
   * @param {*} extraDay
   */
  const calculateNextMonth = (extraDay = 0) => {
    switch (month + extraDay) {
      case 11 + extraDay:
        return 12;
      case 12 + extraDay:
        return 1 + extraDay;
      default:
        return month + 1 + extraDay;
    }
  };

  /**
   *
   * @param {*} extraDay
   */
  const calculatePreviousMonth = (extraDay = 0) => {
    switch (month - extraDay) {
      case 2 - extraDay:
        return 1;
      case 1 - extraDay:
        return 12 - extraDay;
      default:
        return month - 1 - extraDay;
    }
  };

  /**
   *
   * @param {*} extraDay
   */
  const calculateNextDay = (extraDay = 0) => {
    const total = getDaysOfMonth(month, year);

    switch (day + extraDay) {
      case total - 1 + extraDay:
        return total;
      case total + extraDay:
        return 1 + extraDay;
      default:
        return day + 1;
    }
  };

  /**
   *
   * @param {*} extraDay
   */
  const calculatePreviousDay = (extraDay = 0) => {
    const total = getDaysOfMonth(month, year);

    switch (day - extraDay) {
      case 2 - extraDay:
        return 1;
      case 1 - extraDay:
        return total - extraDay;
      default:
        return day - 1;
    }
  };

  /**
   *
   * @param {*} value
   * @param {*} callback
   */
  const handleLongPress = (value = 1, callback = setYear) => () => {
    callback(prevState => prevState + value);
  };

  values.year = year;
  values.month = month;
  values.day = day;

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
              <label>Choose a Password</label>
              <span className="secondary_label">Min. 6 characters</span>
              <Form.Control
                onChange={handleChange}
                name="password"
                type="password"
                onBlur={handleBlur}
                className={errors.password && 'error-input'}
                value={values.password}
              />
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
              <br />
            </div>
            <DatePicker className="col-sm">
              <label>Date of Birth</label>
              <DateYear>
                <span
                  className="arrow"
                  onClick={() => setYear(year - 1)}
                  {...longPressHandlersMinus}
                >
                  <FontAwesomeIcon
                    id="leftArrow"
                    size="2x"
                    icon={faChevronLeft}
                  />
                </span>
                <span>{year - 1}</span>
                <span className="active">{year}</span>
                <span>{year + 1}</span>
                <span
                  className="arrow"
                  onClick={() => setYear(year + 1)}
                  {...longPressHandlersPlus}
                >
                  <FontAwesomeIcon size="2x" icon={faChevronRight} />
                </span>
              </DateYear>
              {errors.year && <span className="error">{errors.year}</span>}
              <DateYear>
                <span className="arrow" onClick={() => turnMonth(month - 1)}>
                  <FontAwesomeIcon size="2x" icon={faChevronLeft} />
                </span>

                <span>{getMonthName(calculatePreviousMonth())}</span>
                <span className="active">{getMonthName(month)}</span>
                <span>{getMonthName(calculateNextMonth())}</span>

                <span className="arrow" onClick={() => turnMonth(month + 1)}>
                  <FontAwesomeIcon size="2x" icon={faChevronRight} />
                </span>
              </DateYear>
              <DateYear>
                <span
                  className="arrow"
                  onClick={() => turnDay(day - 1)}
                  {...longPressHandlersMinusDay}
                  value={values.email}
                >
                  <FontAwesomeIcon size="2x" icon={faChevronLeft} />
                </span>
                <span>{calculatePreviousDay()}</span>
                <span className="active">{day}</span>
                <span>{calculateNextDay()}</span>
                <span
                  className="arrow"
                  onClick={() => turnDay(day + 1)}
                  {...longPressHandlersPlusDay}
                >
                  <FontAwesomeIcon size="2x" icon={faChevronRight} />
                </span>
              </DateYear>
            </DatePicker>

            <Button
              id="button"
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              block
            >
              Submit
            </Button>
          </FormStyle>
        </div>
      </Section>
    </>
  );
};

export default Register;
