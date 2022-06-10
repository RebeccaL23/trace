import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static values = {
    apiKey: String,
    markers: Array
  }

  connect() {
    // console.log("hello from map challenge controller")
    // console.log(this.longTarget.value)
    // console.log(this.latTarget.value)
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v10"
    })

    this.#addMarkersToMap()
    this.#fitMapToMarkers()
  }

  #fitMapToMarkers() {
  const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([marker.lng, marker.lat]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 3 })
  }

  // issue: puts all markers on one challenge
  #addMarkersToMap() {
    this.markersValue.find((marker) => {
      const customMarker = document.createElement("div")
      // customMarker.setAttribute('draggable', "true");
      customMarker.style.backgroundSize = "contain"
      customMarker.classList.add("unfound-marker");

      const newMarker = new mapboxgl.Marker({
        draggable: true
      })

        .setLngLat([marker.lng, marker.lat])
        .addTo(this.map)

        function onDragEnd() {
          const lngLat = newMarker.getLngLat();
          // AJAX fetch > post call > append data to form
          console.log(lngLat.lng)
          console.log(lngLat.lat)
        }

        newMarker.on('dragend', onDragEnd);
    })
  }
}
