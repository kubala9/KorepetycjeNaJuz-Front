import Leaflet from 'leaflet'

function MapButton () {
  this.buttonControl = Leaflet.control({ position: 'topleft' })
}
MapButton.prototype = {
  initButton: function () {
    this.buttonControl.onAdd = function (map) {
      this._div = Leaflet.DomUtil.create('div', 'buttonControl')
      this._div.innerHTML = '<button onclick="alert()" id="buttonAlert">Kliknij</button>'
      return this._div
    }
  }
}

export default MapButton
