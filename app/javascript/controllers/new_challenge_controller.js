import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="new-challenge"
export default class extends Controller {
  static targets = [ "new", "opacity" ]
  connect(){
    console.log("ASDJHKAS")
  }
  addChallenge(){
    this.newTarget.classList.add("show");
    this.opacityTarget.classList.add("opacity");
  }

  closeModal() {
    this.newTarget.classList.remove("show");
    this.opacityTarget.classList.remove("opacity");
  }

}
