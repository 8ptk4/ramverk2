import React, { useState } from "react";
import get from "../../assets/images/putte.png"; 
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { render } from 'react-dom';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

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
    }, [props.updateTitle]);


    const [data, setData] = useState(' ');
    const [newData, setNewData] = useState(' ');

    const query = new URLSearchParams(props.location.search);
    const param = query.get('edit');

    async function fetchData() {
        try {
            const response = await axios.get('https://me-api.putte-karlsson.me/pages/about');
            const aboutContent = response.data.about;

            setData(aboutContent);
        } catch (e) {
            console.log(e);
        }
    }

    function handleChange(e) {
        const newData = e.target.value;

        setNewData(newData);
    };

    function handleSubmit(e) {
        e.preventDefault();

        axios.post('https://me-api.putte-karlsson.me/pages/about', { data: newData }, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        }).then(res => console.log(res)).catch(e => console.log(e.response));

    };

    fetchData();

    return (
        <>
            { param === "yes" ?
                <TextareaStyle>
                    <form className="row" onSubmit={handleSubmit}>
                        <TextareaAutosize onChange={handleChange} defaultValue={data} name="textarea" />
                        <input type="submit" value="Save" />
                    </form>
                </TextareaStyle>
                
            :  
                <Markdown>{data}</Markdown>  
            }
        </>
    );
};

export default About;