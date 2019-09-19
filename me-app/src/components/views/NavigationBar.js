import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faHome, faAddressCard, faListAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Popup from "reactjs-popup";
import Signin from "./Signin";


const Styles = styled.div`
    .navbar {
        background-color:rgba(255, 255, 255, 0.8);
        border-bottom: 1px solid white;
    }

    .navbar-brand, .navbar-nav, .nav-link {
        color: rgba(0, 0, 0, 0.5); !important;

        &:hover {
            color: white !important;
        }
    }
`;


const Modal = styled.div`
    font-size: 12px;
    color: grey;
    width: none !important; 
    
    .header {
        width: 100%;
        padding: 10px;
        color: #E65950;
        text-align: left;
    }

    .popup-content {
        width: 10% !important;
    }

    .content {
        padding: 10px 5px;
        margin: 0 auto;
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

    button {
        margin: 15px;
    }

    label {
        width: 100%;
        text-align: left;
        color: black;
        font-weight: bold;
    }
`;



const NavigationBar = () => (
    <>
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faHome} />
                    <span /> Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link href="/about">
                                <FontAwesomeIcon icon={faAddressCard} />
                                <span /> About    
                            </Nav.Link>
                        </Nav.Item>
                        <NavDropdown title={<span><FontAwesomeIcon icon={faListAlt} /> Reports</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/reports/week/1">
                                Readme
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/reports/week/2">
                                Inspiration
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link href="/register">
                                <FontAwesomeIcon icon={faCashRegister} />
                                <span /> Register
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/playground">
                                <FontAwesomeIcon icon={faReact} />
                                <span /> Playground
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Popup
                                trigger={
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faSignInAlt} />
                                        <span /> Sign in
                                    </Nav.Link>
                                } 
                                modal
                                closeOnDocumentClick>
                                {close => (
                                    <Modal>
                                        <button className="close" onClick={close}>
                                            &times;
                                        </button>
                                        <Signin />
                                    </Modal>
                                )}
                            </Popup>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    </>
)

export default NavigationBar;