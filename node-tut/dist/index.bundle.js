/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./calc.js":
/*!*****************!*\
  !*** ./calc.js ***!
  \*****************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> export default function calc(a, b) {\\n|   return a + b;\\n| }\");\n\n//# sourceURL=webpack://tut/./calc.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const message = \"Hello abba!\";\r\n// console.log(message);\r\n// console.log(\"Hello World GoIT 2023\");\r\n// import { hello, goodbye } from \"./greeter.js\";\r\n// import * as greeter from \"./greeter.js\";\r\n// import add from \"./calc.js\";\r\n\r\nconst add = __webpack_require__(/*! ./calc */ \"./calc.js\");\r\n\r\n// console.log(greeter.hello());\r\nconsole.log(add(5, 10));\r\n// console.log(greeter.goodbye());\r\n\r\n// const validator = require(\"validator\");\r\n\r\n// const validateEmail = (email) => {\r\n//   return validator.isEmail(email);\r\n// };\r\n\r\n// console.log(validateEmail(\"adrian.rydzynski@gmail.com\"));\r\n// console.log(validateEmail(\"notrealone.com\"));\r\n\n\n//# sourceURL=webpack://tut/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;