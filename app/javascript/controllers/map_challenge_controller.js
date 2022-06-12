import { Controller } from "@hotwired/stimulus"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"

let lng = 0
let lat = 0

export default class extends Controller {

  static targets = ["right", "long", "lat"]

  static values = {
    apiKey: String,
    marker: Array
  }

  hello(event) {
    console.log(this.latTarget.value)
    this.latTarget.value = lat
    console.log(this.latTarget.value)
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

    // get current user location demo:
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
      })
    );

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
      customMarker.setAttribute("data-action", `click->map-challenge#hello`)
      customMarker.classList.add("unfound-marker");

      const dragMarker = new mapboxgl.Marker(customMarker, {
        draggable: true
      })
        .setLngLat([marker.lng, marker.lat])
        .addTo(this.map)

      function onDragEnd() {
        const lngLat = dragMarker.getLngLat();
        lng = lngLat.lng
        lat = lngLat.lat
        hello()
      }

      // AJAX fetch > post call > append data to form
      dragMarker.on('dragend', onDragEnd);
    })

    this.map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    }))
  }

}
