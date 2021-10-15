import {useState,} from 'react';
import {Body, Content,States,Main, CardText,Details,SearchDiv, 
  SearchInput,Button,Flag,} from './componentsStyle';
import Modal from './Modal';
import apiNames from '../services/apiStates';

function View ({states}){
  const [country, setCountry] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
      const searchCountry = () =>{
          apiNames
          .get(`https://covid19-brazil-api.vercel.app/api/report/v1/${search}`)
          .then((response)=> setCountry(response.data))
            setShowModal(!showModal)
      }
  return (
    <Main>
    <SearchDiv>
      <SearchInput type="text" 
        value={search}
        onChange={(ev)=> setSearch(ev.target.value)}
        placeholder="Países"/>
          <Button 
          onClick={searchCountry}
          >Pesquisar </Button>
    </SearchDiv>
      <States>Informações sobre os estados:</States>
      {showModal && (
        <Modal country ={country}/>
      )}
    <Body>
      {states.data?.map(states => ( 
      <Content key={states.uid}>
        <Details/>
        <Flag src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${states.uf}.png`}/>
        <CardText> 
       Estado: {states.state}
       </CardText>
       <CardText> Número de casos: {states.cases} </CardText>
        <CardText>Número de mortes: {states.deaths}</CardText>
    </Content>
      ))}
    </Body>
    </Main>
  )
}
export default View;
