/**
 * MAP CLASS for transportation app
 * Manages the rendering and event handling of google maps
 * By: Christian Wang
 * Version 1.0
 **/
function initMap() {
  var geocoder, map; // Create new geocoder and map objects
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'));
  var latlng = {
    lat: 43.653226,
    lng: -79.383184
  };

  setLocation(geocoder, map, "Toronto, Ontario, Canada", 8);
  getAddress(latlng).then(function(data) {
    console.log(data.results[0].formatted_address);
  });

  //Add marker at home
  codeAddress("34 Bracknell Avenue, Markham, Ontario, Canada, L6C0R3").then(function(data) {
    addMarker(geocoder, map, data.results[0].geometry.location);
  });
}
