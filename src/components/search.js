import {useState, useEffect} from 'react';
import {SearchDiv, SearchInput,Button, } from './componentsStyle';
import apiNames from '../services/apiStates';

function Search (){
  const [state, setLocal,] = useState();
  const [search, setSearch] = useState('');
  // const searchFilter = state.filter((state) => state.startsWith(search));

  useEffect(()=>{
    apiNames
    .get("https://covid19-brazil-api.now.sh/api/report/v1")
    .then((response)=> setLocal(response.data))
    .catch((err) =>{
      console.error("deu merda oh" + err);
    })
    })
  return(
    <SearchDiv>
      <SearchInput placeholder="Estado"/>
      <Button>Pesquisar </Button>
      {/* <input type="text" 
      value={search}
      onChange={(ev)=> setSearch(ev.target.value)}
      /> */}
       {/* <p> Casos confirmados:{state?.searchFilter.confirmed}</p>  */}
    </SearchDiv>
  )
}

export default Search;