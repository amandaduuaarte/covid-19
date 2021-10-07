import {useState, useEffect} from 'react';
import {SearchDiv, SearchInput,Button, } from './componentsStyle';
import api from '../services/api';

function Search (){
  const [state, setLocal,] = useState();
  const [search, setSearch] = useState('');
  // const searchFilter = state.filter((state) => state.startsWith(search));

  useEffect(()=>{
      api
      .get("/cases?country=Brazil")
      .then((response)=> setLocal(response.data))
      .catch((err) =>{
        console.error("deu merda oh" + err);
      })
      // var result = Object.keys(state).map(function(key) {
      //   return [Number(key), state[key]];
      //   console.log(result);
      // });
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