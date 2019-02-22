import './heatmap.css'
import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Source } from "react-mapbox-gl";
import Quote from './Quote';
import GeoJSON from 'geojson';
import newPoints from '../../fixJson';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYm9kaGkta2luZyIsImEiOiJjanFta3hod3cxYnBpNDNtMDAxd2N1cXB4In0.orNcNCcYg6Kmat20sEZ8wA",
  minZoom: 8,
  maxZoom: 15,
});

const HEATMAP_SOURCE_OPTIONS = {
  "type": "geojson",
  "data": GeoJSON.parse(newPoints, {Point: ["lat", "long"]})
}

const PAINT_OPTIONS ={
    // Increase the heatmap weight based on frequency and property magnitude
  "heatmap-weight": [
      "interpolate",
      ["linear"],
      ["get", "value"],
      0, 0,
      5, 1
    ],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    "heatmap-intensity": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0, 1,
      9, 3
    ],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": [
      "interpolate",
      ["linear"],
      ["heatmap-density"],
      0, "rgba(33,102,172,0)",
      0.2, "rgb(103,169,207)",
      0.4, "rgb(209,229,240)",
      0.6, "rgb(253,219,199)",
      0.8, "rgb(239,138,98)",
      1, "rgb(178,24,43)"
    ],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0, 2,
      1, 15
    ],
}

class Heatmap extends Component {
handleStyleLoad = map => (map.resize())

  render() {
    return (
      <div id="map-container">
        <a name="Heatmap"></a>
        <Map
          className="Map"
          style="mapbox://styles/mapbox/streets-v9?optimize=true"
          container="map-container"
          center={{lon: -122.335167, lat:47.608013 }}
          zoom={[10]}
          containerStyle={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: 'inherit',
            height: 'inherit',
            }} // Style of the map container
          onStyleLoad={this.handleStyleLoad}
          >
            <Source id="source_id" tileJsonSource={HEATMAP_SOURCE_OPTIONS} />
            <Layer type="heatmap" id="layer_id" sourceId="source_id" paint={PAINT_OPTIONS} />
        </Map>
        <Quote />
      </div>
    )
  }
}

export default Heatmap;