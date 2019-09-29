import React, {useState} from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';

const About = (props) => {
    React.useEffect(() => {
        props.updateTitle('About');
        fetchData();
    }, );

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