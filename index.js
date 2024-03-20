// Import Leaflet library
const L = require('leaflet');

// Define the WhisperingForestMapper class
class WhisperingForestMapper {
  constructor(mapElementId, options) {
    this.mapElementId = mapElementId;
    this.options = options;
    this.map = null;
    this.markers = [];
  }

  // Initialize the map
  initMap() {
    this.map = L.map(this.mapElementId, this.options);
  }

  // Add a marker to the map
  addMarker(lat, lng, popupContent) {
    const marker = L.marker([lat, lng]).addTo(this.map);
    if (popupContent) {
      marker.bindPopup(popupContent).openPopup();
    }
    this.markers.push(marker);
  }

  // Remove all markers from the map
  removeAllMarkers() {
    this.markers.forEach(marker => this.map.removeLayer(marker));
    this.markers = [];
  }
}

// Export the WhisperingForestMapper class
module.exports = WhisperingForestMapper;
