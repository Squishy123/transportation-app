/**
* MAP CLASS for transportation app
* Manages the rendering and event handling of google maps
* By: Christian Wang
* Version 1.0
**/
function initMap() {
  var geocoder, map; // Create new geocoder and map objects
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'), {
    center: codeAddress(geocoder, "34 Bracknell Avenue, Markham, ON, Canada, L6C0R3")
  });
  setLocation(geocoder, map, "34 Bracknell Avenue, Markham, ON, Canada, L6C0R3", 4);
  addMarker(geocoder, map, "34 Bracknell Avenue, Markham, ON, Canada, L6C0R3");

}
