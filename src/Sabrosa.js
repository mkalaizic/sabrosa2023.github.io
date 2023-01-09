import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from './Sabrosa01white.png';
import Flor2 from './Sabrosa04.png';
import LogoInstagram from './logoinstagram.png';

const SabrosaAppWrapper = styled.div`
  background-color: #dc7b3f;
  margin: -1vh;
  height: 110vh;
  flex-direction: column;
  .sabrosa-logo {
    padding-top: 5vh;
    padding-bottom: 3vh;
  }

  .circle {
    background-color: #b59ded;
    border-radius: 50%;
    z-index: 0;
    width: 50vh;
    height: 50vh;
    text-align: center;
    position: absolute;
    text-align: center;
    margin: auto;
    left: 0;
    right: 0;
    top: 20vh;

    /* @media only screen and (min-width: 1024px) {
      width: 50vh;
      height: 50vh;
      top: 18vh;
      left: 42vh;
    } */
  }
  .content-wrapper {
    z-index: 1;
    position: relative;
  }
`;

//#2c4fa9
//#e2560a
//#dc4894 //rosa
//#88c579 //verde
//#b59ded lila
//#eea2c8 pink

const StyledButton = styled.button`
  font-family: 'Titan One', cursive;
  background-color: #eea2c8;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 150px;
  color: #fdfefd;
  margin-top: 30px;
`;

export const SabrosaApp = () => {
  return (
    <SabrosaAppWrapper>
      <div className='sabrosa-logo'>
        <img src={Logo} width='300vh' />
      </div>

      <div className='content-wrapper'>
        <div className='instagram-logo'>
          <img src={LogoInstagram} width='20vh' />
        </div>
        <div className='flor'>
          <img src={Flor2} width='300vh' />
        </div>
      </div>

      <div className='circle'></div>
      <StyledButton
        onClick={() => {
          console.log('here');
        }}>
        GET TICKETS
      </StyledButton>
    </SabrosaAppWrapper>
  );
};
