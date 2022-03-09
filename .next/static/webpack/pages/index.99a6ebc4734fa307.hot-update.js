"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ShortLinks.js":
/*!**********************************!*\
  !*** ./components/ShortLinks.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _colors_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors/theme */ \"./colors/theme.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"D:\\\\nextJsProject\\\\newProject\\\\components\\\\ShortLinks.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ShortLinks(_ref) {\n  _s();\n\n  var query = _ref.query,\n      shortLink = _ref.shortLink;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Copy\"),\n      buttonStatus = _useState[0],\n      setButtonStatus = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      lastShortLink = _useState2[0],\n      setLastShortLink = _useState2[1];\n\n  if (shortLink != lastShortLink && buttonStatus !== \"Copy\") setButtonStatus(\"Copy\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Div, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      children: query\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n      children: shortLink\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ModifiedButton, {\n      onClick: function onClick() {\n        setButtonStatus(\"Copied\");\n        setLastShortLink(shortLink);\n        navigator.clipboard.writeText(shortLink);\n      },\n      buttonText: buttonStatus,\n      children: buttonStatus\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ShortLinks, \"84WU0Dtqks+QNikyc9K3drtEfIY=\");\n\n_c = ShortLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShortLinks);\nvar Div = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"ShortLinks__Div\",\n  componentId: \"sc-u73ah6-0\"\n})([\"display:flex;align-items:center;margin-bottom:2rem;background-color:#fff;margin-left:15vw;margin-right:15vw;h2,h3{font-size:12px;font-weight:400;padding-left:1rem;padding-right:1rem;}h2{flex-grow:6;white-space:nowrap;width:150px;overflow:hidden;}h3{color:\", \";flex-grow:3;}@media only screen and (max-width:720px){flex-direction:column;font-size:2px;margin-left:5rem;margin-right:5rem;hr{flex-grow:1;border:none;background-color:\", \";height:1px;width:100%;}h2{width:250px;}}@media only screen and (max-width:480px){flex-direction:column;font-size:2px;margin-left:2rem;margin-right:2rem;h2{width:150px;}}@media only screen and (max-width:375px){flex-direction:column;font-size:2px;margin-left:1rem;margin-right:1rem;}\"], _colors_theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors.cyan, _colors_theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors.gray);\n_c2 = Div;\nvar ModifiedButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n  displayName: \"ShortLinks__ModifiedButton\",\n  componentId: \"sc-u73ah6-1\"\n})([\"background:\", \";color:#fff;border:0;border-radius:5px;flex-grow:3;padding:10px;margin:1rem;min-width:100px;min-height:25px;max-height:35px;background-color:\", \";&:hover{background-color:\", \";font-weight:bold;}\"], _colors_theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors.cyan, function (props) {\n  return props.buttonText === \"Copy\" ? _colors_theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors.cyan : _colors_theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors.darkViolet;\n}, function (props) {\n  return props.buttonText === \"Copy\" ? _colors_theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors.lightCyan : _colors_theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors.grayishViolet;\n});\n_c3 = ModifiedButton;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ShortLinks\");\n$RefreshReg$(_c2, \"Div\");\n$RefreshReg$(_c3, \"ModifiedButton\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3J0TGlua3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0csVUFBVCxPQUEwQztBQUFBOztBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQ3hDLGtCQUF3Q0gsK0NBQVEsQ0FBQyxNQUFELENBQWhEO0FBQUEsTUFBT0ksWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBMENMLCtDQUFRLEVBQWxEO0FBQUEsTUFBT00sYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsTUFBSUosU0FBUyxJQUFJRyxhQUFiLElBQThCRixZQUFZLEtBQUssTUFBbkQsRUFDRUMsZUFBZSxDQUFDLE1BQUQsQ0FBZjtBQUNGLHNCQUNFLDhEQUFDLEdBQUQ7QUFBQSw0QkFDRTtBQUFBLGdCQUFLSDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsZ0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUsOERBQUMsY0FBRDtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiRSxRQUFBQSxlQUFlLENBQUMsUUFBRCxDQUFmO0FBQ0FFLFFBQUFBLGdCQUFnQixDQUFDSixTQUFELENBQWhCO0FBQ0FLLFFBQUFBLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJQLFNBQTlCO0FBQ0QsT0FMSDtBQU1FLGdCQUFVLEVBQUVDLFlBTmQ7QUFBQSxnQkFRR0E7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBdEJRSDs7S0FBQUE7QUF3QlQsK0RBQWVBLFVBQWY7QUFFQSxJQUFNVSxHQUFHLEdBQUdiLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHF0QkF1QklDLGlFQXZCSixFQW1DaUJBLGlFQW5DakIsQ0FBVDtNQUFNWTtBQThETixJQUFNSyxjQUFjLEdBQUdsQiwyRUFBSDtBQUFBO0FBQUE7QUFBQSwwTkFDSkMsaUVBREksRUFZRSxVQUFDbUIsS0FBRDtBQUFBLFNBQ2xCQSxLQUFLLENBQUNDLFVBQU4sS0FBcUIsTUFBckIsR0FBOEJwQixpRUFBOUIsR0FBa0RBLHVFQURoQztBQUFBLENBWkYsRUFnQkksVUFBQ21CLEtBQUQ7QUFBQSxTQUNsQkEsS0FBSyxDQUFDQyxVQUFOLEtBQXFCLE1BQXJCLEdBQ0lwQixzRUFESixHQUVJQSwwRUFIYztBQUFBLENBaEJKLENBQXBCO01BQU1pQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Nob3J0TGlua3MuanM/NzViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL2NvbG9ycy90aGVtZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gU2hvcnRMaW5rcyh7IHF1ZXJ5LCBzaG9ydExpbmsgfSkge1xyXG4gIGNvbnN0IFtidXR0b25TdGF0dXMsIHNldEJ1dHRvblN0YXR1c10gPSB1c2VTdGF0ZShcIkNvcHlcIik7XHJcbiAgY29uc3QgW2xhc3RTaG9ydExpbmssIHNldExhc3RTaG9ydExpbmtdID0gdXNlU3RhdGUoKTtcclxuICBpZiAoc2hvcnRMaW5rICE9IGxhc3RTaG9ydExpbmsgJiYgYnV0dG9uU3RhdHVzICE9PSBcIkNvcHlcIilcclxuICAgIHNldEJ1dHRvblN0YXR1cyhcIkNvcHlcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEaXY+XHJcbiAgICAgIDxoMj57cXVlcnl9PC9oMj5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxoMz57c2hvcnRMaW5rfTwvaDM+XHJcbiAgICAgIDxNb2RpZmllZEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldEJ1dHRvblN0YXR1cyhcIkNvcGllZFwiKTtcclxuICAgICAgICAgIHNldExhc3RTaG9ydExpbmsoc2hvcnRMaW5rKTtcclxuICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNob3J0TGluayk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBidXR0b25UZXh0PXtidXR0b25TdGF0dXN9XHJcbiAgICAgID5cclxuICAgICAgICB7YnV0dG9uU3RhdHVzfVxyXG4gICAgICA8L01vZGlmaWVkQnV0dG9uPlxyXG4gICAgPC9EaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcnRMaW5rcztcclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogMTV2dztcclxuICBtYXJnaW4tcmlnaHQ6IDE1dnc7XHJcbiAgaDIsXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmbGV4LWdyb3c6IDY7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5jeWFufTtcclxuICAgIGZsZXgtZ3JvdzogMztcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgaHIge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JheX07XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtc2l6ZTogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICBoMiB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE1vZGlmaWVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5jeWFufTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIFxyXG4gIGZsZXgtZ3JvdzogMztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbiAgbWF4LWhlaWdodDogMzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLmJ1dHRvblRleHQgPT09IFwiQ29weVwiID8gdGhlbWUuY29sb3JzLmN5YW4gOiB0aGVtZS5jb2xvcnMuZGFya1Zpb2xldH07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmJ1dHRvblRleHQgPT09IFwiQ29weVwiXHJcbiAgICAgICAgPyB0aGVtZS5jb2xvcnMubGlnaHRDeWFuXHJcbiAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheWlzaFZpb2xldH07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ0aGVtZSIsInVzZVN0YXRlIiwiU2hvcnRMaW5rcyIsInF1ZXJ5Iiwic2hvcnRMaW5rIiwiYnV0dG9uU3RhdHVzIiwic2V0QnV0dG9uU3RhdHVzIiwibGFzdFNob3J0TGluayIsInNldExhc3RTaG9ydExpbmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJEaXYiLCJkaXYiLCJjb2xvcnMiLCJjeWFuIiwiZ3JheSIsIk1vZGlmaWVkQnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJidXR0b25UZXh0IiwiZGFya1Zpb2xldCIsImxpZ2h0Q3lhbiIsImdyYXlpc2hWaW9sZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ShortLinks.js\n");

/***/ })

});