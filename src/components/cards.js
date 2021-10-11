import {useState, useEffect} from 'react';
import {Body, Content,States,Main, CardText,Details} from './componentsStyle';
import apiNames from '../services/apiStates';

function Card (){
  const [ setNm, name] = useState();
  const [names, setName] = useState('');
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
      <States>Informações sobre os estados:</States>
    <Body>
      {names.data?.map(states => ( 
      <Content>
        <Details/>
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
export default Card;
