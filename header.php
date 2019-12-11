<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>

  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
  <?php the_field('google_analytics_script_header', 'options') ?>

</head>

<?php
// Custom Field Group == Site Options
// $site_logo = get_field('site_logo', 'option');
?>

<body <?php body_class(); ?>>
  <div class="animsition" id="page">

    <?php

    get_component('nav');

    ?>