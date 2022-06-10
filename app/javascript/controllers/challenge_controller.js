import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="challenge"
export default class extends Controller {
  static targets = [ "modal", "opacity", "close", "map", "new" ]
  static values = { number: Number, }

  showModal() {
    // fetch(this.idValue).then(response => response.text())
    // .then((data) => {console.log(data)});
    // console.log(this.numberValue);
    // console.log(this.modalTarget.dataset);
    // console.log(this.element.dataset.challengeId);
    this.modalTarget.classList.add("show");
    this.opacityTarget.classList.add("opacity");
  }

  closeModal() {
    this.modalTarget.classList.remove("show");
    this.opacityTarget.classList.remove("opacity");
  }

  addChallenge(){
    this.newTarget.classList.add("show");
    this.opacityTarget.classList.add("opacity");
  }
}
