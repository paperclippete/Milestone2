$(document).ready(function() {
    $("#GLA").click(function() {
        $(".site-heading").html("Glesga");
        $("#food-drink-h").html("Swally an' Scran?");
        $("#events-h").html("Aff Oot?");
        $("#weather-h").html("Dreich?");
    });
    
    $("#ENG").click(function() {
        $(".site-heading").html("Glasgow");
        $("#food-drink-h").html("Food and Drink");
        $("#events-h").html("What's On?");
        $("#weather-h").html("Weather");
    });
    
    $("#weather-comment-button").click(function() {
        $(".weather-comment-speech").removeClass(["hidden"]);
        $(".weather-comment-text").removeClass(["hidden"]);
        
        if ($("#weatherDescription")[0].innerText == "Rain") {
                $("#weather-comment").html("Aww naw! Git yer brolly!")
        }
        else if ($("#weatherDescription")[0].innerText == "Clouds") {
                $("#weather-comment").html("Ach it's dreich!")
        }
        else if ($("#weatherDescription")[0].innerText == "Sun") {
                $("#weather-comment").html("Taps Aff!")
        }
        else if ($("#weatherDescription")[0].innerText == "Snow") {
                $("#weather-comment").html("Baltic! Pull a sickie!")
        }
        else $("#weather-comment").html("This weather's mental!")
    });
})