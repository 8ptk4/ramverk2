import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';

const Section = styled.section`
  img {
    border: 2px solid grey;
    width: 350px;
    float: right;
  }
  
  .section-wrapper {
    padding: 10px;
    color: grey;
  }

  h1 {
    color: #E65950;
  }

  blockquote {
    border-left: 7px solid lightgrey;
    background: rgba(204,204,204,0.2);
  }

  blockquote p {
    padding: 10px;
  }
`;



const Reports = (props) => {
  React.useEffect(() => {
    props.updateTitle(props.match.params.title);
    fetchData();
  }, [props.match.params.title]);

  const [data, setData] = useState(' ');

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:8080/reports/week/${props.match.params.title}`);
      const aboutContent = response.data.about;

      setData(aboutContent);
    } catch (e) {
    }
  }
  console.log(data);
  return (
    <>
      <Section>
        <Markdown>{data}</Markdown>
      </Section>
    </>
  );
};



export default Reports;