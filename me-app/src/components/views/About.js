import React, {useState} from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

const TextareaStyle = styled.div`
    textarea {
        width: 100%;
        background-color: rgba(0,0,0,.1);;
        border: 1px solid red;
        padding: 10px;
        outline: none;
        box-sizing: border-box;
        resize: none;
    }
`;

const ButtonStyle = styled.button`
    float: right;
`;

const About = (props) => {
    React.useEffect(() => {
        props.updateTitle('About');
        fetchData();
    }, [props.updateTitle]);


    const [data, setData] = useState(' ');

    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/reports/week/about`);
            const aboutContent = response.data.about;

            setData(aboutContent);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Markdown>{data}</Markdown>  
        </>
    );
};

export default About;