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

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./src/styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\");\n/* harmony import */ var _mui_icons_material_MenuOpen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/MenuOpen */ \"./node_modules/@mui/icons-material/MenuOpen.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Tooltip */ \"./node_modules/@mui/material/Tooltip/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var _DrawerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawerContext */ \"./src/components/DrawerContext.js\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @web3modal/react */ \"./node_modules/@web3modal/react/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Import the Web3Button\n\nconst pages = [\n    \"About\",\n    \"Pricing\",\n    \"Blog\"\n];\nconst settings = [\n    \"Account\",\n    \"Logout\"\n];\nfunction ResponsiveAppBar() {\n    _s();\n    const { toggleDrawer, open, setActiveMenu } = (0,_DrawerContext__WEBPACK_IMPORTED_MODULE_2__.useDrawer)();\n    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const [anchorElUser, setAnchorElUser] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const handleOpenNavMenu = (event)=>{\n        setAnchorElNav(event.currentTarget);\n    };\n    const handleOpenUserMenu = (event)=>{\n        setAnchorElUser(event.currentTarget);\n    };\n    const handleCloseNavMenu = ()=>{\n        setAnchorElNav(null);\n    };\n    const handleCloseUserMenu = ()=>{\n        setAnchorElUser(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        position: \"static\",\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().appBar),\n        sx: {\n            backgroundColor: \"#1E1F1F\",\n            borderBottom: \"1px solid #282928\",\n            marginLeft: open ? \"270px\" : \"0px\",\n            width: open ? \"calc(100% - 270px)\" : \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            disableGutters: true,\n            sx: {\n                display: \"flex\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    color: \"inherit\",\n                    \"aria-label\": \"open drawer\",\n                    onClick: toggleDrawer,\n                    edge: \"start\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MenuOpen__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"flex-end\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            sx: {\n                                display: {\n                                    xs: \"flex\",\n                                    md: \"flex\"\n                                }\n                            },\n                            children: pages.map((page)=>page === \"Blog\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://cryptosyou.com/\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    style: {\n                                        textDecoration: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        onClick: handleCloseNavMenu,\n                                        sx: {\n                                            my: 2,\n                                            color: \"white\",\n                                            display: \"block\"\n                                        },\n                                        children: page\n                                    }, page, false, {\n                                        fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 7\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 5\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    onClick: ()=>{\n                                        handleCloseNavMenu();\n                                        setActiveMenu(page); // <-- Set the active menu here\n                                    },\n                                    sx: {\n                                        my: 2,\n                                        color: \"white\",\n                                        display: \"block\"\n                                    },\n                                    children: page\n                                }, page, false, {\n                                    fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 5\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            sx: {\n                                display: {\n                                    xs: \"flex\",\n                                    md: \"flex\"\n                                },\n                                ml: 5\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    title: \"Open settings\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: handleOpenUserMenu,\n                                        sx: {\n                                            p: 0\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            alt: \"Remy Sharp\",\n                                            src: \"/static/images/avatar/2.jpg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    sx: {\n                                        mt: \"45px\"\n                                    },\n                                    id: \"menu-appbar\",\n                                    anchorEl: anchorElUser,\n                                    anchorOrigin: {\n                                        vertical: \"top\",\n                                        horizontal: \"right\"\n                                    },\n                                    keepMounted: true,\n                                    transformOrigin: {\n                                        vertical: \"top\",\n                                        horizontal: \"right\"\n                                    },\n                                    open: Boolean(anchorElUser),\n                                    onClose: handleCloseUserMenu,\n                                    children: settings.map((setting)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                            onClick: handleCloseUserMenu,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                                textAlign: \"center\",\n                                                children: setting\n                                            }, void 0, false, {\n                                                fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, setting, false, {\n                                            fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_15__.Web3Button, {}, void 0, false, {\n                                    fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/robin/dev/memetool/src/components/Header.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(ResponsiveAppBar, \"CwftGOqpuGXwja074rnlUWNpbVU=\", false, function() {\n    return [\n        _DrawerContext__WEBPACK_IMPORTED_MODULE_2__.useDrawer\n    ];\n});\n_c = ResponsiveAppBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResponsiveAppBar);\nvar _c;\n$RefreshReg$(_c, \"ResponsiveAppBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNIQyxVQUFVekM7b0NBQ1YwQyxjQUFjO3dDQUNaQyxVQUFVO3dDQUNWQyxZQUFZO29DQUNkO29DQUNBQyxXQUFXO29DQUNYQyxpQkFBaUI7d0NBQ2ZILFVBQVU7d0NBQ1ZDLFlBQVk7b0NBQ2Q7b0NBQ0FqRCxNQUFNb0QsUUFBUS9DO29DQUNkZ0QsU0FBU3pDOzhDQUVSZixTQUFTaUMsR0FBRyxDQUFDLENBQUN3Qix3QkFDYiw4REFBQzdELCtEQUFRQTs0Q0FBZWlDLFNBQVNkO3NEQUMvQiw0RUFBQ3pCLGlFQUFVQTtnREFBQ29FLFdBQVU7MERBQVVEOzs7Ozs7MkNBRG5CQTs7Ozs7Ozs7Ozs4Q0FLbkIsOERBQUMzRCx5REFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkI7R0EvRlNHOztRQUN1Q0oscURBQVNBOzs7S0FEaERJO0FBZ0dULCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzPzMzMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MnO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51JztcbmltcG9ydCBNZW51T3Blbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51T3Blbic7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXZhdGFyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcbmltcG9ydCB7IHVzZURyYXdlciB9IGZyb20gJy4vRHJhd2VyQ29udGV4dCc7XG5cbi8vIEltcG9ydCB0aGUgV2ViM0J1dHRvblxuaW1wb3J0IHsgV2ViM0J1dHRvbiB9IGZyb20gJ0B3ZWIzbW9kYWwvcmVhY3QnO1xuXG5jb25zdCBwYWdlcyA9IFsnQWJvdXQnLCAnUHJpY2luZycsICdCbG9nJ107XG5jb25zdCBzZXR0aW5ncyA9IFsnQWNjb3VudCcsICdMb2dvdXQnXTtcblxuZnVuY3Rpb24gUmVzcG9uc2l2ZUFwcEJhcigpIHtcbiAgY29uc3QgeyB0b2dnbGVEcmF3ZXIsIG9wZW4sIHNldEFjdGl2ZU1lbnUgfSA9IHVzZURyYXdlcigpO1xuXG4gIGNvbnN0IFthbmNob3JFbE5hdiwgc2V0QW5jaG9yRWxOYXZdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthbmNob3JFbFVzZXIsIHNldEFuY2hvckVsVXNlcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVPcGVuTmF2TWVudSA9IChldmVudCkgPT4ge1xuICAgIHNldEFuY2hvckVsTmF2KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVPcGVuVXNlck1lbnUgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRBbmNob3JFbFVzZXIoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VOYXZNZW51ID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsTmF2KG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXNlck1lbnUgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWxVc2VyKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT17c3R5bGVzLmFwcEJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFFMUYxRicsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMjgyOTI4JywgbWFyZ2luTGVmdDogb3BlbiA/ICcyNzBweCcgOiAnMHB4JyxcbiAgICB3aWR0aDogb3BlbiA/IGBjYWxjKDEwMCUgLSAyNzBweClgIDogJzEwMCUnLH19PlxuICAgICAgICA8VG9vbGJhciBkaXNhYmxlR3V0dGVycyBzeD17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ319PlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICA+XG4gICAgICAgIDxNZW51T3Blbkljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8Qm94IHN4PXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ319PlxuICAgICAgICAgIDxCb3ggc3g9e3sgIGRpc3BsYXk6IHt4czogJ2ZsZXgnLCBtZDogJ2ZsZXgnfSB9fT5cbiAgICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXG4gIHBhZ2UgPT09IFwiQmxvZ1wiID8gKFxuICAgIDxhIGhyZWY9XCJodHRwczovL2NyeXB0b3N5b3UuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBrZXk9e3BhZ2V9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTmF2TWVudX1cbiAgICAgICAgc3g9e3sgbXk6IDIsIGNvbG9yOiAnd2hpdGUnLCBkaXNwbGF5OiAnYmxvY2snIH19XG4gICAgICA+XG4gICAgICAgIHtwYWdlfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9hPlxuICApIDogKFxuICAgIDxCdXR0b25cbiAgICAgIGtleT17cGFnZX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaGFuZGxlQ2xvc2VOYXZNZW51KCk7XG4gICAgICAgIHNldEFjdGl2ZU1lbnUocGFnZSk7ICAvLyA8LS0gU2V0IHRoZSBhY3RpdmUgbWVudSBoZXJlXG4gICAgICB9fVxuICAgICAgc3g9e3sgbXk6IDIsIGNvbG9yOiAnd2hpdGUnLCBkaXNwbGF5OiAnYmxvY2snIH19XG4gICAgPlxuICAgICAge3BhZ2V9XG4gICAgPC9CdXR0b24+XG4gIClcbikpfVxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiB7eHM6ICdmbGV4JywgbWQ6ICdmbGV4J30sIG1sOiA1fX0+XG4gICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIk9wZW4gc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlblVzZXJNZW51fSBzeD17eyBwOiAwIH19PlxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiUmVteSBTaGFycFwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2YXRhci8yLmpwZ1wiIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgIHN4PXt7IG10OiAnNDVweCd9fVxuICAgICAgICAgICAgICBpZD1cIm1lbnUtYXBwYmFyXCJcbiAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsVXNlcn1cbiAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsVXNlcil9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXNlck1lbnV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZXR0aW5ncy5tYXAoKHNldHRpbmcpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtzZXR0aW5nfSBvbkNsaWNrPXtoYW5kbGVDbG9zZVVzZXJNZW51fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHRleHRBbGlnbj1cImNlbnRlclwiPntzZXR0aW5nfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDxXZWIzQnV0dG9uIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICA8L0FwcEJhcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVBcHBCYXI7Il0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIkljb25CdXR0b24iLCJUeXBvZ3JhcGh5IiwiTWVudSIsIk1lbnVPcGVuSWNvbiIsIkF2YXRhciIsIkJ1dHRvbiIsIlRvb2x0aXAiLCJNZW51SXRlbSIsInVzZURyYXdlciIsIldlYjNCdXR0b24iLCJwYWdlcyIsInNldHRpbmdzIiwiUmVzcG9uc2l2ZUFwcEJhciIsInRvZ2dsZURyYXdlciIsIm9wZW4iLCJzZXRBY3RpdmVNZW51IiwiYW5jaG9yRWxOYXYiLCJzZXRBbmNob3JFbE5hdiIsInVzZVN0YXRlIiwiYW5jaG9yRWxVc2VyIiwic2V0QW5jaG9yRWxVc2VyIiwiaGFuZGxlT3Blbk5hdk1lbnUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVPcGVuVXNlck1lbnUiLCJoYW5kbGVDbG9zZU5hdk1lbnUiLCJoYW5kbGVDbG9zZVVzZXJNZW51IiwicG9zaXRpb24iLCJjbGFzc05hbWUiLCJhcHBCYXIiLCJzeCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckJvdHRvbSIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImRpc2FibGVHdXR0ZXJzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJhcmlhLWxhYmVsIiwib25DbGljayIsImVkZ2UiLCJ4cyIsIm1kIiwibWFwIiwicGFnZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm15IiwibWwiLCJ0aXRsZSIsInAiLCJhbHQiLCJzcmMiLCJtdCIsImlkIiwiYW5jaG9yRWwiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJrZWVwTW91bnRlZCIsInRyYW5zZm9ybU9yaWdpbiIsIkJvb2xlYW4iLCJvbkNsb3NlIiwic2V0dGluZyIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.js\n"));

/***/ })

});