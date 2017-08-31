/**
 * MAP CLASS for transportation app
 * Manages the rendering and event handling of google maps
 * By: Christian Wang
 * Version 1.0
 **/
var geocoder, map, center; // Create new geocoder and map objects

function initMap() {
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'));
  var latlng = {
    lat: 43.653226,
    lng: -79.383184
  };

  setLocation(null, map, latlng, 8);
  center = map.getCenter();

  //Add marker at home
  codeAddress("34 Bracknell Avenue, Markham, Ontario, Canada, L6C0R3").then(function(data) {
    addMarker(geocoder, map, data.results[0].geometry.location);
  });

  //TESTING PAN TO
  //If the center has been changed wait 3 seconds and pan towards Toronto
  //map.addListener('center_changed', function() {
  //    codeAddress("Toronto, Ontario, Canada").then(function(data) {
  //      setTimeout(function() {
  //        map.panTo(data.results[0].geometry.location);
  //        console.log("Panning now!");
  //      }, 3000);
  //    });
  //});

  //If the map has been resized, set the map center to the last center
  google.maps.event.addDomListener(window, 'resize', function() {
    google.maps.event.trigger(map, "resize")
    map.setCenter(center)
    console.log("RESIZING")
  })
}

//Checks the query and pans towards it
function submitQuery() {
  var query = document.getElementById('search').value;
  codeAddress(query).then(function(data) {
    map.panTo(data.results[0].geometry.location);
  });
}
