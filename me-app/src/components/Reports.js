import React from "react";
import ReactMarkdown from "react-markdown";
import MarkdownFile from "./reports/week/one/Readme.md";
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
  color: grey;
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