import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="completions"
export default class extends Controller {

  static targets = ["checked", "correct"]
  connect() {
      // [...]
    this.csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content")
    // console.log(this.correctTarget.innerText)
  }
  choice(event) {
    event.preventDefault()
    // console.log(this.checkedTarget)
    // console.log(this.element.dataset.challengeId)
    // console.log(this.element.dataset.gameId)
    // console.log(this.element.dataset.teamId)
    // console.log(this.element.dataset.completionId)
    fetch(`/games/${this.element.dataset.gameId}/teams/${this.element.dataset.teamId}/completion/${this.element.dataset.completionId}/choice`,
    {
      method: "POST",
      headers: { "Accept": "application/json", "X-CSRF-Token": this.csrfToken },
    })
    // ).then(response => response.text())
    //   .then((data) => {console.log(data)})
  }

  check(event) {
    console.log(event.currentTarget.nextElementSibling.innerText === this.correctTarget.innerText)
    }
}
