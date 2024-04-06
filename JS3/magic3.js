
// Animation (Don't touch)
function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		 setTimeout(() => {
			  done();
		 }, n);
	});
}


// Animation - Loading page First Time
function loadAnimation() {
	var tl = gsap.timeline();

	tl.set(".animate-fade-in", { 
		y: 100, 
		opacity: 0
	});

	tl.set(".home-intro-circle", { 
		scale: ".5"
	});

	tl.set(".load-box", {
		scale: "1"
	});

	tl.set(".main-fade", { 
		opacity: 0
	});

	tl.set(".inner-load-box-1", { 
		left: "-100%",
		width: "100%"
	});

	tl.set(".inner-load-box-2", { 
		left: "-100%",
		width: "100%"
	});

	tl.to(".inner-load-box-1", {
		left: "100%",
		duration: 1,
		ease: "Power3.easeInOut",
		delay: ".5"
	});

	tl.to(".inner-load-box-2", {
		left: "100%",
		duration: 1,
		ease: "Power3.easeInOut",
		delay: ".1"
	},"-=1");

	tl.to(".load-box", {
		duration: 1,
		ease: "Power4.easeInOut",
		scale: ".5",
		delay: ".5"
	});

	tl.to(".loading-screen", {
		duration: .5,
		ease: "Power0.easeOut",
		opacity: "0",
		delay: "1"
	},"-=1.75");

	tl.to(".main-fade", {
		duration: 1.25,
		ease: "Power0.easeOut",
		opacity: "1",
		delay: ".5"
	},"-=1.25");

	tl.to(".animate-fade-in", { 
		ease: "Power4.easeOut",
		duration: 1, 
		y: 0, 
		opacity: 1, 
		stagger: .05, 
		delay: 0
	},"-=1");

	tl.to(".home-intro-circle", {
		duration: 2,
		ease: "Power4.easeInOut",
		scale: "1"
	},"-=2");

	tl.set(".loading-screen", { 
		opacity: 0
	});
}

// Animation - Transition
function pageTransition() {
	var tl = gsap.timeline();


	tl.to(".main-fade", {
		duration: .3,
		ease: "Power0.easeIn",
		opacity: "0"
	});

	tl.set(".main-fade", {
		y: 0, 
		opacity: "1"
	});

	tl.set(".loading-screen", { 
		opacity: 0
	});

}


// Animation - Loading page
function contentAnimation() {
	var tl = gsap.timeline();

	tl.set(".home-intro-circle", { 
		scale: ".75",
		opacity: 0,
	});

	tl.set(".loading-screen", { 
		opacity: 0
	});

	tl.set(".animate-fade-in", { 
		y: 100, 
		opacity: 0
	});

	tl.set(".main-fade", { 
		opacity: 0
	});

	tl.to(".main-fade", {
		duration: 1.25,
		ease: "Power0.easeOut",
		opacity: "1",
		delay: "0"
	});

	tl.to(".animate-fade-in", { 
		ease: "Power4.easeOut",
		duration: 1, 
		y: 0, 
		opacity: 1, 
		stagger: .05, 
		delay: 0
	},"-=1");

	tl.to(".home-intro-circle", {
		opacity: 1,
		duration: 1.25,
		ease: "Power4.easeOut",
		scale: "1"
	},"-=1.25");

}

if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }

// Call animation 
$(function () {
	barba.init({

		sync: true,

		transitions: [
			{
				async once(data) {
					initPlayVideoInview();
					loadAnimation();
				},

				async enter(data) {
					contentAnimation();
				},

				async leave(data) {
					const done = this.async();

					pageTransition();
					await delay(250);
					$(window).scrollTop(0);
					
					done();
				}, 
				async beforeEnter(data) {
					initPlayVideoInview();
				}
			},
		],
	});
});

/**
* Play Video Inview
*/
function initPlayVideoInview() {

	if(document.querySelector("#videostep4")) {
		var videostep4 = document.getElementById('videostep4');
		videostep4.pause();
		videostep4.currentTime = 0;
		videostep4.play();
	}

}