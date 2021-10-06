import {useState, useEffect} from 'react';
import {Content} from './cardsStyle';
import api from '../services/api';

function Card (){
  const [state, setLocal] = useState();
  useEffect(()=>{
    api
    .get("/cases?country=Brazil")
    .then((response )=> setLocal(response.data))
    .catch((err) =>{
      console.error("deu merda oh" + err);
    })
  })
  return (
    <Content>
      <h2>Informações sobre os estados:</h2>
    </Content>
  )
}
export default Card;