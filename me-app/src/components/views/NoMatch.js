import React from "react";
import styled from "styled-components";



const Styles = styled.div`
    .pageNotFound {
        font-size: 10em;
        color: #bbb;
    }

    h3 {
        color: #bbb;
    }
`;



const NoMatch = () => (
    <Styles>
        <div class="pageNotFound-wrapper text-center">
            <h1 class="pageNotFound">4o4</h1>
            <h3>Page not found!</h3>
        </div>
    </Styles>
);



export default NoMatch;