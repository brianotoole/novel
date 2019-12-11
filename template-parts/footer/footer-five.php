<?php 

$logo = get_field( 'footer_logo', 'options' ); 
$copyright = get_field( 'copyright', 'options' ); 
$heading = get_field( 'footer_header_05', 'options' ); 
$footer_cta = get_field( 'footer_cta_05', 'options' ); 

?>


<footer class="site-footer-five">
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
				<?php if( have_rows('footer_menu_05', 'option') ): ?>
					<ul class="site-footer__nav">
					<?php while( have_rows('footer_menu_05', 'option') ): the_row(); 
						$link = get_sub_field('footer_menu_link');
						?>
						<li>
							<a href="<?php echo $link['url']; ?>"><?php echo $link['title']; ?></a>
						</li>
					<?php endwhile; ?>
					</ul>
				<?php endif; ?>
			</div>
		</div>
		<div class="right main">
			<?php echo (!empty($heading) ? '<h5 class="footer__cta-headline">' . $heading . '</h5>' : '<h5 class="footer__cta-headline">Call to action title here</h5>') ?>
			<?php render_advanced_link($footer_cta) ?>
		</div>
	</div>
	<div class="container">				
		<p style="margin-top: 5px;"><small>&copy; <?php echo date("Y"); ?> <?php echo (!empty($copyright) ? $copyright : 'Company Name') ?></small></p></p>
</footer>