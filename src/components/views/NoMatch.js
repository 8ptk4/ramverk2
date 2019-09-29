import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .pageNotFound {
    font-size: 10em;
    color: #bbb;
    text-align: center;
  }

  h3 {
    color: #bbb;
    text-align: center;
  }
`;

const NoMatch = ({ updateTitle }) => {
  React.useEffect(() => {
    updateTitle('404 - Page not found');
  }, [updateTitle]);

  return (
    <>
      <Section>
        <h1 className="pageNotFound">4o4</h1>
        <h3>Page not found!</h3>
      </Section>
    </>
  );
};

export default NoMatch;
