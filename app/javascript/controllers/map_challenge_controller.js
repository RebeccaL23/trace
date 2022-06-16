import { Controller } from "@hotwired/stimulus"

let newLng = 0
let newLat = 0

let mapLat = 0
let mapLng = 0

export default class extends Controller {

  static targets = ["right", "long", "lat", "location"]

  static values = {
    apiKey: String,
    marker: Array
  }

  update() {
    this.latTarget.value = newLat
    this.longTarget.value = newLng

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${newLng},${newLat}.json?types=address&access_token=pk.eyJ1IjoicmViZWNjYWwyMyIsImEiOiJjbDN3dm05MDExZGNiM2dueWVma3hnZjhoIn0.XEl6gzD4IoiYom5Fs0wxag`)
      .then(response => response.json())
      .then(data => this.locationTarget.value = data.features[0].place_name);
  }

  connect() {

    // await new Promise(r => setTimeout(r, 2000));

    mapboxgl.accessToken = this.apiKeyValue

    const id = this.rightTarget.id
    const myMap = document.getElementById(id)

    this.map = new mapboxgl.Map({
      container: myMap,
      style: "mapbox://styles/rebeccal23/cl4crwfm7000r14oaysfrxc2a",
      center: [-0.131, 51.501], // Starting position [lng, lat]
      zoom: 12,
    })

    document.getElementById('fit').addEventListener('click', () => {

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.locationTarget.value}.json?access_token=pk.eyJ1IjoicmViZWNjYWwyMyIsImEiOiJjbDN3dm05MDExZGNiM2dueWVma3hnZjhoIn0.XEl6gzD4IoiYom5Fs0wxag`)
      .then(response => response.json())
      .then(data => mapLng = data.features[0].center[1]);

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.locationTarget.value}.json?access_token=pk.eyJ1IjoicmViZWNjYWwyMyIsImEiOiJjbDN3dm05MDExZGNiM2dueWVma3hnZjhoIn0.XEl6gzD4IoiYom5Fs0wxag`)
      .then(response => response.json())
      .then(data => mapLat = data.features[0].center[0]);

      setTimeout(() =>
        this.map.fitBounds([
          [mapLat + 0.003, mapLng + 0.0003], // northeastern corner of the bounds
          [mapLat - 0.003, mapLng - 0.0003], // southwestern corner of the bounds
        ])
      , 500)

    });

    // get current user location demo:
    // this.map.addControl(
    //   new mapboxgl.GeolocateControl({
    //     positionOptions: {
    //       enableHighAccuracy: true
    //     },
    //     // When active the map will receive updates to the device's location as it changes.
    //     trackUserLocation: true,
    //     // Draw an arrow next to the location dot to indicate which direction the device is heading.
    //     showUserHeading: true
    //   })
    // );

    const modalMap = this.map;

    function resizeMap() {
      modalMap.resize();
    }

    setInterval(resizeMap, 1);

    const bounds = new mapboxgl.LngLatBounds()
    this.markerValue.forEach(marker => bounds.extend([marker.lng, marker.lat]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })

    // TODO: refactor without forEach
    this.markerValue.forEach((marker) => {
      const customMarker = document.createElement("div")
      customMarker.style.backgroundSize = "contain"
      customMarker.setAttribute("data-action", `mouseout->map-challenge#update`)
      customMarker.classList.add("unfound-marker");

      const dragMarker = new mapboxgl.Marker(customMarker, {
        draggable: true
      })
        .setLngLat([marker.lng, marker.lat])
        .addTo(this.map)

      function onDragEnd() {
        const lngLat = dragMarker.getLngLat();
        newLng = lngLat.lng
        newLat = lngLat.lat

        marker.lat = newLat
        marker.lng = newLng
      }
      dragMarker.on('dragend', onDragEnd);

    })
  }
}
