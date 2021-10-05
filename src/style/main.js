import styled from 'styled-components';
import "../App.css";

export const Title = styled.h1`
  font-family: 'Patua One', cursive;
  font-size: 2.5em;
`;
export const Main = styled.div`
  display:flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  background-color:gray;
`;
export const Info = styled.h3`
  font-size: 1.5em;
  align-self: flex-start;
  margin-left: 2%;

`;
export const Img = styled.img`
  height:50%;
  width:30%;
  align-self:flex-end;
  margin-right: 2%;
`;