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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-inicial/./src/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _js_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/classes */ \"./src/js/classes/index.js\");\n/* harmony import */ var _js_crear_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/crear-todo */ \"./src/js/crear-todo.js\");\n\n\n\n\n\n\nconst tarea = new _js_classes__WEBPACK_IMPORTED_MODULE_1__.Todo('Aprender Javascript');\n\nconst todoList = new _js_classes__WEBPACK_IMPORTED_MODULE_1__.TodoList();\n\ntodoList.todos.forEach(_js_crear_todo__WEBPACK_IMPORTED_MODULE_2__.crearTodoHtml);\n\n\n\n//# sourceURL=webpack://webpack-inicial/./src/index.js?");

/***/ }),

/***/ "./src/js/classes/index.js":
/*!*********************************!*\
  !*** ./src/js/classes/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* reexport safe */ _todo_class__WEBPACK_IMPORTED_MODULE_0__.Todo),\n/* harmony export */   \"TodoList\": () => (/* reexport safe */ _todo_list_class__WEBPACK_IMPORTED_MODULE_1__.TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/js/classes/todo.class.js\");\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class */ \"./src/js/classes/todo-list.class.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-inicial/./src/js/classes/index.js?");

/***/ }),

/***/ "./src/js/classes/todo-list.class.js":
/*!*******************************************!*\
  !*** ./src/js/classes/todo-list.class.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n\r\n\r\nclass TodoList{\r\n\r\n    constructor(){\r\n     \r\n        this.cargarLocalStorage();\r\n\r\n    }\r\n\r\n    nuevoTodo(todo){\r\n\r\n        this.todos.push(todo);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    eliminarTodo(id){\r\n\r\n        this.todos = this.todos.filter(todo => todo.id != id);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    marcarCompletado(id){\r\n\r\n        for(const todo of this.todos){\r\n        \r\n            if(todo.id == id){\r\n\r\n               todo.completado = todo.completado;\r\n               this.guardarLocalStorage();\r\n               break;\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n    eliminarCompletados(){\r\n\r\n        this.todos = this.todos.filter(todo => !todo.completado);\r\n        this.guardarLocalStorage();\r\n        \r\n    }\r\n\r\n    guardarLocalStorage(){\r\n        localStorage.setItem('todo', JSON.stringify(this.todos));\r\n\r\n    }\r\n\r\n    cargarLocalStorage(){\r\n\r\n\r\n        this.todos = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];\r\n\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-inicial/./src/js/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/js/classes/todo.class.js":
/*!**************************************!*\
  !*** ./src/js/classes/todo.class.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n\r\n\r\nclass Todo{\r\n\r\n    constructor(tarea){\r\n\r\n        this.tarea = tarea;\r\n        this.id = new Date().getTime();\r\n        this.completado = false;\r\n        this.creado = new Date();\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-inicial/./src/js/classes/todo.class.js?");

/***/ }),

/***/ "./src/js/crear-todo.js":
/*!******************************!*\
  !*** ./src/js/crear-todo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearTodoHtml\": () => (/* binding */ crearTodoHtml)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/js/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\n//Referencias HTML\r\nconst divTodoList = document.querySelector('.todo-list');\r\nconst txtInput = document.querySelector('.new-todo');\r\nconst btnBorrar = document.querySelector('.clear-completed');\r\nconst ulFiltro = document.querySelector('.filters')\r\nconst anchorFiltro = document.querySelectorAll('.filtro');\r\n\r\nconst crearTodoHtml = (todo) => {\r\n  const htmlTodo = `<li class=\"${todo.completado ? \"completed\" : \"\"}\" data-id=${\r\n    todo.id\r\n  }>\r\n\t\t\t\t\t\t<div class=\"view\">\r\n\t\t\t\t\t\t\t<input class=\"toggle\" type=\"checkbox\" ${todo.completado ? \"checked\" : \"\"}>\r\n\t\t\t\t\t\t\t<label>${todo.tarea}</label>\r\n\t\t\t\t\t\t\t<button class=\"destroy\"></button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<input class=\"edit\" value=\"Create a TodoMVC template\">\r\n\t\t\t\t\t</li>`;\r\n\r\n  const div = document.createElement(\"div\");\r\n  div.innerHTML = htmlTodo;\r\n\r\n  divTodoList.append(div.firstElementChild);\r\n\r\n  return div.firstElementChild;\r\n};\r\n\r\n//Eventos\r\n\r\ntxtInput.addEventListener('keyup', (event) => {\r\n\r\n  if (event.keyCode === 13 && txtInput.value.length > 0) {\r\n    const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.Todo(txtInput.value);\r\n    _index__WEBPACK_IMPORTED_MODULE_1__.todoList.nuevoTodo(nuevoTodo);\r\n    crearTodoHtml(nuevoTodo);\r\n    txtInput.value = \"\";\r\n  }\r\n});\r\n\r\ndivTodoList.addEventListener('click', (event) =>{\r\n\r\n    const nombreElemento = event.target.localName;\r\n    const todoElemento = event.target.parentElement.parentElement;\r\n    const todoId = todoElemento.getAttribute('data-id');\r\n\r\n    if(nombreElemento.includes('input')){\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.marcarCompletado(todoId);\r\n        todoElemento.classList.toggle('completed');\r\n\r\n    }else if(nombreElemento.includes('button')){\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarTodo(todoId);\r\n        divTodoList.removeChild(todoElemento);\r\n    }\r\n\r\n});\r\n\r\nbtnBorrar.addEventListener('click', (event) =>{\r\n\r\n    _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarCompletados();\r\n    \r\n    for(let i = divTodoList.children.length - 1; i >= 0; i--){\r\n        \r\n        const elemento = divTodoList.children[i];\r\n        \r\n        if(elemento.classList.contains('completed')){\r\n\r\n            divTodoList.removeChild(elemento);\r\n\r\n        }\r\n    }\r\n});\r\n\r\nulFiltro.addEventListener('click', (event) =>{\r\n  const filtro = event.target.text;\r\n  \r\n  if(!filtro){return;}\r\n\r\n  anchorFiltro.forEach(element => element.classList.remove('selected'));\r\n  event.target.classList.add('selected');\r\n\r\n\r\n  for(const elemento of divTodoList.children){\r\n    elemento.classList.remove('hidden');\r\n    const completado = elemento.classList.contains('completed');\r\n\r\n    switch(filtro){\r\n\r\n      case 'Pendientes':\r\n          if(completado){\r\n            elemento.classList.add('hidden');\r\n          }\r\n\r\n          break;\r\n\r\n          case 'Completados':\r\n            if(!completado){\r\n              elemento.classList.add('hidden');\r\n            }\r\n\r\n            break;\r\n\r\n    }\r\n  }\r\n});\n\n//# sourceURL=webpack://webpack-inicial/./src/js/crear-todo.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;