(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.css */ "./components/Button/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\nikio\\nextJsProject\\typeScript\\components\\Button\\Button.tsx";


const Button = ({
  children,
  appearance
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Button_module_css__WEBPACK_IMPORTED_MODULE_2___default().button), {
      [(_Button_module_css__WEBPACK_IMPORTED_MODULE_2___default().primary)]: appearance == 'primary',
      [(_Button_module_css__WEBPACK_IMPORTED_MODULE_2___default().ghost)]: appearance == 'ghost'
    }),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/Htag/Htag.tsx":
/*!**********************************!*\
  !*** ./components/Htag/Htag.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Htag": function() { return /* binding */ Htag; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Htag_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Htag.module.css */ "./components/Htag/Htag.module.css");
/* harmony import */ var _Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Htag_module_css__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\nikio\\nextJsProject\\typeScript\\components\\Htag\\Htag.tsx";

const Htag = ({
  tag,
  children
}) => {
  switch (tag) {
    case 'h1':
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default().h1),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 20
      }, undefined);

    case 'h2':
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default().h2),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 20
      }, undefined);

    case 'h3':
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: (_Htag_module_css__WEBPACK_IMPORTED_MODULE_1___default().h3),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 20
      }, undefined);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
  }
};

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Htag_Htag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Htag/Htag */ "./components/Htag/Htag.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Htag_Htag__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Htag_Htag__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button/Button */ "./components/Button/Button.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Button_Button__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _Button_Button__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.ts");


var _jsxFileName = "C:\\Users\\nikio\\nextJsProject\\typeScript\\pages\\index.tsx";


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Htag, {
      tag: "h1",
      children: "\u0422\u0435\u043A\u0441\u0442"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      appearance: "primary",
      children: "\u041A\u043D\u043E\u043F\u043A\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      appearance: "ghost",
      children: "\u041A\u043D\u043E\u043F\u043A\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Button/Button.module.css":
/*!*********************************************!*\
  !*** ./components/Button/Button.module.css ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"button": "Button_button__sL3tD",
	"primary": "Button_primary__2zal1",
	"ghost": "Button_ghost__2SQcx"
};


/***/ }),

/***/ "./components/Htag/Htag.module.css":
/*!*****************************************!*\
  !*** ./components/Htag/Htag.module.css ***!
  \*****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"h1": "Htag_h1__15c8R",
	"h2": "Htag_h2__38T7C",
	"h3": "Htag_h3__1L-7T"
};


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYXBwLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly90b3AtYXBwLy4vY29tcG9uZW50cy9IdGFnL0h0YWcudHN4Iiwid2VicGFjazovL3RvcC1hcHAvLi9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL3RvcC1hcHAvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vdG9wLWFwcC8uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL3RvcC1hcHAvLi9jb21wb25lbnRzL0h0YWcvSHRhZy5tb2R1bGUuY3NzIiwid2VicGFjazovL3RvcC1hcHAvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vdG9wLWFwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9wLWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsImNoaWxkcmVuIiwiYXBwZWFyYW5jZSIsImNuIiwic3R5bGVzIiwiSHRhZyIsInRhZyIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRU8sTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0MsVUFBRDtBQUFXQztBQUFYLENBQUQsS0FBc0Q7QUFDeEUsc0JBQ0k7QUFBUSxhQUFTLEVBQUVDLGlEQUFFLENBQUNDLGtFQUFELEVBQWdCO0FBQ2pDLE9BQUNBLG1FQUFELEdBQWtCRixVQUFVLElBQUksU0FEQztBQUVqQyxPQUFDRSxpRUFBRCxHQUFnQkYsVUFBVSxJQUFJO0FBRkcsS0FBaEIsQ0FBckI7QUFBQSxjQUlLRDtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVNILENBVk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBR08sTUFBTUksSUFBSSxHQUFHLENBQUM7QUFBRUMsS0FBRjtBQUFPTDtBQUFQLENBQUQsS0FBK0M7QUFFL0QsVUFBUUssR0FBUjtBQUNJLFNBQUssSUFBTDtBQUNJLDBCQUFPO0FBQUksaUJBQVMsRUFBRUYsNERBQWY7QUFBQSxrQkFBMkJIO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7O0FBQ0osU0FBSyxJQUFMO0FBQ0ksMEJBQU87QUFBSSxpQkFBUyxFQUFFRyw0REFBZjtBQUFBLGtCQUEyQkg7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDs7QUFDSixTQUFLLElBQUw7QUFDSSwwQkFBTztBQUFJLGlCQUFTLEVBQUVHLDREQUFmO0FBQUEsa0JBQTJCSDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQOztBQUNKO0FBQ0ksMEJBQU8sNklBQVA7QUFSUjtBQVdILENBYk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVlLFNBQVNNLElBQVQsR0FBNkI7QUFDMUMsc0JBQ0U7QUFBQSw0QkFDSSw4REFBQyw2Q0FBRDtBQUFNLFNBQUcsRUFBQyxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQywrQ0FBRDtBQUFRLGdCQUFVLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLDhEQUFDLCtDQUFEO0FBQVEsZ0JBQVUsRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUEsa0JBREY7QUFPRCxDOzs7Ozs7Ozs7O0FDWEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25Qcm9wcyB9IGZyb20gXCIuL0J1dHRvbi5wcm9wc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHtjaGlsZHJlbiwgYXBwZWFyYW5jZX06IEJ1dHRvblByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y24oc3R5bGVzLmJ1dHRvbiwge1xyXG4gICAgICAgICAgICBbc3R5bGVzLnByaW1hcnldOiBhcHBlYXJhbmNlID09ICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgW3N0eWxlcy5naG9zdF06IGFwcGVhcmFuY2UgPT0gJ2dob3N0JyxcclxuICAgICAgICB9KX0gPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTsiLCJpbXBvcnQgeyBIdGFnUHJvcHMgfSBmcm9tIFwiLi9IdGFnLnByb3BzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IdGFnLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIdGFnID0gKHsgdGFnLCBjaGlsZHJlbiB9OiBIdGFnUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblxyXG4gICAgc3dpdGNoICh0YWcpIHtcclxuICAgICAgICBjYXNlICdoMSc6XHJcbiAgICAgICAgICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaDF9PntjaGlsZHJlbn08L2gxPjtcclxuICAgICAgICBjYXNlICdoMic6XHJcbiAgICAgICAgICAgIHJldHVybiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaDJ9PntjaGlsZHJlbn08L2gyPjtcclxuICAgICAgICBjYXNlICdoMyc6XHJcbiAgICAgICAgICAgIHJldHVybiA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaDN9PntjaGlsZHJlbn08L2gzPjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gPD48Lz47XHJcbiAgICB9XHJcblxyXG59OyIsImV4cG9ydCAqIGZyb20gJy4vSHRhZy9IdGFnJztcclxuZXhwb3J0ICogZnJvbSAnLi9CdXR0b24vQnV0dG9uJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEh0YWcgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8SHRhZyB0YWc9J2gxJz7QotC10LrRgdGCPC9IdGFnPlxuICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9J3ByaW1hcnknPtCa0L3QvtC/0LrQsDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9J2dob3N0Jz7QmtC90L7Qv9C60LA8L0J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkJ1dHRvbl9idXR0b25fX3NMM3REXCIsXG5cdFwicHJpbWFyeVwiOiBcIkJ1dHRvbl9wcmltYXJ5X18yemFsMVwiLFxuXHRcImdob3N0XCI6IFwiQnV0dG9uX2dob3N0X18yU1FjeFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaDFcIjogXCJIdGFnX2gxX18xNWM4UlwiLFxuXHRcImgyXCI6IFwiSHRhZ19oMl9fMzhUN0NcIixcblx0XCJoM1wiOiBcIkh0YWdfaDNfXzFMLTdUXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9