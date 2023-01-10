import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from './Sabrosa01white.png';
import Flor2 from './Sabrosa04.png';
import LogoInstagram from './logoinstagram.png';
import Envelop from './envelope-icon-14.png';

const SabrosaAppWrapper = styled.div`
  background-color: #dc7b3f;
  margin: -1vh;
  height: 110vh;
  flex-direction: column;
  .sabrosa-logo {
    @media only screen and (max-width: 600px) {
      transform: scale(0.8);
    }
    display: inline-block;
    overflow: hidden;
    padding-top: 10vh;
    padding-bottom: 5vh;
    @media only screen and (min-width: 1024px) {
      padding-top: 10vh;
    }
  }

  .flor {
    @media only screen and (max-width: 600px) {
      transform: scale(1.1);
      margin-top: 2em;
    }
  }
  .circle {
    @media only screen and (max-width: 600px) {
      transform: scale(0.8);
    }
    background-color: #b59ded;
    border-radius: 50%;
    z-index: 0;
    width: 20em;
    height: 20em;
    text-align: center;
    position: absolute;
    text-align: center;
    margin: auto;
    left: 0;
    right: 0;
    top: 8em;
  }
  .content-wrapper {
    @media only screen and (max-width: 600px) {
      transform: scale(0.8);
      margin-top: -10vh;
    }
    z-index: 1;
    position: relative;
  }
  .text {
    margin-top: 2vh;
    margin-bottom: 5vh;
    color: white;
    font-family: 'Rowdies', cursive;
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
  }
`;

//#2c4fa9
//#e2560a
//#dc4894 //rosa
//#88c579 //verde
//#b59ded lila
//#eea2c8 pink

const animate2 = keyframes`
  0%{
      top: -100%;
  }
  50%,100%{
      top: 100%;
  }
  `;

const StyledButton = styled.button`
  font-family: 'Titan One', cursive;
  background-color: #eea2c8;
  border-radius: 4px;
  border: none;
  height: 5vh;
  width: 15vh;
  color: #fdfefd;
  margin-top: 12vh;
  animation: ${animate2} 1s linear infinite;
  animation-delay: 0.25s;
  @media only screen and (max-width: 600px) {
    margin-top: -5vh;
  }
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 2px #eea2c8, 0 0 10px #eea2c8, 0 0 20px #eea2c8,
      0 0 200px #eea2c8;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 5vh;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  span {
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 2px #eea2c8, 0 0 10px #eea2c8, 0 0 20px #eea2c8,
        0 0 200px #eea2c8;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    }
  }
  @media only screen and (max-width: 600px) {
    transform: scale(0.8);
  }
`;

export const SabrosaApp = () => {
  return (
    <SabrosaAppWrapper>
      <div className='sabrosa-logo'>
        <img src={Logo} width='250vh' />
      </div>

      <div className='content-wrapper'>
        <div className='instagram-logo'></div>
        <div className='flor'>
          <img src={Flor2} width='250vh' />
        </div>
      </div>

      <div className='circle'></div>
      <div className='text'>
        <div>Jan 28 2023</div>
        <div>Early Bird Tickets Available</div>
      </div>

      <StyledButton
        onClick={() => {
          window.open(
            'https://www.eventbrite.com/e/sabrosa-nov-12th-tickets-456181991617'
          );
        }}>
        GET TICKETS
      </StyledButton>
      <ButtonGroup>
        <span
          onClick={() => window.open('https://www.instagram.com/sabrosa.nyc/')}>
          <img src={LogoInstagram} width='30vh' />
        </span>
        <span onClick={() => window.open('mailto:sabrosa.nyc@gmail.com')}>
          <img src={Envelop} width='30vh' />
        </span>
      </ButtonGroup>
    </SabrosaAppWrapper>
  );
};
