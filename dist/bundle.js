/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WEATHER_API_DOMAIN: () => (/* binding */ WEATHER_API_DOMAIN)\n/* harmony export */ });\nvar API_KEY = \"05124735652b0146aaf15e7c3d1a32e4\";\nvar WEATHER_API_DOMAIN = \"https://api.openweathermap.org/data/2.5/weather?appid=\".concat(API_KEY, \"&units=metric\");\n\n//# sourceURL=webpack://lesson42/./src/scripts/constants.js?");

/***/ }),

/***/ "./src/scripts/first.js":
/*!******************************!*\
  !*** ./src/scripts/first.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/scripts/constants.js\");\n\nfunction openModal() {\n  document.getElementById(\"modal\").style.display = \"block\";\n}\nfunction closeModal() {\n  document.getElementById(\"modal\").style.display = \"none\";\n}\nfunction getBackgroundImage(city) {\n  fetch(\"https://api.unsplash.com/photos/random?query=\".concat(city, \"&client_id=nSZsEQhmcRrPvwgaoDJbaXg-1hO3Zf8cNuAyYWWMb2Q\")).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var imageUrl = data.urls.regular;\n    document.body.style.backgroundImage = \"url(\".concat(imageUrl, \")\");\n  })[\"catch\"](function (error) {\n    console.error(\"Error fetching background image:\", error);\n  });\n}\nfunction weatherLeft(name, coord) {\n  var lon = coord.lon,\n    lat = coord.lat;\n  document.getElementById(\"city-name\").textContent = name;\n  document.getElementById(\"longitude\").textContent = lon;\n  document.getElementById(\"latitude\").textContent = lat;\n}\nfunction weatherMiddle(weather, main) {\n  var _weather$ = weather[0],\n    weatherTheme = _weather$.main,\n    description = _weather$.description,\n    icon = _weather$.icon;\n  var temp = main.temp,\n    feels_like = main.feels_like;\n  document.getElementById(\"weather-main\").textContent = weatherTheme;\n  document.getElementById(\"weather-description\").textContent = description;\n  document.getElementById(\"temp-current\").textContent = temp;\n  document.getElementById(\"temp-current-feelings\").textContent = feels_like;\n  document.getElementById(\"weather-icon\").src = \"http://openweathermap.org/img/wn/\".concat(icon, \".png\");\n}\nfunction weatherRight(main, wind) {\n  var humidity = main.humidity;\n  var speed = wind.speed;\n  document.getElementById(\"wind-speed\").textContent = speed;\n  document.getElementById(\"humidity\").textContent = humidity;\n}\nfunction getWeatherDetails(weatherUrl) {\n  var city = document.getElementById('city').value.trim();\n  fetch(weatherUrl).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var name = data.name,\n      coord = data.coord,\n      weather = data.weather,\n      main = data.main,\n      wind = data.wind;\n    weatherLeft(name, coord);\n    weatherMiddle(weather, main);\n    weatherRight(main, wind);\n    getBackgroundImage(city);\n    document.getElementById(\"pressure\").textContent = main.pressure;\n    document.getElementById(\"visibility\").textContent = data.visibility;\n    document.getElementById(\"temp-max\").textContent = main.temp_max;\n    document.getElementById(\"temp-min\").textContent = main.temp_min;\n    document.getElementById(\"sunrise\").textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();\n    document.getElementById(\"sunset\").textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();\n    document.querySelector('.weather-info').classList.remove('hidden');\n  })[\"catch\"](function (error) {\n    console.error(error.message);\n    alert(\"ERROR!!!!!\");\n  });\n}\nfunction weather_App() {\n  var form = document.getElementById('city-form');\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var city = document.getElementById('city').value.trim();\n    if ((city === null || city === void 0 ? void 0 : city.length) > 1) {\n      getWeatherDetails(\"\".concat(_constants_js__WEBPACK_IMPORTED_MODULE_0__.WEATHER_API_DOMAIN, \"&q=\").concat(city));\n    }\n  });\n}\nweather_App();\n\n//# sourceURL=webpack://lesson42/./src/scripts/first.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/first.js");
/******/ 	
/******/ })()
;