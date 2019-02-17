
/*$(document).ready(function() {
    const baseURL = "https://www.skiddle.com/api/v1/events/search/?api_key=0e26c0d381627cb1fb5c75426899a5d3&latitude=55.8608853&longitude=-4.2509067&radius=3&eventcode=LIVE&order=date&description=1";
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
                
                $("#weather-info").html(`<p>The current weather is ${weatherDescription}<br> current temperature is ${temperature}, today's high ${maxTemperature}, today's low ${minTemperature} </p>`);
                console.log(data);
                }
            }
        );
});*/

const baseURL = "https://api.list.co.uk/v1/events";

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
          document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", baseURL);
xhr.send();







