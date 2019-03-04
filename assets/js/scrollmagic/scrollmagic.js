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
	
	/*var pinSceneS2 = new ScrollMagic.Scene({
				triggerElement: "#s2",
				triggerHook: 0,
				duration: "10%",
				reverse: false
		})
		.setPin("#s2", { pushFollowers: true }) 
		.addTo(controller);

	var pinSceneS3 = new ScrollMagic.Scene({
				triggerElement: "#s3",
				triggerHook: 0,
				duration: "10%",
				reverse: false
		})
		.setPin("#s3", { pushFollowers: true }) 
		.addTo(controller);

	var pinSceneS4 = new ScrollMagic.Scene({
				triggerElement: "#s4",
				triggerHook: 0,
				duration: "10%",
				reverse: false
		})
		.setPin("#s4", { pushFollowers: true }) 
		.addTo(controller); */


	//loop through each element
	$(".fade").each(function() {
		//build scene
		var ourScene = new ScrollMagic.Scene({
				triggerElement: this.children[2], 
				triggerHook: 0.9,
				reverse: false
			})
			.setClassToggle(this, "fade-in") // add class 
			.addTo(controller);
	});

});

