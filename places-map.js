var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('places-map'), {
          center: {lat: 55.863637, lng: -4.254477}, 
          zoom: 14
    });
    
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
            
          });
          
    });
    
    var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }
    
    var locations = [
        {lat: 55.8604437, lng: -4.2597669},
        {lat: 55.863677, lng: -4.2622262},
        {lat: 55.864621, lng: -4.2854813},
        {lat: 55.858543, lng: -4.244684},
        {lat: 55.8748506, lng: -4.2941139},

    ];
        



   