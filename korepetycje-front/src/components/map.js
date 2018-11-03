import L from 'leaflet'

function MapButton () {
  this.buttonControl = L.control({ position: 'topleft' })
}

MapButton.prototype = {
  initButton: function () {
    this.buttonControl.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'buttonControl')
      this._div.innerHTML = '<button onclick="alert()" id="buttonAlert">Kliknij</button>'
      return this._div
    }
  }
}

export default MapButton
