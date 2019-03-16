//code for index.html features

$(document).ready(function() {
    $("#GLA").click(function() {
        $(".site-heading").html("Glesga");
        $("#di-1").html("Hame");
        $("#food-drink-h").html("Swally an' Scran?");
        $("#di-2").html("Swally an' Scran?");
        $("#events-h").html("Aff Oot?");
        $("#di-3").html("Aff Oot?");
        $("#weather-h").html("Dreich?");
        $("#di-4").html("Dreich?");
    });
    
    $("#ENG").click(function() {
        $(".site-heading").html("Glasgow");
        $("#di-1").html("Home");
        $("#food-drink-h").html("Food and Drink");
        $("#di-2").html("Food and Drink");
        $("#events-h").html("What's On?");
        $("#di-3").html("What's On?");
        $("#weather-h").html("Weather");
        $("#di-4").html("Weather");
    });
    
   
    $(".weather-comment-img").mouseover(function() {
        $(".weather-comment-speech").removeClass(["hidden"]);
        $(".weather-comment-text").removeClass(["hidden"]);
        
        if ($("#weatherDescription")[0].innerText == "Rain") {
                $("#weather-comment").html("Aww naw!<br>Git yer brolly!")
        }
        else if ($("#weatherDescription")[0].innerText == "Clouds") {
                $("#weather-comment").html("Ach it's dreich!")
        }
        else if ($("#weatherDescription")[0].innerText == "Sun") {
                $("#weather-comment").html("Taps Aff!")
        }
        else if ($("#weatherDescription")[0].innerText == "Snow") {
                $("#weather-comment").html("Baltic!<br>Pull a sickie!")
        }
        else $("#weather-comment").html("This weather's mental!")
    });
    
    if ($(".navbar").css("justify-content") == ("flex-end")) {
            $(".btn-position").removeClass(["dropdown"])
            $(".btn-position").addClass(["dropleft"])
    }
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $('#btn-to-top').fadeIn();
        } else {
            $('#btn-to-top').fadeOut();
        }
    });

    
    $('#btn-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

// code for maps

function initMap() {
    
    map = new google.maps.Map(document.getElementById('places-map'), {
        center: {lat: 55.863637, lng: -4.254477}, 
        zoom: 14,
        mapTypeControl: false
    });

    populatePlaces("assets/js/places.json", function(text){
        var placesList = JSON.parse(text);
        
    
        placesList.places.forEach(function(eachPlace) {
            
            
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
        });
        
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
            <h4 style="text-align: center"><strong>${name.name}</strong></h4><p>Perfect for: "${name.type}"
            <br>${name.description}
            <br>Click <a href=${name.website} target="_blank">here</a> for more info or <a href="tel:${name.phone}">phone</a>.</p>
            </div>`;
    }

            

}

// code for events


var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWEwMzYwNGMtMDQwMy00MDc1LWE0NGItNThjOTIwNjIyODQ5Iiwia2V5X2lkIjoiMWM1MjUxOTItMjQzOC00MDZhLWJiZDgtOTczMDViZDU3Njc2IiwiaWF0IjoxNTUwMzE5Mzg2fQ.OReYaxoTq9PiZC5InfxNWT0pRtXWlTSNog6vQYNMerY';

function eventsData() {
	var headers = new Headers();

	headers.set('Authorization', 'Bearer '+apiKey);
	fetch('https://api.list.co.uk/v1/events?location=glasgow&order=ts', { headers: headers })
		.then(function(response) { 
		    
		    return response.json(); 
		    
		})
		
		.then(function(data) {
			var ul = document.querySelector('#search-output');
				
			ul.innerHTML = '';
			data.forEach(function(result) {
			       	
				var rawTime = result.schedules[0].performances[0].ts;
				var eventTime = moment(rawTime).format("Do MMMM YYYY, h:mm a");
				
				var li = document.createElement('li');
				
				var resultId = result.list_id;
				var name = result.name;
				var eventDetails = result.schedules[0].place.name;
				var price = function() {
				    var priceSuccess = result.schedules[0].ticket_summary; 
				    var priceError = "unknown, click above for more details";
				    
				    if (result.schedules[0].ticket_summary === undefined) {
				        return priceError;
				    } else {
				        return priceSuccess;
				    }    
				};
				
				
				eventInfo = document.createElement('div');
				
				eventInfo.innerHTML = `<a href="https://www.list.co.uk/event/${resultId}" target="_blank"><h3 class="event-title">${name}</h3></a>
				                            <p class="event-details"> @ ${eventDetails} <br>
				                            This event is on ${eventTime} and the price is ${price()}.</p>`;
				li.appendChild(eventInfo);
				ul.appendChild(li);
				
				
				
			});
	    });
		    
	
		
		
}

eventsData();

//code for weather


$(document).ready(function() {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Glasgow&APPID=31bfcbea061f0bd7c06d6bbf48bae278";
    const el = $("#weather-data")
    var weather;
    var weatherDescription;
    var temperature;
    var minTemperature;
    var maxTemperature;
        
        $.ajax({
            type: "GET",
            url: baseURL,
            dataType: "jsonp",
            success: function(data) {
                //display temperatures in Celsius
                temperature = Math.round(data.main.temp - 273.15) + '°C';
				minTemperature = Math.round(data.main.temp_min - 273.15) + '°C';
				maxTemperature = Math.round(data.main.temp_max - 273.15) + '°C';
				weatherDescription = data.weather[0].main;
                weather = {
                    weatherDescription,
                    temperature,
                    minTemperature,
                    maxTemperature
                    };
                
                $("#weather-data").html(`<p>The current weather in Glasgow is <span id="weatherDescription">${weatherDescription}</span>.<br> The current temperature is ${temperature}. Today's high will be ${maxTemperature}, today's low will be ${minTemperature}.</p>`);
                }
            }
        );
});


// code for emailJS

function sendMail(mailingList) {
    emailjs.init("user_hxQzNQMw7fcgsyh9My8Qt");
    emailjs.send("gmail", "glasgowguide", {
        "from_name": mailingList.name.value,
        "from_email": mailingList.emailaddress.value,
    })
    
    .then(
        function(response) {
            const el = document.getElementById("email-message");
            el.innerHTML = `Thank You!`;
        },
        function(error) {
            alert('Oops... ' + JSON.stringify(error));
        }
    
    
    );
    document.getElementById("mailingList").reset();
    return false; 
    
}









