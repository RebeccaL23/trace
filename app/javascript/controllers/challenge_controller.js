import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="challenge"
export default class extends Controller {
  static targets = [ "modal" ]

  showModal(event) {
    console.log(event);
    console.log(this.modalTarget);
    this.modalTarget.classList.add("show");
  }
}
