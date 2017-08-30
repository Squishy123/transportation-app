/**
 * HELPER CLASS for google map api
 * Contains helpful methods for use in google maps
 * By: Christian Wang
 * Version 1.0
 **/

/**
 * Takes a geocoder object and returns the address in an array of latitude, longitude
 **/
function codeAddress(address) {
  return getResults("address="+address.replace(" ", "+"));
}

/**
 * Reverse geocodes an array of latitude, longitude and returns an address
 **/
function getAddress(latlng) {
  return getResults("latlng=" + latlng.lat + "," + latlng.lng);
}

function getResults(params) {
  var key = "&key=AIzaSyCkiU_W3NH-nFOUGc61nU4mR8ZNynURmww"
  var url = "https://maps.googleapis.com/maps/api/geocode/json?" + params + key;
  return fetch(url)
    .then((response) => response.json())
    .then(function(data) {
      return data;
    });
}
/**
 * Moves the map to the current location and sets the zoom level
 **/
function setLocation(geocoder, map, location, zoom) {
  //Check if the location is an address or an array of latitude, longitude
  if (typeof location === "string") {
    //Check if geocoder is undefined
    if (geocoder) {
      codeAddress(location).then(function(data) {
        map.setCenter(data.results[0].geometry.location);
      });
    } else {
      console.log('Geocode object is undefined');
    }
  } else {
    map.setCenter(location);
  }

  //Check if zoom is undefined
  if (zoom) {
    map.setZoom(zoom);
  } else {
    console.log('Zoom is undefined');
  }
}

/**
 * Adds a marker on a given map at a given location
 **/
function addMarker(geocoder, map, location) {
  //Check if the location is an address or an array of latitude, longitude
  if (typeof location === "string") {
    var marker = new google.maps.Marker({
      position: codeAddress(geocoder, location),
      title: "Home",
      map: map,
      visible: true
    });
  } else {
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      visible: true
    });
  }
}
