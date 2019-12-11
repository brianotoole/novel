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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blog.js":
/*!************************!*\
  !*** ./src/js/blog.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _blog = __webpack_require__(/*! ./classes/blog */ \"./src/js/classes/blog.js\");\n\nvar _blog2 = _interopRequireDefault(_blog);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar blog = new _blog2.default('.blog');\n\n/* Place DOM events here. The available events are:\n*\t- Blog.loadMore()\n*\t- Blog.updateTaxQuery()\n*\t- Blog.reset()\n*/\n\n//# sourceURL=webpack:///./src/js/blog.js?");

/***/ }),

/***/ "./src/js/classes/blog.js":
/*!********************************!*\
  !*** ./src/js/classes/blog.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Blog = function () {\n\tfunction Blog(container) {\n\t\t_classCallCheck(this, Blog);\n\n\t\tthis.container = container;\n\n\t\ttry {\n\t\t\tthis.testSettings();\n\t\t} catch (e) {\n\t\t\tconsole.log('%c' + e, 'color: red;');\n\t\t}\n\n\t\tthis.mergeSettings(this, $(this.container).data());\n\n\t\tthis.query.action = 'blog_load_more';\n\t\tthis.query.list_item_style = this.appearance.list_item_style;\n\n\t\tthis.cleanupData();\n\t\tthis.loadMore();\n\t\tthis.initEvents();\n\t}\n\n\t_createClass(Blog, [{\n\t\tkey: 'mergeSettings',\n\t\tvalue: function (_mergeSettings) {\n\t\t\tfunction mergeSettings(_x, _x2) {\n\t\t\t\treturn _mergeSettings.apply(this, arguments);\n\t\t\t}\n\n\t\t\tmergeSettings.toString = function () {\n\t\t\t\treturn _mergeSettings.toString();\n\t\t\t};\n\n\t\t\treturn mergeSettings;\n\t\t}(function (targetObj, newObj) {\n\n\t\t\tfor (var p in newObj) {\n\t\t\t\ttry {\n\t\t\t\t\ttargetObj[p] = newObj[p].constructor == Object ? mergeSettings(targetObj[p], newObj[p]) : newObj[p];\n\t\t\t\t} catch (e) {\n\t\t\t\t\ttargetObj[p] = newObj[p];\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn targetObj;\n\t\t})\n\t}, {\n\t\tkey: 'testSettings',\n\t\tvalue: function testSettings() {\n\n\t\t\tif (typeof this.container == 'undefined') {\n\t\t\t\tthrow 'Blog class requires a blog container class or id to be sent to the constructor';\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'cleanupData',\n\t\tvalue: function cleanupData() {\n\n\t\t\t$(this.container).removeData();\n\t\t\t$(this.container).removeAttr('data-admin_ajax').removeAttr('data-query').removeAttr('data-elements');\n\t\t}\n\t}, {\n\t\tkey: 'initEvents',\n\t\tvalue: function initEvents() {\n\n\t\t\tvar temp_this = this;\n\n\t\t\t// Load More\n\t\t\t$(this.elements.load_more).find('button, a').on('click', function (e) {\n\n\t\t\t\te.preventDefault();\n\n\t\t\t\ttemp_this.hideElems();\n\t\t\t\t$(temp_this.elements.loading).show();\n\t\t\t\ttemp_this.loadMore();\n\t\t\t});\n\n\t\t\t// Filter\n\t\t\t$(this.elements.filter_form).find('input, select').on('change', function (e) {\n\n\t\t\t\te.preventDefault();\n\n\t\t\t\ttemp_this.updateTaxQuery($(temp_this.elements.filter_form).toArray()[0]);\n\t\t\t\ttemp_this.reset();\n\t\t\t\ttemp_this.loadMore();\n\t\t\t});\n\n\t\t\t// $(this.elements.filter_form).submit(function(e) {\n\n\t\t\t// \te.preventDefault();\n\n\t\t\t// \ttemp_this.updateTaxQuery($(this).toArray()[0]);\n\t\t\t// \ttemp_this.reset();\n\t\t\t// \ttemp_this.loadMore();\n\n\t\t\t// });\n\t\t}\n\t}, {\n\t\tkey: 'hideElems',\n\t\tvalue: function hideElems() {\n\n\t\t\t$(this.elements.pagination).find('> div').hide();\n\t\t}\n\t}, {\n\t\tkey: 'reset',\n\t\tvalue: function reset() {\n\n\t\t\t/*\n   *\tClear page number, lists, notifications, and displays the loading animation\n   */\n\n\t\t\tthis.query.paged = 0;\n\t\t\t$(this.elements.list).html('');\n\t\t\t$(this.elements.pagination).find('> div').hide();\n\t\t\t$(this.elements.loading).show();\n\t\t}\n\t}, {\n\t\tkey: 'updateTaxQuery',\n\t\tvalue: function updateTaxQuery(formData) {\n\n\t\t\tvar taxonomies = {};\n\t\t\t$.each(formData, function (i, field) {\n\n\t\t\t\tif (typeof field.value != 'undefined') {\n\n\t\t\t\t\tif (field.value.length > 0) {\n\n\t\t\t\t\t\tif (field.type == 'select-one' || field.checked) {\n\n\t\t\t\t\t\t\tif (typeof taxonomies[field.name] == 'undefined') {\n\t\t\t\t\t\t\t\ttaxonomies[field.name] = new Array();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\ttaxonomies[field.name].push(field.value);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tif (Object.keys(taxonomies).length) {\n\n\t\t\t\tfor (var tax in taxonomies) {\n\n\t\t\t\t\tthis.query.tax_query = new Array({ taxonomy: tax, field: 'id', terms: taxonomies[tax] });\n\t\t\t\t}\n\n\t\t\t\treturn true;\n\t\t\t} else {\n\n\t\t\t\tdelete this.query.tax_query;\n\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'loadMore',\n\t\tvalue: function loadMore() {\n\n\t\t\tthis.query.paged++;\n\t\t\tvar temp_this = this;\n\n\t\t\tconsole.log(this.query);\n\n\t\t\t$.ajax({\n\t\t\t\turl: temp_this.admin_ajax,\n\t\t\t\ttype: 'POST',\n\t\t\t\tdata: temp_this.query,\n\t\t\t\tsuccess: function success(res) {\n\n\t\t\t\t\t$(temp_this.elements.list).append(res);\n\n\t\t\t\t\t$(temp_this.elements.pagination).find('> div').hide();\n\n\t\t\t\t\tif ($(temp_this.elements.list).find('> li').length < 1) {\n\t\t\t\t\t\t$(temp_this.elements.none_found).show();\n\t\t\t\t\t} else if ($(temp_this.elements.list).find('> li').length >= total_posts) {\n\t\t\t\t\t\t$(temp_this.elements.all_loaded).show();\n\t\t\t\t\t} else {\n\t\t\t\t\t\t$(temp_this.elements.load_more).show();\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\terror: function error(res) {}\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn Blog;\n}();\n\nexports.default = Blog;\n\n//# sourceURL=webpack:///./src/js/classes/blog.js?");

/***/ })

/******/ });