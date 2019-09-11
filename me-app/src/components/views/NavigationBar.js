import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faHome, faAddressCard, faListAlt } from '@fortawesome/free-solid-svg-icons';



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
                        <Nav.Item>
                            <Nav.Link href="/register">
                                <FontAwesomeIcon icon={faCashRegister} />
                                <span /> Register
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/reports/week/1">
                                <FontAwesomeIcon icon={faListAlt} />
                                <span /> Reports
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    </>
)

export default NavigationBar;