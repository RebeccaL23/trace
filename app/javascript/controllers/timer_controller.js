import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="timer"
export default class extends Controller {
  static targets = ["time"]

  connect() {

    const timer = this.timeTarget
    // // console.log(timer)
    // function resizeMap() {
    //   console.log(timer)
    // }



    //   startTimer() {
    //   if (stoptime == true) {
    //         stoptime = false;
    //         timerCycle();
    //     }
    // }
    // function stopTimer() {
    //   if (stoptime == false) {
    //     stoptime = true;
    //   }
    // }

    // setTimeout(() => {

    //   var hr = 0;
    //   var min = 0;
    //   var sec = 0;
    //   var stoptime = false;

    //     sec = parseInt(sec);
    //     min = parseInt(min);
    //     hr = parseInt(hr);

    //     sec = sec + 1;

    //     if (sec == 60) {
    //       min = min + 1;
    //       sec = 0;
    //     }
    //     if (min == 60) {
    //       hr = hr + 1;
    //       min = 0;
    //       sec = 0;
    //     }

    //     if (sec < 10 || sec == 0) {
    //       sec = '0' + sec;
    //     }
    //     if (min < 10 || min == 0) {
    //       min = '0' + min;
    //     }
    //     if (hr < 10 || hr == 0) {
    //       hr = '0' + hr;
    //     }

    //     // timer.innerHTML =
    //     console.log(hr + ':' + min + ':' + sec);

    //   }, 1000);
    timer.innerHTML = '00:00:00';

      setInterval(() => {




      var hr = 0;
      var min = 0;
      var sec = 0;
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    console.log(hr + ':' + min + ':' + sec);
    timer.innerHTML = hr + ':' + min + ':' + sec;
  }, 1000);


    // setTimeout("timerCycle()", 1000);



    }
}

  // update() {
  // fetch(url, {headers: {"Accept": "text/plain"}})
  //   .then(response => response.text())
  //   .then((data) => {
  //     this.listTarget.outerHTML = data
  //   })
  // }
