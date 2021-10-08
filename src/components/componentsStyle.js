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
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:space-between;
  margin-right:4%;
  box-shadow: 10px 5px 5px rgb(206, 212, 218);
  background-color:rgb(255,255,255);
  
`;
export const CardText = styled.p`
  color:black;
  font-size:1.1em;
  margin-left:10px;
  font-family: 'Patua One', cursive;
`;
export const Details = styled.div`
  height:40px;
  width:100%;
  background-color:${SubInfoColor};
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