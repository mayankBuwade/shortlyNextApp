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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_nextJsProject_newProject_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var D_nextJsProject_newProject_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var D_nextJsProject_newProject_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_nextJsProject_newProject_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Cards */ \"./components/Cards.js\");\n/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Details */ \"./components/Details.js\");\n/* harmony import */ var _components_GetStarted__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GetStarted */ \"./components/GetStarted.js\");\n/* harmony import */ var _components_LinkShortner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LinkShortner */ \"./components/LinkShortner.js\");\n/* harmony import */ var _components_ShortLinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ShortLinks */ \"./components/ShortLinks.js\");\n/* harmony import */ var _components_Venue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Venue */ \"./components/Venue.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"D:\\\\nextJsProject\\\\newProject\\\\pages\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      newQuery = _useState2[0],\n      setNewQuery = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      shortLink = _useState3[0],\n      setShortLink = _useState3[1];\n\n  var handleOnSubmitSearch = /*#__PURE__*/function () {\n    var _ref = (0,D_nextJsProject_newProject_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/D_nextJsProject_newProject_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(query) {\n      var response, _yield$response$json, result, data;\n\n      return D_nextJsProject_newProject_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setQuery(query);\n              setNewQuery(\"https://api.shrtco.de/v2/shorten?url=\".concat(query));\n              _context.next = 4;\n              return fetch(newQuery, {\n                method: \"post\"\n              });\n\n            case 4:\n              response = _context.sent;\n              console.log(result);\n              _context.next = 8;\n              return response.json();\n\n            case 8:\n              _yield$response$json = _context.sent;\n              result = _yield$response$json.result;\n              _context.next = 12;\n              return result.short_link;\n\n            case 12:\n              data = _context.sent;\n              console.log(data);\n              setShortLink(data);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleOnSubmitSearch(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Venue__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_LinkShortner__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      handleOnSubmitSearch: handleOnSubmitSearch\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), shortLink ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ShortLinks__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      query: query,\n      shortLink: shortLink\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 20\n    }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Details__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Cards__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_GetStarted__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"AE++l6l35sAC7BkagG9ea2uMpAs=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU1EsSUFBVCxHQUFnQjtBQUFBOztBQUNkLGtCQUEwQlIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT1MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWdDViwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPVyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFrQ1osK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT2EsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxvQkFBb0I7QUFBQSxnVEFBRyxpQkFBT04sS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzNCQyxjQUFBQSxRQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBRyxjQUFBQSxXQUFXLGdEQUF5Q0gsS0FBekMsRUFBWDtBQUYyQjtBQUFBLHFCQUdKTyxLQUFLLENBQUNMLFFBQUQsRUFBVztBQUFFTSxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBWCxDQUhEOztBQUFBO0FBR3JCQyxjQUFBQSxRQUhxQjtBQUkzQkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQVo7QUFKMkI7QUFBQSxxQkFLRkgsUUFBUSxDQUFDSSxJQUFULEVBTEU7O0FBQUE7QUFBQTtBQUtuQkQsY0FBQUEsTUFMbUIsd0JBS25CQSxNQUxtQjtBQUFBO0FBQUEscUJBTVJBLE1BQU0sQ0FBQ0UsVUFOQzs7QUFBQTtBQU1yQkMsY0FBQUEsSUFOcUI7QUFPM0JMLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFaO0FBQ0FWLGNBQUFBLFlBQVksQ0FBQ1UsSUFBRCxDQUFaOztBQVIyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFwQlQsb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEtBQTFCOztBQVdBLHNCQUNFO0FBQUEsNEJBQ0UsK0RBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsK0RBQUMsZ0VBQUQ7QUFBYywwQkFBb0IsRUFBRUE7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dGLFNBQVMsZ0JBQUcsK0RBQUMsOERBQUQ7QUFBWSxXQUFLLEVBQUVKLEtBQW5CO0FBQTBCLGVBQVMsRUFBRUk7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILEdBQXVEWSxTQUhuRSxlQUlFLCtEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLCtEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLCtEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBLGtCQURGO0FBVUQ7O0dBMUJRakI7O0tBQUFBO0FBNEJULCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IENhcmRzIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRzXCI7XG5pbXBvcnQgRGV0YWlscyBmcm9tIFwiLi4vY29tcG9uZW50cy9EZXRhaWxzXCI7XG5pbXBvcnQgR2V0U3RhcnRlZCBmcm9tIFwiLi4vY29tcG9uZW50cy9HZXRTdGFydGVkXCI7XG5pbXBvcnQgTGlua1Nob3J0bmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xpbmtTaG9ydG5lclwiO1xuaW1wb3J0IFNob3J0TGlua3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hvcnRMaW5rc1wiO1xuaW1wb3J0IFZlbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmVudWVcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25ld1F1ZXJ5LCBzZXROZXdRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3J0TGluaywgc2V0U2hvcnRMaW5rXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVPblN1Ym1pdFNlYXJjaCA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgIHNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICBzZXROZXdRdWVyeShgaHR0cHM6Ly9hcGkuc2hydGNvLmRlL3YyL3Nob3J0ZW4/dXJsPSR7cXVlcnl9YCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXdRdWVyeSwgeyBtZXRob2Q6IFwicG9zdFwiIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0LnNob3J0X2xpbms7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgc2V0U2hvcnRMaW5rKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxWZW51IC8+XG4gICAgICA8TGlua1Nob3J0bmVyIGhhbmRsZU9uU3VibWl0U2VhcmNoPXtoYW5kbGVPblN1Ym1pdFNlYXJjaH0gLz5cbiAgICAgIHtzaG9ydExpbmsgPyA8U2hvcnRMaW5rcyBxdWVyeT17cXVlcnl9IHNob3J0TGluaz17c2hvcnRMaW5rfS8+IDogdW5kZWZpbmVkfVxuICAgICAgPERldGFpbHMgLz5cbiAgICAgIDxDYXJkcyAvPlxuICAgICAgPEdldFN0YXJ0ZWQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVNXUiIsIkNhcmRzIiwiRGV0YWlscyIsIkdldFN0YXJ0ZWQiLCJMaW5rU2hvcnRuZXIiLCJTaG9ydExpbmtzIiwiVmVudSIsIkhvbWUiLCJxdWVyeSIsInNldFF1ZXJ5IiwibmV3UXVlcnkiLCJzZXROZXdRdWVyeSIsInNob3J0TGluayIsInNldFNob3J0TGluayIsImhhbmRsZU9uU3VibWl0U2VhcmNoIiwiZmV0Y2giLCJtZXRob2QiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJqc29uIiwic2hvcnRfbGluayIsImRhdGEiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});