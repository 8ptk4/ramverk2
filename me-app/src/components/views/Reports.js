import React from "react";
import ReactMarkdown from "react-markdown";
import MarkdownFile from "../README.md";
import styled from "styled-components";


const Styles = styled.div`
section {
  width: 800px;
  margin: 0 auto;

  img {
      border: 2px solid grey;
  }
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



const Reports = () => {
  const [markdown, setMarkdown] = React.useState("");

  React.useEffect(() => {
    fetch(MarkdownFile)
      .then(res => res.text())
      .then(text => setMarkdown(text))
  });

  return (
    <Styles>
      <ReactMarkdown source={markdown}/>
    </Styles>
  );
}



export default Reports;