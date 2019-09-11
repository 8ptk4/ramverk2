import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';



const Styles = styled.div`
    background-color: white;
    color: grey;
    
    .mb-5 {
        margin-bottom: 0 !important;
    }

    .fa-2x:hover {
        color: #ffbfae;
    }

    .row {
        margin: 0 !important;
    }
`;



const Footer = () => (
    <>
        <footer className="page-footer font-small cyan darken-3">
        <Styles className="container">
            <div className="row">
                <div className="col-md-12 py-5">
                    <div className="d-flex justify-content-center">
                        <a className="fb-ic" href="https://www.facebook.com/putte.putte.75">
                            <i className="fa-lg white-text mr-md-5 mr-3 fa-2x"> 
                                <FontAwesomeIcon icon={faFacebook} color="#e6594f" size="2x" />
                            </i>  
                        </a>
                        <a className="tw-ic" href="https://twitter.com/8ptk4">
                            <i className="fa-lg white-text mr-md-5 mr-3 fa-2x"> 
                                <FontAwesomeIcon icon={faTwitter} color="#e6594f" size="2x" />
                            </i> 
                        </a>                               
                        <a className="li-ic" href="https://www.instagram.com/patrik84karlsson/">
                            <i className="fa-lg white-text mr-md-5 mr-3 fa-2x"> 
                                <FontAwesomeIcon icon={faInstagram} color="#e6594f" size="2x" />
                            </i>
                        </a>
                        <a className="pin-ic" href="https://github.com/8ptk4">
                            <i className="fa-lg white-text mr-md-5 mr-3 fa-2x"> 
                                <FontAwesomeIcon icon={faGithub} color="#e6594f" size="2x" />
                            </i>
                        </a>
                    </div>
                </div>
            </div>
                <div className="footer-copyright text-center py-3">© 2019 Copyright Patrik Karlsson
            </div>
        </Styles>
        </footer>
    </>
);


export default Footer;
