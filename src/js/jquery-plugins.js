
(function ( $ ) {

	// Use for a single opener and modal
	$.modal = function () {

		let issues = false

		let config = $.extend({
			opener: null,
			modal: null,
			style: 'default',
			scroll: false,
			esc: true,
			bgClick: true,
			videoOnly: false,
			onBeforeOpen: null,
			onAfterOpen: null,
			onBeforeClose: null,
			onAfterClose: null,
		}, options )

		// Warnings/Errors
		if (config.opener === null) {
			issues = true
			console.error('Missing \'opener\' setting. Your modal will never open without this.')
		}
		if (config.modal === null) {
			issues = true
			console.error('Missing \'modal\' setting. Your modal will never open without this.')
		}

		let
		opener = $(config.opener),
		modal = $(config.modal)

		// Add must-use html tags
		prepareModal(config, opener, modal)
		
		opener.on('click', function() {

			openModal(config, opener, modal)

		})

		modal.on('click', function(e) {

			if ($(e.target).hasClass('open')) {
				closeModal(config, opener, modal)
			}

		})

		modal.find('.xoo-modal__close').on('click', function() {

			closeModal(config, opener, modal)

		})

		if (config.esc) {
			$(document).keyup(function(e) {
				if (e.keyCode == 27) {

					closeModal(config, opener, modal)

				}
			})
		}

	}

	// Use if openers and modals are in the same repeated scope
	$.fn.modals = function ( options ) {

		let issues = false

		let config = $.extend({
			openers: null,
			modals: null,
			style: 'default',
			scroll: false,
			esc: true,
			bgClick: true,
			videoOnly: false,
			onBeforeOpen: null,
			onAfterOpen: null,
			onBeforeClose: null,
			onAfterClose: null,
		}, options )

		// Warnings/Errors
		if (config.openers === null) {
			issues = true
			console.error('Missing \'openers\' setting. Your modals will never open without this.')
		}
		if (config.modals === null) {
			issues = true
			console.error('Missing \'modals\' setting. Your modals will never open without this.')
		}

		if (issues)
			return


		// The magic is below
		this.each(function() {

			let
			root = $(this),
			opener = $(this).find(config.openers),
			modal = $(this).find(config.modals)

			// Prepare modal
			prepareModal(config, opener, modal)
			
			opener.on('click', function() {

				openModal(config, opener, modal)

			})

			modal.on('click', function(e) {

				if ($(e.target).hasClass('open')) {
					closeModal(config, opener, modal)
				}

			})

			modal.find('.xoo-modal__close').on('click', function() {

				closeModal(config, opener, modal)

			})

			if (config.esc) {
				$(document).keyup(function(e) {
					if (e.keyCode == 27) {

						closeModal(config, opener, modal)

					}
				})
			}

		})

		return this

	}

	// Use if modals be all over the place
	$.messyModals = function ( options ) {

		let issues = false

		var config = $.extend({
			openers: null,
			style: 'default',
			scroll: false,
			esc: true,
			bgClick: true,
			videoOnly: false,
			onBeforeOpen: null,
			onAfterOpen: null,
			onBeforeClose: null,
			onAfterClose: null,
		}, options );

		// Warnings/Errors
		if (config.openers === null) {
			issues = true
			console.error('Missing \'openers\' setting. Your modals will never open.')
		}

		if (issues)
			return

		// The magic is below
		$(config.openers).each(function() {

			let opener = $(this)

			// Warnings/Errors
			if (opener.data('modal-id') === undefined || opener.data('modal-id').length < 1) {
				console.error('This opener has an invalid \`data-modal-id\` attribute, and won\'t open any modals.\n', this)
				return
			}

			let modal = $('#' + opener.data('modal-id'))

			// Prepare modal
			prepareModal(config, opener, modal)
			
			opener.on('click', function() {

				openModal(config, opener, modal)

			})

			modal.on('click', function(e) {

				if ($(e.target).hasClass('open')) {
					closeModal(config, opener, modal)
				}

			})

			modal.find('.xoo-modal__close').on('click', function() {

				closeModal(config, opener, modal)

			})

			if (config.esc) {
				$(document).keyup(function(e) {
					if (e.keyCode == 27) {

						closeModal(config, opener, modal)

					}
				})
			}

		})

	}

	var
	prepareModal = function ( config, opener, modal ) {

		modal
		.addClass('xoo-modal')
		.addClass(config.videoOnly ? 'video-only' : '')
		.wrapInner('<div class="xoo-modal__wrapper"></div>')
		.find('.xoo-modal__wrapper')
		.prepend('<div class="xoo-modal__close"></div>')

	},
	openModal = function ( config, opener, modal ) {

		// Call userfunc before open occurs
		if (config.onBeforeOpen !== null) {
			config.onBeforeOpen(opener, modal)
		}

		modal.addClass('open')
		if (!config.scroll) {
			$('body').css('overflow', 'hidden')
		}

		// Call userfunc after open occurs
		if (config.onAfterOpen !== null) {
			config.onAfterOpen(opener, modal)
		}

	},
	closeModal = function ( config, opener, modal ) {

		// Call userfunc before close occurs
		if (config.onBeforeClose !== null) {
			config.onBeforeClose(opener, modal)
		}

		modal.removeClass('open')
		if (!config.scroll) {
			$('body').css('overflow', 'auto')
		}
		if (config.videoOnly) {
			let
			container = modal.find('iframe').parent(),
			iframe = modal.find('iframe').detach()

			iframe.appendTo(container)

		}

		// Call userfunc after close occurs
		if (config.onAfterClose !== null) {
			config.onAfterClose(opener, modal)
		}

	}
	
}(jQuery));
