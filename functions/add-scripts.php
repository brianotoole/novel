<?php
// add scripts
function spx_scripts() {

	if (!class_exists('CT_Component')) {

		// skip link focus fix
		//wp_enqueue_script( 'spx-skip-link-focus-fix', get_theme_file_uri( '/assets/js/skip-link-focus-fix.js' ), array(), '1.0', true );

		// tweenmax
		wp_enqueue_script( 'gsap', '//cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js', array(), false, true );

		// scrollmagic
		wp_enqueue_script( 'scroll-magic', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/ScrollMagic.js', array('jquery'), false, true );

		// jarallax
		wp_enqueue_script( 'jarallax', '//cdnjs.cloudflare.com/ajax/libs/jarallax/1.11.1/jarallax.min.js', array(), false, true );

		// animsition
		wp_enqueue_script( 'animsisition', '//cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/js/animsition.min.js', array(), false, true );

		// scroll magic - debug
		//wp_enqueue_script( 'scroll-magic-debug', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js', '1.0', false );

		// waypoints
		//$ver = filemtime( get_template_directory() . '/dist/js/jquery.waypoints.min.js');
		//wp_enqueue_script( 'vendor-waypoints', get_theme_file_uri( '/dist/js/jquery.waypoints.min.js' ), array('jquery'), $ver, true );

		// main script file
		$ver = filemtime( get_template_directory() . '/dist/js/main.js');
		wp_enqueue_script( 'xoo-scripts', get_theme_file_uri( '/dist/js/main.js' ), array('jquery'), $ver, true );

		$ver = filemtime( get_template_directory() . '/dist/js/jquery_plugins.js');
		wp_enqueue_script( 'xoo-jquery-plugins', get_theme_file_uri( '/dist/js/jquery_plugins.js' ), array('jquery'), $ver, true );

		// swiper carousel
		wp_enqueue_script( 'swiper-carousel', '//cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js', array('jquery'), '1.0', false );

	}
}
add_action( 'wp_enqueue_scripts', 'spx_scripts' );

function spx_admin_scripts() {

	wp_enqueue_script( 'spx-admin-scripts', get_template_directory_uri() . '/dist/js/admin.js', array('jquery'), $ver = false, true );

}
add_action( 'admin_enqueue_scripts', 'spx_admin_scripts' );
