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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_firstform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/firstform */ \"./modules/firstform.js\");\n/* harmony import */ var _modules_questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/questions */ \"./modules/questions.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('31 december 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_firstform__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_questions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calcItems = document.querySelectorAll('input.calc-item');\r\n\r\n    calcItems.forEach((item) => {\r\n        item.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D/, '');\r\n        })\r\n    })\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/firstform.js":
/*!******************************!*\
  !*** ./modules/firstform.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firstForm = () => {\r\n    const firstFormName = document.querySelector('#form1-name')\r\n    const firstFormPhone = document.querySelector('#form1-phone')\r\n    const firstFormMail = document.querySelector('#form1-email')\r\n\r\n\r\n\r\n\r\n    firstFormName.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '');\r\n    })\r\n\r\n    firstFormPhone.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d()-]/gi, '');\r\n    })\r\n\r\n    firstFormMail.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\w@\\-_.!~*']/gi, '');\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstForm);\n\n//# sourceURL=webpack:///./modules/firstform.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a');\r\n    const scrollBtn = document.querySelector('a[href=\"#service-block\"]>img');\r\n\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    }\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n    closeBtn.addEventListener('click', handleMenu);\r\n    //Усложненка\r\n    menuItems.forEach((item) => {\r\n        item.addEventListener('click', (event) => {\r\n            handleMenu();\r\n            event.preventDefault();\r\n            const blockID = item.getAttribute('href');\r\n            document.querySelector('' + blockID).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        });\r\n    });\r\n\r\n    scrollBtn.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        const scrollLink = document.querySelector('a[href=\"#service-block\"]');\r\n        const blockID = scrollLink.getAttribute('href');\r\n        document.querySelector('' + blockID).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n    });\r\n    //Усложненка\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const getModal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const popupClose = getModal.querySelector('.popup-close')\r\n    const modalFormName = getModal.querySelector('#form3-name')\r\n    const modalFormPhone = getModal.querySelector('#form3-phone')\r\n    const modalFormMail = getModal.querySelector('#form3-email')\r\n\r\n\r\n    getModal.style.display = 'block'\r\n    getModal.style.transform = 'translateY(-100%)'\r\n\r\n    buttons.forEach((button) => {\r\n        button.addEventListener('click', () => {\r\n            getModal.style.transform = 'translateY(0)'\r\n            getModal.style.transition = '1s'\r\n        })\r\n    })\r\n\r\n    popupClose.addEventListener('click', () => {\r\n        getModal.style.transform = 'translateY(-100%)'\r\n    })\r\n\r\n\r\n    modalFormName.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '');\r\n    })\r\n\r\n    modalFormPhone.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d()-]/gi, '');\r\n    })\r\n\r\n    modalFormMail.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\w@\\-_.!~*']/gi, '');\r\n    })\r\n\r\n\r\n    window.addEventListener('resize', () => {\r\n        const clientWidth = document.documentElement.clientWidth;\r\n        const getModal = document.querySelector('.popup')\r\n        const buttons = document.querySelectorAll('.popup-btn')\r\n        const popupClose = getModal.querySelector('.popup-close')\r\n\r\n\r\n        if (clientWidth > 767) {\r\n            getModal.style.display = 'block'\r\n            getModal.style.transform = 'translateY(-100%)'\r\n\r\n            buttons.forEach((button) => {\r\n                button.addEventListener('click', () => {\r\n                    getModal.style.transform = 'translateY(0)'\r\n                    getModal.style.transition = '1s'\r\n                })\r\n            })\r\n\r\n            popupClose.addEventListener('click', () => {\r\n                getModal.style.display = 'block'\r\n                getModal.style.transform = 'translateY(-100%)'\r\n            })\r\n        } if (clientWidth < 768) {\r\n            getModal.style.display = 'none';\r\n\r\n            buttons.forEach((button) => {\r\n                button.addEventListener('click', () => {\r\n                    getModal.style.display = 'block'\r\n                })\r\n            })\r\n\r\n            popupClose.addEventListener('click', () => {\r\n                getModal.style.display = 'none';\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/questions.js":
/*!******************************!*\
  !*** ./modules/questions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst questions = () => {\r\n    const questionsFormName = document.querySelector('#form2-name')\r\n    const questionsFormPhone = document.querySelector('#form2-phone')\r\n    const questionsFormMail = document.querySelector('#form2-email')\r\n    const questionsFormMessage = document.querySelector('#form2-message')\r\n\r\n\r\n\r\n\r\n    questionsFormName.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '');\r\n    })\r\n\r\n    questionsFormPhone.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d()-]/gi, '');\r\n    })\r\n\r\n    questionsFormMail.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\w@\\-_.!~*']/gi, '');\r\n    })\r\n\r\n    questionsFormMessage.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '');\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questions);\n\n//# sourceURL=webpack:///./modules/questions.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n    let idInterval;\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, hours, minutes, seconds };\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            timerHours.textContent = getTime.hours;\r\n            timerMinutes.textContent = getTime.minutes;\r\n            timerSeconds.textContent = getTime.seconds;\r\n            if (getTime.hours < 10) {\r\n                timerHours.textContent = '0' + getTime.hours;\r\n            } if (getTime.minutes < 10) {\r\n                timerMinutes.textContent = '0' + getTime.minutes;\r\n            } if (getTime.seconds < 10) {\r\n                timerSeconds.textContent = '0' + getTime.seconds;\r\n            }\r\n        } else {\r\n            clearInterval(idInterval);\r\n        }\r\n    }\r\n    idInterval = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;