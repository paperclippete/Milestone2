$(document).ready(function() {

	// init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//pin intro
	var pinScene = new ScrollMagic.Scene({
			triggerElement: "#intro",
			triggerHook: 0,
			duration: "30%" 
		})
		.setPin("#intro", { pushFollowers: true }) 
		.addTo(controller);
	
	
	//loop through each element
	$(".fade").each(function() {
		//build scene
		var ourScene = new ScrollMagic.Scene({
				triggerElement: this, 
				triggerHook: 0.9,
				reverse: false
			})
			.setClassToggle(this, "fade-in") // add class 
			.addTo(controller);
	});

});

