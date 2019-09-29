import React, { useState } from "react";
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const LoggedInContainer = styled.div`
    background-color:rgba(255, 255, 255, 0.8);
    color: black;
    text-align: left;
    padding: 5px;
    padding-left: 10px;
    border-bottom: 1px solid #E65950;

    .logged-container {
        
        width: 100%;
    }

    .edit {
        float: right;
        padding-right: 20px;
    }
`;

const LoggedIn = (props) => {
    return (
        <>  
            <LoggedInContainer className="logged-container">
                <span>Logged in as: {localStorage.getItem('username')}</span>
            </LoggedInContainer> 
        </>
    );
};

export default withRouter(LoggedIn);