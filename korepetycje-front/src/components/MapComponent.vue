<template>
  <div class="map-container">
    <div id="map" />
  </div>
</template>

<script>
import Leaflet from 'leaflet'
import Location from '@/assets/js/map.js'

export default {
  name: 'MapComponent',
  data () {
    return {
      map: undefined
    }
  },
  mounted () {
    this.initMap()
    this.map.on('locationfound', this.addLocation)
  },
  methods: {
    initMap () {
      this.map = Leaflet.map('map').setView([52.231904, 21.006016], 12)
      Leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        zoomControl: true,
        minZoom: 6,
        maxZoom: 25,
        maxNativeZoom: 18
      }).addTo(this.map)
      this.map.invalidateSize()

      let location = new Location()
      location.locate(this.map)
    },
    addLocation (e) {
      const radius = e.accuracy / 2

      Leaflet.marker(e.latlng).addTo(this.map)
        .bindPopup('Jesteś w odlegości ' + radius + ' od tego punktu').openPopup()

      Leaflet.circle(e.latlng, radius).addTo(this.map)
    }
  }
}
</script>

<style lang="scss" scoped>
  .map-container,
  #map {
    position: relative;
    padding: 0;
    height: 70vh;
  }
</style>
