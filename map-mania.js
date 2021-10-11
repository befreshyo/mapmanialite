var gMap;

function initMap() {
  // Create a new map and assign it to gMap
  gMap = new google.maps.Map(document.getElementById('myMapID'), {
      center: {lat: 41.878, lng: 10}, zoom: 3});

      var marker = new google.maps.Marker({position:{lat:49.2827,lng:-123.1207}, map:gMap, animation: google.maps.Animation.DROP});
      marker.setIcon('http://maps.google.com/mapfiles/ms/micons/blue-dot.png');

      var infoWindow2 = new google.maps.InfoWindow({content:'Vancouver, Canada'});
      marker.addListener('click', function() {
          infoWindow2.open(gMap, marker)
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          };
      });


      // Add a second marking with a custom icon, an Info window, and a listener.
      var marker2 = new google.maps.Marker({position:{lat:52.2297,lng:21.0122}, map:gMap, animation: google.maps.Animation.DROP});
      marker2.setIcon('http://maps.google.com/mapfiles/ms/micons/pink-dot.png');

      var infoWindow = new google.maps.InfoWindow({content:'Warsaw, Poland'});
      marker2.addListener('click', function() {
          infoWindow.open(gMap, marker2)
          if (marker2.getAnimation() !== null) {
            marker2.setAnimation(null);
          } else {
            marker2.setAnimation(google.maps.Animation.BOUNCE);
          };
      });

      google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });


function updateGame() {
  console.log('function UpdateGame() google-maps-step-03!');
  var zoomLevel = gMap.getZoom()
  var inBounds = false;

  // Check if Canoe Bay, WI is in the currently displayed map
  if (gMap.getBounds().contains({lat:49.2827,lng:-123.1207})) {
      inBounds = true;
  }

  if (gMap.getBounds().contains({lat:52.2297,lng:21.0122})) {
    inBounds = true;
}

  console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}


function initApplication() {
  console.log('Map Mania - Starting!');
}}