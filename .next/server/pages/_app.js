"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  colors: {
    cyan: '#2acfcf',
    lightCyan: '#AFEEEE',
    darkViolet: '#3b3054',
    red: '#f46262',
    gray: '#bfbfbf',
    lightGray: '#eeeeee ',
    grayishViolet: '#9e9aa7',
    veryDarkBlue: '#35323e'
  }
});

/***/ }),

/***/ 353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./colors/theme.js
var theme = __webpack_require__(287);
;// CONCATENATED MODULE: ./styles/styleFooter.js


const MainDiv = external_styled_components_default().div.withConfig({
  displayName: "styleFooter__MainDiv",
  componentId: "sc-effuji-0"
})(["background-color:", ";display:flex;flex-direction:row;justify-content:space-around;align-items:baseline;padding-top:2rem;padding-bottom:2rem;color:#fff;@media only screen and (max-width:600px){flex-direction:column;align-items:center;Nav{align-items:center;}}"], theme/* default.colors.veryDarkBlue */.Z.colors.veryDarkBlue);
const Nav = external_styled_components_default().nav.withConfig({
  displayName: "styleFooter__Nav",
  componentId: "sc-effuji-1"
})(["display:flex;flex-direction:column;flex-wrap:wrap;flex-grow:inherit;h3{font-size:10px;}a{color:", ";font-size:10px;padding-top:5px;padding-bottom:5px;&:hover{color:", ";}}"], theme/* default.colors.gray */.Z.colors.gray, theme/* default.colors.cyan */.Z.colors.cyan);
const SocialNavOne = external_styled_components_default().nav.withConfig({
  displayName: "styleFooter__SocialNavOne",
  componentId: "sc-effuji-2"
})(["a{padding:5px;}@media only screen and (max-width:600px){a{display:none;}}"]);
const SocialNavTwo = external_styled_components_default().nav.withConfig({
  displayName: "styleFooter__SocialNavTwo",
  componentId: "sc-effuji-3"
})(["@media only screen and (min-width:600px){a{display:none;}}margin-top:2rem;a{padding:10px;}"]);
/* harmony default export */ const styleFooter = (MainDiv);

;// CONCATENATED MODULE: ./public/icon-instagram.svg
/* harmony default export */ const icon_instagram = ({"src":"/_next/static/media/icon-instagram.d9c0fd77.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/icon-facebook.svg
/* harmony default export */ const icon_facebook = ({"src":"/_next/static/media/icon-facebook.deee9da4.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/icon-pinterest.svg
/* harmony default export */ const icon_pinterest = ({"src":"/_next/static/media/icon-pinterest.6d4a036d.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/icon-twitter.svg
/* harmony default export */ const icon_twitter = ({"src":"/_next/static/media/icon-twitter.46516874.svg","height":20,"width":24});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer.js









const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styleFooter, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SocialNavOne, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Shortly"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          className: "image",
          alt: "fb",
          src: icon_facebook,
          width: '15px',
          height: '15px'
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: icon_twitter,
          alt: "tw",
          width: '15px',
          height: '15px',
          className: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: icon_pinterest,
          alt: "pt",
          width: '15px',
          height: '15px',
          className: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: icon_instagram,
          alt: "ig",
          width: '15px',
          height: '15px',
          className: "image"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Nav, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Features"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Link Shortening"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Branded Links"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Analytics"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Nav, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Resources"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Blog"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Developers"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Support"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Nav, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Company"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "About"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Our Team"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Careers"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Contact"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SocialNavTwo, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          className: "image",
          alt: "fb",
          src: icon_facebook,
          width: '15px',
          height: '15px'
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: icon_twitter,
          alt: "tw",
          width: '15px',
          height: '15px',
          className: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: icon_pinterest,
          alt: "pt",
          width: '15px',
          height: '15px',
          className: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: icon_instagram,
          alt: "ig",
          width: '15px',
          height: '15px',
          className: "image"
        })
      })]
    })]
  });
};

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./styles/styleNavBar.js


const styleNavBar_Nav = external_styled_components_default().nav.withConfig({
  displayName: "styleNavBar__Nav",
  componentId: "sc-1cq4anf-0"
})(["display:flex;flex-wrap:wrap;flex-direction:row;align-items:center;padding-left:5vw;padding-right:5vw;background-color:#fff;@media only screen and (max-width:480px){display:flex;justify-content:space-between;padding-left:2vw;padding-right:2vw;}"]);
const Div = external_styled_components_default().div.withConfig({
  displayName: "styleNavBar__Div",
  componentId: "sc-1cq4anf-1"
})(["color:", ";@media only screen and (max-width:375px){display:none;}"], props => props.color);
const Link = external_styled_components_default().a.withConfig({
  displayName: "styleNavBar__Link",
  componentId: "sc-1cq4anf-2"
})(["margin:1vw;font-size:10px;font-weight:bold;color:", ";&:hover{color:", ";}"], props => props.color, theme/* default.colors.darkViolet */.Z.colors.darkViolet);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styleNavBar__Wrapper",
  componentId: "sc-1cq4anf-3"
})(["a{color:black;padding:12px 16px;text-decoration:none;display:block;}div{display:none;position:absolute;right:15px;background-color:#f9f9f9;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;}button{display:flex;background-color:#fff;border:none;}&:hover{div{display:block;}}@media only screen and (min-width:375px){display:none;}"]);
/* harmony default export */ const styleNavBar = (styleNavBar_Nav);

// EXTERNAL MODULE: external "next/Image"
var Image_ = __webpack_require__(47);
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_);
;// CONCATENATED MODULE: ./components/NavBar.js






function NavBar() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styleNavBar, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Shortly"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div, {
      color: theme/* default.colors.gray */.Z.colors.gray,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Link, {
        children: "Features"
      }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
        children: "Pricing"
      }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
        children: "Resources"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        children: /*#__PURE__*/jsx_runtime_.jsx((Image_default()), {
          alt: "menu",
          width: "25px",
          src: "https://img.icons8.com/color/48/000000/menu--v1.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Features"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Pricing"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Resources"
        })]
      })]
    })]
  });
}

/* harmony default export */ const components_NavBar = (NavBar);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_NavBar, {}), children, /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./styles/styles.js


theme/* default */.Z;
const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1fmo30q-0"
})(["@import url(\"import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap');\");font-family:\"Poppins\";"]);
const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["body{margin:0;font-family:\"Popins\",sans-serif;font-size:14px;font-weight:500,700;background-color:", ";}"], theme/* default.colors.lightGray */.Z.colors.lightGray);

;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
    theme: theme/* default */.Z,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 47:
/***/ ((module) => {

module.exports = require("next/Image");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(353)));
module.exports = __webpack_exports__;

})();