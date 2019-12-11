/*********************************************************
  Main JS Entry Point
*********************************************************/

import "../scss/tailwind.scss";
import "../scss/theme.scss";

// GLOBAL
require("./global/events.js");

// COMPONENTS
require("./components/nav.js");
require("./components/social-sharing.js");
require("./components/form.js");
require("./components/bs-modal.js");
//require("./components/slider-work.js");
//require("./jquery.waypoints.min.js");

// Classes
//import Modal from "./classes/modal";
//var modal = new Modal();

// TEMPLATES
//require('./templates/about.js');

var tl = new TimelineMax();
var steps = document.querySelectorAll(".js-reveal");
var text = document.querySelectorAll(".js-reveal-text");

var ctrl = new ScrollMagic.Controller({
  //addIndicators: true //debug only, requires 'debug.addIndicators.min.js'
});

$.each(steps, function(index, step) {
  new ScrollMagic.Scene({
    triggerElement: step,
    triggerHook: 0.8, //"onEnter",
    //offset: 100, // start after #px
    reverse: false
  })
    .setClassToggle(step, "animated")
    .addTo(ctrl);
});

$.each(text, function(index, step) {
  new ScrollMagic.Scene({
    triggerElement: step,
    triggerHook: 0.8, //"onEnter",
    //offset: 100, // start after #px
    reverse: false
  })
    .setClassToggle(step, "animated")
    .addTo(ctrl);
});

// Hero
/*
var heroItems = $(".hero > *");
heroItems.each(function() {
  tl.add(
    TweenMax.from($(this), 0.4, {
      autoAlpha: 0,
      y: -5,
      ease: Power0.easeOut
    })
  );
});
*/


// Team
function staggerInTeam() {
  var teamScene = new ScrollMagic.Scene({
    //scene options
    triggerElement: "#js-stagger-items",
    triggerHook: 0.8,
    reverse: false
  })
    .setTween(tl)
    .addTo(ctrl);
  return tl.staggerFrom(".stagger-item",0.05, {
    y: 5,
    autoAlpha: 0,
    ease: Power1.easeOut
  }, 0.05);
}
staggerInTeam();


// Fade Text;
$(document).ready(function() {
	$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    $('.hero__content').css({
      'margin-top': (scrollPos/4)+"px",
      'opacity': 1-(scrollPos/500)
    });
	});
});

// Disable jarallax on mobile
jarallax(document.querySelectorAll('.jarallax'), {
  disableParallax: /iPad|iPhone|iPod|Android/,
  disableVideo: /iPad|iPhone|iPod|Android/
});


// page transition
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1200,
    outDuration: 1200,
    //linkElement: '.animsition-link',
    loading: true, //true = show loading animation
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    overlay : false,
    //overlayClass : 'animsition-overlay-slide',
    //overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});