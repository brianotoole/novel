
<script>

	jQuery(document).ready(function($) {

		$('.site-header__search').on('click', 'svg', function(e) {

			if ($('.site-header__search input[type="search"]').hasClass('shown') || $('.site-header__search input[type="search"]').val()) {

			} else {
				e.preventDefault();

				$('.site-header__search input[type="search"]').addClass('shown').focus();
			}
		});
		
	});

</script>
