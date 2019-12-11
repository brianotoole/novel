
jQuery(document).ready(function($) {

	// Modify Gravity Forms file input layouts for styling
	var fileInputs = $('input[type="file"]');

	$.each(fileInputs, function(key, val) {

		$(this).clone().appendTo($(this).parent().prev().addClass('file').append());
		$(this).remove();
	});
	
});
