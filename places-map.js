function initMap() {
    map = new google.maps.Map(document.getElementById('places-map'), {
          center: {lat: 55.863637, lng: -4.254477}, 
          zoom: 14
    });
    

    var Sloans = {
        position: {lat:55.8591933, lng:-4.2557454},
        name: "Sloans",
        type: "drinks",
        description: "Decadent venue over 3 floors with Grand Ballroom, stunning central staircase and outside courtyard. Great cocktails and live music!",
        website: "http://www.sloansglasgow.com/",
        phone: "0141 221 8886"
        
    };
    
    var Gin71 = {
        position: {lat:55.8586844, lng:-4.2525978},
        name:"Gin 71", 
        type: "drinks",
        description: "Cosy venue in Virginia Court, great cocktails and boozy afternoon teas with an outdoor courtyard.",
        website: "http://www.gin71.com/",
        phone: "0141 553 2326"
        
    };
    
    var Tingle = {
        position: {lat:55.859088, lng:-4.2582627},
        name: "Tingle",
        type: "drinks",
        description: "All-day bar with a huge drinks menu, simple food and a nightly pre-club party with live DJs.",
        website: "http://www.tinglebar.co.uk/",
        phone: "0141 222 2000"
        
    };
    
    var Bookclub = {
        position: {lat:55.871177, lng:-4.3043538},
        name: "Hillhead Bookclub",
        type: "drinks",
        description: "Characterful space with cocktails, ping-pong, retro computer games, vintage fairs and bingo.",
        website: "http://www.hillheadbookclub.com/",
        phone: "0141 576 1700"
        
    };
    
    var Piper = {
        position: {lat:55.8661203, lng:-4.2677899},
        name: "The Piper Whisky Bar",
        type: "drinks",
        description: "Airy bar with wood-furnished interior, for draught beers, whiskies, pub grub and live music.",
        website: "http://www.thepiperbar.com/",
        phone: "0141 552 1740"
        
    };
    
    var Alston = {
        position: {lat:55.8604437, lng:-4.2597723},
        name: "Alston Bar & Beef",
        type: "eats",
        description: "Smart, cellar-like restaurant and gin bar with mood lighting, for carefully sourced Scottish steak.",
        website: "http://www.alstonglasgow.co.uk/",
        phone: "0141 221 7627"
        
    };
    
    var Anchor = {
        position: {lat:55.8611287, lng:-4.2524365},
        name: "The Anchor Line",
        type: "eats",
        description: "Opulent New York-style bistro serving Scottish produce in the former first class booking offices.",
        website: "http://www.theanchorline.co.uk/",
        phone: "0141 248 1434"
        
    };
    
    var MeatBar = {
        position: {lat:55.863674, lng:-4.2600429},
        name: "Meat Bar",
        type: "eats",
        description: "Hip basement venue for Scottish and American craft beers, home-smoked meats and savoury cocktails.",
        website: "http://www.themeatbar.co.uk/",
        phone: "0141 204 3605"
        
    };
    
    var FannyTrollopes = {
        position: {lat:55.864621, lng:-4.2854813},
        name: "Fanny Trollopes",
        type: "eats",
        description: "Buzzy neighbourhood bistro serving seasonal meat and fish in a cosy, candlelit dining room.",
        website: "http://www.fannytrollopes.co.uk/",
        phone: "0141 564 6464"
        
    };
    
    var Chip = {
        position: {lat:55.8748901, lng:-4.2943172},
        name: "Ubiquitous Chip",
        type: "eats",
        description: "Artistic brasserie dishes that display their provenance, served in a leafy space with fairy lights.",
        website: "http://www.ubiquitouschip.co.uk/",
        phone: "0141 334 5007"
        
    };
    
    var markerA = new google.maps.Marker({
    position: Sloans.position,
    map: map,
    title: Sloans.name
    });
    
    markerA.addListener('click', function() {
    infowindowA.open(map, markerA);
    });

    var infowindowA = new google.maps.InfoWindow({
    content: contentcreator(Sloans)
    });
    
    var markerB = new google.maps.Marker({
        position: Gin71.position,
        map: map,
        title: Gin71.name
        });
        
    markerB.addListener('click', function() {
    infowindowB.open(map, markerB);
    });

    var infowindowB = new google.maps.InfoWindow({
    content: contentcreator(Gin71)
    });
    
    
    var markerC = new google.maps.Marker({
        position: Tingle.position,
        map: map,
        title: Tingle.name
    });
    
    markerC.addListener('click', function() {
    infowindowC.open(map, markerC);
    });

    var infowindowC = new google.maps.InfoWindow({
    content: contentcreator(Tingle)
    });
    
    var markerD = new google.maps.Marker({
        position: Bookclub.position,
        map: map,
        title: Bookclub.name
        });
        
    markerD.addListener('click', function() {
    infowindowD.open(map, markerD);
    });

    var infowindowD = new google.maps.InfoWindow({
    content: contentcreator(Bookclub)
    });    
            
            
    var markerE = new google.maps.Marker({
        position: Piper.position,
        map: map,
        title: Piper.name
        });
        
    markerE.addListener('click', function() {
    infowindowE.open(map, markerE);
    });

    var infowindowE = new google.maps.InfoWindow({
    content: contentcreator(Piper)
    });    
        
    var markerF = new google.maps.Marker({
        position: Alston.position,
        map: map,
        title: Alston.name
        });
    
    markerF.addListener('click', function() {
    infowindowF.open(map, markerF);
    });

    var infowindowF = new google.maps.InfoWindow({
    content: contentcreator(Alston)
    });      
        
    var markerG = new google.maps.Marker({
        position: Anchor.position,
        map: map,
        title: Anchor.name
        });
        
    markerG.addListener('click', function() {
    infowindowG.open(map, markerG);
    });

    var infowindowG = new google.maps.InfoWindow({
    content: contentcreator(Anchor)
    }); 
    
    var markerH = new google.maps.Marker({
        position: MeatBar.position,
        map: map,
        title: MeatBar.name
        });
    markerH.addListener('click', function() {
    infowindowH.open(map, markerH);
    });

    var infowindowH = new google.maps.InfoWindow({
    content: contentcreator(MeatBar)
    });     
        
    var markerI = new google.maps.Marker({
        position: FannyTrollopes.position,
        map: map,
        title: FannyTrollopes.name
        });
    
    markerI.addListener('click', function() {
    infowindowI.open(map, markerI);
    });

    var infowindowI = new google.maps.InfoWindow({
    content: contentcreator(FannyTrollopes)
    });     
        
    var markerJ = new google.maps.Marker({
        position: Chip.position,
        map: map,
        title: Chip.name
        });
        
    markerJ.addListener('click', function() {
    infowindowJ.open(map, markerJ);
    });

    var infowindowJ = new google.maps.InfoWindow({
    content: contentcreator(Chip)
    });     
            
            function contentcreator(name) {
            return `<h3 class="iWTitle">${name.name}</h3>
            <p>${name.description}</p>
            <p>Click<a href=${name.website}>here</a> for more info or phone
            ${name.phone}.</p>`;
    }

            //var markerCluster = new MarkerClusterer(map, marker,
            //{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});


            }