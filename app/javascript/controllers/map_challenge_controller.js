import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    apiKey: String,
    marker: Array
  }

  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v10"
    })

    const mapo = this.map;


    function resizeMap() {
      mapo.resize();
      console.log("HEY")
    }

    setInterval(resizeMap, 1);
    // const canvas = document.querySelector('.mapboxgl-canvas');
    // // canvas.width = '84vw';
    // // canvas.height = '84vh';
    // document.querySelector('.mapboxgl-canvas').classList.add('fix-height');

    // document.querySelector('.mapboxgl-canvas').style.width = '42vw';
    // document.querySelector('.mapboxgl-canvas').style.height = '84vh';
    // this.map.reload();

    const bounds = new mapboxgl.LngLatBounds()
    this.markerValue.forEach(marker => bounds.extend([ marker.lng, marker.lat ]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })

    this.markerValue.forEach((marker) => {
      const customMarker = document.createElement("div")
      customMarker.style.backgroundSize = "contain"
      customMarker.classList.add("unfound-marker");

      new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .addTo(this.map)
    })



  }


}
