import {useState, useEffect} from 'react';
import {ViewModal} from './componentsStyle';
import apiNames  from '../services/apiStates';

const Modal = ({search}) =>{
  const [country, setCountry] = useState('');

  useEffect(()=>{
    apiNames
    .get(`https://covid19-brazil-api.vercel.app/api/report/v1/${search}`)//Aqui ele vai pegar a props la do search;
    .then((response)=> setCountry(response.data))
    // console.log(country)
  })
  return(
  <ViewModal>
          <p>
            Nome:{country.data?.country}
          </p>
          <p>casos:{country.data?.confirmed}</p>
          <p> Número de mortes: {country.data?.deaths}</p>
  </ViewModal>
  )}

export default Modal