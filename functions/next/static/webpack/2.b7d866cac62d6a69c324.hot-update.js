webpackHotUpdate_N_E(2,{

/***/ "./src/common/components/ButtonGroup/index.tsx":
/*!*****************************************************!*\
  !*** ./src/common/components/ButtonGroup/index.tsx ***!
  \*****************************************************/
/*! exports provided: Button, NextButton, PreviousButton, SubmitButton, ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NextButton\", function() { return NextButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PreviousButton\", function() { return PreviousButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubmitButton\", function() { return SubmitButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonGroup\", function() { return ButtonGroup; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tpadding: 1rem 2rem;\\n\\theight: 3rem;\\n\\tborder: 1px solid black;\\n\\n\\t@media only screen and (max-width: 768px) {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\tpadding: 1rem 1rem;\\n\\t}\\n\\n\\t@media screen and (max-width: 1024px) {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tfloat: right;\\n\\tcolor: coral;\\n\\n\\t&:hover {\\n\\t\\tbackground: #ff7f50;\\n\\t\\tcolor: white;\\n\\t}\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tbackground: rgba(255, 127, 80, 0.2);\\n\\tcolor: coral;\\n\\tvisibility: \", \";\\n\\n\\t&:hover {\\n\\t\\tbackground: #ff7f50;\\n\\t\\tcolor: white;\\n\\t}\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tfloat: right;\\n\\tbackground: rgba(255, 127, 80, 0.2);\\n\\tcolor: coral;\\n\\n\\t&:hover {\\n\\t\\tbackground: #ff7f50;\\n\\t\\tcolor: white;\\n\\t}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tfont: inherit;\\n\\tborder-radius: 0.5rem;\\n\\tpadding: 0.5rem 1rem;\\n\\twidth: 10rem;\\n\\tbackground: transparent;\\n\\tborder: 1px solid coral;\\n\\tcursor: pointer;\\n\\ttransition: all 0.3s ease;\\n\\n\\t@media screen and (max-width: 768px) {\\n\\t\\twidth: 6rem;\\n\\t\\ttext-align: center;\\n\\t}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject());\nvar NextButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Button)(_templateObject2());\nvar PreviousButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Button)(_templateObject3(), function (props) {\n  return props.visibility;\n});\nvar SubmitButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Button)(_templateObject4());\nvar ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0J1dHRvbkdyb3VwL2luZGV4LnRzeD8xNjMyIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsIk5leHRCdXR0b24iLCJQcmV2aW91c0J1dHRvbiIsInByb3BzIiwidmlzaWJpbGl0eSIsIlN1Ym1pdEJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsTUFBVixtQkFBWjtBQWdCQSxJQUFNQyxVQUFVLEdBQUdGLGlFQUFNLENBQUNELE1BQUQsQ0FBVCxvQkFBaEI7QUFXQSxJQUFNSSxjQUFjLEdBQUdILGlFQUFNLENBQUNELE1BQUQsQ0FBVCxxQkFHWixVQUFDSyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxVQUFqQjtBQUFBLENBSFksQ0FBcEI7QUFXQSxJQUFNQyxZQUFZLEdBQUdOLGlFQUFNLENBQUNELE1BQUQsQ0FBVCxvQkFBbEI7QUFVQSxJQUFNUSxXQUFXLEdBQUdQLHlEQUFNLENBQUNRLEdBQVYsb0JBQWpCIiwiZmlsZSI6Ii4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0J1dHRvbkdyb3VwL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuXHRmb250OiBpbmhlcml0O1xuXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XG5cdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuXHR3aWR0aDogMTByZW07XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IDFweCBzb2xpZCBjb3JhbDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0d2lkdGg6IDZyZW07XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBOZXh0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG5cdGZsb2F0OiByaWdodDtcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDEyNywgODAsIDAuMik7XG5cdGNvbG9yOiBjb3JhbDtcblxuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiAjZmY3ZjUwO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgUHJldmlvdXNCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDEyNywgODAsIDAuMik7XG5cdGNvbG9yOiBjb3JhbDtcblx0dmlzaWJpbGl0eTogJHsocHJvcHMpID0+IHByb3BzLnZpc2liaWxpdHl9O1xuXG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6ICNmZjdmNTA7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRjb2xvcjogY29yYWw7XG5cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogI2ZmN2Y1MDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkLmRpdmBcblx0cGFkZGluZzogMXJlbSAycmVtO1xuXHRoZWlnaHQ6IDNyZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRwYWRkaW5nOiAxcmVtIDFyZW07XG5cdH1cblxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/components/ButtonGroup/index.tsx\n");

/***/ })

})