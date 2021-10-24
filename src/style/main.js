import styled from 'styled-components';
import {Background, TitleColor,InfoColor,SubInfoColor,} from './colors';
import "../App.css";

export const Title = styled.h1`
  align-self:flex-start;
  font-family: 'Patua One', cursive;
  font-size: 2em;
  color:${TitleColor};
  margin: 2% 0 5% 10%;
`;
export const Body = styled.div`
  display:flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  background-color:${Background};
`;
export const Main = styled.div`
  display:flex;
  height:60vh;
  width:75vw;
  flex-direction:row-reverse;
  justify-content:space-between;
`;
export const SubInfo = styled.p`
  font-size: 2em;
  font-family: 'Patua One', cursive;
  flex-direction:column;
  color: ${SubInfoColor};
`;
export const Info = styled.p`
  font-size: 1.3em;
  font-family: 'Patua One', cursive;
  flex-direction:column;
  color: ${InfoColor};

`;
export const Img = styled.img`
  height:90%;
  width:40%;
`;