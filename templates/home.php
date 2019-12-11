
<?php /* Template Name: Home */

// Header
get_header();

// Hero
get_template_part('template-parts/hero', '');

// Studio
get_template_part('template-parts/studio-callout', '');

// Slider
//get_template_part('template-parts/slider', '');

// Services
get_template_part('template-parts/services', '');

// Scrolling
get_template_part('template-parts/scrolling-background', '');


// Insights
get_template_part('template-parts/insights-callout', '');


// Footer
get_footer();

?>