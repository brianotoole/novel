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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/slider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar VueTyper = window.VueTyper.VueTyper;\n\nnew Vue({\n  el: \"#slider-app\",\n  components: {\n    \"vue-typer\": VueTyper\n  },\n  data: {\n    works: [{\n      id: 1,\n      name: \"The Arlington St.Pete\",\n      img: \"https://i.imgur.com/ml2icVo.jpg\"\n    }, { id: 2, name: \"A hotel idk\", img: \"https://i.imgur.com/GqkbrOZ.jpg\" }, { id: 3, name: \"Something else\", img: \"https://i.imgur.com/VinUFwQ.jpg\" }],\n    currentSlide: 1\n  },\n  methods: {\n    goForward: function goForward() {\n      console.log(\"+\");\n      if (this.currentSlide < this.works.length) {\n        this.currentSlide++;\n      } else {\n        this.currentSlide = 1;\n      }\n    },\n    goBackward: function goBackward() {\n      console.log(\"-\");\n      if (this.currentSlide > 1) {\n        this.currentSlide--;\n      } else {\n        this.currentSlide = this.works.length;\n      }\n    }\n  },\n  template: \"\\n    <div class=\\\"slider-container container\\\">\\n    <div class=\\\"controls\\\">\\n        <p class=\\\"work-label mb-12\\\">Work</p>\\n        <div class=\\\"flex flex-col items-center w-12\\\">\\n        <div @click=\\\"goForward()\\\">\\n            <svg\\n            class=\\\"my-4 mr-2\\\"\\n            xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n            width=\\\"18.385\\\"\\n            height=\\\"18.385\\\"\\n            viewBox=\\\"0 0 18.385 18.385\\\"\\n            >\\n            <g\\n                id=\\\"Group_168\\\"\\n                data-name=\\\"Group 168\\\"\\n                transform=\\\"translate(0 9.192) rotate(-45)\\\"\\n            >\\n                <path\\n                id=\\\"Path_85\\\"\\n                data-name=\\\"Path 85\\\"\\n                d=\\\"M12,0V12H0\\\"\\n                fill=\\\"none\\\"\\n                stroke=\\\"#e05831\\\"\\n                stroke-width=\\\"2\\\"\\n                />\\n            </g>\\n            </svg>\\n        </div>\\n\\n        <svg\\n            class=\\\"my-4\\\"\\n            id=\\\"Group_167\\\"\\n            data-name=\\\"Group 167\\\"\\n            xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n            width=\\\"26\\\"\\n            height=\\\"1\\\"\\n            viewBox=\\\"0 0 26 1\\\"\\n        >\\n            <path\\n            id=\\\"Path_84\\\"\\n            data-name=\\\"Path 84\\\"\\n            d=\\\"M25.5.5H.5\\\"\\n            fill=\\\"none\\\"\\n            stroke=\\\"#abaaa7\\\"\\n            stroke-linecap=\\\"square\\\"\\n            stroke-width=\\\"1\\\"\\n            />\\n        </svg>\\n        <div @click=\\\"goBackward()\\\">\\n            <svg\\n            class=\\\"my-4 ml-2\\\"\\n            xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n            width=\\\"18.385\\\"\\n            height=\\\"18.385\\\"\\n            viewBox=\\\"0 0 18.385 18.385\\\"\\n            >\\n            <g\\n                id=\\\"Group_169\\\"\\n                data-name=\\\"Group 169\\\"\\n                transform=\\\"translate(18.385 9.192) rotate(135)\\\"\\n            >\\n                <path\\n                id=\\\"Path_86\\\"\\n                data-name=\\\"Path 86\\\"\\n                d=\\\"M12,0V12H0\\\"\\n                fill=\\\"none\\\"\\n                stroke=\\\"#e05831\\\"\\n                stroke-width=\\\"2\\\"\\n                />\\n            </g>\\n            </svg>\\n        </div>\\n        </div>\\n\\n        <p :text=\\\"works[currentSlide - 1].name\\\" :repeat=\\\"0\\\" class=\\\"work-title\\\">{{works[currentSlide - 1].name}}</p>\\n\\n    </div>\\n    <div v-for=\\\"work in works\\\" :key=\\\"work.id\\\">\\n    <transition name=\\\"slide-in\\\">\\n        <div\\n        v-if=\\\"work.id === currentSlide\\\"\\n        :style=\\\"{backgroundImage: 'url(' + work.img + ')', 'z-index': work.id + 5}\\\"\\n        class=\\\"slider-img\\\"\\n        ></div>\\n        </transition>\\n    </div>\\n    </div>\\n\\n  \"\n});\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ })

/******/ });