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
                {props.location.pathname === "/about" ?
                    <button onClick={() => props.history.push('/about?edit=yes')} className="edit">EDIT</button>
                : "" }
            </LoggedInContainer> 
        </>
    );
};

export default withRouter(LoggedIn);

/*
<div className="Container" dangerouslySetInnerHTML={{
    __html:
        responseText.data
}}></div>
*/