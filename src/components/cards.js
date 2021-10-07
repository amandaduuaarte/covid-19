import {useState, useEffect} from 'react';
import {Body, Content,States} from './componentsStyle';
import api from '../services/api';
import apiNames from '../services/apiNames';

function Card (){
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
    <div>
      {/* Deu certo maass ele esta fazendo diversas vezes a requisição ai travou
       <ul> 
        {Object.keys(setLocal).map((setLocal)=>
        <li key={state.Acre}> {setLocal}</li>
        )}
      </ul> */}
      <States>Informações sobre os estados:</States>
    <Body>
    <Content>
      <p> Casos confirmados:{state?.Acre.confirmed}</p>
      <p>Número de mortes: {state?.Acre.deaths}</p>
      <p> Atualizado: {state?.Acre.updated}</p>
    </Content>
    <Content>
      <p> Casos confirmados:{state?.Ceara.confirmed}</p>
      <p>Número de mortes: {state?.Ceara.deaths}</p>
      <p> Atualizado: {state?.Ceara.updated}</p>
    </Content>
    <Content>
      <p> Casos confirmados:{state?.Ceara.confirmed}</p>
      <p>Número de mortes: {state?.Ceara.deaths}</p>
      <p> Atualizado: {state?.Ceara.updated}</p>
    </Content>
    </Body>
    </div>
  )
}
export default Card;