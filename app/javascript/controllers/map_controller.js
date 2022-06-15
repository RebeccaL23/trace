import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
  }

  connect() {
    mapboxgl.accessToken = this.apiKeyValue
    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/rebeccal23/cl4crwfm7000r14oaysfrxc2a",
      center: [-0.131, 51.501], // Starting position [lng, lat]
      zoom: 12,
    })
    this.#addMarkersToMap()
    this.#fitMapToMarkers()
  }

  #addMarkersToMap() {
    this.markersValue.forEach((marker) => {
      const customMarker = document.createElement("div")
      customMarker.style.backgroundSize = "contain"
      // customMarker.setAttribute("id", `${this.rightTarget.id}${'%d: %s', i}`)
      customMarker.setAttribute("data-action", `click->challenge#showModal`)
      customMarker.classList.add("unfound-marker");

      // Pass the element as an argument to the new marker
      new mapboxgl.Marker(customMarker)
        .setLngLat([marker.lng, marker.lat])
        .addTo(this.map)
    })
  }

  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([ marker.lng, marker.lat ]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 3 })
  }
}
