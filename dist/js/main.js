/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/bs-modal.js":
/*!***************************************!*\
  !*** ./src/js/components/bs-modal.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/*\n * To change this license header, choose License Headers in Project Properties.\n * To change this template file, choose Tools | Templates\n * and open the template in the editor.\n */\n\n/*!\n * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=4cc52633a8e49b1aac11)\n * Config saved to config.json and https://gist.github.com/4cc52633a8e49b1aac11\n */\n\nif (typeof jQuery === 'undefined') {\n  throw new Error('Bootstrap\\'s JavaScript requires jQuery');\n}\n+function ($) {\n  'use strict';\n\n  var version = $.fn.jquery.split(' ')[0].split('.');\n  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1) {\n    throw new Error('Bootstrap\\'s JavaScript requires jQuery version 1.9.1 or higher');\n  }\n}(jQuery);\n\n/* ========================================================================\n * Bootstrap: modal.js v3.3.4\n * http://getbootstrap.com/javascript/#modals\n * ========================================================================\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * ======================================================================== */\n\n+function ($) {\n  'use strict';\n\n  // MODAL CLASS DEFINITION\n  // ======================\n\n  var Modal = function Modal(element, options) {\n    this.options = options;\n    this.$body = $(document.body);\n    this.$element = $(element);\n    this.$dialog = this.$element.find('.modal-dialog');\n    this.$backdrop = null;\n    this.isShown = null;\n    this.originalBodyPad = null;\n    this.scrollbarWidth = 0;\n    this.ignoreBackdropClick = false;\n\n    if (this.options.remote) {\n      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {\n        this.$element.trigger('loaded.bs.modal');\n      }, this));\n    }\n  };\n\n  Modal.VERSION = '3.3.4';\n\n  Modal.TRANSITION_DURATION = 300;\n  Modal.BACKDROP_TRANSITION_DURATION = 150;\n\n  Modal.DEFAULTS = {\n    backdrop: true,\n    keyboard: true,\n    show: true\n  };\n\n  Modal.prototype.toggle = function (_relatedTarget) {\n    return this.isShown ? this.hide() : this.show(_relatedTarget);\n  };\n\n  Modal.prototype.show = function (_relatedTarget) {\n    var that = this;\n    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });\n\n    this.$element.trigger(e);\n\n    if (this.isShown || e.isDefaultPrevented()) return;\n\n    this.isShown = true;\n\n    this.checkScrollbar();\n    this.setScrollbar();\n    this.$body.addClass('modal-open');\n\n    this.escape();\n    this.resize();\n\n    this.$element.on('click.dismiss.bs.modal', '[data-dismiss=\"modal\"]', $.proxy(this.hide, this));\n\n    this.$dialog.on('mousedown.dismiss.bs.modal', function () {\n      that.$element.one('mouseup.dismiss.bs.modal', function (e) {\n        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;\n      });\n    });\n\n    this.backdrop(function () {\n      var transition = $.support.transition && that.$element.hasClass('fade');\n\n      if (!that.$element.parent().length) {\n        that.$element.appendTo(that.$body); // don't move modals dom position\n      }\n\n      that.$element.show().scrollTop(0);\n\n      that.adjustDialog();\n\n      if (transition) {\n        that.$element[0].offsetWidth; // force reflow\n      }\n\n      that.$element.addClass('in').attr('aria-hidden', false);\n\n      that.enforceFocus();\n\n      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });\n\n      transition ? that.$dialog // wait for modal to slide in\n      .one('bsTransitionEnd', function () {\n        that.$element.trigger('focus').trigger(e);\n      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);\n    });\n  };\n\n  Modal.prototype.hide = function (e) {\n    if (e) e.preventDefault();\n\n    e = $.Event('hide.bs.modal');\n\n    this.$element.trigger(e);\n\n    if (!this.isShown || e.isDefaultPrevented()) return;\n\n    this.isShown = false;\n\n    this.escape();\n    this.resize();\n\n    $(document).off('focusin.bs.modal');\n\n    this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');\n\n    this.$dialog.off('mousedown.dismiss.bs.modal');\n\n    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();\n  };\n\n  Modal.prototype.enforceFocus = function () {\n    $(document).off('focusin.bs.modal') // guard against infinite focus loop\n    .on('focusin.bs.modal', $.proxy(function (e) {\n      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {\n        this.$element.trigger('focus');\n      }\n    }, this));\n  };\n\n  Modal.prototype.escape = function () {\n    if (this.isShown && this.options.keyboard) {\n      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {\n        e.which == 27 && this.hide();\n      }, this));\n    } else if (!this.isShown) {\n      this.$element.off('keydown.dismiss.bs.modal');\n    }\n  };\n\n  Modal.prototype.resize = function () {\n    if (this.isShown) {\n      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));\n    } else {\n      $(window).off('resize.bs.modal');\n    }\n  };\n\n  Modal.prototype.hideModal = function () {\n    var that = this;\n    this.$element.hide();\n    this.backdrop(function () {\n      that.$body.removeClass('modal-open');\n      that.resetAdjustments();\n      that.resetScrollbar();\n      that.$element.trigger('hidden.bs.modal');\n    });\n  };\n\n  Modal.prototype.removeBackdrop = function () {\n    this.$backdrop && this.$backdrop.remove();\n    this.$backdrop = null;\n  };\n\n  Modal.prototype.backdrop = function (callback) {\n    var that = this;\n    var animate = this.$element.hasClass('fade') ? 'fade' : '';\n\n    if (this.isShown && this.options.backdrop) {\n      var doAnimate = $.support.transition && animate;\n\n      this.$backdrop = $('<div class=\"modal-backdrop ' + animate + '\" />').appendTo(this.$body);\n\n      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {\n        if (this.ignoreBackdropClick) {\n          this.ignoreBackdropClick = false;\n          return;\n        }\n        if (e.target !== e.currentTarget) return;\n        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();\n      }, this));\n\n      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow\n\n      this.$backdrop.addClass('in');\n\n      if (!callback) return;\n\n      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();\n    } else if (!this.isShown && this.$backdrop) {\n      this.$backdrop.removeClass('in');\n\n      var callbackRemove = function callbackRemove() {\n        that.removeBackdrop();\n        callback && callback();\n      };\n      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();\n    } else if (callback) {\n      callback();\n    }\n  };\n\n  // these following methods are used to handle overflowing modals\n\n  Modal.prototype.handleUpdate = function () {\n    this.adjustDialog();\n  };\n\n  Modal.prototype.adjustDialog = function () {\n    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;\n\n    this.$element.css({\n      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',\n      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''\n    });\n  };\n\n  Modal.prototype.resetAdjustments = function () {\n    this.$element.css({\n      paddingLeft: '',\n      paddingRight: ''\n    });\n  };\n\n  Modal.prototype.checkScrollbar = function () {\n    var fullWindowWidth = window.innerWidth;\n    if (!fullWindowWidth) {\n      // workaround for missing window.innerWidth in IE8\n      var documentElementRect = document.documentElement.getBoundingClientRect();\n      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);\n    }\n    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;\n    this.scrollbarWidth = this.measureScrollbar();\n  };\n\n  Modal.prototype.setScrollbar = function () {\n    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);\n    this.originalBodyPad = document.body.style.paddingRight || '';\n    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);\n  };\n\n  Modal.prototype.resetScrollbar = function () {\n    this.$body.css('padding-right', this.originalBodyPad);\n  };\n\n  Modal.prototype.measureScrollbar = function () {\n    // thx walsh\n    var scrollDiv = document.createElement('div');\n    scrollDiv.className = 'modal-scrollbar-measure';\n    this.$body.append(scrollDiv);\n    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;\n    this.$body[0].removeChild(scrollDiv);\n    return scrollbarWidth;\n  };\n\n  // MODAL PLUGIN DEFINITION\n  // =======================\n\n  function Plugin(option, _relatedTarget) {\n    return this.each(function () {\n      var $this = $(this);\n      var data = $this.data('bs.modal');\n      var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);\n\n      if (!data) $this.data('bs.modal', data = new Modal(this, options));\n      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);\n    });\n  }\n\n  var old = $.fn.modal;\n\n  $.fn.modal = Plugin;\n  $.fn.modal.Constructor = Modal;\n\n  // MODAL NO CONFLICT\n  // =================\n\n  $.fn.modal.noConflict = function () {\n    $.fn.modal = old;\n    return this;\n  };\n\n  // MODAL DATA-API\n  // ==============\n\n  $(document).on('click.bs.modal.data-api', '[data-toggle=\"modal\"]', function (e) {\n    var $this = $(this);\n    var href = $this.attr('href');\n    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\\s]+$)/, '')); // strip for ie7\n    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());\n\n    if ($this.is('a')) e.preventDefault();\n\n    $target.one('show.bs.modal', function (showEvent) {\n      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown\n      $target.one('hidden.bs.modal', function () {\n        $this.is(':visible') && $this.trigger('focus');\n      });\n    });\n    Plugin.call($target, option, this);\n  });\n}(jQuery);\n\n//# sourceURL=webpack:///./src/js/components/bs-modal.js?");

/***/ }),

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\njQuery(document).ready(function ($) {\n\n\t// Modify Gravity Forms file input layouts for styling\n\tvar fileInputs = $('input[type=\"file\"]');\n\n\t$.each(fileInputs, function (key, val) {\n\n\t\t$(this).clone().appendTo($(this).parent().prev().addClass('file').append());\n\t\t$(this).remove();\n\t});\n});\n\n//# sourceURL=webpack:///./src/js/components/form.js?");

/***/ }),

/***/ "./src/js/components/nav.js":
/*!**********************************!*\
  !*** ./src/js/components/nav.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar trigger = $('#js-nav-toggle');\n\ntrigger.click(function () {\n\t$('#js-nav-mobile').toggleClass('nav-open');\n\t$('#js-nav-toggle').toggleClass('active');\n\t$('body').toggleClass('nav-open');\n});\n\nfunction navClose() {\n\t$('#js-nav-mobile').removeClass('nav-open');\n\t$('#js-nav-toggle').removeClass('active');\n\t$('body').removeClass('nav-open');\n}\n\n// Close on click outside\n$(\".nav-open-overlay\").click(function () {\n\tnavClose();\n});\n\n// Close on esc\n$(document).on(\"keyup\", function (e) {\n\tif (e.keyCode == 27) {\n\t\tnavClose();\n\t}\n});\n\n/*\njQuery(document).ready(function($) {\n\n\tvar ham = $('#js-nav-toggle'),\n\t\tdrops = $('.nav__inner > li.menu-item-has-children > a > .arrow');\n\n\tham.click(function(e) {\n\n\t\t$('.site-header__nav').toggleClass('nav-open');\n\t\t$('#js-nav-toggle').toggleClass('active');\n\t\t$('html').toggleClass('nav-open');\n\n\t\t$.each(drops, function() {\n\n\t\t\t$(this).removeClass('active').parent().next().removeClass('active');\n\t\t\t\n\t\t});\n\n\t});\n\n\tdrops.click(function(e) {\n\n\t\tif ($(window).width() < 1025) {\n\t\t\te.preventDefault();\n\t\t\tif ($(this).hasClass('active')) {\n\n\t\t\t\t$(this).removeClass('active').parent().next().removeClass('active');\n\n\t\t\t} else {\n\n\t\t\t\t$(this).addClass('active').parent().next().addClass('active');\n\n\t\t\t}\n\t\t}\n\n\t});\n\n});\n*/\n\n//# sourceURL=webpack:///./src/js/components/nav.js?");

/***/ }),

/***/ "./src/js/components/social-sharing.js":
/*!*********************************************!*\
  !*** ./src/js/components/social-sharing.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n  * Social Sharing Links\n  */\n$('.js-social-share').click(function (e) {\n  // we're not going to go to the link, just pull data from it\n  e.preventDefault();\n\n  // decide what social share url string to use based on 'data-social' value\n  var social = $(this).data('social');\n\n  // pull the a href value\n  var url = $(this).attr('href');\n  // pop window parameters\n  var window_args = \"menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600\";\n  var share_link = void 0;\n\n  if (url === '' || url === '#') {\n    url = window.location.href;\n  }\n\n  if (social === 'facebook') {\n    share_link = \"https://www.facebook.com/sharer/sharer.php?u=\" + url;\n  } else if (social === 'twitter') {\n    share_link = \"https://twitter.com/intent/tweet?url=\" + url;\n  } else {\n    share_link = \"https://www.linkedin.com/shareArticle?mini=true&url=\" + url;\n  }\n\n  window.open(share_link, \"\", window_args);\n});\n\n//# sourceURL=webpack:///./src/js/components/social-sharing.js?");

/***/ }),

/***/ "./src/js/global/events.js":
/*!*********************************!*\
  !*** ./src/js/global/events.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * -- EVENTS\n */\n\n//import { fitText } from \"./components/fit-text\";\n\n/**\n  * These functions execute in order.\n  */\n(function () {})();\n\n/**\n  * Events that fire when the page is loaded.\n  */\n$(document).ready(function () {\n  /*\n  $('.carousel').slick({\n    adaptiveHeight: true\n  });\n  */\n}); // /.ready\n\n\n/**\n * Events that fire on Window Scroll\n */\n$(window).scroll(function () {}); // /.scroll\n\n//# sourceURL=webpack:///./src/js/global/events.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../scss/tailwind.scss */ \"./src/scss/tailwind.scss\");\n\n__webpack_require__(/*! ../scss/theme.scss */ \"./src/scss/theme.scss\");\n\n// GLOBAL\n/*********************************************************\n  Main JS Entry Point\n*********************************************************/\n\n__webpack_require__(/*! ./global/events.js */ \"./src/js/global/events.js\");\n\n// COMPONENTS\n__webpack_require__(/*! ./components/nav.js */ \"./src/js/components/nav.js\");\n__webpack_require__(/*! ./components/social-sharing.js */ \"./src/js/components/social-sharing.js\");\n__webpack_require__(/*! ./components/form.js */ \"./src/js/components/form.js\");\n__webpack_require__(/*! ./components/bs-modal.js */ \"./src/js/components/bs-modal.js\");\n//require(\"./components/slider-work.js\");\n//require(\"./jquery.waypoints.min.js\");\n\n// Classes\n//import Modal from \"./classes/modal\";\n//var modal = new Modal();\n\n// TEMPLATES\n//require('./templates/about.js');\n\nvar tl = new TimelineMax();\nvar steps = document.querySelectorAll(\".js-reveal\");\nvar text = document.querySelectorAll(\".js-reveal-text\");\n\nvar ctrl = new ScrollMagic.Controller({\n  //addIndicators: true //debug only, requires 'debug.addIndicators.min.js'\n});\n\n$.each(steps, function (index, step) {\n  new ScrollMagic.Scene({\n    triggerElement: step,\n    triggerHook: 0.8, //\"onEnter\",\n    //offset: 100, // start after #px\n    reverse: false\n  }).setClassToggle(step, \"animated\").addTo(ctrl);\n});\n\n$.each(text, function (index, step) {\n  new ScrollMagic.Scene({\n    triggerElement: step,\n    triggerHook: 0.8, //\"onEnter\",\n    //offset: 100, // start after #px\n    reverse: false\n  }).setClassToggle(step, \"animated\").addTo(ctrl);\n});\n\n// Hero\n/*\nvar heroItems = $(\".hero > *\");\nheroItems.each(function() {\n  tl.add(\n    TweenMax.from($(this), 0.4, {\n      autoAlpha: 0,\n      y: -5,\n      ease: Power0.easeOut\n    })\n  );\n});\n*/\n\n// Team\nfunction staggerInTeam() {\n  var teamScene = new ScrollMagic.Scene({\n    //scene options\n    triggerElement: \"#js-stagger-items\",\n    triggerHook: 0.8,\n    reverse: false\n  }).setTween(tl).addTo(ctrl);\n  return tl.staggerFrom(\".stagger-item\", 0.05, {\n    y: 5,\n    autoAlpha: 0,\n    ease: Power1.easeOut\n  }, 0.05);\n}\nstaggerInTeam();\n\n// Fade Text;\n$(document).ready(function () {\n  $(window).scroll(function () {\n    var scrollPos = $(this).scrollTop();\n    $('.hero__content').css({\n      'margin-top': scrollPos / 4 + \"px\",\n      'opacity': 1 - scrollPos / 500\n    });\n  });\n});\n\n// Disable jarallax on mobile\njarallax(document.querySelectorAll('.jarallax'), {\n  disableParallax: /iPad|iPhone|iPod|Android/,\n  disableVideo: /iPad|iPhone|iPod|Android/\n});\n\n// page transition\n$(document).ready(function () {\n  $(\".animsition\").animsition({\n    inClass: 'fade-in',\n    outClass: 'fade-out',\n    inDuration: 1200,\n    outDuration: 1200,\n    //linkElement: '.animsition-link',\n    loading: true, //true = show loading animation\n    loadingParentElement: 'body', //animsition wrapper element\n    loadingClass: 'animsition-loading',\n    loadingInner: '', // e.g '<img src=\"loading.svg\" />'\n    timeout: false,\n    timeoutCountdown: 5000,\n    onLoadEvent: true,\n    browser: ['animation-duration', '-webkit-animation-duration'],\n    overlay: false,\n    //overlayClass : 'animsition-overlay-slide',\n    //overlayParentElement : 'body',\n    transition: function transition(url) {\n      window.location.href = url;\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/tailwind.scss":
/*!********************************!*\
  !*** ./src/scss/tailwind.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/tailwind.scss?");

/***/ }),

/***/ "./src/scss/theme.scss":
/*!*****************************!*\
  !*** ./src/scss/theme.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/theme.scss?");

/***/ })

/******/ });