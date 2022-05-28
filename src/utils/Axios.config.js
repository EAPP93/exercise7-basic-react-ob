import axios from 'axios'

export default axios.create({
  method: 'get', // default
  baseURL: 'https://api.chucknorris.io/jokes/random',
  responseType: 'json'// default
})
