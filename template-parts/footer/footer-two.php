<?php

  $logo = get_field('site_logo', 'option');
  $copyright = get_field( 'copyright', 'options' ); 

  $menu_title_1 = get_field( 'footer_header_02_1', 'options' );
  $menu_title_2 = get_field( 'footer_header_02_2', 'options' );
  $menu_title_3 = get_field( 'footer_header_02_3', 'options' );
  $menu_title_4 = get_field( 'footer_header_02_4', 'options' );
  $menu_group_1 = get_field( 'footer_menu_02_1', 'options' );
  $menu_group_2 = get_field( 'footer_menu_02_2', 'options' );
  $menu_group_3 = get_field( 'footer_menu_02_3', 'options' );
  $menu_group_4 = get_field( 'footer_menu_02_4', 'options' );

?>

<footer class="footer-two">
  <div class="container">


    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3 footer__block-sec">
        <h5 class="footer__menu-title"><?php echo $menu_title_1 ?></h5>
        <ul>
          <?php foreach ($menu_group_1 as $link): ?>
          <li class="footer__menu-item"><a
              href="<?php echo $link["footer_menu_link_02_1"]["url"] ?>"><?php echo $link["footer_menu_link_02_1"]["title"] ?></a></li>
          <?php endforeach ?>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3 footer__block-sec">
        <h5 class="footer__menu-title"><?php echo $menu_title_2 ?></h5>
        <ul>
          <?php foreach ($menu_group_2 as $link): ?>
          <li class="footer__menu-item"><a
              href="<?php echo $link["footer_menu_link_02_2"]["url"] ?>"><?php echo $link["footer_menu_link_02_2"]["title"] ?></a></li>
          <?php endforeach ?>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3 footer__block-sec">
        <h5 class="footer__menu-title"><?php echo $menu_title_3 ?></h5>
        <ul>
          <?php foreach ($menu_group_3 as $link): ?>
          <li class="footer__menu-item"><a
              href="<?php echo $link["footer_menu_link_02_3"]["url"] ?>"><?php echo $link["footer_menu_link_02_3"]["title"] ?></a></li>
          <?php endforeach ?>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3 footer__block-sec">
        <h5 class="footer__menu-title"><?php echo $menu_title_4 ?></h5>
        <?php get_template_part( "components/social_links" ) ?>
      </div>
    </div>


    <div class="footer__contact-block">
      <div class="footer__logo">
        <a href="<?php echo get_site_url(); ?>" class="site-footer__logo-wrapper">
            <?php if($logo) : ?>
                <img src="<?php echo $logo['url'] ?>">
            <?php else : ?>
                <h3>LOGO</h3>
            <?php endif; ?>
        </a>
      </div>
      <div class="footer__contact-info">
        <div><?php echo (!empty($address) ? $address : '<span>1234 Easy Street<br />Tampa FL, 33609</span>') ?></div>
        <div><?php echo (!empty($phone) ? '<a href="tel:'.$phone.'">' . $phone . '</a><br/>': '<a>813-888-9999</a><br />') ?></div>
        <div><?php echo (!empty($email) ? '<a href="mailto:'.$email.'">' . $email . '</a>': '<a>example@email.com</a>') ?></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-5 footer__copyright">
        <p><small>&copy; <?php echo date("Y"); ?> <?php echo (!empty($copyright) ? $copyright : 'Company Name') ?></small></p>
      </div>
      <div class="col-xs-12 col-sm-7 footer__pivacy">
        <ul class="footer__privacy-section">
          <?php foreach ($menu_group_4 as $link): ?>
          <li class="footer__menu-item"><a
              href="<?php echo $link["footer_menu_link_02_4"]["url"] ?>"><?php echo $link["footer_menu_link_02_4"]["title"] ?></a></li>
          <?php endforeach ?>
        </ul>
      </div>
    </div>


  </div>
</footer>

<?php wp_footer(); ?>
</div>
<!--#page-->

</body>


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
<script>
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
</script>


</html>