import GMaps from 'gmaps/gmaps.js';

const mapElement = document.getElementById('map');
if (mapElement) { // don't try to build a map if there's no div#map to inject in
  const map = new GMaps({
    el: '#map',
    lat: 0,
    lng: 0
  });
  const markers = JSON.parse(mapElement.dataset.markers);
  map.addMarkers(markers)
  if (markers.length === 0) {
    map.setZoom(2);
  } else if (markers.length === 1) {
    map.setCenter(markers[0].lat, markers[0].lng);
    map.setZoom(14);
  } else {
    map.fitLatLngBounds(markers);
  }
  // Uncomment the following lines to add custom style
  // const styles = <TODO: paste here custom style array from https://snazzymaps.com/>
  // map.addStyle({
  //   styles: styles,
  //   mapTypeId: "map_style"
  // });
  // map.setStyle("map_style");
}
