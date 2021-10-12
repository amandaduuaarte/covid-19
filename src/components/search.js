import {useState, useEffect} from 'react';
import {SearchDiv, SearchInput,Button, } from './componentsStyle';
import axios from 'axios';
import apiNames from '../services/apiStates';

function Search (){
  const [state, setLocal,] = useState();
  const [search, setSearch] = useState('');

  function searchButton(){
    apiNames
    .get(`/brazil/uf/${search}`)
    .then((response)=> setLocal(response.data))
    .catch((err) =>{
      console.error("deu merda oh" + err);
    })
  }
  return(
    <div>
    <SearchDiv>
      <SearchInput type="text" 
      value={search}
      onChange={(ev)=> setSearch(ev.target.value)}
       placeholder="Estado"/>
      <Button onClick={searchButton}>Pesquisar </Button>
    </SearchDiv>
    <h1>{state?.state}</h1>
       <h1>{state?.cases}</h1>
    </div>
  )

    }
export default Search;