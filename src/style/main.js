import styled from 'styled-components';
import {Background, TitleColor,InfoColor} from './colors';
import "../App.css";

export const Title = styled.h1`
  font-family: 'Patua One', cursive;
  font-size: 2.5em;
  color:${TitleColor};
  margin: 2% 0 2% 0;
`;
export const Body = styled.div`
  display:flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  background-color:${Background};
`;
export const Main = styled.div`
  display:flex;
  flex-direction:row-reverse;
  height:70vh;
  width:75vw;
  justify-content:space-between;
`;
export const Info = styled.p`
  font-size: 1.8em;
  margin-right:2%;
  flex-direction:column;
  color: ${InfoColor};

`;
export const Img = styled.img`
  height:80%;
  width:40%;
`;