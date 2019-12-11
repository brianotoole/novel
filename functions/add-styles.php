<?php

include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

// add stylesheets
function spx_styles() {

    // change version based on modified date
    $ver = filemtime( get_template_directory() . '/dist/css/main.css' );
    // main stylesheet
    wp_enqueue_style( 'main', get_stylesheet_directory_uri() . '/dist/css/main.css', array(), $ver );

    // slick carousel
    wp_enqueue_style( 'slick-carousel', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css', array(), '1.8.1' );

}
add_action( 'wp_enqueue_scripts', 'spx_styles' );

?>
