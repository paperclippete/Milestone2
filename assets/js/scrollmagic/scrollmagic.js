$(document).ready(function() {
    // basic initialization
    var controller = new ScrollMagic.Controller();

    // passing options
    var controller = new ScrollMagic.Controller({container: "#scroll-section", loglevel: 3});
    
    // with a newly created scene.
    controller.addScene(new ScrollMagic.Scene({ 
        duration: 100,
        offset: 200,
        triggerHook: "onEnter",
        reverse: false}));
    
        
    
})

/*$(document).ready(function(){

	// init ScrollMagic
	var controller = new ScrollMagic.Controller();
	
	//pin intro
	var pinIntroScene = new ScrollMagic.Scene({
	    triggerElement: "#intro",
	    triggerHook: 0,
	    duration: "30%" //undo?
	})
	.setPin("#intro", {pushFollowers: false}) //remove pushFollowers?
	.addTo(controller);
	
	// unpin intro pin
	var pinIntroScene2 = new ScrollMagic.Scene({
	    triggerElement: "#project01",
	    triggerHook: 0.54,
	    
	})
	.setPin("#intro", {pushFollowers: false}) //remove pushFollowers?
	.addTo(controller);
	
	
	//parallax scene
	var parallaxTL = new TimelineMax();
	parallaxTL
		.from(".content-wrapper", 0.6, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		.from(".bcg", 1.5, {y: "-50%", ease:Power0.easeNone}, 0)
		;
	
	var slideParallaxScene = new ScrollMagic.Scene({
	    triggerElement: ".bcg-parallax",
	    triggerHook: 1,
	    duration: "100%"
	    
	})
	.setTween(parallaxTL)//TweenMax) //.from(".bcg", 0.5, {y: "-30%", ease:Power0.easeNone})
	.addIndicators()
	.addTo(controller);
	
	//loop through each .project element
    $(".project").each(function(){
        //build scene
    	var ourScene = new ScrollMagic.Scene ({
    	    triggerElement: this.children[0], //used console.log(this) to find the starting point of the image
    	    //duration: "90%",
    	    triggerHook: 0.9,
    	    reverse: false
    	})
        .setClassToggle(this, "fade-in") // add class 
        .addIndicators({
            //change indicators to make clearer
            name: "fade scene",
            colorTrigger: "black",
            colorStart: "#75c695",
            colorEnd: "pink"
        })
        .addTo(controller);
        });

}); */


















