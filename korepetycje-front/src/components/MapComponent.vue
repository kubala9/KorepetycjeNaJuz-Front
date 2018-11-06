<template>
  <div class="map-container">
    <div id="map"></div>
  </div>
</template>

<script>
import Leaflet from 'leaflet'
import MapButton from '@/assets/js/map.js'

export default {
  name: 'MapComponent',
  data () {
    return {
      msg: 'We can see Map :)'
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      const map = Leaflet.map('map').setView([50.90270941638981, 15.723720788955688], 4)
      Leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        zoomControl: true,
        minZoom: 6,
        maxZoom: 25,
        maxNativeZoom: 18
      }).addTo(map)
      map.invalidateSize()

      const mapButton = new MapButton()
      mapButton.initButton()

      map.addControl(mapButton.buttonControl)

      const marker = Leaflet.marker([50.90270941638981, 15.723720788955688])
      marker.addTo(map)

      const circle = Leaflet.circle([50.90270941638981, 15.723720788955688], { radius: 100000 })
      circle.addTo(map)
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
