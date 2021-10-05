import { useEffect, useState,} from 'react';
import './App.css';
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
    <div className="App">
      <h1> Teste </h1>
        <p> País: {brasil?.All?.country}</p>
        <p> 
       Casos confirmados: {brasil?.All?.confirmed}
        </p>
    </div>
  );
}

export default App;
