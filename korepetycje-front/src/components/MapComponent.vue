<template>
   <div id="containerMap">
        <div id="mymap"></div>
    </div>
</template>

<script>
import L from 'leaflet'
import MapButton from './map.js'

export default {
  name: 'containerMap',
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
      var mymap = L.map('mymap').setView([50.90270941638981, 15.723720788955688], 4)
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        zoomControl: true,
        minZoom: 6,
        maxZoom: 25,
        maxNativeZoom: 18
      }).addTo(mymap)
      mymap.invalidateSize()
      var mapButton = new MapButton()
      mapButton.initButton()
      mymap.addControl(mapButton.buttonControl)
    }
  }
}
</script>
<style>
#containerMap,
#mymap {
    position: relative;
    padding: 0;
    height: 70vh;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
