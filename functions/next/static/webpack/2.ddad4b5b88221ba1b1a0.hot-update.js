webpackHotUpdate_N_E(2,{

/***/ "./src/modules/register/components/ConfirmModal/index.tsx":
/*!****************************************************************!*\
  !*** ./src/modules/register/components/ConfirmModal/index.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/nicenicegame/Desktop/nice-workspace/bcbk2020-frontend/src/modules/register/components/ConfirmModal/index.tsx\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tbackground-color: white;\\n\\tborder-radius: 1rem;\\n\\twidth: 30vw;\\n\\theight: 30vh;\\n\\tposition: fixed;\\n\\ttop: 50%;\\n\\tleft: 50%;\\n\\ttransform: translate(-50%, -50%);\\n\\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n\\n\\t@media screen and (max-width: 768px) {\\n\\t\\twidth: 50vw;\\n\\t\\theight: 50vh;\\n\\t}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tbackground: rgba(0, 0, 0, 0.7);\\n\\tz-index: 1000;\\n\\tposition: fixed;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar Modal = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Modal;\nvar ModalCard = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = ModalCard;\n\nvar ConfirmModal = function ConfirmModal(_ref) {\n  var open = _ref.open,\n      onClose = _ref.onClose;\n  if (!open) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Modal, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ModalCard, {\n      children: [\"Hi\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: onClose,\n        children: \"Close\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = ConfirmModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmModal);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Modal\");\n$RefreshReg$(_c2, \"ModalCard\");\n$RefreshReg$(_c3, \"ConfirmModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvcmVnaXN0ZXIvY29tcG9uZW50cy9Db25maXJtTW9kYWwvaW5kZXgudHN4PzQ3YjUiXSwibmFtZXMiOlsiTW9kYWwiLCJzdHlsZWQiLCJkaXYiLCJNb2RhbENhcmQiLCJDb25maXJtTW9kYWwiLCJvcGVuIiwib25DbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWDtLQUFNRixLO0FBVU4sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFmO01BQU1DLFM7O0FBaUJOLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXVCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMzQyxNQUFJLENBQUNELElBQUwsRUFBVyxPQUFPLElBQVA7QUFDWCxzQkFDQyxxRUFBQyxLQUFEO0FBQUEsMkJBQ0MscUVBQUMsU0FBRDtBQUFBLG9DQUVDO0FBQVEsZUFBTyxFQUFFQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVFBLENBVkQ7O01BQU1GLFk7QUFZU0EsMkVBQWYiLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9yZWdpc3Rlci9jb21wb25lbnRzL0NvbmZpcm1Nb2RhbC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IE1vZGFsID0gc3R5bGVkLmRpdmBcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuXHR6LWluZGV4OiAxMDAwO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0Ym90dG9tOiAwO1xuXHRyaWdodDogMDtcbmBcblxuY29uc3QgTW9kYWxDYXJkID0gc3R5bGVkLmRpdmBcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDFyZW07XG5cdHdpZHRoOiAzMHZ3O1xuXHRoZWlnaHQ6IDMwdmg7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG5cblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHR3aWR0aDogNTB2dztcblx0XHRoZWlnaHQ6IDUwdmg7XG5cdH1cbmBcblxuY29uc3QgQ29uZmlybU1vZGFsID0gKHsgb3Blbiwgb25DbG9zZSB9KSA9PiB7XG5cdGlmICghb3BlbikgcmV0dXJuIG51bGxcblx0cmV0dXJuIChcblx0XHQ8TW9kYWw+XG5cdFx0XHQ8TW9kYWxDYXJkPlxuXHRcdFx0XHRIaVxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNsb3NlPC9idXR0b24+XG5cdFx0XHQ8L01vZGFsQ2FyZD5cblx0XHQ8L01vZGFsPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1Nb2RhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/register/components/ConfirmModal/index.tsx\n");

/***/ })

})