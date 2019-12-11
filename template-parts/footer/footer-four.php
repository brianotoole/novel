<?php

$logo = get_field( 'footer_logo', 'options' );
$copyright = get_field( 'copyright', 'options' );


$address = get_field( 'footer_address_04', 'options' );
$phone = get_field( 'footer_phone_number_04', 'options' );
$email = get_field( 'footer_email_04', 'options' );
$heading = get_field( 'footer_header_04', 'options' );
$footer_form = get_field( 'footer_form_04', 'options' );

?>


<footer class="site-footer-four">
	<div class="site-footer-four__wrap">
		<div class="left main">
			<div class="left">
				<a class="site-footer__logo" href="<?php echo home_url() ?>">
					<?php if($logo) : ?>
						<img src="<?php echo $logo['url'] ?>">
					<?php else : ?>
						<h3>LOGO</h3>
					<?php endif; ?>
                </a>
                <div class="site-footer__nav">
                    <?php
                        wp_nav_menu(array(
                            'theme_location'  => 'footer',
                            'menu_class'      => '',
                            'container'       => false,
                        ));
                    ?>
                </div>
            </div>
            <div class="right">
            </div>
		</div>
		<div class="right main">
            <div class="copyright">
                <?php echo (!empty($copyright) ? '<a href="mailto:'.$email.'">' . $copyright . '</a>': '<a>Copyright 2019</a>') ?>
            </div>
            <div class="right">
                <?php get_template_part( "components/social_links" ) ?>
            </div>
		</div>
    </div>

</footer>