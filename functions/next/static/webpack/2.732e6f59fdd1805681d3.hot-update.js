webpackHotUpdate_N_E(2,{

/***/ "./src/modules/register/components/ConfirmModal/index.tsx":
/*!****************************************************************!*\
  !*** ./src/modules/register/components/ConfirmModal/index.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/nicenicegame/Desktop/nice-workspace/bcbk2020-frontend/src/modules/register/components/ConfirmModal/index.tsx\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tbackground-color: wheat;\\n\\twidth: 40%;\\n\\tposition: fixed;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tbackground: rgba(0, 0, 0, 0.7);\\n\\tz-index: 1000;\\n\\tposition: fixed;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar Modal = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Modal;\nvar ModalCard = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = ModalCard;\n\nvar ConfirmModal = function ConfirmModal(_ref) {\n  var open = _ref.open,\n      onClose = _ref.onClose;\n  if (!open) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Modal, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ModalCard, {\n      children: [\"Hi\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: onClose,\n        children: \"Close\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = ConfirmModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmModal);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Modal\");\n$RefreshReg$(_c2, \"ModalCard\");\n$RefreshReg$(_c3, \"ConfirmModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvcmVnaXN0ZXIvY29tcG9uZW50cy9Db25maXJtTW9kYWwvaW5kZXgudHN4PzQ3YjUiXSwibmFtZXMiOlsiTW9kYWwiLCJzdHlsZWQiLCJkaXYiLCJNb2RhbENhcmQiLCJDb25maXJtTW9kYWwiLCJvcGVuIiwib25DbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWDtLQUFNRixLO0FBVU4sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFmO01BQU1DLFM7O0FBTU4sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBdUI7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzNDLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU8sSUFBUDtBQUNYLHNCQUNDLHFFQUFDLEtBQUQ7QUFBQSwyQkFDQyxxRUFBQyxTQUFEO0FBQUEsb0NBRUM7QUFBUSxlQUFPLEVBQUVDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBUUEsQ0FWRDs7TUFBTUYsWTtBQVlTQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL3JlZ2lzdGVyL2NvbXBvbmVudHMvQ29uZmlybU1vZGFsL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgTW9kYWwgPSBzdHlsZWQuZGl2YFxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cdHotaW5kZXg6IDEwMDA7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRib3R0b206IDA7XG5cdHJpZ2h0OiAwO1xuYFxuXG5jb25zdCBNb2RhbENhcmQgPSBzdHlsZWQuZGl2YFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcblx0d2lkdGg6IDQwJTtcblx0cG9zaXRpb246IGZpeGVkO1xuYFxuXG5jb25zdCBDb25maXJtTW9kYWwgPSAoeyBvcGVuLCBvbkNsb3NlIH0pID0+IHtcblx0aWYgKCFvcGVuKSByZXR1cm4gbnVsbFxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbD5cblx0XHRcdDxNb2RhbENhcmQ+XG5cdFx0XHRcdEhpXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17b25DbG9zZX0+Q2xvc2U8L2J1dHRvbj5cblx0XHRcdDwvTW9kYWxDYXJkPlxuXHRcdDwvTW9kYWw+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybU1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/register/components/ConfirmModal/index.tsx\n");

/***/ })

})