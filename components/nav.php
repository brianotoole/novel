<div class="nav-open-overlay"></div>

<header class="header site-header">
  <div class="container-fluid">
    <div class="row header__row">
      <div class="header__logo" id="site-logo">
        <a href="<?php echo get_site_url(); ?>" class="header__logo-wrapper">
          <img src="<?php echo get_template_directory_uri() . '/dist/img/logo-nosquaree.svg'; ?>" alt="logo" rel="logo" />
        </a><!--/.header__logo-wrapper-->
      </div><!--/.header__logo-->
      <div class="nav-toggle" id="js-nav-toggle">
        <div></div>
      </div><!--/.nav-toggle-->
    </div><!--/.header__row-->
  </div><!--/.container-->
</header>

  <!-- NAV-SLIDEOUT -->
  <div class="nav-mobile" id="js-nav-mobile">
    <?php
      wp_nav_menu( array(
        'theme_location'  => 'mobile',
        'menu_class'      => 'nav-mobile__inner',
        'container'       => false,
      ) );
    ?>
  </div><!--/.nav-mobile-->