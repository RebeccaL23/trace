import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="mobile-play"
export default class extends Controller {
  static targets = [ "show1", "show2", "show3", "show4", "show5", "show6","show7", "height"]

  gameDetails(){
    this.show1Target.classList.toggle("mobile-play-hide");
    this.show2Target.classList.toggle("mobile-play-hide");
    this.show3Target.classList.toggle("mobile-play-hide");
    this.show4Target.classList.toggle("mobile-play-hide");
    this.show5Target.classList.toggle("mobile-play-hide");
    this.show6Target.classList.toggle("mobile-play-hide");
    this.show7Target.classList.toggle("mobile-play-hide");
    this.heightTarget.classList.toggle("height");
  }
}
