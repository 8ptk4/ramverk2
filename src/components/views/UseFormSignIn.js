import { useState } from 'react';

const useFormSignIn = (initialstate, callback) => {
  const [values, setValues] = useState(initialstate);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
    console.log('HANDLE SUBMIT');
  };

  const handleChange = event => {
    event.persist();
    console.log(values);
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useFormSignIn;
