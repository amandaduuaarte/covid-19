import { useEffect, useState,} from 'react';
import './App.css';
import {Title, Body,Info, Img, Main,SubInfo} from './style/main';
import api from './services/api';
import Card from './components/cards';
import Search from './components/search';
import Imagem from './images/DrawKit Vector Illustration - COVID-19 & Vaccinations V1.0/PNG/06.png';

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
        <Info>
        Capital : {brasil?.All?.capital_city}
         </Info>
         <Info>
        Expectativa de vida do país: {brasil?.All?.life_expectancy} anos
        </Info>
        <SubInfo> Informações sobre a covid-19 no país: </SubInfo>
        <Info>Casos confirmados: {brasil?.All?.confirmed}</Info>
        <Info>
        Número de mortes: {brasil?.All?.deaths} 
        </Info>
         </div>
        </Main>
        <Search> </Search>
        <Card></Card>
    </Body>
  );
}

export default App;
