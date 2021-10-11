import styled from 'styled-components';
import {TitleColor, SubInfoColor,InfoColor,FooterColor,BorderCard} from '../style/colors';

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
  flex-direction:column;
`;
export const Content = styled.div`
  display:flex;
  height:220px;
  width:300px;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:space-between;
  margin-right:4%;
  box-shadow: 10px 10px 10px rgb(206, 212, 218);
  background-color:rgb(255,255,255);
  
`;
export const CardText = styled.p`
  color:rgb(62, 31, 71);
  font-size:1.1em;
  margin-left:10px;
  font-family: 'Patua One', cursive;
`;
export const Details = styled.div`
  height:40px;
  width:100%;
  background-color:${BorderCard};
`;
export const States = styled.p`
  font-size:1.8em;
  align-self:center;
  color:rgb(62, 31, 71);
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

export const FooterDiv = styled.div`
  display:flex;
  height:140px;
  width:100%;
  flex-direction:row;
  justify-content:center;
  margin-top:10%;
  background-color:rgb(33, 47, 69);
`;

export const FinishInfo = styled.p`
  color:rgb(255,255,255);
  align-self:center;
  font-family: 'Patua One', cursive;
  font-size:2em;
`;

export const FinishInformations = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  height:250px;
  width:100%;
  background-color:${FooterColor};
`;
export const TextFooter = styled.p`
  font-size:1.3em;
  margin-left:5%;
  color:rgb(255,255,255);
  font-family: 'Patua One', cursive;
`;