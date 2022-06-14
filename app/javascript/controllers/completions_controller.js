import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="completions"
export default class extends Controller {

  static targets = ["checked", "correct"]
  connect() {
    this.csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content")
  }

  choice(event) {
    event.preventDefault()

    this.#check()
    //If answer is correct, adds challenge points to team score
    if (this.#check()) {
      fetch(`/games/${this.element.dataset.gameId}/teams/${this.element.dataset.teamId}/completion/${this.element.dataset.completionId}/choice/correct`,
      {
        method: "POST",
        headers: { "Accept": "application/json", "X-CSRF-Token": this.csrfToken },
      })
    }

    //Update challenge on completion to completed
    fetch(`/games/${this.element.dataset.gameId}/teams/${this.element.dataset.teamId}/completion/${this.element.dataset.completionId}/choice`,
    {
      method: "POST",
      headers: { "Accept": "application/json", "X-CSRF-Token": this.csrfToken },
    })
  }
  //Returns true if user selection is same as correct answer
  #check() {
    const tick = document.querySelector('input[name="challenge"]:checked')
    return tick.nextElementSibling.innerText === this.correctTarget.innerText
  }
}
