/**
 * HELPER CLASS for google map api
 * Contains helpful methods for use in google maps
 * By: Christian Wang
 * Version 1.0
 **/

/**
 * Takes a geocoder object and returns the address in an array of latitude, longitude
 **/
function codeAddress(geocoder, address) {
  var latlng = [];
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status == "OK") {
      latlng[0] = results[0].geometry.location.lat();
      latlng[1] = results[0].geometry.location.lng();
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
    return latlng;
  });
}

/**
 * Reverse geocodes an array of latitude, longitude and returns an address
 **/
function getAddress(geocoder, latlng) {
  var address = "";
  geocoder.geocode({
      'location': latlng
    },
    function(results, status) {
      if (status == "OK") {
        address = results[0].formatted_address;
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  return address;
}

/**
 * Moves the map to the current location and sets the zoom level
 **/
function setLocation(geocoder, map, location, zoom) {
  //Check if the location is an address or an array of latitude, longitude
  if (typeof location === "string") {
    //Check if geocoder is undefined
    if (geocoder) {
      map.setCenter(codeAddress(geocoder, location));
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
      title: "Home",
      map: map,
      visible: true
    });
  }
}
