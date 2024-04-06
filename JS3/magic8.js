// Barba Load Wrapper
barba.hooks.afterEnter(() => {
	
	if(document.querySelector("#step2")) {
		var videostep2 = document.getElementById('step2');
		videostep2.pause();
		videostep2.currentTime = 0;
		videostep2.play();
	}
	if(document.querySelector("#step3")) {
		var videostep3 = document.getElementById('step3');
		videostep3.pause();
		videostep3.currentTime = 0;
		videostep3.play();
	}

});