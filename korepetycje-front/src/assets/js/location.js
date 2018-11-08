// import Leaflet from 'leaflet'
import Vue from 'vue'

export default class Location extends Vue {
  constructor (map) {
    super()
    this.map = map
  }
  locate () {
    console.log('Szukam')
    var result = this.map.locate({ setView: true, maxZoom: 16 })
    console.log('Znaleziono')
    return result
    // this.map.on('locationfound', this.onLocationFound)
  }
}
