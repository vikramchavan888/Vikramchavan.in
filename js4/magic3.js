// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// https://www.notion.so/timothyricks/Anime-js-tricksText-letter-animation-aff4b1da3176445c8b5e4ae892cd006c
// Copyright start
// Â© Code by T.RICKS, https://www.tricksdesign.com/
// You have the license to use this code in your projects but not redistribute it to others
// Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks

// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {
var wordWrap = tricksWord.item(i);
wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksword">$2</span>');
}

var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {
   var letterWrap = tricksLetter.item(i);
   letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

// Copyright end


////////


//GSAP 3 introduces advanced stagger values
var grid = [8,8], //[rows, columns]
    tl = gsap.timeline({repeat: 0, repeatDelay: 0});

function animateBoxes(from, axis, ease) {
  //one stagger call does all the animation:
  tl.from(".grid .flex-col", {
      duration: .75,
      scale: 0.001, 
      rotate: 8,
      yPercent: 40,
      ease: "power1.inOut",
      delay: .5,
      stagger: {
        amount: 2, 
        grid: grid, 
        axis: axis, 
        ease: ease,
        from: from,
        yoyo: true, 
        repeat: 3, 
      },
      onStart: leaveLoad
    }
  );
}

TweenLite.to(".loader-overlay", 0.5, { 
  autoAlpha: 0
});

animateBoxes("left");

function leaveLoad() {
  TweenLite.to(".loader", 2, { 
    backgroundColor: "rgba(0, 0, 0, 0)",
    delay: 3.5,
    ease: "none"
  });
  TweenLite.to(".loader", .25, { 
    autoAlpha: 0,
    delay: 4.75,
  });
  TweenLite.from(".video-title h1", 2, { 
    letterSpacing: "25vh",
    delay: 3.5,
    ease: "expo.out",
    clearProps: "all"
  });
}



////////

  
gsap.registerPlugin(ScrollTrigger);

// ScrollTriggers for all Slides
ScrollTrigger.defaults({
  toggleActions: "restart none none reset",
  scroller: ".vertical-slider",
  start: "0% 100%",
  end: "100% 0%",
  markers: false,
});

// SLIDE 0

gsap.to(".video-title", {
  scrollTrigger: {
    trigger: ".vertical-single-slide-0 + .vertical-single-slide", 
    start: "0% 100%",
    end: "50% 50%",
    scrub: true,
    
  },
  scaleX: 0.02,
  duration: .6,
  ease: "power2.out"
});

gsap.from(".vertical-single-slide-1 #uk-slider-1", {
  scrollTrigger: {
    trigger: ".vertical-single-slide-1 #uk-slider-1", 
    start: "bottom bottom",
    scrub: true,
  },
  onComplete: restartSlider1
});

function restartSlider1() {
  UIkit.slider('#uk-slider-1').show(0);
};

// Disable GSAP on Mobile
// Source: https://greensock.com/forums/topic/26325-disabling-scrolltrigger-on-mobile-with-mediamatch/
ScrollTrigger.matchMedia({
	
  // desktop 
  "(min-width: 541px)": function() {

var defaultRotate = 0
var defaultDuration = 1
var defaultEase = "power3.out"
var defaultY = 200
var defaultStagger = 0.03

var defaultYH2 = 150
var defaultXH2 = 0
var defaultRotateH2 = 6
var defaultDurationH2 = .6
var defaultEaseH2 = "power2.out"
var defaultStaggerH2 = .03

var defaultYDescription = "2em"
var defaultRotateDescription = 2
var defaultDurationDescription = .75
var defaultEaseDescription = "power2.inOut"
var defaultOpacityDescription = 0

// START SLIDES

// SLIDE 1
gsap.from(".vertical-single-slide-1 .s-b", {
  scrollTrigger: ".vertical-single-slide-1 .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});


// gsap.from(".vertical-single-slide-1 .s-l", {
//   scrollTrigger: ".vertical-single-slide-1 .slide-content", 
//   xPercent: - defaultY,
//   rotate: defaultRotate,
//   duration: defaultDuration,
//   ease: defaultEase,
//   stagger: defaultStagger,
// });

// gsap.from(".vertical-single-slide-1 .s-r", {
//   scrollTrigger: ".vertical-single-slide-1 .slide-content", 
//   xPercent: defaultY,
//   rotate: defaultRotate,
//   duration: defaultDuration,
//   ease: defaultEase,
//   stagger: defaultStagger,
// });

gsap.from(".vertical-single-slide-1 .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-1 .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-1 .description .d-inner", {
  scrollTrigger: ".vertical-single-slide-1 .description", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: defaultRotateDescription,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription
});

// SLIDE 2
gsap.from(".vertical-single-slide-2 .s-b", {
  scrollTrigger: ".vertical-single-slide-2 .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});

gsap.from(".vertical-single-slide-2 .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-2 .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-2 .description .d-inner", {
  scrollTrigger: ".vertical-single-slide-2 .description", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: defaultRotateDescription,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription
});


// SLIDE 3
gsap.from(".vertical-single-slide-3 .s-b", {
  scrollTrigger: ".vertical-single-slide-3 .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});

gsap.from(".vertical-single-slide-3 .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-3 .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-3 .description .d-inner", {
  scrollTrigger: ".vertical-single-slide-3 .description", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: defaultRotateDescription,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription
});



// SLIDE 4
gsap.from(".vertical-single-slide-4 .s-b", {
  scrollTrigger: ".vertical-single-slide-4 .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});

gsap.from(".vertical-single-slide-4 .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-4 .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-4 .description .d-inner", {
  scrollTrigger: ".vertical-single-slide-4 .description", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: defaultRotateDescription,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription
});



// SLIDE 5
gsap.from(".vertical-single-slide-5 .s-b", {
  scrollTrigger: ".vertical-single-slide-5 .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});

gsap.from(".vertical-single-slide-5 .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-5 .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-5 .description .d-inner", {
  scrollTrigger: ".vertical-single-slide-5 .description", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: defaultRotateDescription,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription
});



// SLIDE 6
gsap.from(".vertical-single-slide-6 .s-b", {
  scrollTrigger: ".vertical-single-slide-6 .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});

gsap.from(".vertical-single-slide-6 .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-6 .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-6 .description .d-inner", {
  scrollTrigger: ".vertical-single-slide-6 .description", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: defaultRotateDescription,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription
});



// SLIDE 7
gsap.from(".vertical-single-slide-7 .s-b", {
  scrollTrigger: ".vertical-single-slide-7 .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});

gsap.from(".vertical-single-slide-7 .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-7 .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-7 .description .d-inner", {
  scrollTrigger: ".vertical-single-slide-7 .description", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: defaultRotateDescription,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription
});



// SLIDE 8
gsap.from(".vertical-single-slide-8 .s-b", {
  scrollTrigger: ".vertical-single-slide-8 .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});

gsap.from(".vertical-single-slide-8 .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-8 .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-8 .description .d-inner", {
  scrollTrigger: ".vertical-single-slide-8 .description", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: defaultRotateDescription,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription
});



// SLIDE 9
gsap.from(".vertical-single-slide-9 .s-b", {
  scrollTrigger: ".vertical-single-slide-9 .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});

gsap.from(".vertical-single-slide-9 .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-9 .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-9 .description .d-inner", {
  scrollTrigger: ".vertical-single-slide-9 .description", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: defaultRotateDescription,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription
});



// SLIDE 10
gsap.from(".vertical-single-slide-10 .s-b", {
  scrollTrigger: ".vertical-single-slide-10 .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});

gsap.from(".vertical-single-slide-10 .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-10 .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-10 .description .d-inner", {
  scrollTrigger: ".vertical-single-slide-10 .description", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: defaultRotateDescription,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription
});



// SLIDE 11
gsap.from(".vertical-single-slide-11 .s-b", {
   scrollTrigger: ".vertical-single-slide-11 .slide-content", 
   yPercent: defaultY,
   rotate: defaultRotate,
   duration: defaultDuration,
   ease: defaultEase,
   stagger: defaultStagger,
   clearProps: "all",
 });
 
 gsap.from(".vertical-single-slide-11 .tricksword .letter", {
   scrollTrigger: ".vertical-single-slide-11 .tricks", 
   yPercent: defaultYH2,
   xPercent: defaultXH2,
   rotate: defaultRotateH2,
   duration: defaultDurationH2,
   ease: defaultEaseH2,
   stagger: defaultStaggerH2
 });
 
 gsap.from(".vertical-single-slide-11 .description .d-inner", {
   scrollTrigger: ".vertical-single-slide-11 .description", 
   y: defaultYDescription,
   opacity: defaultOpacityDescription,
   rotate: defaultRotateDescription,
   duration: defaultDurationDescription,
   ease: defaultEaseDescription
 });

// SLIDE LAST (CONTACT)

gsap.from(".vertical-single-slide-last .s-b", {
  scrollTrigger: ".vertical-single-slide-last .slide-content", 
  yPercent: defaultY,
  rotate: defaultRotate,
  duration: defaultDuration,
  ease: defaultEase,
  stagger: defaultStagger,
  clearProps: "all",
});

gsap.from(".vertical-single-slide-last .tricksword .letter", {
  scrollTrigger: ".vertical-single-slide-last .tricks", 
  yPercent: defaultYH2,
  xPercent: defaultXH2,
  rotate: defaultRotateH2,
  duration: defaultDurationH2,
  ease: defaultEaseH2,
  stagger: defaultStaggerH2
});

gsap.from(".vertical-single-slide-last .footer-link-btn", {
  scrollTrigger: ".vertical-single-slide-last .footer-links-bottom", 
  y: defaultYDescription,
  opacity: defaultOpacityDescription,
  rotate: 8,
  duration: defaultDurationDescription,
  ease: defaultEaseDescription,
  stagger: .1
});

},

// mobile
"(max-width: 540px)": function() {
  return function() {
    gsap.kill(); 
    // other cleanup code can go here. 
  };
}

});