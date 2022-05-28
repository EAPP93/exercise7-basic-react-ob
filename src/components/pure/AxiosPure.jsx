import { axiosGet } from '../../service/Axios.service'

const AxiosPure = () => {
  axiosGet()
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('joke', response.data.value)
      }
    })
    .catch((error) => {
      console.warn(`error: ${error}`)
    })
}

export default AxiosPure
