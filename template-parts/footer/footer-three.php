<?php 

$logo = get_field( 'footer_logo', 'options' ); 
$copyright = get_field( 'copyright', 'options' ); 

?>


<footer class="site-footer-three">
	<div class="container">
        <a class="site-footer__logo" href="<?php echo home_url() ?>">
            <?php if($logo) : ?>
                <img src="<?php echo $logo['url'] ?>">
            <?php else : ?>
                <h3>LOGO</h3>
            <?php endif; ?>
        </a>

        <?php if( have_rows('footer_menu_03', 'option') ): ?>
            <ul class="site-footer__nav">
            <?php while( have_rows('footer_menu_03', 'option') ): the_row(); 
                $link = get_sub_field('footer_menu_link_03');
                ?>
                <li>
                    <a href="<?php echo $link['url']; ?>"><?php echo $link['title']; ?></a>
                </li>
            <?php endwhile; ?>
            </ul>
        <?php endif; ?>

        <?php get_template_part( "components/social_links" ) ?>

        <p><small>&copy; <?php echo date("Y"); ?> <?php echo (!empty($copyright) ? $copyright : 'Company Name') ?></small></p>
    </div>
</footer>