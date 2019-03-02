function initMap() {
    
    map = new google.maps.Map(document.getElementById('places-map'), {
        center: {lat: 55.863637, lng: -4.254477}, 
        zoom: 14
    });

    populatePlaces("assets/places.json", function(text){
        var placesList = JSON.parse(text);
        console.log(placesList);
        //debugger;
    
        placesList.places.forEach( function(eachPlace) {
            //debugger;
            console.log(eachPlace.position);
            
            var lat = eachPlace.position.lat;
            var long = eachPlace.position.long;
            
            var position = {lat:lat, lng:long};
    
            var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: eachPlace.name
        });
    
        var infoWindow = new google.maps.InfoWindow({
            content: contentcreator(eachPlace)
        });
    
  
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
        
        marker.addListener('click', function() {
            map.setZoom(16);
            map.setCenter(marker.getPosition());
        });
        
        map.addListener('click', function() {
            infoWindow.close(map);
        })
        
    });
    // Try HTML5 geolocation.
        locInfoWindow = new google.maps.InfoWindow;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                    
        //center map on actual location
        //assign current location a marker
                map.setCenter(pos);
                locInfoWindow.setPosition(pos);
                locInfoWindow.setContent("You're Here!");
                locInfoWindow.open(map);
                
                }, 
                function() {
                    handleLocationError(true, locInfoWindow, map.getCenter());
                });
        } else {
        // Browser doesn't support Geolocation
            handleLocationError(false, locInfoWindow, map.getCenter());
        }
        

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            locInfoWindow.setPosition(pos);
            locInfoWindow.setContent(browserHasGeolocation ?
                                  'Error: The Geolocation service failed.' :
                                  'Error: Your browser doesn\'t support geolocation.');
            locInfoWindow.open(map);
        }
                
    

});
    
    
    function populatePlaces(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        };
        
        rawFile.send(null);
    }

 
    
    
    
   
    function contentcreator(name) {
        return `<div id="map-content">
            <p class="iWTitle"><strong>${name.name}</strong><br>Perfect for: "${name.type}"
            <br>${name.description}
            <br>Click<a href=${name.website}> here</a> for more info or <a href="tel:${name.phone}">phone</a>.</p>
            </div>`;
    }

            

}