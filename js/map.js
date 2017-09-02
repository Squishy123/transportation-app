/**
 * MAP CLASS for transportation app
 * Manages the rendering and event handling of google maps
 * By: Christian Wang
 * Version 1.0
 **/
var geocoder, map, transitLayer, center, locations; // Create new geocoder and map objects

function initMap() {
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'));

  //Set the location center
  codeAddress("Toronto").then(function(data) {
    setLocation(null, map, data.results[0].geometry.location, 15);
    center = map.getCenter();
  });


  locations = [];

  codeAddress("St. Lawrence Market, Toronto").then(function(data) {
    var loc1 = {
      name: "St.Lawrence Market",
      marker: createMarker({
        map: map,
        position: data.results[0].geometry.location,
        animation: google.maps.Animation.DROP
      }),
      init: function() {
        this.marker.title = this.name;
        setMarker(this.marker, map, data.results[0].geometry.location);
      }
    }
    loc1.init();
    locations.push(loc1);
  });

  codeAddress("CN Tower").then(function(data) {
    var loc2 = {
      name: "CN Tower",
      marker: createMarker({
        map: map,
        position: data.results[0].geometry.location,
        animation: google.maps.Animation.DROP
      }),
      init: function() {
        this.marker.title = this.name;
        setMarker(this.marker, map, data.results[0].geometry.location);
      }
    }
    loc2.init();
    locations.push(loc2);
  });

  codeAddress("Nathan Philips Square").then(function(data) {
    var loc3 = {
      //addMarker(geocoder, map, data.results[0].geometry.location);var loc1 = {
      name: "Nathan Philips Square",
      marker: createMarker({
        map: map,
        position: data.results[0].geometry.location,
        animation: google.maps.Animation.DROP
      }),
      init: function() {
        this.marker.title = this.name;
        setMarker(this.marker, map, data.results[0].geometry.location);
      }
    }
    loc3.init();
    locations.push(loc3);
  });

  codeAddress("Royal Ontario Museum").then(function(data) {
    var loc4 = {
      //addMarker(geocoder, map, data.results[0].geometry.location);var loc1 = {
      name: "Royal Ontario Museum",
      marker: createMarker({
        map: map,
        position: data.results[0].geometry.location,
        animation: google.maps.Animation.DROP
      }),
      init: function() {
        this.marker.title = this.name;
        setMarker(this.marker, map, data.results[0].geometry.location);
      }
    }
    loc4.init();
    locations.push(loc4);
  });

  codeAddress("Art Gallery Of Ontario").then(function(data) {
    var loc5 = {
      //addMarker(geocoder, map, data.results[0].geometry.location);var loc1 = {
      name: "Art Gallery Of Ontario",
      marker: createMarker({
        map: map,
        position: data.results[0].geometry.location,
        animation: google.maps.Animation.DROP
      }),
      init: function() {
        this.marker.title = this.name;
        setMarker(this.marker, map, data.results[0].geometry.location);
      }
    }
    loc5.init();
    locations.push(loc5);
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

//Pans the map towards the location of given index
function openLocation(index) {
  if (locations[index]) {
    map.panTo(locations[index].marker.position);
    //Bounce for 5 seconds
    locations[index].marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
      locations[index].marker.setAnimation(null);
    }, 5000);
  }
}

//Checks the query and pans towards it
function submitQuery() {
  var query = document.getElementById('search').value;
  codeAddress(query).then(function(data) {
    map.panTo(data.results[0].geometry.location);
  });
}
