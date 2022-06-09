import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {

  static targets = ["long", "lat"]

  connect() {
    console.log("hello from form")
    console.log(this.longTarget.value)
    console.log(this.latTarget.value)
  }

  updateLong() {

  }

  updateLat() {

  }
}
