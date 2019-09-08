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
`;

const Footer = () => {
    return (
        <Styles class="container">
            <div class="row">
                <div class="col-md-12 py-5">
                    <div class="mb-5 d-flex justify-content-center">
                        <a class="fb-ic" href="https://www.facebook.com/putte.putte.75">
                            <i class="fa-lg white-text mr-md-5 mr-3 fa-2x"> 
                                <FontAwesomeIcon icon={faFacebook} color="#e6594f" size="2x" />
                            </i>  
                        </a>
                        <a class="tw-ic" href="https://twitter.com/8ptk4">
                            <i class="fa-lg white-text mr-md-5 mr-3 fa-2x"> 
                                <FontAwesomeIcon icon={faTwitter} color="#e6594f" size="2x" />
                            </i> 
                        </a>                               
                        <a class="li-ic" href="https://www.instagram.com/patrik84karlsson/">
                            <i class="fa-lg white-text mr-md-5 mr-3 fa-2x"> 
                                <FontAwesomeIcon icon={faInstagram} color="#e6594f" size="2x" />
                            </i>
                        </a>
                        <a class="pin-ic" href="https://github.com/8ptk4">
                            <i class="fa-lg white-text mr-md-5 mr-3 fa-2x"> 
                                <FontAwesomeIcon icon={faGithub} color="#e6594f" size="2x" />
                            </i>
                        </a>
                    </div>
                </div>
            </div>
                <div class="footer-copyright text-center py-3">© 2019 Copyright Patrik Karlsson
            </div>
        </Styles>
    );
}

export default Footer;
