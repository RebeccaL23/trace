import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="drag"
export default class extends Controller {
  static targets = ["marker"];

    connect() {
      console.log("hello from connect")
    }

    marker () {
      console.log(this.markerTarget)
      this.markerTarget.addEventListener('dragend', (event) => console.log("hello"))
    }
  }
