
<?php /* Template Name: Studio */

// Header
get_header();

// Hero
get_template_part('template-parts/hero', '');

// Services
get_template_part('template-parts/services', '');

// Alternating Content
render_image_content('');

// Team
get_template_part('template-parts/team-members', '');

// Scrolling
get_template_part('template-parts/scrolling-background', '');

// Footer
get_footer();

?>