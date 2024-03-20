# Whispering Forest Mapper

A lightweight library for creating interactive maps with Leaflet.js.

## Installation

Install the whispering-forest-mapper package from npm:

```
npm install whispering-forest-mapper
```

## Usage

```javascript
const WhisperingForestMapper = require('whispering-forest-mapper');

// Initialize the map
const mapElementId = 'map';
const options = {
  center: [51.505, -0.09],
  zoom: 13
};
const mapper = new WhisperingForestMapper(mapElementId, options);
mapper.initMap();

// Add a marker
const markerLat = 51.5;
const markerLng = -0.09;
mapper.addMarker(markerLat, markerLng, 'Hello, Whispering Forest!');

// Remove all markers (if needed)
// mapper.removeAllMarkers();
```

## API Reference

### `WhisperingForestMapper(mapElementId, options)`

Creates a new WhisperingForestMapper instance.

- `mapElementId` - The id of the HTML element to initialize the map.
- `options` - Optional. Options object for configuring the map (e.g., center coordinates, zoom level).

### `initMap()`

Initializes the map with the provided options.

### `addMarker(lat, lng, popupContent)`

Adds a marker to the map at the specified latitude and longitude.

- `lat` - Latitude of the marker.
- `lng` - Longitude of the marker.
- `popupContent` - Optional. Content to display in the marker popup.

### `removeAllMarkers()`

Removes all markers from the map.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
