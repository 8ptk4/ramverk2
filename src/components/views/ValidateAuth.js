export default function validateAuth(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'Required Email';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.name) {
        errors.name = 'Required Name';
    }

    // Password Errors
    if (!values.password) {
        errors.password = 'Required Password';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (!values.year) {
        errors.year = 'Required Year';
    } else if (values.year > 2019) {
        errors.year = 'Year cant be higher than 2019';
    }

    if (!values.day) {
        errors.day = 'Required Day';
    }

    if (!values.month) {
        errors.month = 'Required month';
    }

    return errors;
}