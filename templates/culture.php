
<?php /* Template Name: Culture */

// Header
get_header();

// Hero
get_template_part('template-parts/hero', '');

// Page Builder
//get_template_part('template-parts/page-builder');

// Alternating Content
render_image_content('');

// Slider - Culture
get_template_part('template-parts/slider-culture', '');

// Scrolling
get_template_part('template-parts/scrolling-background', '');

// Footer
get_footer();

?>