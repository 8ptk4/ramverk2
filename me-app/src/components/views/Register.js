import React from "react";
import styled from "styled-components";
import DatePicker from '../Datepicker';



const Section = styled.section`

`;



const Register = ({updateTitle}) => {
    React.useEffect(() => {
        updateTitle('Register');
    }, [updateTitle]);

    return (
        <>
            <Section>
            Under construction...
            </Section>
        </>
    );
};



export default Register;