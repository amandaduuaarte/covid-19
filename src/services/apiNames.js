import axios from 'axios';

const apiNames = axios.create({
  baseURL:"https://servicodados.ibge.gov.br/api/v1/localidades"
})
export default apiNames;