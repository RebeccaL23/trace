import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = ["source"]
  static values = { gameCode: Number }

  // connect() {
  //   console.log("hello")
  // }

  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value)
  }
}
