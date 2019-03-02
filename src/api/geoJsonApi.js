import axios from 'axios'
import mockApi from './mock/mockContestantsApi'

const path = 'https://siminnnn.is/static/getgeojson/something'

class geoJsonApi {
  static getGeoJson () {
    return axios.get(`${path}`).then(
      response => response.data
    )
  }
}

let api = process.env.NODE_ENV === 'development' ? mockApi : geoJsonApi || geoJsonApi

export default api
