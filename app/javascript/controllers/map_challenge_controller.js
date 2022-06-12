import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["right", "long", "lat"]


  static values = {
    apiKey: String,
    marker: Array
  }

  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    const id = this.rightTarget.id
    const myMap = document.getElementById(id)

    this.map = new mapboxgl.Map({
      container: myMap,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-0.131, 51.501], // Starting position [lng, lat]
      zoom: 12,
    })

    // this.map = new mapboxgl.Map({
    //   container: this.element,
    //   style: "mapbox://styles/mapbox/streets-v10"
    // })

    const modalMap = this.map;

    function resizeMap() {
      modalMap.resize();
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
    this.markerValue.forEach(marker => bounds.extend([marker.lng, marker.lat]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })

    // TODO: refactor without forEach
    this.markerValue.forEach((marker) => {
      const customMarker = document.createElement("div")
      customMarker.style.backgroundSize = "contain"
      customMarker.classList.add("unfound-marker");

      const dragMarker = new mapboxgl.Marker(customMarker, {
        draggable: true
      })
        .setLngLat([marker.lng, marker.lat])
        .addTo(this.map)

      function onDragEnd() {
        const lngLat = dragMarker.getLngLat();
        console.log(lngLat.lng);
        // return lngLat.lng
      }

      // AJAX fetch > post call > append data to form
      dragMarker.on('dragend', onDragEnd);

    })
  }
}
