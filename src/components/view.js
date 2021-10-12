import {useState, useEffect} from 'react';
import {Body, Content,States,Main, CardText,Details,SearchDiv, 
  SearchInput,Button,Flag} from './componentsStyle';
import apiNames from '../services/apiStates';
// Fazer um modal com o search para aparecer 
// os dados dos países e finalizou
function View (){
  const [names, setName] = useState('');
  const [state, setLocal,] = useState();
  const [search, setSearch] = useState('');
  const ImgNm = search.toUpperCase();
  const img = `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${ImgNm}.png`;
  function searchButton(){
    apiNames
    .get(`/brazil/uf/${search}`)
    .then((response)=> setLocal(response.data))
    .catch((err) =>{
      console.error("deu merda oh" + err);
    })
  }
   useEffect(()=>{
      apiNames
      .get("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response)=> setName(response.data))
      .catch((err) =>{
        console.error("deu merda oh" + err);
      })
      })
  return (
    <Main>
    <SearchDiv>
      <SearchInput type="text" 
        value={search}
        onChange={(ev)=> setSearch(ev.target.value)}
        placeholder="Países"/>
          <Button onClick={searchButton}>Pesquisar </Button>
    </SearchDiv>
      <States>Informações sobre os estados:</States>
    <Body>
    <Content>
      <Details/>
      <Flag src={img}/>
      <CardText> 
          Estado: {state?.state}
      </CardText>
      <CardText> Número de casos:{state?.cases} </CardText>
      <CardText>Número de mortes: {state?.deaths}</CardText>
    </Content>
      {names.data?.map(states => ( 
      <Content>
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
