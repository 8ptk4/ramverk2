import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../views/NavigationBar';
import Background from '../../assets/images/beach.png';
import { withRouter } from 'react-router-dom';

/*
    HEADER ELEMENT STYLE
*/
const HeaderStyle = styled.header`
  position: relative;
  text-align: center;
  color: white;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: 0% -50px;

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }

  @media (max-width: 873px) {
    .title {
      font-size: 6em;
    }
  }

  @media (max-width: 673px) {
    .title {
      font-size: 4em;
    }
  }
`;

/*
    SITE LOGO TEXT STYLE
*/
const SiteLogo = styled.p`
  font-size: 8em;

  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 507px) {
    .title {
      font-size: 3em;
    }
  }

  &:first-letter {
    text-transform: uppercase !important;
  }
`;

/*
    NAV ELEMENT STYLE
*/
const NavStyle = styled.nav`
  width: 100%;
  margin: 0;
  padding: 0;

  .nav-link:hover,
  .navbar-brand:hover {
    color: #5bb7b6 !important;
  }

  .active {
    color: #e65950 !important;
  }

  .navbar {
    z-index: 1;
  }
`;

/*
    SVG WAVES ELEMENT STYLE
*/
const Waves = styled.svg`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
`;

/*
    STYLE FOR WAVE ANIMATION
*/
const WaveAnimation = styled.g`
  use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;

const Header = props => (
  <>
    {console.log(
      props.location.pathname.split('/')[
        props.location.pathname.split('/').length - 1
      ]
    )}
    <HeaderStyle>
      <NavStyle>
        <NavigationBar history={props.history} />
        <SiteLogo className="title">
          {props.location.pathname.split('/')[
            props.location.pathname.split('/').length - 1
          ] || 'Patrik Karlsson'}
        </SiteLogo>
      </NavStyle>
      <div>
        <Waves
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <WaveAnimation>
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use
              href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
          </WaveAnimation>
        </Waves>
      </div>
    </HeaderStyle>
  </>
);

export default withRouter(Header);
