/*const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Glasgow&APPID=31bfcbea061f0bd7c06d6bbf48bae278";

function getWeather(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL);
    xhr.send();

    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
        }  
    };
}

function writeToDocument() {
    getWeather(function(weather) {
        console.log(weather);
        document.getElementById("weather-info").innerHTML = weather.main ;
    });
}*/

$(document).ready(function() {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Glasgow&APPID=31bfcbea061f0bd7c06d6bbf48bae278";
    const el = $("#weather-info")
    var weather;
    var weatherDescription;
    var weatherIcon;
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
                console.dir(weather);
                $("#weather-info").html(`<p>${weatherDescription}<br>${temperature}, ${minTemperature}, ${maxTemperature}</p>`);
                }
                
               
            
            }
        );
});







