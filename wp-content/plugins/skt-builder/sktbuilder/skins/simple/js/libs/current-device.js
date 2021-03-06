/*!
 * current-device v0.6.3 - https://github.com/matthewhudson/current-device
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["device"] = factory();
	else
		root["device"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// current-device
// (c) 2012-present Matthew Hudson
// current-device is freely distributable under the MIT license.
// For all details and documentation:
// http://thematthewhudson.com/current-device/

var device, previousDevice, addClass, documentElement, find, handleOrientation, hasClass, orientationEvent, removeClass, userAgent;

// Save the previous value of the device variable.
previousDevice = window.device;

device = {};

// Add device as a global object.
window.device = device;

// The <html> element.
documentElement = window.document.documentElement;

// The client user agent string.
// Lowercase, so we can use the more efficient indexOf(), instead of Regex
userAgent = window.navigator.userAgent.toLowerCase();

// Main functions
// --------------

device.macos = function () {
  return find('mac');
};

device.ios = function () {
  return device.iphone() || device.ipod() || device.ipad();
};

device.iphone = function () {
  return !device.windows() && find('iphone');
};

device.ipod = function () {
  return find('ipod');
};

device.ipad = function () {
  return find('ipad');
};

device.android = function () {
  return !device.windows() && find('android');
};

device.androidPhone = function () {
  return device.android() && find('mobile');
};

device.androidTablet = function () {
  return device.android() && !find('mobile');
};

device.blackberry = function () {
  return find('blackberry') || find('bb10') || find('rim');
};

device.blackberryPhone = function () {
  return device.blackberry() && !find('tablet');
};

device.blackberryTablet = function () {
  return device.blackberry() && find('tablet');
};

device.windows = function () {
  return find('windows');
};

device.windowsPhone = function () {
  return device.windows() && find('phone');
};

device.windowsTablet = function () {
  return device.windows() && find('touch') && !device.windowsPhone();
};

device.fxos = function () {
  return (find('(mobile;') || find('(tablet;')) && find('; rv:');
};

device.fxosPhone = function () {
  return device.fxos() && find('mobile');
};

device.fxosTablet = function () {
  return device.fxos() && find('tablet');
};

device.meego = function () {
  return find('meego');
};

device.cordova = function () {
  return window.cordova && location.protocol === 'file:';
};

device.nodeWebkit = function () {
  return _typeof(window.process) === 'object';
};

device.mobile = function () {
  return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
};

device.tablet = function () {
  return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
};

device.desktop = function () {
  return !device.tablet() && !device.mobile();
};

device.television = function () {
  var i,
      television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];

  i = 0;
  while (i < television.length) {
    if (find(television[i])) {
      return true;
    }
    i++;
  }
  return false;
};

device.portrait = function () {
  return window.innerHeight / window.innerWidth > 1;
};

device.landscape = function () {
  return window.innerHeight / window.innerWidth < 1;
};

// Public Utility Functions
// ------------------------

// Run device.js in noConflict mode,
// returning the device variable to its previous owner.
device.noConflict = function () {
  window.device = previousDevice;
  return this;
};

// Private Utility Functions
// -------------------------

// Simple UA string search
find = function find(needle) {
  return userAgent.indexOf(needle) !== -1;
};

// Check if documentElement already has a given class.
hasClass = function hasClass(className) {
  var regex;
  regex = new RegExp(className, 'i');
  return documentElement.className.match(regex);
};

// Add one or more CSS classes to the <html> element.
addClass = function addClass(className) {
  var currentClassNames = null;
  if (!hasClass(className)) {
    currentClassNames = documentElement.className.replace(/^\s+|\s+$/g, '');
    documentElement.className = currentClassNames + " " + className;
  }
};

// Remove single CSS class from the <html> element.
removeClass = function removeClass(className) {
  if (hasClass(className)) {
    documentElement.className = documentElement.className.replace(" " + className, "");
  }
};

// HTML Element Handling
// ---------------------

// Insert the appropriate CSS class based on the _user_agent.

if (device.ios()) {
  if (device.ipad()) {
    addClass("ios ipad tablet");
  } else if (device.iphone()) {
    addClass("ios iphone mobile");
  } else if (device.ipod()) {
    addClass("ios ipod mobile");
  }
} else if (device.macos()) {
  addClass("macos desktop");
} else if (device.android()) {
  if (device.androidTablet()) {
    addClass("android tablet");
  } else {
    addClass("android mobile");
  }
} else if (device.blackberry()) {
  if (device.blackberryTablet()) {
    addClass("blackberry tablet");
  } else {
    addClass("blackberry mobile");
  }
} else if (device.windows()) {
  if (device.windowsTablet()) {
    addClass("windows tablet");
  } else if (device.windowsPhone()) {
    addClass("windows mobile");
  } else {
    addClass("windows desktop");
  }
} else if (device.fxos()) {
  if (device.fxosTablet()) {
    addClass("fxos tablet");
  } else {
    addClass("fxos mobile");
  }
} else if (device.meego()) {
  addClass("meego mobile");
} else if (device.nodeWebkit()) {
  addClass("node-webkit");
} else if (device.television()) {
  addClass("television");
} else if (device.desktop()) {
  addClass("desktop");
}

if (device.cordova()) {
  addClass("cordova");
}

// Orientation Handling
// --------------------

// Handle device orientation changes.
handleOrientation = function handleOrientation() {
  if (device.landscape()) {
    removeClass("portrait");
    addClass("landscape");
  } else {
    removeClass("landscape");
    addClass("portrait");
  }
};

// Detect whether device supports orientationchange event,
// otherwise fall back to the resize event.
if (Object.prototype.hasOwnProperty.call(window, "onorientationchange")) {
  orientationEvent = "orientationchange";
} else {
  orientationEvent = "resize";
}

// Listen for changes in orientation.
if (window.addEventListener) {
  window.addEventListener(orientationEvent, handleOrientation, false);
} else if (window.attachEvent) {
  window.attachEvent(orientationEvent, handleOrientation);
} else {
  window[orientationEvent] = handleOrientation;
}

handleOrientation();

/* harmony default export */ __webpack_exports__["default"] = (device);

/***/ })
/******/ ])["default"];
});