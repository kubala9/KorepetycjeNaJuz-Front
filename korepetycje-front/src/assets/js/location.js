// import Leaflet from 'leaflet'
import Vue from 'vue'

export default class Location extends Vue {
  constructor () {
    super()
    console.log('Wyszukiwanie lokalizacji')
  }

  locate (map) {
    console.log('Szukam')
    map.locate({ setView: true, maxZoom: 16 })
    console.log('Znaleziono')
  }
}
