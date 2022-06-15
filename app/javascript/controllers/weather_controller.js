import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["temperature", "icon"]

  static values = {
    api: String
  }

  // initialize() {
  //   api = this.apiValue
  // }

  connect() {
    this.#fetchWeather()
  }

  #fetchWeather() {
    const city = 'London'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiValue}&units=metric`)
      .then(response => response.json())
      .then(data => this.#updateCard(data))
  }

  #updateCard(data) {
    console.log(`https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
    this.iconTarget.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    this.temperatureTarget.innerText = `${Math.round(data.main.temp)} °C`
    // this.descriptionTarget.innerText = data.weather[0].description
    // this.cityTarget.innerText = data.name
    // const today = new Date();
    // const localOffset = data.timezone + today.getTimezoneOffset() * 60
    // const localDate = new Date(today.setUTCSeconds(localOffset))
    // const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
    // const formattedDate = localDate.toLocaleDateString("en-US", options)
    // this.dateTarget.innerText = formattedDate
  }
}
