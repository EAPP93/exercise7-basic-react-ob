import axios from '../utils/Axios.config'

export async function axiosGet () {
  return await axios.get('/', {
    validateStatus: function (status) {
      return status < 500
    }
  })
}
