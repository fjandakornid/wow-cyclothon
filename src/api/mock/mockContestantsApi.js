import response from './data/response.json'

class mockContestantsApi {
  static getGeoJson () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(response)
      }, 3000)
    })
  }
}

export default mockContestantsApi
