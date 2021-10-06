import { useEffect, useState,} from 'react';
import './App.css';
import {Title, Body,Info, Img, Main} from './style/main';
import Imagem from './images/DrawKit Vector Illustration - COVID-19 & Vaccinations V1.0/PNG/06.png';
import api from './services/api';

function App() {
  
  const [brasil, setCountry] = useState();
  useEffect(() => {
    api 
    .get("/cases?country=Brazil")
    .then((response) => setCountry(response.data))
    .catch((err) =>{
      console.error("deu merda oh" + err);
    })
  });
  return (
    <Body>
      <Title> Covid-19 </Title>
      <Main>
      <Img src={Imagem}/>
      <div>
        <Info> 
        País: {brasil?.All?.country}
        </Info>
        <Info>Casos confirmados: {brasil?.All?.confirmed}</Info>
        <Info>
        Número de mortes: {brasil?.All?.deaths} 
        </Info>
        <Info>
        Expectativa de vida: {brasil?.All?.life_expectancy} anos
        </Info>
        <Info>
        Capital : {brasil?.All?.capital_city}
         </Info>
         </div>
        </Main>
    </Body>
  );
}

export default App;
