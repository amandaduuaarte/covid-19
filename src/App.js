import { useEffect, useState,} from 'react';
import {Title, Body,Info, Img, Main,SubInfo,} from './style/main';
import api from './services/api';
import apiNames from './services/apiStates';
import View from './components/View';
import Footer from './components/Footer';
import Imagem from './images/DrawKit Vector Illustration - COVID-19 & Vaccinations V1.0/PNG/08.png';

function App() {
  const [brasil, setCountry] = useState();
  const [names, setName] = useState('');
  useEffect(() => {
    api 
    .get("/cases?country=Brazil")
    .then((response) => setCountry(response.data))
    .catch((err) =>{
      console.error("deu merda oh" + err);
    })
  });
  useEffect(() => {
    apiNames
    .get("https://covid19-brazil-api.now.sh/api/report/v1")
    .then((response)=> setName(response.data))
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
        <View names ={names}/>
    <Footer/>
    </Body>
  );
}

export default App;
