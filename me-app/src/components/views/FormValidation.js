import { useState, useEffect } from 'react';

const useFormValidation = (initialState, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;

            if (noErrors) {
                alert(`
                    Authenticated! Here are the values!
                    
                    Name: ${values.name}
                    Email: ${values.email}
                    Password: ${values.password}
                    Birtday: ${values.year}/${values.month}/${values.day}
                `);
                setSubmitting(false);
            } else {
                setSubmitting(false);
            }
        }
    }, [errors, isSubmitting, values]);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleBlur = () => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
    };


    return { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting };
}

export default useFormValidation;