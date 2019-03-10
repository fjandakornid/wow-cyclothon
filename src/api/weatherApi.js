import axios from 'axios'
import mockApi from './mock/mockWeatherApi'
import weatherStations from '../data/weatherStations.json'

const path = 'https://apis.is/weather/observations/en'

class weatherApi {
  static getObservations () {
    var list = weatherStations.map(x => x.id)
    var stations = list.join(',')
    return axios.get(`${path}?stations=${stations}`).then(
      response => response.data.results
    )
  }
}

//let api = weatherApi
let api = process.env.NODE_ENV === 'development' ? mockApi : weatherApi || weatherApi

export default api
