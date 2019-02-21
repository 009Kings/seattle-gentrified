import './heatmap.css'
import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYm9kaGkta2luZyIsImEiOiJjanFta3hod3cxYnBpNDNtMDAxd2N1cXB4In0.orNcNCcYg6Kmat20sEZ8wA"
});

const mapStyles = {
  height: "50vh",
  width: "50vw",
  margin: "0 auto"
}

class Heatmap extends Component {
  render() {
    return (
      <div id="map-container">
        <Map
          style="mapbox://styles/mapbox/streets-v9?optimize=true"
          container="map-container"
          center={{lon: -122.335167, lat:47.608013 }}
          zoom={[10]}
          containerStyle={mapStyles} // Style of the map container
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
            </Layer>
        </Map>
      </div>
    )
  }
}

export default Heatmap;