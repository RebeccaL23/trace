import { Controller } from "@hotwired/stimulus"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"

let newLng = 0
let newLat = 0

export default class extends Controller {

  static targets = ["right", "long", "lat", "location"]

  static values = {
    apiKey: String,
    marker: Array
  }

  update(event) {
    // event.preventDefault()
    // console.log(this.locationTarget.value)
    // console.log(this.latTarget.value)
    this.latTarget.value = newLat
    this.longTarget.value = newLng

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${newLng},${newLat}.json?types=address&access_token=pk.eyJ1IjoicmViZWNjYWwyMyIsImEiOiJjbDN3dm05MDExZGNiM2dueWVma3hnZjhoIn0.XEl6gzD4IoiYom5Fs0wxag`)
      .then(response => response.json())
      .then(data => this.locationTarget.value = data.features[0].place_name);

    // console.log(this.locationTarget.value)

  }

  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    const id = this.rightTarget.id
    const myMap = document.getElementById(id)

    this.map = new mapboxgl.Map({
      container: myMap,
      style: "mapbox://styles/rebeccal23/cl4crwfm7000r14oaysfrxc2a",
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

    // // limit search to a specific area
    // const geocoder = new MapboxGeocoder({
    //   // Initialize the geocoder
    //   accessToken: mapboxgl.accessToken, // Set the access token
    //   mapboxgl: mapboxgl, // Set the mapbox-gl instance
    //   bbox: [-122.30937, 37.84214, -122.23715, 37.89838],
    //   types: "country,region,place,postcode,locality,neighborhood,address"
    // });

    // this.map.addControl(geocoder);

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

        // console.log(marker.lat)
        marker.lat = newLat
        marker.lng = newLng
        console.log(marker.lat)

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/51.507,-0.131222.json/`, {method: "GET"}
          ).then(response => response.text())
            .then((data) => {console.log(data)})
        // console.log(marker.lat)
      }

      // AJAX fetch > post call > append data to form
      dragMarker.on('dragend', onDragEnd);
    })

    // this.map.addControl(new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl
    // }))
  }

}
