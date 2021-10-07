import styled from 'styled-components';
import {TitleColor} from '../style/colors';


export const Body = styled.div`
  display:flex;
  height:100%;
  width:100%;
  background-color:red;
  justify-content:center;
  flex-direction:row;
`;
export const Content = styled.div`
  display:flex;
  height:250px;
  width:250px;
  flex-direction:row;
  flex-wrap:wrap;
  text-align:center;
  border-radius:5%;
  margin-right:4%;
  background-color:${TitleColor};
  color:black;
`;
export const States = styled.p`
  font-size:1.5em;
`;
