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

    async function test() {
        try {
            const response = await axios.get('http://localhost:8080/pages/about');
            const aboutContent = response.data.about;

            
            setData(aboutContent);
        } catch (e) {
            console.log(e);
        }
    }

    function onResize(event) {
        console.log(event.type); // -> "autosize:resized"
    };

    function handleChange(event) {
        setNewData(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log("OCH DENNA KÖRS!")
        axios.post('http://localhost:8080/pages/about', { data: newData }, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        }).then(res => console.log(res)).catch(e => console.log(e.response));

    };

    console.log("DENNA KÖRS!!")
    test();

    return (
        <>
            { param === "yes" ?
                <TextareaStyle>
                    <form className="row" onSubmit={handleSubmit}>
                        <TextareaAutosize onResize={onResize} onChange={handleChange} defaultValue={data} name="textarea" />
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

/*
<div className="Container" dangerouslySetInnerHTML={{
    __html:
        responseText.data
}}></div>
*/