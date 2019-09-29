import { useState, useEffect } from 'react';
import axios from 'axios';

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        console.log('authenticated');
        const newUser = {
          username: `${values.name}`,
          email: `${values.email}`,
          personalNumber: `${values.year}/${values.month}/${values.day}`,
          password: `${values.password}`
        };

        axios({
          method: 'post',
          url: `${process.env.REACT_APP_BACKEND_URL}/register/`,
          data: newUser
        }).then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );

        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  };
};

export default useFormValidation;
