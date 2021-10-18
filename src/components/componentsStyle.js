import styled from 'styled-components';
import {TitleColor, SubInfoColor
  ,FooterColor,BorderCard} from '../style/colors';

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
  flex-wrap:wrap;
  flex-direction:row;
`;
export const Content = styled.div`
  display:flex;
  height:220px;
  width:300px;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:space-around;
  margin: 0 4% 5% 0;
  border-top: 10px solid ${TitleColor};
  border-radius:24px 4px;
  box-shadow: 10px 10px 10px rgb(206, 212, 218);
  background-color:rgb(255,255,255);
  &:hover{
    height:240px;
    box-shadow: 15px 15px 15px rgb(206, 212, 218);
  }
`;
export const Flag = styled.img`
  height:45px;
  width:50px;
  align-self:center;
`;
export const CardText = styled.p`
  color:rgb(62, 31, 71);
  font-size:1.1em;
  margin-left:10px;
  font-family: 'Patua One', cursive;
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
  align-self:center;
  flex-direction:row;
  border-radius:24px 4px;
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
export const ViewModal = styled.div`
  display: block; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`;

export const ModalContent = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  
  width: 40%;
  height:300px;
  padding-top:0;
  border-radius:24px 10px;
`;
export const ModalFirst = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    margin-top:8px;
    border-radius:5px;
    background-color:${SubInfoColor};
    color:rgb(255,255,255);
    height:100%;
    width:50%;
`;
export const ModalTitle = styled.p`
  font-family: 'Patua One', cursive;
  font-size:2em;
  margin-top:0;
`;
export const CloseButton = styled.button`
  height:10px;
  width:20px;
  align-self:flex-end;
  margin-top:0;
  border:none;
  background-color:transparent;
`;
export const CloseModal = styled.img`
  height:20px;
  width:20px;
  align-self:flex-end;
  margin-top:0;
`;
export const ModalInfo = styled.p`
  font-family: 'Patua One', cursive;
  font-size:1.2em;
`;