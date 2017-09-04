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
      infowindow: createInfoWindow({
        content: "<div id='content'><h1>St. Lawrence Market</h1><h3>Spacious market with 100+ vendors, bakers, butchers & artisans, with produce & antiques on weekends.</h3></div>"
      }),
      init: function() {
        this.marker.title = this.name;
        setMarker(this.marker, map, data.results[0].geometry.location, this.infowindow);
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
      infowindow: createInfoWindow({
        content: "<div id='content'><h1>CN Tower</h1><h3>The CN Tower is a 553.3 m-high concrete communications and observation tower in downtown Toronto, Ontario, Canada.</h3></div>"
      }),
      init: function() {
        this.marker.title = this.name;
        setMarker(this.marker, map, data.results[0].geometry.location, this.infowindow);
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
      infowindow: createInfoWindow({
        content: "<div id='content'><h1>Nathan Philips Square</h1><h3>Nathan Phillips Square is an urban plaza in Toronto, Ontario, Canada. It forms the forecourt to Toronto City Hall.</h3></div>"
      }),
      init: function() {
        this.marker.title = this.name;
        setMarker(this.marker, map, data.results[0].geometry.location, this.infowindow);
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
      infowindow: createInfoWindow({
        content: "<div id='content'><h1>Royal Ontario Museum</h1><h3>The Royal Ontario Museum is a museum of art, world culture and natural history in Toronto, Ontario, Canada.</h3></div>"
      }),
      init: function() {
        this.marker.title = this.name;
        setMarker(this.marker, map, data.results[0].geometry.location, this.infowindow);
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
      infowindow: createInfoWindow({
        content: "<div id='content'><h1>Art Gallery of Ontario</h1><h3>The Art Gallery of Ontario is an art museum in Toronto, Ontario, Canada. Its collection includes more than 80,000 works spanning the first century to the present day.</h3></div>"
      }),
      init: function() {
        this.marker.title = this.name;
        setMarker(this.marker, map, data.results[0].geometry.location, this.infowindow);
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
function openLocation(query) {
  //TODO MAKE THIS MORE EFFICIENT ;(
  for (var i = 0; i < locations.length; i++) {
    if (locations[i].name === query) {
      locations.forEach(function(e) {
        e.marker.setAnimation(null);
        //Close all the other infowindows
        e.infowindow.close();
      });
      map.panTo(locations[i].marker.position);
      //Bounce for 5 seconds
      locations[i].marker.setAnimation(google.maps.Animation.BOUNCE);
      //Open the infowindow associated with the marker
      locations[i].infowindow.open(map, locations[i].marker);
    }
  }
}

//Checks the query and pans towards it
function submitQuery() {
  var query = document.getElementById('search').value;
  codeAddress(query).then(function(data) {
    map.panTo(data.results[0].geometry.location);
  });
}

//Checks the query and changes the list element
function submitFilter() {
  var query = document.getElementById('filter').value;
  for (var i = 0; i < locations.length; i++) {
    //Remove the other filtered elements
    document.getElementById(locations[i].name).classList.remove('btn-danger');
    if (locations[i].name.includes(query)) {
      document.getElementById(locations[i].name).classList.add('btn-danger');
      console.log("matching");
    }
  }
}
