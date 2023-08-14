"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Sidebar.module.css */ \"./src/styles/Sidebar.module.css\");\n/* harmony import */ var _styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gi */ \"./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _DrawerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawerContext */ \"./src/components/DrawerContext.js\");\n// Sidebar.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst logo = \"/Black_and_White_Skull_memetool_Animated_Logo.gif\";\nfunction Sidebar() {\n    _s();\n    const { open, setActiveMenu, activeMenu } = (0,_DrawerContext__WEBPACK_IMPORTED_MODULE_1__.useDrawer)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Drawer, {\n        className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidebar),\n        variant: \"persistent\",\n        anchor: \"left\",\n        open: open,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"flex-start\",\n                    padding: \"8px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: logo,\n                    alt: \"Your Logo\",\n                    style: {\n                        width: \"80%\",\n                        height: \"auto\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                variant: \"h6\",\n                sx: {\n                    mt: 2,\n                    mb: 2,\n                    ml: 2,\n                    color: \"#666666\"\n                },\n                children: \"Navigation\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n                        button: true,\n                        onClick: ()=>setActiveMenu(\"Dashboard\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {\n                                sx: {\n                                    fontSize: \"1.5rem\",\n                                    minWidth: \"35px\"\n                                },\n                                className: activeMenu === \"Dashboard\" ? (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default().activeMenu) : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__.GiPirateSkull, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {\n                                primary: \"Dashboard\",\n                                className: activeMenu === \"Dashboard\" ? (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default().activeMenu) : \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n                        button: true,\n                        onClick: ()=>setActiveMenu(\"Collection\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {\n                                sx: {\n                                    fontSize: \"1.5rem\",\n                                    minWidth: \"35px\"\n                                },\n                                className: activeMenu === \"Collection\" ? (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default().activeMenu) : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__.GiPirateCoat, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {\n                                primary: \"Collection\",\n                                className: activeMenu === \"Collection\" ? (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default().activeMenu) : \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n                        button: true,\n                        onClick: ()=>setActiveMenu(\"Pirate Chat\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {\n                                sx: {\n                                    fontSize: \"1.5rem\",\n                                    minWidth: \"35px\"\n                                },\n                                className: activeMenu === \"Pirate Chat\" ? (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default().activeMenu) : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__.GiBarrel, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {\n                                primary: \"Pirate Chat\",\n                                className: activeMenu === \"Pirate Chat\" ? (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default().activeMenu) : \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Robin\\\\AppData\\\\Roaming\\\\memetool\\\\src\\\\components\\\\Sidebar.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"d/Oop8aQnjrVyPDyKng2GrIaGpo=\", false, function() {\n    return [\n        _DrawerContext__WEBPACK_IMPORTED_MODULE_1__.useDrawer\n    ];\n});\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsYUFBYTs7O0FBQ3FDO0FBRUg7QUFDRDtBQUNKO0FBRTBEO0FBQ3hEO0FBRTVDLE1BQU1ZLE9BQU87QUFFRSxTQUFTQzs7SUFDdEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLGFBQWEsRUFBRUMsVUFBVSxFQUFFLEdBQUdMLHlEQUFTQTtJQUVyRCxxQkFDRSw4REFBQ04saURBQU1BO1FBQUNZLFdBQVdqQiwyRUFBYztRQUFFbUIsU0FBUTtRQUFhQyxRQUFPO1FBQU9OLE1BQU1BOzswQkFDMUUsOERBQUNWLDhDQUFHQTtnQkFDRmlCLElBQUk7b0JBQ0ZDLFNBQVM7b0JBQ1RDLFlBQVk7b0JBQ1pDLGdCQUFnQjtvQkFDaEJDLFNBQVM7Z0JBQ1g7MEJBRUEsNEVBQUNDO29CQUFJQyxLQUFLZjtvQkFBTWdCLEtBQUk7b0JBQVlDLE9BQU87d0JBQUVDLE9BQU87d0JBQU9DLFFBQVE7b0JBQU87Ozs7Ozs7Ozs7OzBCQUV4RSw4REFBQ3JCLHFEQUFVQTtnQkFBQ1MsU0FBUTtnQkFBS0UsSUFBSTtvQkFBRVcsSUFBSTtvQkFBR0MsSUFBSTtvQkFBR0MsSUFBSTtvQkFBR0MsT0FBTztnQkFBVTswQkFBRzs7Ozs7OzBCQUN4RSw4REFBQzdCLCtDQUFJQTs7a0NBQ0gsOERBQUNDLG1EQUFRQTt3QkFBQzZCLE1BQU07d0JBQUNDLFNBQVMsSUFBTXRCLGNBQWM7OzBDQUM1Qyw4REFBQ1AsdURBQVlBO2dDQUNYYSxJQUFJO29DQUFFaUIsVUFBVTtvQ0FBVUMsVUFBVTtnQ0FBTztnQ0FDM0N0QixXQUFXRCxlQUFlLGNBQWNoQiw4RUFBaUIsR0FBRzswQ0FFNUQsNEVBQUNDLHlEQUFhQTs7Ozs7Ozs7OzswQ0FFaEIsOERBQUNRLHVEQUFZQTtnQ0FDWCtCLFNBQVE7Z0NBQ1J2QixXQUFXRCxlQUFlLGNBQWNoQiw4RUFBaUIsR0FBRzs7Ozs7Ozs7Ozs7O2tDQUdoRSw4REFBQ08sbURBQVFBO3dCQUFDNkIsTUFBTTt3QkFBQ0MsU0FBUyxJQUFNdEIsY0FBYzs7MENBQzVDLDhEQUFDUCx1REFBWUE7Z0NBQ1hhLElBQUk7b0NBQUVpQixVQUFVO29DQUFVQyxVQUFVO2dDQUFPO2dDQUMzQ3RCLFdBQVdELGVBQWUsZUFBZWhCLDhFQUFpQixHQUFHOzBDQUU3RCw0RUFBQ0Usd0RBQVlBOzs7Ozs7Ozs7OzBDQUVmLDhEQUFDTyx1REFBWUE7Z0NBQ1grQixTQUFRO2dDQUNSdkIsV0FBV0QsZUFBZSxlQUFlaEIsOEVBQWlCLEdBQUc7Ozs7Ozs7Ozs7OztrQ0FHakUsOERBQUNPLG1EQUFRQTt3QkFBQzZCLE1BQU07d0JBQUNDLFNBQVMsSUFBTXRCLGNBQWM7OzBDQUM1Qyw4REFBQ1AsdURBQVlBO2dDQUNYYSxJQUFJO29DQUFFaUIsVUFBVTtvQ0FBVUMsVUFBVTtnQ0FBTztnQ0FDM0N0QixXQUFXRCxlQUFlLGdCQUFnQmhCLDhFQUFpQixHQUFHOzBDQUU5RCw0RUFBQ0csb0RBQVFBOzs7Ozs7Ozs7OzBDQUVYLDhEQUFDTSx1REFBWUE7Z0NBQ1grQixTQUFRO2dDQUNSdkIsV0FBV0QsZUFBZSxnQkFBZ0JoQiw4RUFBaUIsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFFO0dBeER3QmE7O1FBQ3NCRixxREFBU0E7OztLQUQvQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qcz85ZWJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNpZGViYXIuanNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvU2lkZWJhci5tb2R1bGUuY3NzJztcclxuXHJcbmltcG9ydCB7IEdpUGlyYXRlU2t1bGwgfSBmcm9tICdyZWFjdC1pY29ucy9naSc7XHJcbmltcG9ydCB7IEdpUGlyYXRlQ29hdCB9IGZyb20gJ3JlYWN0LWljb25zL2dpJztcclxuaW1wb3J0IHsgR2lCYXJyZWwgfSBmcm9tICdyZWFjdC1pY29ucy9naSc7XHJcblxyXG5pbXBvcnQgeyBCb3gsIERyYXdlciwgTGlzdCwgTGlzdEl0ZW0sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZURyYXdlciB9IGZyb20gJy4vRHJhd2VyQ29udGV4dCc7XHJcblxyXG5jb25zdCBsb2dvID0gXCIvQmxhY2tfYW5kX1doaXRlX1NrdWxsX21lbWV0b29sX0FuaW1hdGVkX0xvZ28uZ2lmXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGNvbnN0IHsgb3Blbiwgc2V0QWN0aXZlTWVudSwgYWN0aXZlTWVudSB9ID0gdXNlRHJhd2VyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9IHZhcmlhbnQ9XCJwZXJzaXN0ZW50XCIgYW5jaG9yPVwibGVmdFwiIG9wZW49e29wZW59PlxyXG4gICAgICA8Qm94IFxyXG4gICAgICAgIHN4PXt7IFxyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBcclxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLCBcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsIFxyXG4gICAgICAgICAgcGFkZGluZzogJzhweCdcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cIllvdXIgTG9nb1wiIHN0eWxlPXt7IHdpZHRoOiAnODAlJywgaGVpZ2h0OiAnYXV0bycgfX0gLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IG10OiAyLCBtYjogMiwgbWw6IDIsIGNvbG9yOiAnIzY2NjY2NicgfX0+TmF2aWdhdGlvbjwvVHlwb2dyYXBoeT5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KFwiRGFzaGJvYXJkXCIpfT5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24gXHJcbiAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAnMS41cmVtJywgbWluV2lkdGg6ICczNXB4JyB9fSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVNZW51ID09PSBcIkRhc2hib2FyZFwiID8gc3R5bGVzLmFjdGl2ZU1lbnUgOiBcIlwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R2lQaXJhdGVTa3VsbCAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IFxyXG4gICAgICAgICAgICBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlTWVudSA9PT0gXCJEYXNoYm9hcmRcIiA/IHN0eWxlcy5hY3RpdmVNZW51IDogXCJcIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoXCJDb2xsZWN0aW9uXCIpfT5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24gXHJcbiAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAnMS41cmVtJywgbWluV2lkdGg6ICczNXB4JyB9fSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVNZW51ID09PSBcIkNvbGxlY3Rpb25cIiA/IHN0eWxlcy5hY3RpdmVNZW51IDogXCJcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdpUGlyYXRlQ29hdCAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IFxyXG4gICAgICAgICAgICBwcmltYXJ5PVwiQ29sbGVjdGlvblwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZU1lbnUgPT09IFwiQ29sbGVjdGlvblwiID8gc3R5bGVzLmFjdGl2ZU1lbnUgOiBcIlwifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudShcIlBpcmF0ZSBDaGF0XCIpfT5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24gXHJcbiAgICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAnMS41cmVtJywgbWluV2lkdGg6ICczNXB4JyB9fSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVNZW51ID09PSBcIlBpcmF0ZSBDaGF0XCIgPyBzdHlsZXMuYWN0aXZlTWVudSA6IFwiXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHaUJhcnJlbCAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IFxyXG4gICAgICAgICAgICBwcmltYXJ5PVwiUGlyYXRlIENoYXRcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVNZW51ID09PSBcIlBpcmF0ZSBDaGF0XCIgPyBzdHlsZXMuYWN0aXZlTWVudSA6IFwiXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkdpUGlyYXRlU2t1bGwiLCJHaVBpcmF0ZUNvYXQiLCJHaUJhcnJlbCIsIkJveCIsIkRyYXdlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIlR5cG9ncmFwaHkiLCJ1c2VEcmF3ZXIiLCJsb2dvIiwiU2lkZWJhciIsIm9wZW4iLCJzZXRBY3RpdmVNZW51IiwiYWN0aXZlTWVudSIsImNsYXNzTmFtZSIsInNpZGViYXIiLCJ2YXJpYW50IiwiYW5jaG9yIiwic3giLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImltZyIsInNyYyIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJtdCIsIm1iIiwibWwiLCJjb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb250U2l6ZSIsIm1pbldpZHRoIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Sidebar.js\n"));

/***/ })

});