import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="map-mobile"
export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
  }

  connect() {
    console.log("MOBILE MAP");
    mapboxgl.accessToken = this.apiKeyValue
    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/rebeccal23/cl4crwfm7000r14oaysfrxc2a",
      center: [-0.131, 51.501], // Starting position [lng, lat]
      zoom: 12,
    })
    this.#addMarkersToMap()
    this.#fitMapToMarkers()

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

    // pass through data of each challenge
    // challenge.name

  }

  #addMarkersToMap() {
    this.markersValue.forEach((marker) => {
      const popup = new mapboxgl.Popup().setHTML(marker.info_window)
      const customMarker = document.createElement("div")
      customMarker.style.backgroundSize = "contain"
      // customMarker.setAttribute("id", `${this.rightTarget.id}${'%d: %s', i}`)

      // can't get the following to show edit

      customMarker.setAttribute("data-action", `click->challenge#showModal`)
      customMarker.classList.add("unfound-marker");

      // Pass the element as an argument to the new marker
      new mapboxgl.Marker(customMarker)
        .setLngLat([marker.lng, marker.lat])
        .setPopup(popup)
        .addTo(this.map)
    })
  }

  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([ marker.lng, marker.lat ]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 3 })
  }
}
