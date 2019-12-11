<?php 

$logo = get_field( 'footer_logo', 'options' ); 
$copyright = get_field( 'copyright', 'options' ); 


$address = get_field( 'footer_address_01', 'options' ); 
$phone = get_field( 'footer_phone_number_01', 'options' ); 
$email = get_field( 'footer_email_01', 'options' ); 
$heading = get_field( 'footer_header_01', 'options' ); 
$footer_form = get_field( 'footer_form_01', 'options' ); 

?>


<footer class="site-footer-one">
	<div class="container">
		<div class="left main">
			<div class="left">
				<a class="site-footer__logo" href="<?php echo home_url() ?>">
					<?php if($logo) : ?>
						<img src="<?php echo $logo['url'] ?>">
					<?php else : ?>
						<h3>LOGO</h3>
					<?php endif; ?>
				</a>
				<?php get_template_part( "components/social_links" ) ?>
			</div>
			<div class="right">
                <?php echo (!empty($address) ? $address : '<p>1234 Easy Street<br />Tampa FL, 33609</p>') ?>
                <?php echo (!empty($phone) ? '<a href="tel:'.$phone.'">' . $phone . '</a><br/>': '<a>813-888-9999</a><br />') ?>
                <?php echo (!empty($email) ? '<a href="mailto:'.$email.'">' . $email . '</a>': '<a>example@email.com</a>') ?>
			</div>
		</div>
		<div class="right main">
			<?php echo (!empty($heading) ? '<h5>' . $heading . '</h5>' : '<h5>Call to action title here</h5>') ?>
            <?php if(!empty($footer_form)) : ?>
                <?php render_gravityform( $footer_form ) ?>
            <?php endif; ?>
		</div>
    </div>

    <div class="container">
        <div class="left bottom">
            <p><small>&copy; <?php echo date("Y"); ?> <?php echo (!empty($copyright) ? $copyright : 'Company Name') ?></small></p>
        </div>
        <div class="right bottom">
            <?php if( have_rows('footer_menu_01', 'option') ): ?>
                <ul class="site-footer__nav">
                <?php while( have_rows('footer_menu_01', 'option') ): the_row(); 
                    $link = get_sub_field('footer_menu_link_01');
                    ?>
                    <li>
                        <a href="<?php echo $link['url']; ?>"><?php echo $link['title']; ?></a>
                    </li>
                <?php endwhile; ?>
                </ul>
            <?php endif; ?>
        </div>
    </div>
</footer>