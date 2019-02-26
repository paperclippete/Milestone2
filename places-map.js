function initMap() {

    map = new google.maps.Map(document.getElementById('places-map'), {
        center: { lat: 55.863637, lng: -4.254477 },
        zoom: 14
    });

    //Call place data from JSON

    populatePlaces("assets/places.json", function(text) {
        var placesList = JSON.parse(text);

        placesList.places.forEach(function(eachPlace) {

            var lat = eachPlace.position.lat;
            var long = eachPlace.position.long;

            var position = { lat: lat, lng: long };
            
            //add marker
            var marker = new google.maps.Marker({
                position: position,
                map: map,
                title: eachPlace.name
            });
            //enable info window for JSON data
            var infoWindow = new google.maps.InfoWindow({
                content: contentcreator(eachPlace)
            });

            //call info window when marker is 'clicked'
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        
            //var markerCluster = new MarkerClusterer(map, marker, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' 
            
            //});
            //zoom map to 'clicked' marker
            marker.addListener('click', function() {
                map.setZoom(16);
                map.setCenter(marker.getPosition());
              });
            
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    
                    //center map on actual location
                    map.setCenter(pos);
                        }, function() {
                        handleLocationError(true, infoWindow, map.getCenter());
                    });
                    //assign current location a marker
                    var marker = new google.maps.Marker({
                        position: pos,
                        map: map,
                        label: "me",
                        animation: google.maps.Animation.DROP,
                    });
            }
            else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }
            function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                                      'Error: The Geolocation service failed.' :
                                      'Error: Sorry, your browser doesn\'t support geolocation.');
                infoWindow.open(map);
              }
      
        });


    });
    
    //get JSON file to insert data into map 
    function populatePlaces(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status === "200") {
                callback(rawFile.responseText);
            }
        };
        rawFile.send(null);
    }
    
    //insert JSON data into info window
    function contentcreator(name) {
        return `<div id="map-content">
                    <p class="iWTitle"><strong>${name.name}</strong></p>
                    <p><strong>${name.type}</strong></p>
                    <p>${name.description}</p>
                    <p>Click<a href=${name.website}>here</a> for more info or phone ${name.phone}.</p>
                </div>`;
    }


}