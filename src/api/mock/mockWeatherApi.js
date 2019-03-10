import response from './data/weatherResponse.json'

class mockWeatherApi {
  static getObservations () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(response.results)
      }, 3000)
    })
  }
}

export default mockWeatherApi
