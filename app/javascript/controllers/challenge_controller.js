import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="challenge"
export default class extends Controller {
  static targets = [ "modal", "opacity", "close", "long"]

  connect() {
    console.log("hello from challenge")
    console.log(this.longTarget.value)
  }

  showModal() {
    // console.log(event);
    // console.log(this.modalTarget);
    this.modalTarget.classList.add("show");
    this.opacityTarget.classList.add("opacity");
  }

  closeModal() {
    this.modalTarget.classList.remove("show");
    this.opacityTarget.classList.remove("opacity");
  }
}
