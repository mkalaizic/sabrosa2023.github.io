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
    padding-top: 15vh;
    padding-bottom: 5vh;
    @media only screen and (min-width: 1024px) {
      padding-top: 10vh;
    }
  }

  .circle {
    @media only screen and (max-width: 600px) {
      transform: scale(0.8);
    }
    background-color: #b59ded;
    border-radius: 50%;
    z-index: 0;
    width: 40vh;
    height: 40vh;
    text-align: center;
    position: absolute;
    text-align: center;
    margin: auto;
    left: 0;
    right: 0;
    top: 22vh;
  }
  .content-wrapper {
    @media only screen and (max-width: 600px) {
      transform: scale(0.8);
      margin-top: -10vh;
    }
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
  height: 40px;
  width: 150px;
  color: #fdfefd;
  margin-top: 5vh;
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

// a{
//   position: relative;
//   display: inline-block;
//   padding: 25px 30px;
//   margin: 40px 0;
//   color: #03e9f4;
//   text-decoration: none;
//   text-transform: uppercase;
//   transition: 0.5s;
//   letter-spacing: 4px;
//   overflow: hidden;
//   margin-right: 50px;

// }
// a:hover{
//   background: #03e9f4;
//   color: #050801;
//   box-shadow: 0 0 5px #03e9f4,
//               0 0 25px #03e9f4,
//               0 0 50px #03e9f4,
//               0 0 200px #03e9f4;
//    -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
// }
// a:nth-child(1){
//   filter: hue-rotate(270deg);
// }
// a:nth-child(2){
//   filter: hue-rotate(110deg);
// }
// a span{
//   position: absolute;
//   display: block;
// }
// a span:nth-child(1){
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 2px;
//   background: linear-gradient(90deg,transparent,#03e9f4);
//   animation: animate1 1s linear infinite;
// }
// @keyframes animate1{
//   0%{
//       left: -100%;
//   }
//   50%,100%{
//       left: 100%;
//   }
// }
// a span:nth-child(2){
//   top: -100%;
//   right: 0;
//   width: 2px;
//   height: 100%;
//   background: linear-gradient(180deg,transparent,#03e9f4);
//   animation: animate2 1s linear infinite;
//   animation-delay: 0.25s;
// }

// }
// a span:nth-child(3){
//   bottom: 0;
//   right: 0;
//   width: 100%;
//   height: 2px;
//   background: linear-gradient(270deg,transparent,#03e9f4);
//   animation: animate3 1s linear infinite;
//   animation-delay: 0.50s;
// }
// @keyframes animate3{
//   0%{
//       right: -100%;
//   }
//   50%,100%{
//       right: 100%;
//   }
// }

// a span:nth-child(4){
//   bottom: -100%;
//   left: 0;
//   width: 2px;
//   height: 100%;
//   background: linear-gradient(360deg,transparent,#03e9f4);
//   animation: animate4 1s linear infinite;
//   animation-delay: 0.75s;
// }
// @keyframes animate4{
//   0%{
//       bottom: -100%;
//   }
//   50%,100%{
//       bottom: 100%;
//   }
// }

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
