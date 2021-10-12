import { useEffect, useState,} from 'react';
import './App.css';
import {Title, Body,Info, Img, Main,SubInfo} from './style/main';
import api from './services/api';
import View from './components/view';
import Card from './components/cards';
import Search from './components/search';
import Footer from './components/footer';
import Imagem from './images/DrawKit Vector Illustration - COVID-19 & Vaccinations V1.0/PNG/08.png';

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
        País: Brasil
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
        <View/>
        {/* <Search/>
        <Card/> */}
    <Footer/>
    </Body>
  );
}

export default App;
