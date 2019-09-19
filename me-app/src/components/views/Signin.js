import React from "react";
import styled from 'styled-components';

const Modal = styled.div`
    font-size: 12px;
    color: grey;
    
    .header {
        width: 100%;
        border-bottom: 1px solid gray;
        font-size: 18px;
        text-align: center;
        padding: 5px;
    }
    
    .content {
        width: 100%;
        padding: 10px 5px;
    }

    .actions {
        width: 100%;
        padding: 10px 5px;
        margin: auto;
        text-align: center;
    }

    .close {
        cursor: pointer;
        position: absolute;
        display: block;
        padding: 2px 5px;
        line-height: 20px;
        right: -10px;
        top: -10px;
        font-size: 24px;
        background: #ffffff;
        border-radius: 18px;
        border: 1px solid #cfcece;
    }
`;


const Signin = () => {
    return (
        <>
            {close => (                        
                <Modal>
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    <div className="header"> Modal Title </div>
                    <div className="content">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Signin;
