import styled from 'styled-components';
import {TitleColor, SubInfoColor,InfoColor} from '../style/colors';

export const Main = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
`;
export const Body = styled.div`
  display:flex;
  height:100%;
  width:100%;
  justify-content:center;
  flex-direction:row;
`;
export const Content = styled.div`
  display:flex;
  height:220px;
  width:300px;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  border-radius:5%;
  margin-right:4%;
  border: 1px solid red;
  background-color:rgb(255,255,255);
  color:black;
  font-family: 'Patua One', cursive;
`;
export const States = styled.p`
  font-size:1.8em;
  align-self:center;
  color:${InfoColor};
  margin: 8% 0 8% 0;
  font-family: 'Patua One', cursive;
`;

export const SearchDiv = styled.div`
  display:flex;
  margin:2%;
  height:90px;
  width:70%;
  border-radius:5px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  background-color:${SubInfoColor};
`;

export const SearchInput = styled.input`
  height:30px;
  width:65%;
  margin-left:10px;
  border:none;
  border-radius:4px;
  color:${SubInfoColor};
  font-size:1.1em;
  font-family: 'Patua One', cursive;
`;

export const Button = styled.button`
  height:35px;
  width:20%;
  margin-right:20px;
  border:none;
  color:white;
  font-size:1em;
  font-family: 'Patua One', cursive;
  border-radius:5px;
  background-color:${TitleColor};
`;