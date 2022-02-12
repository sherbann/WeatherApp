import axios from 'axios'

export class ApiClient {

  // checking  response from API
  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }
  // getting data from API
  getWeather(lat = 53.383331, lon = -1.466667) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=06af2c84a95e6a736fd7bab4b3be279d`
    return this.getRequest(apiUrl)

  }

  // in case of error is showing an alert message with error
  getRequest(url) {
    // create a promise for the axios request
    return axios.get(url)
      // using .then, create a new promise which extracts the data
      .then(this.status)
      .catch(function (error) {
        console.error(error);
        alert(error)
      })
  }

}