/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Use the sqs-core module to access core Squarespace
// functionality, like Lifecycle and ImageLoader. For
// full documentation, go to:
//
// http://github.com/squarespace/squarespace-core


//Included Modules
var core = __webpack_require__(2);
var controller = __webpack_require__(7);
var tilt = __webpack_require__(8);

// Action Animations
function hideControls(player) {
  $(player).addClass('hide-controls');
}

function toggleFeatured() {
  $('aside').toggleClass('show-featured');
}

function toggleNav() {
  $('body').toggleClass('show-nav');
}

function toggleBtn(btn) {
  $(btn).toggleClass('close-btn');
  $(btn).toggleClass('icon-arrow-right');
  $(btn).toggleClass('icon-close');
}

function addArrows() {
  $('.form-button-wrapper').addClass('icon-arrow-right');
}

$(document).ready(function () {

  // Hide Video Controls
  $('.sqs-video-wrapper').click(function () {
    hideControls(this);
  });

  // Show / Hide Featured Content
  $('.featured-button').click(function () {
    toggleFeatured();
  });

  // Show / Hide Mobile Nae
  $('.open-nav').click(function () {
    toggleNav();
  });
  $('.close-nav').click(function () {
    toggleNav();
  });

  // Replace Button Text
  $('.featured-button').click(function () {
    toggleBtn(this);
  });

  // Add Arrows to Form Buttons
  $('.sqs-editable-button').click(function () {
    addArrows();
  });
});

// Loading Animations
document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');

  $('header').addClass('show');

  // Fix Footer Buttons
  $('span.sqs-editable-button').addClass('icon-arrow-right');
  $('.subscribe-content .sqs-editable-button').html("<strong>Sign Up</strong>");
  $('.contact-content .sqs-editable-button').html("Send an <strong>Email</strong>");
}

// SQSP Functions
window.addEventListener('DOMContentLoaded', function () {

  var images = document.querySelectorAll('img[data-src]');

  for (var i = 0; i < images.length; i++) {
    core.ImageLoader.load(images[i], {
      load: true
    });
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageLoader = __webpack_require__(3);

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

var _Lifecycle = __webpack_require__(4);

var _Lifecycle2 = _interopRequireDefault(_Lifecycle);

var _Tweak = __webpack_require__(5);

var _Tweak2 = _interopRequireDefault(_Tweak);

var _UserAccounts = __webpack_require__(6);

var _UserAccounts2 = _interopRequireDefault(_UserAccounts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The public JavaScript API for Squarespace template developers.
 * @namespace SQS
 */
/**
 * @license
 * Copyright 2016 Squarespace, INC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var SQS = {
  ImageLoader: _ImageLoader2.default,
  Lifecycle: _Lifecycle2.default,
  Tweak: _Tweak2.default,
  UserAccounts: _UserAccounts2.default
};

exports.default = SQS;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Squarespace, INC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * ​Squarespace comes with a number of built-in facilities for managing images
 * that are uploaded to our system. After uploading an image into a collection,
 * Squarespace automatically creates multiple copies of the image with different 
 * sizes. Our ImageLoader will then help render images properly when they are
 * presented on a page, even on retina displays.
 *
 * ImageLoader can also be used to fit or fill an image inside ​a parent
 * container, where it automatically determines which image size to use
 * depending on the current dimensions of the container.
 *
 * WARNING:
 * Currently, ImageLoader is present on all Squarespace sites under the global
 * namespace ImageLoader, but this is an unsupported API and we recommend
 * accessing this functionality through squarespace-core.
 *
 * @namespace ImageLoader
 */
var ImageLoader = {

  /**
   * Using the global ImageLoader namespace, calls ImageLoader.load on the
   * given node with the given config options.
   *
   * @method load
   * @param  {HTMLElement} img    Image node to be loaded
   * @param  {Object} config      Config object
   * @return {Boolean}            True if the image was loaded, false otherwise
   */
  load: function load(img, config) {
    return window.ImageLoader.load(img, config);
  }
};

/**
 * @exports {Object} ImageLoader
 */
exports.default = ImageLoader;
module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Squarespace, INC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Squarespace provides default functionality for some content that users add
 * in the CMS.
 *
 * If you are building a Developer Platform site that loads Squarespace content
 * through an XHR or some other kind of AJAX, you can use the Lifecycle methods
 * provided here to initialize and/or destroy this functionality.
 *
 * WARNING:
 * The functionality called by Lifecycle is available on the global namespace
 * window.Squarespace, but this is an unsupported API and it is highly
 * recommended that you access it through squarespace-core.
 *
 * @namespace Lifecycle
 */
var Lifecycle = {

  /**
   * Squarespace.afterBodyLoad() trigger loads scripts and calls onInitialize,
   * which individual modules' init functions are bound to. This should be
   * called after new HTML content containing Squarespace default functionality
   * is added to a page (for example, after AJAX loading a new page).
   *
   * @method init
   */
  init: function init() {
    window.Squarespace.AFTER_BODY_LOADED = false;
    window.Squarespace.afterBodyLoad();
  },


  /**
   * Squarespace.globalDestroy calls onDestroy, triggering each module's
   * destructor. This should be called prior to loading in new HTML content
   * containing Squarespace default functionality.
   *
   * @method  destroy
   */
  destroy: function destroy() {
    window.Squarespace.globalDestroy(Y);
  }
};

/**
 * @exports {Object} Lifecycle
 */
exports.default = Lifecycle;
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Squarespace, INC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var isAuthenticated = Static.SQUARESPACE_CONTEXT.authenticatedAccount;

/**
 * @const {Object} tweaksToWatch
 */
var tweaksToWatch = {
  all: {
    callbacks: []
  }
};

/**
 * Tweaks allow a developer to isolate specific elements of the design and
 * present options to the user in an easy-to-use interface. Tweaks are surfaced
 * in the Squarespace interface through Style Editor (e.g.
 * yoursite.squarespace.com/config/design/style). Using tweaks, a user can make
 * presentational changes to their website without having to know or edit CSS code.
 *
 * Tweaks are typically used by the developers through LESS variables, mixins,
 * and class names added to the <body> element.
 *
 * Sometimes, a developer may find it necessary to access the value of a tweak
 * through Javascript, or to watch for changes in that tweak and update the DOM
 * accordingly. The Tweak module of squarespace-core is meant to provide an
 * official interface for doing so.
 *
 * @namespace Tweak
 */
var Tweak = {

  /**
   * Gets the value of one of the tweaks given its name.
   *
   * @method getValue
   * @param {String} name      Name of the tweak
   * @returns {String}         The value of the tweak
   */
  getValue: function getValue(name) {
    if (!name || typeof name !== 'string') {
      console.error('squarespace-core: Invalid tweak name ' + name);
      return null;
    }

    return window.Static.SQUARESPACE_CONTEXT.tweakJSON[name] || window.Static.SQUARESPACE_CONTEXT.tweakJSON[name.replace('@', '').replace('.', '')];
  },


  /**
   * Listen for changes on a tweak item. If one parameter is provided, the
   * callback will be executed every time any tweak changes. If two parameters
   * are provided and the first parameter is a String, the callback will be
   * executed only when that particular tweak changes. If two parameters are
   * provided and the first parameter is an Array of strings, the callback will
   * be executed any time one of those tweaks changes.
   *
   * @method watch
   * @param {String}          Optional: Name of the tweak
   * @param {Array}           Optional: Array with multiple tweak names
   * @param {Function}        Callback to call when watcher is triggered
   */
  watch: function watch() {
    var _arguments = arguments;


    if (!isAuthenticated) {
      return;
    }

    if (arguments.length === 0) {
      console.error('squarespace-core: ' + 'Tweak.watch must be called with at least one parameter');
      return;
    }

    if (arguments.length === 1) {
      // Only callback passed in, no tweak name string or tweaks array passed.
      // Run callback for all tweaks.
      if (typeof arguments[0] === 'function') {
        tweaksToWatch.all.callbacks.push(arguments[0]);
      }
      return;
    }

    if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
      // Specific tweak name passed in. Run callback when that tweak is changed.
      var tweakName = arguments[0];
      if (!tweaksToWatch[tweakName]) {
        tweaksToWatch[tweakName] = {
          callbacks: []
        };
      }
      tweaksToWatch[tweakName].callbacks.push(arguments[1]);
    } else if (arguments[0].constructor === Array && typeof arguments[1] === 'function') {
      // Multiple tweak names passed in as array. Run callback when any one of
      // those tweaks are changed.
      arguments[0].forEach(function (tweakName) {
        if (!tweaksToWatch[tweakName]) {
          tweaksToWatch[tweakName] = {
            callbacks: []
          };
        }
        tweaksToWatch[tweakName].callbacks.push(_arguments[1]);
      });
    }
  }
};

if (isAuthenticated && window.Y && window.Y.Global) {
  // If Y.Global is present on the page, set up the tweak event listener.
  window.Y.Global.on('tweak:change', function (e) {
    var tweakName = e.getName();
    var callbackSignature = {
      name: tweakName,
      value: e.config && e.config.value || e.value
    };

    if (tweaksToWatch[tweakName]) {
      tweaksToWatch[tweakName].callbacks.forEach(function (callback) {
        try {
          callback(callbackSignature);
        } catch (err) {
          console.error(err);
        }
      });
    }

    if (tweaksToWatch.all.callbacks.length > 0) {
      tweaksToWatch.all.callbacks.forEach(function (callback) {
        try {
          callback(callbackSignature);
        } catch (err) {
          console.error(err);
        }
      });
    }
  });
}

/**
 * @exports {Object} Tweak
 */
exports.default = Tweak;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Squarespace, INC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var warningMessage = 'UserAccounts API not available';
var ua = window.UserAccountApi;
var warn = function warn() {
  console.warn(warningMessage);
};

var isUserAuthenticated = ua ? ua.isUserAuthenticated : warn;
var openAccountScreen = ua ? ua.openAccountScreen : warn;

exports.default = { isUserAuthenticated: isUserAuthenticated, openAccountScreen: openAccountScreen };
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["register"] = register;
/* harmony export (immutable) */ __webpack_exports__["refresh"] = refresh;
/**
 * Cached object containing controller functions indexed by registered name string.
 *
 * @name CONTROLLERS_BY_NAME
 * @type {Object}
 */
const CONTROLLERS_BY_NAME = {};


/**
 * Cached array of live controllers.
 *
 * @name _liveControllers
 * @type {Array}
 */
let _liveControllers = [];

/**
 * Given a controller object, run its function with its element as the context
 * and first parameter, and return whatever the result of the function call is
 * (lifecycle methods).
 *
 * @method process
 * @param {Object} controller   Controller object to process, incl. fn and element
 * @return {*}                  Result of function call
 */
function process(controller) {
  if (!controller.fn || !controller.element) {
    return null;
  }
  return controller.fn(controller.element);
}

/**
 * Compare two controller objects and returns whether they are equal.
 *
 * @method isEqualController
 */
function isEqualController(a, b) {
  if (!a.element || !b.element || !a.fn || !b.fn) {
    return false;
  }
  return a.element === b.element && a.fn === b.fn;
}

/**
 * Registers a controller with a given name and function body.
 *
 * @method register
 * @param {String} name           String to register controller fn to
 * @param {Function} controller   Controller fn to register
 */
function register(name, controller) {
  CONTROLLERS_BY_NAME[name] = controller;
}

/**
 * Sychronize all controllers. Process new controllers, destroy controllers
 * whose elements are no longer on the DOM, and sync others.
 *
 * @method refresh
 */
function refresh() {

  // Get all nodes with controllers and convert to array
  const nodesWithControllers = Array.from(document.querySelectorAll('[data-controller]'));

  // Create array to house new controller objects
  let newControllers = [];

  // Convert found nodes to controller objects
  // so we can do comparisons later
  nodesWithControllers.forEach((node) => {

    // Get controller names on node
    const controllerNames = node.getAttribute('data-controller').split(',');

    // Loop
    controllerNames.forEach((controllerName) => {

      controllerName = controllerName.trim();

      const controller = CONTROLLERS_BY_NAME[controllerName];

      if (!controller) {
        return;
      }

      // Add to new controller array
      newControllers.push({
        namespace: controllerName,
        element: node,
        fn: controller
      });

    });

  });

  // Loop through live controllers and find ones that need to be destroyed
  // or synced
  _liveControllers = _liveControllers.filter((liveController) => {

    // Boolean to indicate whether one of new controllers matches current
    // live controller.
    const isControllerActive = newControllers.some((newController) => {
      return isEqualController(liveController, newController);
    });

    if (isControllerActive) {

      // Controller element is still in the DOM, run sync method of controller.
      if (liveController.methods && liveController.methods.sync) {
        liveController.methods.sync.apply(liveController.element, null);
      }

      // Remove existing controllers from new controllers array, so they are not
      // reinitialized.
      newControllers = newControllers.filter((newController) => {
        return !isEqualController(liveController, newController);
      });

    } else {

      // Controller element is no longer in the DOM, call destructor method of
      // controller.
      if (liveController.methods && liveController.methods.destroy) {
        liveController.methods.destroy.apply(liveController.element, null);
      }

    }
    return isControllerActive;
  });


  // Process new controllers for the first time
  newControllers.forEach((controller) => {

    controller.methods = process(controller);
    _liveControllers.push(controller);

    // Add controller bound info
    let boundControllersName = [];
    if (controller.element.hasAttribute('data-controllers-bound')) {
      const existingControllers = controller.element.getAttribute('data-controllers-bound').split(', ');
      boundControllersName = boundControllersName.concat(existingControllers);
    }

    boundControllersName.push(controller.namespace);

    controller.element.setAttribute('data-controllers-bound', boundControllersName.join(', '));

  });

}

if (['interactive', 'complete'].includes(document.readyState)) {
  refresh();
} else {
  document.addEventListener('DOMContentLoaded', refresh);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  register,
  refresh
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var VanillaTilt = (function () {
'use strict';

/**
 * Created by Șandor Sergiu (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.6.1
 */

// Customized by Joshua Marino

class VanillaTilt {
  constructor(element, settings = {}) {
    if (!(element instanceof Node)) {
      throw ("Can't initialize VanillaTilt because " + element + " is not a Node.");
    }

    this.width = null;
    this.height = null;
    this.left = null;
    this.top = null;
    this.transitionTimeout = null;
    this.updateCall = null;

    this.updateBind = this.update.bind(this);
    this.resetBind = this.reset.bind(this);

    this.element = element;
    this.settings = this.extendSettings(settings);
    this.elementListener = this.getElementListener();

    this.reverse = this.settings.reverse ? -1 : 1;

    this.glare = this.isSettingTrue(this.settings.glare);
    this.glarePrerender = this.isSettingTrue(this.settings["glare-prerender"]);
    this.gyroscope = this.isSettingTrue(this.settings.gyroscope);

    if (this.glare) {
      this.prepareGlare();
    }

    this.addEventListeners();
  }

  isSettingTrue(setting) {
    return setting === "" || setting === true || setting === 1;
  }

  /**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */
  getElementListener() {
    if (!this.settings || !this.settings["mouse-event-element"]) {
      return this.element;
    }

    if (typeof this.settings["mouse-event-element"] === "string") {
      const mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);

      if (mouseEventElement) {
        return mouseEventElement;
      }
    }

    if (this.settings["mouse-event-element"] instanceof Node) {
      return this.settings["mouse-event-element"];
    }
  }

  /**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */
  addEventListeners() {
    this.onMouseEnterBind = this.onMouseEnter.bind(this);
    this.onMouseMoveBind = this.onMouseMove.bind(this);
    this.onMouseLeaveBind = this.onMouseLeave.bind(this);
    this.onWindowResizeBind = this.onWindowResize.bind(this);
    this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);

    this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);
    this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);

    if (this.glare) {
      window.addEventListener("resize", this.onWindowResizeBind);
    }

    if (this.gyroscope) {
      window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
    }
  }

  /**
   * Method remove event listeners from current this.elementListener
   */
  removeEventListeners() {
    this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);
    this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);

    if(this.gyroscope) {
      window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
    }

    if (this.glare) {
      window.removeEventListener("resize", this.onWindowResizeBind);
    }
  }

  destroy() {
    clearTimeout(this.transitionTimeout);
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.reset();

    this.removeEventListeners();
    this.element.vanillaTilt = null;
    delete this.element.vanillaTilt;

    this.element = null;
  }

  onDeviceOrientation(event) {
    if (event.gamma === null || event.beta === null) {
      return;
    }

    this.updateElementPosition();

    const totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
    const totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;
    
    const degreesPerPixelX = totalAngleX / this.width;
    const degreesPerPixelY = totalAngleY / this.height;
    
    // Adjust axes based on device orientation
    switch (window.orientation) {  
    case 0:  
    
        // Portrait (leave as is)
    	var angleX = event.gamma - this.settings.gyroscopeMinAngleX;
		var angleY = event.beta - this.settings.gyroscopeMinAngleY - 45; // Subtract 45 degrees for most common mobile device angle
        break; 
        
    case 180:  
    
        // Portrait Upside-Down (leave as is)
    	var angleX = event.gamma - this.settings.gyroscopeMinAngleX;
		var angleY = event.beta - this.settings.gyroscopeMinAngleY + 45; // Subtract 45 degrees for most common mobile device angle 
        break; 
  
    case -90:  
    
        // Landscape Clockwise (Reverse X & Y)
        var angleX = event.beta - this.settings.gyroscopeMinAngleX;
        var angleY = event.gamma - this.settings.gyroscopeMinAngleY - 45; // Subtract 45 degrees for most common mobile device angle
        break;  
  
    case 90:  
    
        // Landscape Counterclockwise (Reverse X & Y)
        var angleX = event.beta - this.settings.gyroscopeMinAngleX;
        var angleY = event.gamma - this.settings.gyroscopeMinAngleY + 45; // Subtract 45 degrees for most common mobile device angle
        break;
    }
	
    const posX = angleX / degreesPerPixelX;
    const posY = angleY / degreesPerPixelY;

    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = {
      clientX: posX + this.left,
      clientY: posY + this.top,
    };

    this.updateCall = requestAnimationFrame(this.updateBind);
  }

  onMouseEnter() {
    this.updateElementPosition();
    this.element.style.willChange = "transform";
    this.setTransition();
  }

  onMouseMove(event) {
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = event;
    this.updateCall = requestAnimationFrame(this.updateBind);
  }

  onMouseLeave() {
    this.setTransition();

    if (this.settings.reset) {
      requestAnimationFrame(this.resetBind);
    }
  }

  reset() {
    this.event = {
      pageX: this.left + this.width / 2,
      pageY: this.top + this.height / 2
    };

    if (this.element && this.element.style) {
      this.element.style.transform = `perspective(${this.settings.perspective}px) ` +
        `rotateX(0deg) ` +
        `rotateY(0deg) ` +
        `scale3d(1, 1, 1)`;
    }

    if (this.glare) {
      this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
      this.glareElement.style.opacity = "0";
    }
  }

  getValues() {
    let x = (this.event.clientX - this.left) / this.width;
    let y = (this.event.clientY - this.top) / this.height;

    x = Math.min(Math.max(x, 0), 1);
    y = Math.min(Math.max(y, 0), 1);

    let tiltX = (this.reverse * (this.settings.max / 2 - x * this.settings.max)).toFixed(2);
    let tiltY = (this.reverse * (y * this.settings.max - this.settings.max / 2)).toFixed(2);
    let angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);

    return {
      tiltX: tiltX,
      tiltY: tiltY,
      percentageX: x * 100,
      percentageY: y * 100,
      angle: angle
    };
  }

  updateElementPosition() {
    let rect = this.element.getBoundingClientRect();

    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  }

  update() {
    let values = this.getValues();

    this.element.style.transform = "perspective(" + this.settings.perspective + "px) " +
      "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " +
      "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " +
      "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

    if (this.glare) {
      this.glareElement.style.transform = `rotate(${values.angle}deg) translate(-50%, -50%)`;
      this.glareElement.style.opacity = `${values.percentageY * this.settings["max-glare"] / 100}`;
    }

    this.element.dispatchEvent(new CustomEvent("tiltChange", {
      "detail": values
    }));

    this.updateCall = null;
  }

  /**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */
  prepareGlare() {
    // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
    if (!this.glarePrerender) {
      // Create glare element
      const jsTiltGlare = document.createElement("div");
      jsTiltGlare.classList.add("js-tilt-glare");

      const jsTiltGlareInner = document.createElement("div");
      jsTiltGlareInner.classList.add("js-tilt-glare-inner");

      jsTiltGlare.appendChild(jsTiltGlareInner);
      this.element.appendChild(jsTiltGlare);
    }

    this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
    this.glareElement = this.element.querySelector(".js-tilt-glare-inner");

    if (this.glarePrerender) {
      return;
    }

    Object.assign(this.glareElementWrapper.style, {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "overflow": "hidden",
      "pointer-events": "none"
    });

    Object.assign(this.glareElement.style, {
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "pointer-events": "none",
      "background-image": `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
      "width": `${this.element.offsetWidth * 2}px`,
      "height": `${this.element.offsetWidth * 2}px`,
      "transform": "rotate(180deg) translate(-50%, -50%)",
      "transform-origin": "0% 0%",
      "opacity": "0",
    });
  }

  updateGlareSize() {
    Object.assign(this.glareElement.style, {
      "width": `${this.element.offsetWidth * 2}`,
      "height": `${this.element.offsetWidth * 2}`,
    });
  }

  onWindowResize() {
    this.updateGlareSize();
  }

  setTransition() {
    clearTimeout(this.transitionTimeout);
    this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
    if (this.glare) this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`;

    this.transitionTimeout = setTimeout(() => {
      this.element.style.transition = "";
      if (this.glare) {
        this.glareElement.style.transition = "";
      }
    }, this.settings.speed);

  }

  /**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param settings.axis - What axis should be disabled. Can be X or Y
   * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   */
  extendSettings(settings) {
    let defaultSettings = {
      reverse: false,
      max: 35,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: 1,
      speed: 300,
      transition: true,
      axis: null,
      glare: false,
      "max-glare": 1,
      "glare-prerender": false,
      "mouse-event-element": null,
      reset: true,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
    };

    let newSettings = {};
    for (var property in defaultSettings) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else if (this.element.hasAttribute("data-tilt-" + property)) {
        let attribute = this.element.getAttribute("data-tilt-" + property);
        try {
          newSettings[property] = JSON.parse(attribute);
        } catch (e) {
          newSettings[property] = attribute;
        }

      } else {
        newSettings[property] = defaultSettings[property];
      }
    }

    return newSettings;
  }

  static init(elements, settings) {
    if (elements instanceof Node) {
      elements = [elements];
    }

    if (elements instanceof NodeList) {
      elements = [].slice.call(elements);
    }

    if (!(elements instanceof Array)) {
      return;
    }

    elements.forEach((element) => {
      if (!("vanillaTilt" in element)) {
        element.vanillaTilt = new VanillaTilt(element, settings);
      }
    });
  }
}

if (typeof document !== "undefined") {
  /* expose the class to window */
  window.VanillaTilt = VanillaTilt;

  /**
   * Auto load
   */
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
}

return VanillaTilt;

}());


/***/ })
/******/ ]);
//# sourceMappingURL=site-bundle.js.map