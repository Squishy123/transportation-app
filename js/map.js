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
  var latlng =  {lat: 43.653226,lng: -79.383184};
  setLocation(null, map, latlng, 8);
  addMarker(geocoder, map, latlng);
}
