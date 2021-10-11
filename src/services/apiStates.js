import axios from 'axios';

const apiNames = axios.create({
  baseURL:"https://covid19-brazil-api.now.sh/api/report/v1"
})
export default apiNames;