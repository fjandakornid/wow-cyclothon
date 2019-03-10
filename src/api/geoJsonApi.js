import axios from 'axios'
import mockApi from './mock/mockContestantsApi'

// todo: remove xxx from url
const path = 'https://vasi.siminn.xxx.is/smsbeta/static/geojson.json'

class geoJsonApi {
  static getGeoJson () {
    return axios.get(`${path}`).then(
      response => response.data
    )
  }
}

let api = process.env.NODE_ENV === 'development' ? mockApi : geoJsonApi || geoJsonApi

export default api
