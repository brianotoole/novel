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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/jquery-plugins.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/jquery-plugins.js":
/*!**********************************!*\
  !*** ./src/js/jquery-plugins.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function ($) {\n\n\t// Use for a single opener and modal\n\t$.modal = function () {\n\n\t\tvar issues = false;\n\n\t\tvar config = $.extend({\n\t\t\topener: null,\n\t\t\tmodal: null,\n\t\t\tstyle: 'default',\n\t\t\tscroll: false,\n\t\t\tesc: true,\n\t\t\tbgClick: true,\n\t\t\tvideoOnly: false,\n\t\t\tonBeforeOpen: null,\n\t\t\tonAfterOpen: null,\n\t\t\tonBeforeClose: null,\n\t\t\tonAfterClose: null\n\t\t}, options);\n\n\t\t// Warnings/Errors\n\t\tif (config.opener === null) {\n\t\t\tissues = true;\n\t\t\tconsole.error('Missing \\'opener\\' setting. Your modal will never open without this.');\n\t\t}\n\t\tif (config.modal === null) {\n\t\t\tissues = true;\n\t\t\tconsole.error('Missing \\'modal\\' setting. Your modal will never open without this.');\n\t\t}\n\n\t\tvar opener = $(config.opener),\n\t\t    modal = $(config.modal);\n\n\t\t// Add must-use html tags\n\t\tprepareModal(config, opener, modal);\n\n\t\topener.on('click', function () {\n\n\t\t\topenModal(config, opener, modal);\n\t\t});\n\n\t\tmodal.on('click', function (e) {\n\n\t\t\tif ($(e.target).hasClass('open')) {\n\t\t\t\tcloseModal(config, opener, modal);\n\t\t\t}\n\t\t});\n\n\t\tmodal.find('.xoo-modal__close').on('click', function () {\n\n\t\t\tcloseModal(config, opener, modal);\n\t\t});\n\n\t\tif (config.esc) {\n\t\t\t$(document).keyup(function (e) {\n\t\t\t\tif (e.keyCode == 27) {\n\n\t\t\t\t\tcloseModal(config, opener, modal);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t};\n\n\t// Use if openers and modals are in the same repeated scope\n\t$.fn.modals = function (options) {\n\n\t\tvar issues = false;\n\n\t\tvar config = $.extend({\n\t\t\topeners: null,\n\t\t\tmodals: null,\n\t\t\tstyle: 'default',\n\t\t\tscroll: false,\n\t\t\tesc: true,\n\t\t\tbgClick: true,\n\t\t\tvideoOnly: false,\n\t\t\tonBeforeOpen: null,\n\t\t\tonAfterOpen: null,\n\t\t\tonBeforeClose: null,\n\t\t\tonAfterClose: null\n\t\t}, options);\n\n\t\t// Warnings/Errors\n\t\tif (config.openers === null) {\n\t\t\tissues = true;\n\t\t\tconsole.error('Missing \\'openers\\' setting. Your modals will never open without this.');\n\t\t}\n\t\tif (config.modals === null) {\n\t\t\tissues = true;\n\t\t\tconsole.error('Missing \\'modals\\' setting. Your modals will never open without this.');\n\t\t}\n\n\t\tif (issues) return;\n\n\t\t// The magic is below\n\t\tthis.each(function () {\n\n\t\t\tvar root = $(this),\n\t\t\t    opener = $(this).find(config.openers),\n\t\t\t    modal = $(this).find(config.modals);\n\n\t\t\t// Prepare modal\n\t\t\tprepareModal(config, opener, modal);\n\n\t\t\topener.on('click', function () {\n\n\t\t\t\topenModal(config, opener, modal);\n\t\t\t});\n\n\t\t\tmodal.on('click', function (e) {\n\n\t\t\t\tif ($(e.target).hasClass('open')) {\n\t\t\t\t\tcloseModal(config, opener, modal);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tmodal.find('.xoo-modal__close').on('click', function () {\n\n\t\t\t\tcloseModal(config, opener, modal);\n\t\t\t});\n\n\t\t\tif (config.esc) {\n\t\t\t\t$(document).keyup(function (e) {\n\t\t\t\t\tif (e.keyCode == 27) {\n\n\t\t\t\t\t\tcloseModal(config, opener, modal);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\n\t\treturn this;\n\t};\n\n\t// Use if modals be all over the place\n\t$.messyModals = function (options) {\n\n\t\tvar issues = false;\n\n\t\tvar config = $.extend({\n\t\t\topeners: null,\n\t\t\tstyle: 'default',\n\t\t\tscroll: false,\n\t\t\tesc: true,\n\t\t\tbgClick: true,\n\t\t\tvideoOnly: false,\n\t\t\tonBeforeOpen: null,\n\t\t\tonAfterOpen: null,\n\t\t\tonBeforeClose: null,\n\t\t\tonAfterClose: null\n\t\t}, options);\n\n\t\t// Warnings/Errors\n\t\tif (config.openers === null) {\n\t\t\tissues = true;\n\t\t\tconsole.error('Missing \\'openers\\' setting. Your modals will never open.');\n\t\t}\n\n\t\tif (issues) return;\n\n\t\t// The magic is below\n\t\t$(config.openers).each(function () {\n\n\t\t\tvar opener = $(this);\n\n\t\t\t// Warnings/Errors\n\t\t\tif (opener.data('modal-id') === undefined || opener.data('modal-id').length < 1) {\n\t\t\t\tconsole.error('This opener has an invalid \\`data-modal-id\\` attribute, and won\\'t open any modals.\\n', this);\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar modal = $('#' + opener.data('modal-id'));\n\n\t\t\t// Prepare modal\n\t\t\tprepareModal(config, opener, modal);\n\n\t\t\topener.on('click', function () {\n\n\t\t\t\topenModal(config, opener, modal);\n\t\t\t});\n\n\t\t\tmodal.on('click', function (e) {\n\n\t\t\t\tif ($(e.target).hasClass('open')) {\n\t\t\t\t\tcloseModal(config, opener, modal);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tmodal.find('.xoo-modal__close').on('click', function () {\n\n\t\t\t\tcloseModal(config, opener, modal);\n\t\t\t});\n\n\t\t\tif (config.esc) {\n\t\t\t\t$(document).keyup(function (e) {\n\t\t\t\t\tif (e.keyCode == 27) {\n\n\t\t\t\t\t\tcloseModal(config, opener, modal);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t};\n\n\tvar prepareModal = function prepareModal(config, opener, modal) {\n\n\t\tmodal.addClass('xoo-modal').addClass(config.videoOnly ? 'video-only' : '').wrapInner('<div class=\"xoo-modal__wrapper\"></div>').find('.xoo-modal__wrapper').prepend('<div class=\"xoo-modal__close\"></div>');\n\t},\n\t    openModal = function openModal(config, opener, modal) {\n\n\t\t// Call userfunc before open occurs\n\t\tif (config.onBeforeOpen !== null) {\n\t\t\tconfig.onBeforeOpen(opener, modal);\n\t\t}\n\n\t\tmodal.addClass('open');\n\t\tif (!config.scroll) {\n\t\t\t$('body').css('overflow', 'hidden');\n\t\t}\n\n\t\t// Call userfunc after open occurs\n\t\tif (config.onAfterOpen !== null) {\n\t\t\tconfig.onAfterOpen(opener, modal);\n\t\t}\n\t},\n\t    closeModal = function closeModal(config, opener, modal) {\n\n\t\t// Call userfunc before close occurs\n\t\tif (config.onBeforeClose !== null) {\n\t\t\tconfig.onBeforeClose(opener, modal);\n\t\t}\n\n\t\tmodal.removeClass('open');\n\t\tif (!config.scroll) {\n\t\t\t$('body').css('overflow', 'auto');\n\t\t}\n\t\tif (config.videoOnly) {\n\t\t\tvar container = modal.find('iframe').parent(),\n\t\t\t    iframe = modal.find('iframe').detach();\n\n\t\t\tiframe.appendTo(container);\n\t\t}\n\n\t\t// Call userfunc after close occurs\n\t\tif (config.onAfterClose !== null) {\n\t\t\tconfig.onAfterClose(opener, modal);\n\t\t}\n\t};\n})(jQuery);\n\n//# sourceURL=webpack:///./src/js/jquery-plugins.js?");

/***/ })

/******/ });