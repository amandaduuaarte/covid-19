import {useState, useEffect} from 'react';
import { TitleColor} from '../style/colors';
import {Body, Content,States,Main, CardText,Details} from './componentsStyle';
import api from '../services/api';

function Card (){
  let style={
    backgroundColor:TitleColor,
  }
  const [state, setLocal, setNm, name] = useState();
  useEffect(()=>{
    api
    .get("/cases?country=Brazil")
    .then((response )=> setLocal(response.data))
    .catch((err) =>{
      console.error("deu merda oh" + err);
    })
  })
  // useEffect (()=>{
  //   apiNames
  //   .get("/estados?orderBy=nome")
  //   .then((response)=>setNm(response.data))
  //   .catch((err) =>{
  //     console.error("deu merda oh" + err);
  //   })

  // })
  return (
    <Main>
      {/* Deu certo maass ele esta fazendo diversas vezes a requisição ai travou
       <ul> 
        {Object.keys(setLocal).map((setLocal)=>
        <li key={state.Acre}> {setLocal}</li>
        )}
      </ul> */}
      <States>Informações sobre os estados:</States>
    <Body>
    <Content>
    <Details/>
    <CardText> Acre </CardText>
      <CardText> Casos confirmados:{state?.Acre.confirmed}</CardText>
      <CardText>Número de mortes: {state?.Acre.deaths}</CardText>
      <CardText> Atualizado: {state?.Acre.updated}</CardText>
    </Content>
    <Content>
    <Details style={style}/>
    <CardText> Ceará </CardText>
      <CardText> Casos confirmados:{state?.Ceara.confirmed}</CardText>
      <CardText>Número de mortes: {state?.Ceara.deaths}</CardText>
      <CardText> Atualizado: {state?.Ceara.updated}</CardText>
    </Content>
    <Content>
      <Details/>
      <CardText> Ceará </CardText>
      <CardText> Casos confirmados:{state?.Ceara.confirmed}</CardText>
      <CardText>Número de mortes: {state?.Ceara.deaths}</CardText>
      <CardText> Atualizado: {state?.Ceara.updated}</CardText>
    </Content>
    <Content>
    <Details style={style}/>
    <CardText> Ceará </CardText>
      <CardText> Casos confirmados:{state?.Ceara.confirmed}</CardText>
      <CardText>Número de mortes: {state?.Ceara.deaths}</CardText>
      <CardText> Atualizado: {state?.Ceara.updated}</CardText>
    </Content>
    </Body>
    </Main>
  )
}
export default Card;