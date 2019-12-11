<?php if (is_page_template('templates/home.php')) : ?>
<section class="section--md section--no-pad">
<?php else : ?>
<section class="section--md section--no-pad-top">
<?php endif; ?>
  <div class="container" id="scrolling-section">
    <div id="background-scroller"></div>
    <div class="text-overlay js-reveal-text">
      <?php the_field('text_on_top') ?>
    </div>
  </div>
</section>