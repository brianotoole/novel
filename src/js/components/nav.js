

var trigger = $('#js-nav-toggle');

trigger.click(function() {
  $('#js-nav-mobile').toggleClass('nav-open');
  $('#js-nav-toggle').toggleClass('active');
  $('body').toggleClass('nav-open');
});

function navClose() {
	$('#js-nav-mobile').removeClass('nav-open');
  $('#js-nav-toggle').removeClass('active');
  $('body').removeClass('nav-open');
}

// Close on click outside
$(".nav-open-overlay").click(function() {
	navClose();
});

// Close on esc
$(document).on("keyup", function(e) {
	if (e.keyCode == 27) {
		navClose();
	}
});




/*
jQuery(document).ready(function($) {

	var ham = $('#js-nav-toggle'),
		drops = $('.nav__inner > li.menu-item-has-children > a > .arrow');

	ham.click(function(e) {

		$('.site-header__nav').toggleClass('nav-open');
		$('#js-nav-toggle').toggleClass('active');
		$('html').toggleClass('nav-open');

		$.each(drops, function() {

			$(this).removeClass('active').parent().next().removeClass('active');
			
		});

	});

	drops.click(function(e) {

		if ($(window).width() < 1025) {
			e.preventDefault();
			if ($(this).hasClass('active')) {

				$(this).removeClass('active').parent().next().removeClass('active');

			} else {

				$(this).addClass('active').parent().next().addClass('active');

			}
		}

	});

});
*/