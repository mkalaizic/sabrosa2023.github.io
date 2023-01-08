import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from './Sabrosa01white.png';
import Flor2 from './Sabrosa04.png';

const SabrosaAppWrapper = styled.div`
  background-color: #dc7b3f;
  margin: -10px;
  height: 110vh;
  flex-direction: column;
  .logo-wrapper {
    padding-top: 50px;
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
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CircleWrapper = styled.div`
  background-color: #b59ded;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 150px;
  left:36%;
`;

const Rotate = styled.div`
  display: inline-block;
  object-fit: cover;
  /* animation: ${rotate} 4s linear infinite; */
  padding: 5px;
  font-size: 1.2rem;
  width: 100px;
  height: 100px;
  object-fit: fill;
`;

export const SabrosaApp = () => {
  return (
    <SabrosaAppWrapper>
      <div className='logo-wrapper'>
        <img src={Logo} width='300px' />
      </div>

      <CircleWrapper>
        <Rotate></Rotate>
        <img src={Flor2} width='300px' />
        <StyledButton
          onClick={() => {
            console.log('here');
          }}>
          GET TICKETS
        </StyledButton>
      </CircleWrapper>
    </SabrosaAppWrapper>
  );
};
