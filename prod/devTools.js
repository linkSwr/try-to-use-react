/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(184);
	module.exports = __webpack_require__(256);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2);
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, process) {/* eslint-disable global-require */

	'use strict';

	if (!module.hot && process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(5);
	} else {
	  module.exports = __webpack_require__(6);
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module), __webpack_require__(4)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};
	;

	var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
			return;
		}
	}();

	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(process, 'process', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(cachedSetTimeout, 'cachedSetTimeout', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(cachedClearTimeout, 'cachedClearTimeout', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(defaultSetTimout, 'defaultSetTimout', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(defaultClearTimeout, 'defaultClearTimeout', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(runTimeout, 'runTimeout', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(runClearTimeout, 'runClearTimeout', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(queue, 'queue', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(draining, 'draining', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(currentQueue, 'currentQueue', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(queueIndex, 'queueIndex', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(cleanUpNextTick, 'cleanUpNextTick', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(drainQueue, 'drainQueue', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(Item, 'Item', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');

	    __REACT_HOT_LOADER__.register(noop, 'noop', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/process/browser.js');
	}();

	;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* noop */
	"use strict";

	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var React = __webpack_require__(7);
	var createProxy = __webpack_require__(39).default;
	var global = __webpack_require__(183);

	var ComponentMap = function () {
	  function ComponentMap(useWeakMap) {
	    _classCallCheck(this, ComponentMap);

	    if (useWeakMap) {
	      this.wm = new WeakMap();
	    } else {
	      this.slots = {};
	    }
	  }

	  _createClass(ComponentMap, [{
	    key: 'getSlot',
	    value: function getSlot(type) {
	      var key = type.displayName || type.name || 'Unknown';
	      if (!this.slots[key]) {
	        this.slots[key] = [];
	      }
	      return this.slots[key];
	    }
	  }, {
	    key: 'get',
	    value: function get(type) {
	      if (this.wm) {
	        return this.wm.get(type);
	      }

	      var slot = this.getSlot(type);
	      for (var i = 0; i < slot.length; i++) {
	        if (slot[i].key === type) {
	          return slot[i].value;
	        }
	      }

	      return undefined;
	    }
	  }, {
	    key: 'set',
	    value: function set(type, value) {
	      if (this.wm) {
	        this.wm.set(type, value);
	      } else {
	        var slot = this.getSlot(type);
	        for (var i = 0; i < slot.length; i++) {
	          if (slot[i].key === type) {
	            slot[i].value = value;
	            return;
	          }
	        }
	        slot.push({ key: type, value: value });
	      }
	    }
	  }, {
	    key: 'has',
	    value: function has(type) {
	      if (this.wm) {
	        return this.wm.has(type);
	      }

	      var slot = this.getSlot(type);
	      for (var i = 0; i < slot.length; i++) {
	        if (slot[i].key === type) {
	          return true;
	        }
	      }
	      return false;
	    }
	  }]);

	  return ComponentMap;
	}();

	var proxiesByID = void 0;
	var didWarnAboutID = void 0;
	var hasCreatedElementsByType = void 0;
	var idsByType = void 0;

	var hooks = {
	  register: function register(type, uniqueLocalName, fileName) {
	    if (typeof type !== 'function') {
	      return;
	    }
	    if (!uniqueLocalName || !fileName) {
	      return;
	    }
	    if (typeof uniqueLocalName !== 'string' || typeof fileName !== 'string') {
	      return;
	    }
	    var id = fileName + '#' + uniqueLocalName; // eslint-disable-line prefer-template
	    if (!idsByType.has(type) && hasCreatedElementsByType.has(type)) {
	      if (!didWarnAboutID[id]) {
	        didWarnAboutID[id] = true;
	        var baseName = fileName.replace(/^.*[\\\/]/, '');
	        console.error('React Hot Loader: ' + uniqueLocalName + ' in ' + fileName + ' will not hot reload ' + ('correctly because ' + baseName + ' uses <' + uniqueLocalName + ' /> during ') + ('module definition. For hot reloading to work, move ' + uniqueLocalName + ' ') + ('into a separate file and import it from ' + baseName + '.'));
	      }
	      return;
	    }

	    // Remember the ID.
	    idsByType.set(type, id);

	    // We use React Proxy to generate classes that behave almost
	    // the same way as the original classes but are updatable with
	    // new versions without destroying original instances.
	    if (!proxiesByID[id]) {
	      proxiesByID[id] = createProxy(type);
	    } else {
	      proxiesByID[id].update(type);
	    }
	  },
	  reset: function reset(useWeakMap) {
	    proxiesByID = {};
	    didWarnAboutID = {};
	    hasCreatedElementsByType = new ComponentMap(useWeakMap);
	    idsByType = new ComponentMap(useWeakMap);
	  }
	};

	hooks.reset(typeof WeakMap === 'function');

	function resolveType(type) {
	  // We only care about composite components
	  if (typeof type !== 'function') {
	    return type;
	  }

	  hasCreatedElementsByType.set(type, true);

	  // When available, give proxy class to React instead of the real class.
	  var id = idsByType.get(type);
	  if (!id) {
	    return type;
	  }

	  var proxy = proxiesByID[id];
	  if (!proxy) {
	    return type;
	  }

	  return proxy.get();
	}

	var createElement = React.createElement;
	function patchedCreateElement(type) {
	  // Trick React into rendering a proxy so that
	  // its state is preserved when the class changes.
	  // This will update the proxy if it's for a known type.
	  var resolvedType = resolveType(type);

	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return createElement.apply(undefined, [resolvedType].concat(args));
	}
	patchedCreateElement.isPatchedByReactHotLoader = true;

	function patchedCreateFactory(type) {
	  // Patch React.createFactory to use patched createElement
	  // because the original implementation uses the internal,
	  // unpatched ReactElement.createElement
	  var factory = patchedCreateElement.bind(null, type);
	  factory.type = type;
	  return factory;
	}
	patchedCreateFactory.isPatchedByReactHotLoader = true;

	if (typeof global.__REACT_HOT_LOADER__ === 'undefined') {
	  React.createElement = patchedCreateElement;
	  React.createFactory = patchedCreateFactory;
	  global.__REACT_HOT_LOADER__ = hooks;
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(createProxy, "createProxy", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(ComponentMap, "ComponentMap", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(proxiesByID, "proxiesByID", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(didWarnAboutID, "didWarnAboutID", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(hasCreatedElementsByType, "hasCreatedElementsByType", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(idsByType, "idsByType", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(hooks, "hooks", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(resolveType, "resolveType", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(createElement, "createElement", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(patchedCreateElement, "patchedCreateElement", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");

	  __REACT_HOT_LOADER__.register(patchedCreateFactory, "patchedCreateFactory", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/patch.dev.js");
	}();

	;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(8);
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	var _assign = __webpack_require__(9);

	var ReactChildren = __webpack_require__(10);
	var ReactComponent = __webpack_require__(22);
	var ReactPureComponent = __webpack_require__(25);
	var ReactClass = __webpack_require__(26);
	var ReactDOMFactories = __webpack_require__(31);
	var ReactElement = __webpack_require__(14);
	var ReactPropTypes = __webpack_require__(36);
	var ReactVersion = __webpack_require__(37);

	var onlyChild = __webpack_require__(38);
	var warning = __webpack_require__(16);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(32);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function __spread() {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function createMixin(mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(createElement, 'createElement', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/React.js');

	  __REACT_HOT_LOADER__.register(createFactory, 'createFactory', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/React.js');

	  __REACT_HOT_LOADER__.register(cloneElement, 'cloneElement', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/React.js');

	  __REACT_HOT_LOADER__.register(__spread, '__spread', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/React.js');

	  __REACT_HOT_LOADER__.register(warned, 'warned', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/React.js');

	  __REACT_HOT_LOADER__.register(React, 'React', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/React.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	;

	var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
			return;
		}

		__REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/object-assign/index.js');

		__REACT_HOT_LOADER__.register(propIsEnumerable, 'propIsEnumerable', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/object-assign/index.js');

		__REACT_HOT_LOADER__.register(toObject, 'toObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/object-assign/index.js');

		__REACT_HOT_LOADER__.register(shouldUseNative, 'shouldUseNative', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/object-assign/index.js');
	}();

	;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(11);
	var ReactElement = __webpack_require__(14);

	var emptyFunction = __webpack_require__(17);
	var traverseAllChildren = __webpack_require__(19);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(twoArgumentPooler, 'twoArgumentPooler', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(fourArgumentPooler, 'fourArgumentPooler', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(userProvidedKeyEscapeRegex, 'userProvidedKeyEscapeRegex', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(escapeUserProvidedKey, 'escapeUserProvidedKey', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(ForEachBookKeeping, 'ForEachBookKeeping', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(forEachSingleChild, 'forEachSingleChild', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(forEachChildren, 'forEachChildren', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(MapBookKeeping, 'MapBookKeeping', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(mapSingleChildIntoContext, 'mapSingleChildIntoContext', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(mapIntoWithKeyPrefixInternal, 'mapIntoWithKeyPrefixInternal', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(mapChildren, 'mapChildren', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(forEachSingleChildDummy, 'forEachSingleChildDummy', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(countChildren, 'countChildren', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(toArray, 'toArray', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');

	  __REACT_HOT_LOADER__.register(ReactChildren, 'ReactChildren', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactChildren.js');
	}();

	;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(12);

	var invariant = __webpack_require__(13);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function twoArgumentPooler(a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function fiveArgumentPooler(a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function standardReleaser(instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(oneArgumentPooler, 'oneArgumentPooler', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/PooledClass.js');

	  __REACT_HOT_LOADER__.register(twoArgumentPooler, 'twoArgumentPooler', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/PooledClass.js');

	  __REACT_HOT_LOADER__.register(threeArgumentPooler, 'threeArgumentPooler', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/PooledClass.js');

	  __REACT_HOT_LOADER__.register(fourArgumentPooler, 'fourArgumentPooler', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/PooledClass.js');

	  __REACT_HOT_LOADER__.register(fiveArgumentPooler, 'fiveArgumentPooler', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/PooledClass.js');

	  __REACT_HOT_LOADER__.register(standardReleaser, 'standardReleaser', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/PooledClass.js');

	  __REACT_HOT_LOADER__.register(DEFAULT_POOL_SIZE, 'DEFAULT_POOL_SIZE', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/PooledClass.js');

	  __REACT_HOT_LOADER__.register(DEFAULT_POOLER, 'DEFAULT_POOLER', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/PooledClass.js');

	  __REACT_HOT_LOADER__.register(addPoolingTo, 'addPoolingTo', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/PooledClass.js');

	  __REACT_HOT_LOADER__.register(PooledClass, 'PooledClass', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/PooledClass.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(reactProdInvariant, 'reactProdInvariant', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/reactProdInvariant.js');
	}();

	;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(invariant, 'invariant', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/fbjs/lib/invariant.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _assign = __webpack_require__(9);

	var ReactCurrentOwner = __webpack_require__(15);

	var warning = __webpack_require__(16);
	var canDefineProperty = __webpack_require__(18);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function warnAboutAccessingKey() {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function warnAboutAccessingRef() {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	    var shadowChildren = Array.isArray(props.children) ? props.children.slice(0) : props.children;

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      Object.defineProperty(element, '_shadowChildren', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: shadowChildren
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._shadowChildren = shadowChildren;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	ReactElement.REACT_ELEMENT_TYPE = REACT_ELEMENT_TYPE;

	module.exports = ReactElement;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElement.js');

	  __REACT_HOT_LOADER__.register(REACT_ELEMENT_TYPE, 'REACT_ELEMENT_TYPE', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElement.js');

	  __REACT_HOT_LOADER__.register(RESERVED_PROPS, 'RESERVED_PROPS', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElement.js');

	  __REACT_HOT_LOADER__.register(specialPropKeyWarningShown, 'specialPropKeyWarningShown', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElement.js');

	  __REACT_HOT_LOADER__.register(specialPropRefWarningShown, 'specialPropRefWarningShown', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElement.js');

	  __REACT_HOT_LOADER__.register(hasValidRef, 'hasValidRef', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElement.js');

	  __REACT_HOT_LOADER__.register(hasValidKey, 'hasValidKey', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElement.js');

	  __REACT_HOT_LOADER__.register(defineKeyPropWarningGetter, 'defineKeyPropWarningGetter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElement.js');

	  __REACT_HOT_LOADER__.register(defineRefPropWarningGetter, 'defineRefPropWarningGetter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElement.js');

	  __REACT_HOT_LOADER__.register(ReactElement, 'ReactElement', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElement.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ReactCurrentOwner, 'ReactCurrentOwner', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactCurrentOwner.js');
	}();

	;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(17);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(warning, 'warning', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/fbjs/lib/warning.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(makeEmptyFunction, "makeEmptyFunction", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/fbjs/lib/emptyFunction.js");

	  __REACT_HOT_LOADER__.register(emptyFunction, "emptyFunction", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/fbjs/lib/emptyFunction.js");
	}();

	;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function get() {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(canDefineProperty, 'canDefineProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/canDefineProperty.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(12);

	var ReactCurrentOwner = __webpack_require__(15);
	var ReactElement = __webpack_require__(14);

	var getIteratorFn = __webpack_require__(20);
	var invariant = __webpack_require__(13);
	var KeyEscapeUtils = __webpack_require__(21);
	var warning = __webpack_require__(16);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && (typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children === 'undefined' ? 'undefined' : _typeof(children);

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(SEPARATOR, 'SEPARATOR', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/traverseAllChildren.js');

	  __REACT_HOT_LOADER__.register(SUBSEPARATOR, 'SUBSEPARATOR', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/traverseAllChildren.js');

	  __REACT_HOT_LOADER__.register(didWarnAboutMaps, 'didWarnAboutMaps', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/traverseAllChildren.js');

	  __REACT_HOT_LOADER__.register(getComponentKey, 'getComponentKey', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/traverseAllChildren.js');

	  __REACT_HOT_LOADER__.register(traverseAllChildrenImpl, 'traverseAllChildrenImpl', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/traverseAllChildren.js');

	  __REACT_HOT_LOADER__.register(traverseAllChildren, 'traverseAllChildren', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/traverseAllChildren.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ITERATOR_SYMBOL, 'ITERATOR_SYMBOL', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/getIteratorFn.js');

	  __REACT_HOT_LOADER__.register(FAUX_ITERATOR_SYMBOL, 'FAUX_ITERATOR_SYMBOL', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/getIteratorFn.js');

	  __REACT_HOT_LOADER__.register(getIteratorFn, 'getIteratorFn', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/getIteratorFn.js');
	}();

	;

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(escape, 'escape', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/KeyEscapeUtils.js');

	  __REACT_HOT_LOADER__.register(unescape, 'unescape', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/KeyEscapeUtils.js');

	  __REACT_HOT_LOADER__.register(KeyEscapeUtils, 'KeyEscapeUtils', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/KeyEscapeUtils.js');
	}();

	;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(12);

	var ReactNoopUpdateQueue = __webpack_require__(23);

	var canDefineProperty = __webpack_require__(18);
	var emptyObject = __webpack_require__(24);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(16);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ReactComponent, 'ReactComponent', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponent.js');

	  __REACT_HOT_LOADER__.register(deprecatedAPIs, 'deprecatedAPIs', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponent.js');

	  __REACT_HOT_LOADER__.register(defineDeprecationWarning, 'defineDeprecationWarning', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponent.js');

	  __REACT_HOT_LOADER__.register(fnName, 'fnName', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponent.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */

	'use strict';

	var warning = __webpack_require__(16);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted(publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function enqueueCallback(publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function enqueueSetState(publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(warnNoop, 'warnNoop', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactNoopUpdateQueue.js');

	  __REACT_HOT_LOADER__.register(ReactNoopUpdateQueue, 'ReactNoopUpdateQueue', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactNoopUpdateQueue.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(emptyObject, 'emptyObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/fbjs/lib/emptyObject.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPureComponent
	 */

	'use strict';

	var _assign = __webpack_require__(9);

	var ReactComponent = __webpack_require__(22);
	var ReactNoopUpdateQueue = __webpack_require__(23);

	var emptyObject = __webpack_require__(24);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ReactPureComponent, 'ReactPureComponent', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPureComponent.js');

	  __REACT_HOT_LOADER__.register(ComponentDummy, 'ComponentDummy', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPureComponent.js');
	}();

	;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(12),
	    _assign = __webpack_require__(9);

	var ReactComponent = __webpack_require__(22);
	var ReactElement = __webpack_require__(14);
	var ReactPropTypeLocations = __webpack_require__(27);
	var ReactPropTypeLocationNames = __webpack_require__(29);
	var ReactNoopUpdateQueue = __webpack_require__(23);

	var emptyObject = __webpack_require__(24);
	var invariant = __webpack_require__(13);
	var keyMirror = __webpack_require__(28);
	var keyOf = __webpack_require__(30);
	var warning = __webpack_require__(16);

	var MIXINS_KEY = keyOf({ mixins: null });

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});

	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function displayName(Constructor, _displayName) {
	    Constructor.displayName = _displayName;
	  },
	  mixins: function mixins(Constructor, _mixins) {
	    if (_mixins) {
	      for (var i = 0; i < _mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, _mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, _childContextTypes);
	  },
	  contextTypes: function contextTypes(Constructor, _contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, _contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = _getDefaultProps;
	    }
	  },
	  propTypes: function propTypes(Constructor, _propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, _propTypes);
	  },
	  statics: function statics(Constructor, _statics) {
	    mixStaticSpecIntoComponent(Constructor, _statics);
	  },
	  autobind: function autobind() {} };

	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec === 'undefined' ? 'undefined' : _typeof(spec);
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && (typeof one === 'undefined' ? 'undefined' : _typeof(one)) === 'object' && (typeof two === 'undefined' ? 'undefined' : _typeof(two)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function replaceState(newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted() {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function ReactClassComponent() {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function createClass(spec) {
	    var Constructor = function Constructor(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !((typeof initialState === 'undefined' ? 'undefined' : _typeof(initialState)) === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function injectMixin(mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(MIXINS_KEY, 'MIXINS_KEY', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(SpecPolicy, 'SpecPolicy', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(injectedMixins, 'injectedMixins', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(ReactClassInterface, 'ReactClassInterface', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(RESERVED_SPEC_KEYS, 'RESERVED_SPEC_KEYS', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(validateTypeDef, 'validateTypeDef', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(validateMethodOverride, 'validateMethodOverride', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(mixSpecIntoComponent, 'mixSpecIntoComponent', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(mixStaticSpecIntoComponent, 'mixStaticSpecIntoComponent', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(mergeIntoWithNoDuplicateKeys, 'mergeIntoWithNoDuplicateKeys', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(createMergedResultFunction, 'createMergedResultFunction', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(createChainedFunction, 'createChainedFunction', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(bindAutoBindMethod, 'bindAutoBindMethod', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(bindAutoBindMethods, 'bindAutoBindMethods', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(ReactClassMixin, 'ReactClassMixin', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(ReactClassComponent, 'ReactClassComponent', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');

	  __REACT_HOT_LOADER__.register(ReactClass, 'ReactClass', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactClass.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(28);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ReactPropTypeLocations, 'ReactPropTypeLocations', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypeLocations.js');
	}();

	;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(keyMirror, 'keyMirror', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/fbjs/lib/keyMirror.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ReactPropTypeLocationNames, 'ReactPropTypeLocationNames', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypeLocationNames.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */

	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(keyOf, "keyOf", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/node_modules/fbjs/lib/keyOf.js");
	}();

	;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 */

	'use strict';

	var ReactElement = __webpack_require__(14);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(32);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(createDOMFactory, 'createDOMFactory', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactDOMFactories.js');

	  __REACT_HOT_LOADER__.register(ReactDOMFactories, 'ReactDOMFactories', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactDOMFactories.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var ReactCurrentOwner = __webpack_require__(15);
	var ReactComponentTreeHook = __webpack_require__(33);
	var ReactElement = __webpack_require__(14);
	var ReactPropTypeLocations = __webpack_require__(27);

	var checkReactTypeSpec = __webpack_require__(34);

	var canDefineProperty = __webpack_require__(18);
	var getIteratorFn = __webpack_require__(20);
	var warning = __webpack_require__(16);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, ReactPropTypeLocations.prop, name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function createElement(type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function createFactory(type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function cloneElement(element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(getDeclarationErrorAddendum, 'getDeclarationErrorAddendum', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElementValidator.js');

	  __REACT_HOT_LOADER__.register(ownerHasKeyUseWarning, 'ownerHasKeyUseWarning', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElementValidator.js');

	  __REACT_HOT_LOADER__.register(getCurrentComponentErrorInfo, 'getCurrentComponentErrorInfo', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElementValidator.js');

	  __REACT_HOT_LOADER__.register(validateExplicitKey, 'validateExplicitKey', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElementValidator.js');

	  __REACT_HOT_LOADER__.register(validateChildKeys, 'validateChildKeys', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElementValidator.js');

	  __REACT_HOT_LOADER__.register(validatePropTypes, 'validatePropTypes', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElementValidator.js');

	  __REACT_HOT_LOADER__.register(ReactElementValidator, 'ReactElementValidator', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactElementValidator.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeHook
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(12);

	var ReactCurrentOwner = __webpack_require__(15);

	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(16);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var itemMap;
	var rootIDSet;

	var itemByKey;
	var rootByKey;

	if (canUseCollections) {
	  itemMap = new Map();
	  rootIDSet = new Set();
	} else {
	  itemByKey = {};
	  rootByKey = {};
	}

	var unmountedIDs = [];

	// Use non-numeric keys to prevent V8 performance issues:
	// https://github.com/facebook/react/pull/7232
	function getKeyFromID(id) {
	  return '.' + id;
	}
	function getIDFromKey(key) {
	  return parseInt(key.substr(1), 10);
	}

	function get(id) {
	  if (canUseCollections) {
	    return itemMap.get(id);
	  } else {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  }
	}

	function remove(id) {
	  if (canUseCollections) {
	    itemMap['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  }
	}

	function create(id, element, parentID) {
	  var item = {
	    element: element,
	    parentID: parentID,
	    text: null,
	    childIDs: [],
	    isMounted: false,
	    updateCount: 0
	  };

	  if (canUseCollections) {
	    itemMap.set(id, item);
	  } else {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  }
	}

	function addRoot(id) {
	  if (canUseCollections) {
	    rootIDSet.add(id);
	  } else {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  }
	}

	function removeRoot(id) {
	  if (canUseCollections) {
	    rootIDSet['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  }
	}

	function getRegisteredIDs() {
	  if (canUseCollections) {
	    return Array.from(itemMap.keys());
	  } else {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  }
	}

	function getRootIDs() {
	  if (canUseCollections) {
	    return Array.from(rootIDSet.keys());
	  } else {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  }
	}

	function purgeDeep(id) {
	  var item = get(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    remove(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function _getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function onSetChildren(id, nextChildIDs) {
	    var item = get(id);
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = get(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || _typeof(nextChild.element) !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent ID is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
	    create(id, element, parentID);
	  },
	  onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function onMountComponent(id) {
	    var item = get(id);
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function onUpdateComponent(id) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function onUnmountComponent(id) {
	    var item = get(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function purgeUnmountedComponents() {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function isMounted(id) {
	    var item = get(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
	    var info = '';
	    if (topElement) {
	      var type = topElement.type;
	      var name = typeof type === 'function' ? type.displayName || type.name : type;
	      var owner = topElement._owner;
	      info += describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function getStackAddendumByID(id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function getChildIDs(id) {
	    var item = get(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function getDisplayName(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return _getDisplayName(element);
	  },
	  getElement: function getElement(id) {
	    var item = get(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function getOwnerID(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function getParentID(id) {
	    var item = get(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function getSource(id) {
	    var item = get(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function getText(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function getUpdateCount(id) {
	    var item = get(id);
	    return item ? item.updateCount : 0;
	  },

	  getRegisteredIDs: getRegisteredIDs,

	  getRootIDs: getRootIDs
	};

	module.exports = ReactComponentTreeHook;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(isNative, 'isNative', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(canUseCollections, 'canUseCollections', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(itemMap, 'itemMap', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(rootIDSet, 'rootIDSet', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(itemByKey, 'itemByKey', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(rootByKey, 'rootByKey', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(unmountedIDs, 'unmountedIDs', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(getKeyFromID, 'getKeyFromID', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(getIDFromKey, 'getIDFromKey', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(get, 'get', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(remove, 'remove', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(create, 'create', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(addRoot, 'addRoot', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(removeRoot, 'removeRoot', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(getRegisteredIDs, 'getRegisteredIDs', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(getRootIDs, 'getRootIDs', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(purgeDeep, 'purgeDeep', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(describeComponentFrame, 'describeComponentFrame', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(_getDisplayName, 'getDisplayName', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(describeID, 'describeID', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');

	  __REACT_HOT_LOADER__.register(ReactComponentTreeHook, 'ReactComponentTreeHook', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactComponentTreeHook.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule checkReactTypeSpec
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(12);

	var ReactPropTypeLocationNames = __webpack_require__(29);
	var ReactPropTypesSecret = __webpack_require__(35);

	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(16);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(33);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error)) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(33);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ReactComponentTreeHook, 'ReactComponentTreeHook', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/checkReactTypeSpec.js');

	  __REACT_HOT_LOADER__.register(loggedTypeFailures, 'loggedTypeFailures', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/checkReactTypeSpec.js');

	  __REACT_HOT_LOADER__.register(checkReactTypeSpec, 'checkReactTypeSpec', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/checkReactTypeSpec.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypesSecret
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ReactPropTypesSecret, 'ReactPropTypesSecret', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypesSecret.js');
	}();

	;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var ReactElement = __webpack_require__(14);
	var ReactPropTypeLocationNames = __webpack_require__(29);
	var ReactPropTypesSecret = __webpack_require__(35);

	var emptyFunction = __webpack_require__(17);
	var getIteratorFn = __webpack_require__(20);
	var warning = __webpack_require__(16);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  if (process.env.NODE_ENV !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (process.env.NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in the next major version. You may be ' + 'seeing this warning due to a third-party PropTypes library. ' + 'See https://fb.me/react-warning-dont-call-proptypes for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new PropTypeError('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ANONYMOUS, 'ANONYMOUS', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(ReactPropTypes, 'ReactPropTypes', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(is, 'is', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(PropTypeError, 'PropTypeError', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createChainableTypeChecker, 'createChainableTypeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createPrimitiveTypeChecker, 'createPrimitiveTypeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createAnyTypeChecker, 'createAnyTypeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createArrayOfTypeChecker, 'createArrayOfTypeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createElementTypeChecker, 'createElementTypeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createInstanceTypeChecker, 'createInstanceTypeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createEnumTypeChecker, 'createEnumTypeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createObjectOfTypeChecker, 'createObjectOfTypeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createUnionTypeChecker, 'createUnionTypeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createNodeChecker, 'createNodeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(createShapeTypeChecker, 'createShapeTypeChecker', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(isNode, 'isNode', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(isSymbol, 'isSymbol', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(getPropType, 'getPropType', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(getPreciseType, 'getPreciseType', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');

	  __REACT_HOT_LOADER__.register(getClassName, 'getClassName', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/ReactPropTypes.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	'use strict';

	module.exports = '15.3.2';
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(12);

	var ReactElement = __webpack_require__(14);

	var invariant = __webpack_require__(13);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(onlyChild, 'onlyChild', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react/lib/onlyChild.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _supportsProtoAssignment = __webpack_require__(40);

	var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

	var _createClassProxy = __webpack_require__(41);

	var _createClassProxy2 = _interopRequireDefault(_createClassProxy);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	if (!(0, _supportsProtoAssignment2.default)()) {
	  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
	}

	exports.default = _createClassProxy2.default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_supportsProtoAssignment2, '_supportsProtoAssignment2', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/index.js');

	  __REACT_HOT_LOADER__.register(_createClassProxy2, '_createClassProxy2', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/index.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/index.js');
	}();

	;

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = supportsProtoAssignment;
	var x = {};
	var y = { supports: true };
	try {
	  x.__proto__ = y;
	} catch (err) {}

	function supportsProtoAssignment() {
	  return x.supports || false;
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(x, "x", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/supportsProtoAssignment.js");

	  __REACT_HOT_LOADER__.register(y, "y", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/supportsProtoAssignment.js");

	  __REACT_HOT_LOADER__.register(supportsProtoAssignment, "supportsProtoAssignment", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/supportsProtoAssignment.js");
	}();

	;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	exports.default = createClassProxy;

	var _find = __webpack_require__(42);

	var _find2 = _interopRequireDefault(_find);

	var _createPrototypeProxy = __webpack_require__(155);

	var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);

	var _bindAutoBindMethods = __webpack_require__(181);

	var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);

	var _deleteUnknownAutoBindMethods = __webpack_require__(182);

	var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);

	var _supportsProtoAssignment = __webpack_require__(40);

	var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString'];

	function isEqualDescriptor(a, b) {
	  if (!a && !b) {
	    return true;
	  }
	  if (!a || !b) {
	    return false;
	  }
	  for (var key in a) {
	    if (a[key] !== b[key]) {
	      return false;
	    }
	  }
	  return true;
	}

	function getDisplayName(Component) {
	  var displayName = Component.displayName || Component.name;
	  return displayName && displayName !== 'ReactComponent' ? displayName : 'Unknown';
	}

	// This was originally a WeakMap but we had issues with React Native:
	// https://github.com/gaearon/react-proxy/issues/50#issuecomment-192928066
	var allProxies = [];
	function findProxy(Component) {
	  var pair = (0, _find2.default)(allProxies, function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 1);

	    var key = _ref2[0];
	    return key === Component;
	  });
	  return pair ? pair[1] : null;
	}
	function addProxy(Component, proxy) {
	  allProxies.push([Component, proxy]);
	}

	function proxyClass(InitialComponent) {
	  // Prevent double wrapping.
	  // Given a proxy class, return the existing proxy managing it.
	  var existingProxy = findProxy(InitialComponent);
	  if (existingProxy) {
	    return existingProxy;
	  }

	  var CurrentComponent = undefined;
	  var ProxyComponent = undefined;
	  var savedDescriptors = {};

	  function instantiate(factory, context, params) {
	    var component = factory();

	    try {
	      return component.apply(context, params);
	    } catch (err) {
	      (function () {
	        // Native ES6 class instantiation
	        var instance = new (Function.prototype.bind.apply(component, [null].concat(_toConsumableArray(params))))();

	        Object.keys(instance).forEach(function (key) {
	          if (RESERVED_STATICS.indexOf(key) > -1) {
	            return;
	          }
	          context[key] = instance[key];
	        });
	      })();
	    }
	  }

	  var displayName = getDisplayName(InitialComponent);
	  try {
	    // Create a proxy constructor with matching name
	    ProxyComponent = new Function('factory', 'instantiate', 'return function ' + displayName + '() {\n         return instantiate(factory, this, arguments);\n      }')(function () {
	      return CurrentComponent;
	    }, instantiate);
	  } catch (err) {
	    // Some environments may forbid dynamic evaluation
	    ProxyComponent = function ProxyComponent() {
	      return instantiate(function () {
	        return CurrentComponent;
	      }, this, arguments);
	    };
	  }
	  try {
	    Object.defineProperty(ProxyComponent, 'name', {
	      value: displayName
	    });
	  } catch (err) {}

	  // Proxy toString() to the current constructor
	  ProxyComponent.toString = function toString() {
	    return CurrentComponent.toString();
	  };

	  var prototypeProxy = undefined;
	  if (InitialComponent.prototype && InitialComponent.prototype.isReactComponent) {
	    // Point proxy constructor to the proxy prototype
	    prototypeProxy = (0, _createPrototypeProxy2.default)();
	    ProxyComponent.prototype = prototypeProxy.get();
	  }

	  function update(NextComponent) {
	    if (typeof NextComponent !== 'function') {
	      throw new Error('Expected a constructor.');
	    }
	    if (NextComponent === CurrentComponent) {
	      return;
	    }

	    // Prevent proxy cycles
	    var existingProxy = findProxy(NextComponent);
	    if (existingProxy) {
	      return update(existingProxy.__getCurrent());
	    }

	    // Save the next constructor so we call it
	    var PreviousComponent = CurrentComponent;
	    CurrentComponent = NextComponent;

	    // Try to infer displayName
	    displayName = getDisplayName(NextComponent);
	    ProxyComponent.displayName = displayName;
	    try {
	      Object.defineProperty(ProxyComponent, 'name', {
	        value: displayName
	      });
	    } catch (err) {}

	    // Set up the same prototype for inherited statics
	    ProxyComponent.__proto__ = NextComponent.__proto__;

	    // Copy over static methods and properties added at runtime
	    if (PreviousComponent) {
	      Object.getOwnPropertyNames(PreviousComponent).forEach(function (key) {
	        if (RESERVED_STATICS.indexOf(key) > -1) {
	          return;
	        }

	        var prevDescriptor = Object.getOwnPropertyDescriptor(PreviousComponent, key);
	        var savedDescriptor = savedDescriptors[key];

	        if (!isEqualDescriptor(prevDescriptor, savedDescriptor)) {
	          Object.defineProperty(NextComponent, key, prevDescriptor);
	        }
	      });
	    }

	    // Copy newly defined static methods and properties
	    Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
	      if (RESERVED_STATICS.indexOf(key) > -1) {
	        return;
	      }

	      var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
	      var savedDescriptor = savedDescriptors[key];

	      // Skip redefined descriptors
	      if (prevDescriptor && savedDescriptor && !isEqualDescriptor(savedDescriptor, prevDescriptor)) {
	        Object.defineProperty(NextComponent, key, prevDescriptor);
	        Object.defineProperty(ProxyComponent, key, prevDescriptor);
	        return;
	      }

	      if (prevDescriptor && !savedDescriptor) {
	        Object.defineProperty(ProxyComponent, key, prevDescriptor);
	        return;
	      }

	      var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
	        configurable: true
	      });
	      savedDescriptors[key] = nextDescriptor;
	      Object.defineProperty(ProxyComponent, key, nextDescriptor);
	    });

	    // Remove static methods and properties that are no longer defined
	    Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
	      if (RESERVED_STATICS.indexOf(key) > -1) {
	        return;
	      }
	      // Skip statics that exist on the next class
	      if (NextComponent.hasOwnProperty(key)) {
	        return;
	      }
	      // Skip non-configurable statics
	      var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
	      if (proxyDescriptor && !proxyDescriptor.configurable) {
	        return;
	      }

	      var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
	      var savedDescriptor = savedDescriptors[key];

	      // Skip redefined descriptors
	      if (prevDescriptor && savedDescriptor && !isEqualDescriptor(savedDescriptor, prevDescriptor)) {
	        return;
	      }

	      delete ProxyComponent[key];
	    });

	    if (prototypeProxy) {
	      // Update the prototype proxy with new methods
	      var mountedInstances = prototypeProxy.update(NextComponent.prototype);

	      // Set up the constructor property so accessing the statics work
	      ProxyComponent.prototype.constructor = NextComponent;

	      // We might have added new methods that need to be auto-bound
	      mountedInstances.forEach(_bindAutoBindMethods2.default);
	      mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);
	    }
	  };

	  function get() {
	    return ProxyComponent;
	  }

	  function getCurrent() {
	    return CurrentComponent;
	  }

	  update(InitialComponent);

	  var proxy = { get: get, update: update };
	  addProxy(ProxyComponent, proxy);

	  Object.defineProperty(proxy, '__getCurrent', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: getCurrent
	  });

	  return proxy;
	}

	function createFallback(Component) {
	  var CurrentComponent = Component;

	  return {
	    get: function get() {
	      return CurrentComponent;
	    },
	    update: function update(NextComponent) {
	      CurrentComponent = NextComponent;
	    }
	  };
	}

	function createClassProxy(Component) {
	  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_extends, "_extends", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(_slicedToArray, "_slicedToArray", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(_find2, "_find2", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(_createPrototypeProxy2, "_createPrototypeProxy2", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(_bindAutoBindMethods2, "_bindAutoBindMethods2", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(_deleteUnknownAutoBindMethods2, "_deleteUnknownAutoBindMethods2", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(_supportsProtoAssignment2, "_supportsProtoAssignment2", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(_toConsumableArray, "_toConsumableArray", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(RESERVED_STATICS, "RESERVED_STATICS", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(isEqualDescriptor, "isEqualDescriptor", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(getDisplayName, "getDisplayName", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(allProxies, "allProxies", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(findProxy, "findProxy", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(addProxy, "addProxy", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(proxyClass, "proxyClass", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(createFallback, "createFallback", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");

	  __REACT_HOT_LOADER__.register(createClassProxy, "createClassProxy", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createClassProxy.js");
	}();

	;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createFind = __webpack_require__(43),
	    findIndex = __webpack_require__(150);

	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);

	module.exports = find;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(find, 'find', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/find.js');
	}();

	;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIteratee = __webpack_require__(44),
	    isArrayLike = __webpack_require__(120),
	    keys = __webpack_require__(101);

	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function (collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike(collection)) {
	      var iteratee = baseIteratee(predicate, 3);
	      collection = keys(collection);
	      predicate = function predicate(key) {
	        return iteratee(iterable[key], key, iterable);
	      };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}

	module.exports = createFind;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(createFind, 'createFind', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_createFind.js');
	}();

	;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var baseMatches = __webpack_require__(45),
	    baseMatchesProperty = __webpack_require__(130),
	    identity = __webpack_require__(146),
	    isArray = __webpack_require__(107),
	    property = __webpack_require__(147);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
	    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseIteratee, 'baseIteratee', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIteratee.js');
	}();

	;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsMatch = __webpack_require__(46),
	    getMatchData = __webpack_require__(127),
	    matchesStrictComparable = __webpack_require__(129);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function (object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseMatches, 'baseMatches', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseMatches.js');
	}();

	;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stack = __webpack_require__(47),
	    baseIsEqual = __webpack_require__(87);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack();
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(UNORDERED_COMPARE_FLAG, 'UNORDERED_COMPARE_FLAG', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsMatch.js');

	  __REACT_HOT_LOADER__.register(PARTIAL_COMPARE_FLAG, 'PARTIAL_COMPARE_FLAG', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsMatch.js');

	  __REACT_HOT_LOADER__.register(baseIsMatch, 'baseIsMatch', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsMatch.js');
	}();

	;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(48),
	    stackClear = __webpack_require__(56),
	    stackDelete = __webpack_require__(57),
	    stackGet = __webpack_require__(58),
	    stackHas = __webpack_require__(59),
	    stackSet = __webpack_require__(60);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Stack, 'Stack', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_Stack.js');
	}();

	;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var listCacheClear = __webpack_require__(49),
	    listCacheDelete = __webpack_require__(50),
	    listCacheGet = __webpack_require__(53),
	    listCacheHas = __webpack_require__(54),
	    listCacheSet = __webpack_require__(55);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	    var index = -1,
	        length = entries ? entries.length : 0;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(ListCache, 'ListCache', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_ListCache.js');
	}();

	;

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(listCacheClear, "listCacheClear", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_listCacheClear.js");
	}();

	;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(51);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(arrayProto, 'arrayProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_listCacheDelete.js');

	  __REACT_HOT_LOADER__.register(splice, 'splice', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_listCacheDelete.js');

	  __REACT_HOT_LOADER__.register(listCacheDelete, 'listCacheDelete', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_listCacheDelete.js');
	}();

	;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var eq = __webpack_require__(52);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(assocIndexOf, 'assocIndexOf', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_assocIndexOf.js');
	}();

	;

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	module.exports = eq;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(eq, "eq", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/eq.js");
	}();

	;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(51);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(listCacheGet, 'listCacheGet', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_listCacheGet.js');
	}();

	;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(51);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(listCacheHas, 'listCacheHas', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_listCacheHas.js');
	}();

	;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(51);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(listCacheSet, 'listCacheSet', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_listCacheSet.js');
	}();

	;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(48);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache();
	  this.size = 0;
	}

	module.exports = stackClear;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(stackClear, 'stackClear', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_stackClear.js');
	}();

	;

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(stackDelete, 'stackDelete', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_stackDelete.js');
	}();

	;

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(stackGet, "stackGet", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_stackGet.js");
	}();

	;

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(stackHas, "stackHas", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_stackHas.js");
	}();

	;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(48),
	    Map = __webpack_require__(61),
	    MapCache = __webpack_require__(72);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(LARGE_ARRAY_SIZE, 'LARGE_ARRAY_SIZE', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_stackSet.js');

	  __REACT_HOT_LOADER__.register(stackSet, 'stackSet', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_stackSet.js');
	}();

	;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(62),
	    root = __webpack_require__(68);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(Map, 'Map', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_Map.js');
	}();

	;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsNative = __webpack_require__(63),
	    getValue = __webpack_require__(71);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(getNative, 'getNative', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getNative.js');
	}();

	;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(64),
	    isMasked = __webpack_require__(66),
	    isObject = __webpack_require__(65),
	    toSource = __webpack_require__(70);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(reRegExpChar, 'reRegExpChar', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsNative.js');

	  __REACT_HOT_LOADER__.register(reIsHostCtor, 'reIsHostCtor', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsNative.js');

	  __REACT_HOT_LOADER__.register(funcProto, 'funcProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsNative.js');

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsNative.js');

	  __REACT_HOT_LOADER__.register(funcToString, 'funcToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsNative.js');

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsNative.js');

	  __REACT_HOT_LOADER__.register(reIsNative, 'reIsNative', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsNative.js');

	  __REACT_HOT_LOADER__.register(baseIsNative, 'baseIsNative', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsNative.js');
	}();

	;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(65);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}

	module.exports = isFunction;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(funcTag, 'funcTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isFunction.js');

	  __REACT_HOT_LOADER__.register(genTag, 'genTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isFunction.js');

	  __REACT_HOT_LOADER__.register(proxyTag, 'proxyTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isFunction.js');

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isFunction.js');

	  __REACT_HOT_LOADER__.register(objectToString, 'objectToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isFunction.js');

	  __REACT_HOT_LOADER__.register(isFunction, 'isFunction', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isFunction.js');
	}();

	;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(isObject, 'isObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isObject.js');
	}();

	;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var coreJsData = __webpack_require__(67);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	module.exports = isMasked;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(maskSrcKey, 'maskSrcKey', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isMasked.js');

	  __REACT_HOT_LOADER__.register(isMasked, 'isMasked', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isMasked.js');
	}();

	;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(68);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(coreJsData, 'coreJsData', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_coreJsData.js');
	}();

	;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var freeGlobal = __webpack_require__(69);

	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(freeSelf, 'freeSelf', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_root.js');

	  __REACT_HOT_LOADER__.register(root, 'root', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_root.js');
	}();

	;

/***/ },
/* 69 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(freeGlobal, 'freeGlobal', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_freeGlobal.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(funcProto, 'funcProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_toSource.js');

	  __REACT_HOT_LOADER__.register(funcToString, 'funcToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_toSource.js');

	  __REACT_HOT_LOADER__.register(toSource, 'toSource', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_toSource.js');
	}();

	;

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(getValue, "getValue", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getValue.js");
	}();

	;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mapCacheClear = __webpack_require__(73),
	    mapCacheDelete = __webpack_require__(81),
	    mapCacheGet = __webpack_require__(84),
	    mapCacheHas = __webpack_require__(85),
	    mapCacheSet = __webpack_require__(86);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	    var index = -1,
	        length = entries ? entries.length : 0;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(MapCache, 'MapCache', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_MapCache.js');
	}();

	;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Hash = __webpack_require__(74),
	    ListCache = __webpack_require__(48),
	    Map = __webpack_require__(61);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
	  };
	}

	module.exports = mapCacheClear;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(mapCacheClear, 'mapCacheClear', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_mapCacheClear.js');
	}();

	;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hashClear = __webpack_require__(75),
	    hashDelete = __webpack_require__(77),
	    hashGet = __webpack_require__(78),
	    hashHas = __webpack_require__(79),
	    hashSet = __webpack_require__(80);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	    var index = -1,
	        length = entries ? entries.length : 0;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(Hash, 'Hash', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_Hash.js');
	}();

	;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(76);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(hashClear, 'hashClear', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashClear.js');
	}();

	;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(62);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(nativeCreate, 'nativeCreate', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_nativeCreate.js');
	}();

	;

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(hashDelete, "hashDelete", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashDelete.js");
	}();

	;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(76);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(HASH_UNDEFINED, 'HASH_UNDEFINED', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashGet.js');

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashGet.js');

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashGet.js');

	  __REACT_HOT_LOADER__.register(hashGet, 'hashGet', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashGet.js');
	}();

	;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(76);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashHas.js');

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashHas.js');

	  __REACT_HOT_LOADER__.register(hashHas, 'hashHas', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashHas.js');
	}();

	;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(76);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(HASH_UNDEFINED, 'HASH_UNDEFINED', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashSet.js');

	  __REACT_HOT_LOADER__.register(hashSet, 'hashSet', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hashSet.js');
	}();

	;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(82);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(mapCacheDelete, 'mapCacheDelete', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_mapCacheDelete.js');
	}();

	;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isKeyable = __webpack_require__(83);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	module.exports = getMapData;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(getMapData, 'getMapData', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getMapData.js');
	}();

	;

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	module.exports = isKeyable;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(isKeyable, 'isKeyable', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isKeyable.js');
	}();

	;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(82);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(mapCacheGet, 'mapCacheGet', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_mapCacheGet.js');
	}();

	;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(82);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(mapCacheHas, 'mapCacheHas', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_mapCacheHas.js');
	}();

	;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(82);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(mapCacheSet, 'mapCacheSet', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_mapCacheSet.js');
	}();

	;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsEqualDeep = __webpack_require__(88),
	    isObject = __webpack_require__(65),
	    isObjectLike = __webpack_require__(106);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseIsEqual, 'baseIsEqual', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsEqual.js');
	}();

	;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stack = __webpack_require__(47),
	    equalArrays = __webpack_require__(89),
	    equalByTag = __webpack_require__(95),
	    equalObjects = __webpack_require__(100),
	    getTag = __webpack_require__(121),
	    isArray = __webpack_require__(107),
	    isBuffer = __webpack_require__(108),
	    isTypedArray = __webpack_require__(111);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack());
	    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack());
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack());
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(PARTIAL_COMPARE_FLAG, 'PARTIAL_COMPARE_FLAG', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsEqualDeep.js');

	  __REACT_HOT_LOADER__.register(argsTag, 'argsTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsEqualDeep.js');

	  __REACT_HOT_LOADER__.register(arrayTag, 'arrayTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsEqualDeep.js');

	  __REACT_HOT_LOADER__.register(objectTag, 'objectTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsEqualDeep.js');

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsEqualDeep.js');

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsEqualDeep.js');

	  __REACT_HOT_LOADER__.register(baseIsEqualDeep, 'baseIsEqualDeep', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsEqualDeep.js');
	}();

	;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SetCache = __webpack_require__(90),
	    arraySome = __webpack_require__(93),
	    cacheHas = __webpack_require__(94);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function (othValue, othIndex) {
	        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	          return seen.push(othIndex);
	        }
	      })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(UNORDERED_COMPARE_FLAG, 'UNORDERED_COMPARE_FLAG', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalArrays.js');

	  __REACT_HOT_LOADER__.register(PARTIAL_COMPARE_FLAG, 'PARTIAL_COMPARE_FLAG', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalArrays.js');

	  __REACT_HOT_LOADER__.register(equalArrays, 'equalArrays', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalArrays.js');
	}();

	;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MapCache = __webpack_require__(72),
	    setCacheAdd = __webpack_require__(91),
	    setCacheHas = __webpack_require__(92);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	    var index = -1,
	        length = values ? values.length : 0;

	    this.__data__ = new MapCache();
	    while (++index < length) {
	        this.add(values[index]);
	    }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(SetCache, 'SetCache', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_SetCache.js');
	}();

	;

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(HASH_UNDEFINED, 'HASH_UNDEFINED', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_setCacheAdd.js');

	  __REACT_HOT_LOADER__.register(setCacheAdd, 'setCacheAdd', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_setCacheAdd.js');
	}();

	;

/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(setCacheHas, "setCacheHas", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_setCacheHas.js");
	}();

	;

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(arraySome, "arraySome", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_arraySome.js");
	}();

	;

/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(cacheHas, "cacheHas", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_cacheHas.js");
	}();

	;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(96),
	    Uint8Array = __webpack_require__(97),
	    eq = __webpack_require__(52),
	    equalArrays = __webpack_require__(89),
	    mapToArray = __webpack_require__(98),
	    setToArray = __webpack_require__(99);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == other + '';

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(UNORDERED_COMPARE_FLAG, 'UNORDERED_COMPARE_FLAG', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(PARTIAL_COMPARE_FLAG, 'PARTIAL_COMPARE_FLAG', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(boolTag, 'boolTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(dateTag, 'dateTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(errorTag, 'errorTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(mapTag, 'mapTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(numberTag, 'numberTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(regexpTag, 'regexpTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(setTag, 'setTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(stringTag, 'stringTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(symbolTag, 'symbolTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(arrayBufferTag, 'arrayBufferTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(dataViewTag, 'dataViewTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(symbolProto, 'symbolProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(symbolValueOf, 'symbolValueOf', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');

	  __REACT_HOT_LOADER__.register(equalByTag, 'equalByTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalByTag.js');
	}();

	;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(68);

	/** Built-in value references. */
	var _Symbol = root.Symbol;

	module.exports = _Symbol;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_Symbol, 'Symbol', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_Symbol.js');
	}();

	;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(68);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Uint8Array, 'Uint8Array', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_Uint8Array.js');
	}();

	;

/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(mapToArray, "mapToArray", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_mapToArray.js");
	}();

	;

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(setToArray, "setToArray", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_setToArray.js");
	}();

	;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var keys = __webpack_require__(101);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(PARTIAL_COMPARE_FLAG, 'PARTIAL_COMPARE_FLAG', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalObjects.js');

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalObjects.js');

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalObjects.js');

	  __REACT_HOT_LOADER__.register(equalObjects, 'equalObjects', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_equalObjects.js');
	}();

	;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayLikeKeys = __webpack_require__(102),
	    baseKeys = __webpack_require__(116),
	    isArrayLike = __webpack_require__(120);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(keys, 'keys', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/keys.js');
	}();

	;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseTimes = __webpack_require__(103),
	    isArguments = __webpack_require__(104),
	    isArray = __webpack_require__(107),
	    isBuffer = __webpack_require__(108),
	    isIndex = __webpack_require__(110),
	    isTypedArray = __webpack_require__(111);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
	    // Safari 9 has enumerable `arguments.length` in strict mode.
	    key == 'length' ||
	    // Node.js 0.10 has enumerable non-index properties on buffers.
	    isBuff && (key == 'offset' || key == 'parent') ||
	    // PhantomJS 2 has enumerable non-index properties on typed arrays.
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
	    // Skip index properties.
	    isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_arrayLikeKeys.js');

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_arrayLikeKeys.js');

	  __REACT_HOT_LOADER__.register(arrayLikeKeys, 'arrayLikeKeys', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_arrayLikeKeys.js');
	}();

	;

/***/ },
/* 103 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseTimes, "baseTimes", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseTimes.js");
	}();

	;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsArguments = __webpack_require__(105),
	    isObjectLike = __webpack_require__(106);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function () {
	    return arguments;
	}()) ? baseIsArguments : function (value) {
	    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isArguments.js');

	    __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isArguments.js');

	    __REACT_HOT_LOADER__.register(propertyIsEnumerable, 'propertyIsEnumerable', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isArguments.js');

	    __REACT_HOT_LOADER__.register(isArguments, 'isArguments', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isArguments.js');
	}();

	;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObjectLike = __webpack_require__(106);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && objectToString.call(value) == argsTag;
	}

	module.exports = baseIsArguments;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(argsTag, 'argsTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsArguments.js');

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsArguments.js');

	  __REACT_HOT_LOADER__.register(objectToString, 'objectToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsArguments.js');

	  __REACT_HOT_LOADER__.register(baseIsArguments, 'baseIsArguments', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsArguments.js');
	}();

	;

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	module.exports = isObjectLike;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(isObjectLike, 'isObjectLike', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isObjectLike.js');
	}();

	;

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(isArray, "isArray", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isArray.js");
	}();

	;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var root = __webpack_require__(68),
	    stubFalse = __webpack_require__(109);

	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(freeExports, 'freeExports', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isBuffer.js');

	  __REACT_HOT_LOADER__.register(freeModule, 'freeModule', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isBuffer.js');

	  __REACT_HOT_LOADER__.register(moduleExports, 'moduleExports', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isBuffer.js');

	  __REACT_HOT_LOADER__.register(Buffer, 'Buffer', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isBuffer.js');

	  __REACT_HOT_LOADER__.register(nativeIsBuffer, 'nativeIsBuffer', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isBuffer.js');

	  __REACT_HOT_LOADER__.register(isBuffer, 'isBuffer', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isBuffer.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(stubFalse, "stubFalse", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/stubFalse.js");
	}();

	;

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(MAX_SAFE_INTEGER, 'MAX_SAFE_INTEGER', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isIndex.js');

	  __REACT_HOT_LOADER__.register(reIsUint, 'reIsUint', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isIndex.js');

	  __REACT_HOT_LOADER__.register(isIndex, 'isIndex', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isIndex.js');
	}();

	;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsTypedArray = __webpack_require__(112),
	    baseUnary = __webpack_require__(114),
	    nodeUtil = __webpack_require__(115);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(nodeIsTypedArray, 'nodeIsTypedArray', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isTypedArray.js');

	  __REACT_HOT_LOADER__.register(isTypedArray, 'isTypedArray', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isTypedArray.js');
	}();

	;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isLength = __webpack_require__(113),
	    isObjectLike = __webpack_require__(106);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = baseIsTypedArray;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(argsTag, 'argsTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(arrayTag, 'arrayTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(boolTag, 'boolTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(dateTag, 'dateTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(errorTag, 'errorTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(funcTag, 'funcTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(mapTag, 'mapTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(numberTag, 'numberTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(objectTag, 'objectTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(regexpTag, 'regexpTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(setTag, 'setTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(stringTag, 'stringTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(weakMapTag, 'weakMapTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(arrayBufferTag, 'arrayBufferTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(dataViewTag, 'dataViewTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(float32Tag, 'float32Tag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(float64Tag, 'float64Tag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(int8Tag, 'int8Tag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(int16Tag, 'int16Tag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(int32Tag, 'int32Tag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(uint8Tag, 'uint8Tag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(uint8ClampedTag, 'uint8ClampedTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(uint16Tag, 'uint16Tag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(uint32Tag, 'uint32Tag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(typedArrayTags, 'typedArrayTags', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(objectToString, 'objectToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');

	    __REACT_HOT_LOADER__.register(baseIsTypedArray, 'baseIsTypedArray', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsTypedArray.js');
	}();

	;

/***/ },
/* 113 */
/***/ function(module, exports) {

	'use strict';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(MAX_SAFE_INTEGER, 'MAX_SAFE_INTEGER', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isLength.js');

	  __REACT_HOT_LOADER__.register(isLength, 'isLength', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isLength.js');
	}();

	;

/***/ },
/* 114 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseUnary, "baseUnary", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseUnary.js");
	}();

	;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var freeGlobal = __webpack_require__(69);

	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = function () {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}();

	module.exports = nodeUtil;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(freeExports, 'freeExports', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_nodeUtil.js');

	  __REACT_HOT_LOADER__.register(freeModule, 'freeModule', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_nodeUtil.js');

	  __REACT_HOT_LOADER__.register(moduleExports, 'moduleExports', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_nodeUtil.js');

	  __REACT_HOT_LOADER__.register(freeProcess, 'freeProcess', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_nodeUtil.js');

	  __REACT_HOT_LOADER__.register(nodeUtil, 'nodeUtil', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_nodeUtil.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isPrototype = __webpack_require__(117),
	    nativeKeys = __webpack_require__(118);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseKeys.js');

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseKeys.js');

	  __REACT_HOT_LOADER__.register(baseKeys, 'baseKeys', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseKeys.js');
	}();

	;

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isPrototype.js');

	  __REACT_HOT_LOADER__.register(isPrototype, 'isPrototype', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isPrototype.js');
	}();

	;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var overArg = __webpack_require__(119);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(nativeKeys, 'nativeKeys', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_nativeKeys.js');
	}();

	;

/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(overArg, "overArg", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_overArg.js");
	}();

	;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(64),
	    isLength = __webpack_require__(113);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(isArrayLike, 'isArrayLike', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isArrayLike.js');
	}();

	;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var DataView = __webpack_require__(122),
	    Map = __webpack_require__(61),
	    Promise = __webpack_require__(123),
	    Set = __webpack_require__(124),
	    WeakMap = __webpack_require__(125),
	    baseGetTag = __webpack_require__(126),
	    toSource = __webpack_require__(70);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
	    getTag = function getTag(value) {
	        var result = objectToString.call(value),
	            Ctor = result == objectTag ? value.constructor : undefined,
	            ctorString = Ctor ? toSource(Ctor) : undefined;

	        if (ctorString) {
	            switch (ctorString) {
	                case dataViewCtorString:
	                    return dataViewTag;
	                case mapCtorString:
	                    return mapTag;
	                case promiseCtorString:
	                    return promiseTag;
	                case setCtorString:
	                    return setTag;
	                case weakMapCtorString:
	                    return weakMapTag;
	            }
	        }
	        return result;
	    };
	}

	module.exports = getTag;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(mapTag, 'mapTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(objectTag, 'objectTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(promiseTag, 'promiseTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(setTag, 'setTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(weakMapTag, 'weakMapTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(dataViewTag, 'dataViewTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(objectToString, 'objectToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(dataViewCtorString, 'dataViewCtorString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(mapCtorString, 'mapCtorString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(promiseCtorString, 'promiseCtorString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(setCtorString, 'setCtorString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(weakMapCtorString, 'weakMapCtorString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');

	    __REACT_HOT_LOADER__.register(getTag, 'getTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getTag.js');
	}();

	;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(62),
	    root = __webpack_require__(68);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(DataView, 'DataView', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_DataView.js');
	}();

	;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(62),
	    root = __webpack_require__(68);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(Promise, 'Promise', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_Promise.js');
	}();

	;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(62),
	    root = __webpack_require__(68);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(Set, 'Set', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_Set.js');
	}();

	;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(62),
	    root = __webpack_require__(68);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(WeakMap, 'WeakMap', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_WeakMap.js');
	}();

	;

/***/ },
/* 126 */
/***/ function(module, exports) {

	"use strict";

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(objectProto, "objectProto", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseGetTag.js");

	  __REACT_HOT_LOADER__.register(objectToString, "objectToString", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseGetTag.js");

	  __REACT_HOT_LOADER__.register(baseGetTag, "baseGetTag", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseGetTag.js");
	}();

	;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isStrictComparable = __webpack_require__(128),
	    keys = __webpack_require__(101);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	    var result = keys(object),
	        length = result.length;

	    while (length--) {
	        var key = result[length],
	            value = object[key];

	        result[length] = [key, value, isStrictComparable(value)];
	    }
	    return result;
	}

	module.exports = getMatchData;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(getMatchData, 'getMatchData', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_getMatchData.js');
	}();

	;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(65);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(isStrictComparable, 'isStrictComparable', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isStrictComparable.js');
	}();

	;

/***/ },
/* 129 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
	  };
	}

	module.exports = matchesStrictComparable;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(matchesStrictComparable, "matchesStrictComparable", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_matchesStrictComparable.js");
	}();

	;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsEqual = __webpack_require__(87),
	    get = __webpack_require__(131),
	    hasIn = __webpack_require__(143),
	    isKey = __webpack_require__(141),
	    isStrictComparable = __webpack_require__(128),
	    matchesStrictComparable = __webpack_require__(129),
	    toKey = __webpack_require__(142);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function (object) {
	    var objValue = get(object, path);
	    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(UNORDERED_COMPARE_FLAG, 'UNORDERED_COMPARE_FLAG', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseMatchesProperty.js');

	  __REACT_HOT_LOADER__.register(PARTIAL_COMPARE_FLAG, 'PARTIAL_COMPARE_FLAG', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseMatchesProperty.js');

	  __REACT_HOT_LOADER__.register(baseMatchesProperty, 'baseMatchesProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseMatchesProperty.js');
	}();

	;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGet = __webpack_require__(132);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(get, 'get', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/get.js');
	}();

	;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var castPath = __webpack_require__(133),
	    isKey = __webpack_require__(141),
	    toKey = __webpack_require__(142);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return index && index == length ? object : undefined;
	}

	module.exports = baseGet;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseGet, 'baseGet', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseGet.js');
	}();

	;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(107),
	    stringToPath = __webpack_require__(134);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(castPath, 'castPath', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_castPath.js');
	}();

	;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var memoizeCapped = __webpack_require__(135),
	    toString = __webpack_require__(137);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function (string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function (match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});

	module.exports = stringToPath;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(reLeadingDot, 'reLeadingDot', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_stringToPath.js');

	  __REACT_HOT_LOADER__.register(rePropName, 'rePropName', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_stringToPath.js');

	  __REACT_HOT_LOADER__.register(reEscapeChar, 'reEscapeChar', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_stringToPath.js');

	  __REACT_HOT_LOADER__.register(stringToPath, 'stringToPath', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_stringToPath.js');
	}();

	;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var memoize = __webpack_require__(136);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function (key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(MAX_MEMOIZE_SIZE, 'MAX_MEMOIZE_SIZE', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_memoizeCapped.js');

	  __REACT_HOT_LOADER__.register(memoizeCapped, 'memoizeCapped', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_memoizeCapped.js');
	}();

	;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MapCache = __webpack_require__(72);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function memoized() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache)();
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(FUNC_ERROR_TEXT, 'FUNC_ERROR_TEXT', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/memoize.js');

	  __REACT_HOT_LOADER__.register(memoize, 'memoize', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/memoize.js');
	}();

	;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseToString = __webpack_require__(138);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(toString, 'toString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toString.js');
	}();

	;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(96),
	    arrayMap = __webpack_require__(139),
	    isArray = __webpack_require__(107),
	    isSymbol = __webpack_require__(140);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	module.exports = baseToString;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(INFINITY, 'INFINITY', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseToString.js');

	  __REACT_HOT_LOADER__.register(symbolProto, 'symbolProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseToString.js');

	  __REACT_HOT_LOADER__.register(symbolToString, 'symbolToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseToString.js');

	  __REACT_HOT_LOADER__.register(baseToString, 'baseToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseToString.js');
	}();

	;

/***/ },
/* 139 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(arrayMap, "arrayMap", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_arrayMap.js");
	}();

	;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isObjectLike = __webpack_require__(106);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
	}

	module.exports = isSymbol;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(symbolTag, 'symbolTag', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isSymbol.js');

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isSymbol.js');

	  __REACT_HOT_LOADER__.register(objectToString, 'objectToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isSymbol.js');

	  __REACT_HOT_LOADER__.register(isSymbol, 'isSymbol', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isSymbol.js');
	}();

	;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isArray = __webpack_require__(107),
	    isSymbol = __webpack_require__(140);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}

	module.exports = isKey;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(reIsDeepProp, 'reIsDeepProp', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isKey.js');

	  __REACT_HOT_LOADER__.register(reIsPlainProp, 'reIsPlainProp', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isKey.js');

	  __REACT_HOT_LOADER__.register(isKey, 'isKey', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isKey.js');
	}();

	;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isSymbol = __webpack_require__(140);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	module.exports = toKey;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(INFINITY, 'INFINITY', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_toKey.js');

	  __REACT_HOT_LOADER__.register(toKey, 'toKey', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_toKey.js');
	}();

	;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseHasIn = __webpack_require__(144),
	    hasPath = __webpack_require__(145);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(hasIn, 'hasIn', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/hasIn.js');
	}();

	;

/***/ },
/* 144 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseHasIn, "baseHasIn", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseHasIn.js");
	}();

	;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var castPath = __webpack_require__(133),
	    isArguments = __webpack_require__(104),
	    isArray = __webpack_require__(107),
	    isIndex = __webpack_require__(110),
	    isKey = __webpack_require__(141),
	    isLength = __webpack_require__(113),
	    toKey = __webpack_require__(142);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(hasPath, 'hasPath', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_hasPath.js');
	}();

	;

/***/ },
/* 146 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(identity, "identity", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/identity.js");
	}();

	;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseProperty = __webpack_require__(148),
	    basePropertyDeep = __webpack_require__(149),
	    isKey = __webpack_require__(141),
	    toKey = __webpack_require__(142);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(property, 'property', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/property.js');
	}();

	;

/***/ },
/* 148 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseProperty, "baseProperty", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseProperty.js");
	}();

	;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGet = __webpack_require__(132);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function (object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(basePropertyDeep, 'basePropertyDeep', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_basePropertyDeep.js');
	}();

	;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseFindIndex = __webpack_require__(151),
	    baseIteratee = __webpack_require__(44),
	    toInteger = __webpack_require__(152);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}

	module.exports = findIndex;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(nativeMax, 'nativeMax', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/findIndex.js');

	  __REACT_HOT_LOADER__.register(findIndex, 'findIndex', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/findIndex.js');
	}();

	;

/***/ },
/* 151 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while (fromRight ? index-- : ++index < length) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseFindIndex, "baseFindIndex", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseFindIndex.js");
	}();

	;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toFinite = __webpack_require__(153);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? remainder ? result - remainder : result : 0;
	}

	module.exports = toInteger;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(toInteger, 'toInteger', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toInteger.js');
	}();

	;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toNumber = __webpack_require__(154);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = value < 0 ? -1 : 1;
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(INFINITY, 'INFINITY', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toFinite.js');

	  __REACT_HOT_LOADER__.register(MAX_INTEGER, 'MAX_INTEGER', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toFinite.js');

	  __REACT_HOT_LOADER__.register(toFinite, 'toFinite', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toFinite.js');
	}();

	;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(65),
	    isSymbol = __webpack_require__(140);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? other + '' : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
	}

	module.exports = toNumber;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(NAN, 'NAN', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toNumber.js');

	  __REACT_HOT_LOADER__.register(reTrim, 'reTrim', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toNumber.js');

	  __REACT_HOT_LOADER__.register(reIsBadHex, 'reIsBadHex', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toNumber.js');

	  __REACT_HOT_LOADER__.register(reIsBinary, 'reIsBinary', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toNumber.js');

	  __REACT_HOT_LOADER__.register(reIsOctal, 'reIsOctal', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toNumber.js');

	  __REACT_HOT_LOADER__.register(freeParseInt, 'freeParseInt', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toNumber.js');

	  __REACT_HOT_LOADER__.register(toNumber, 'toNumber', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/toNumber.js');
	}();

	;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPrototypeProxy;

	var _assign = __webpack_require__(156);

	var _assign2 = _interopRequireDefault(_assign);

	var _difference = __webpack_require__(170);

	var _difference2 = _interopRequireDefault(_difference);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function createPrototypeProxy() {
	  var proxy = {};
	  var current = null;
	  var mountedInstances = [];

	  /**
	   * Creates a proxied toString() method pointing to the current version's toString().
	   */
	  function proxyToString(name) {
	    // Wrap to always call the current version
	    return function toString() {
	      if (typeof current[name] === 'function') {
	        return current[name].toString();
	      } else {
	        return '<method was deleted>';
	      }
	    };
	  }

	  /**
	   * Creates a proxied method that calls the current version, whenever available.
	   */
	  function proxyMethod(name) {
	    // Wrap to always call the current version
	    var proxiedMethod = function proxiedMethod() {
	      if (typeof current[name] === 'function') {
	        return current[name].apply(this, arguments);
	      }
	    };

	    // Copy properties of the original function, if any
	    (0, _assign2.default)(proxiedMethod, current[name]);
	    proxiedMethod.toString = proxyToString(name);
	    try {
	      Object.defineProperty(proxiedMethod, 'name', {
	        value: name
	      });
	    } catch (err) {}

	    return proxiedMethod;
	  }

	  /**
	   * Augments the original componentDidMount with instance tracking.
	   */
	  function proxiedComponentDidMount() {
	    mountedInstances.push(this);
	    if (typeof current.componentDidMount === 'function') {
	      return current.componentDidMount.apply(this, arguments);
	    }
	  }
	  proxiedComponentDidMount.toString = proxyToString('componentDidMount');

	  /**
	   * Augments the original componentWillUnmount with instance tracking.
	   */
	  function proxiedComponentWillUnmount() {
	    var index = mountedInstances.indexOf(this);
	    // Unless we're in a weird environment without componentDidMount
	    if (index !== -1) {
	      mountedInstances.splice(index, 1);
	    }
	    if (typeof current.componentWillUnmount === 'function') {
	      return current.componentWillUnmount.apply(this, arguments);
	    }
	  }
	  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');

	  /**
	   * Defines a property on the proxy.
	   */
	  function defineProxyProperty(name, descriptor) {
	    Object.defineProperty(proxy, name, descriptor);
	  }

	  /**
	   * Defines a property, attempting to keep the original descriptor configuration.
	   */
	  function defineProxyPropertyWithValue(name, value) {
	    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};

	    var _ref$enumerable = _ref.enumerable;
	    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
	    var _ref$writable = _ref.writable;
	    var writable = _ref$writable === undefined ? true : _ref$writable;

	    defineProxyProperty(name, {
	      configurable: true,
	      enumerable: enumerable,
	      writable: writable,
	      value: value
	    });
	  }

	  /**
	   * Creates an auto-bind map mimicking the original map, but directed at proxy.
	   */
	  function createAutoBindMap() {
	    if (!current.__reactAutoBindMap) {
	      return;
	    }

	    var __reactAutoBindMap = {};
	    for (var name in current.__reactAutoBindMap) {
	      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
	        __reactAutoBindMap[name] = proxy[name];
	      }
	    }

	    return __reactAutoBindMap;
	  }

	  /**
	   * Creates an auto-bind map mimicking the original map, but directed at proxy.
	   */
	  function createAutoBindPairs() {
	    var __reactAutoBindPairs = [];

	    for (var i = 0; i < current.__reactAutoBindPairs.length; i += 2) {
	      var name = current.__reactAutoBindPairs[i];
	      var method = proxy[name];

	      if (typeof method === 'function') {
	        __reactAutoBindPairs.push(name, method);
	      }
	    }

	    return __reactAutoBindPairs;
	  }

	  /**
	   * Applies the updated prototype.
	   */
	  function update(next) {
	    // Save current source of truth
	    current = next;

	    // Find changed property names
	    var currentNames = Object.getOwnPropertyNames(current);
	    var previousName = Object.getOwnPropertyNames(proxy);
	    var removedNames = (0, _difference2.default)(previousName, currentNames);

	    // Remove properties and methods that are no longer there
	    removedNames.forEach(function (name) {
	      delete proxy[name];
	    });

	    // Copy every descriptor
	    currentNames.forEach(function (name) {
	      var descriptor = Object.getOwnPropertyDescriptor(current, name);
	      if (typeof descriptor.value === 'function') {
	        // Functions require additional wrapping so they can be bound later
	        defineProxyPropertyWithValue(name, proxyMethod(name));
	      } else {
	        // Other values can be copied directly
	        defineProxyProperty(name, descriptor);
	      }
	    });

	    // Track mounting and unmounting
	    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
	    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);

	    if (current.hasOwnProperty('__reactAutoBindMap')) {
	      defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
	    }

	    if (current.hasOwnProperty('__reactAutoBindPairs')) {
	      defineProxyPropertyWithValue('__reactAutoBindPairs', createAutoBindPairs());
	    }

	    // Set up the prototype chain
	    proxy.__proto__ = next;

	    return mountedInstances;
	  }

	  /**
	   * Returns the up-to-date proxy prototype.
	   */
	  function get() {
	    return proxy;
	  }

	  return {
	    update: update,
	    get: get
	  };
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_assign2, '_assign2', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createPrototypeProxy.js');

	  __REACT_HOT_LOADER__.register(_difference2, '_difference2', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createPrototypeProxy.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createPrototypeProxy.js');

	  __REACT_HOT_LOADER__.register(createPrototypeProxy, 'createPrototypeProxy', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/createPrototypeProxy.js');
	}();

	;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assignValue = __webpack_require__(157),
	    copyObject = __webpack_require__(160),
	    createAssigner = __webpack_require__(161),
	    isArrayLike = __webpack_require__(120),
	    isPrototype = __webpack_require__(117),
	    keys = __webpack_require__(101);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function (object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/assign.js');

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/assign.js');

	  __REACT_HOT_LOADER__.register(assign, 'assign', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/assign.js');
	}();

	;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseAssignValue = __webpack_require__(158),
	    eq = __webpack_require__(52);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(objectProto, 'objectProto', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_assignValue.js');

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_assignValue.js');

	  __REACT_HOT_LOADER__.register(assignValue, 'assignValue', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_assignValue.js');
	}();

	;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defineProperty = __webpack_require__(159);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseAssignValue, 'baseAssignValue', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseAssignValue.js');
	}();

	;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(62);

	var defineProperty = function () {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();

	module.exports = defineProperty;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(defineProperty, 'defineProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_defineProperty.js');
	}();

	;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assignValue = __webpack_require__(157),
	    baseAssignValue = __webpack_require__(158);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(copyObject, 'copyObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_copyObject.js');
	}();

	;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseRest = __webpack_require__(162),
	    isIterateeCall = __webpack_require__(169);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function (object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(createAssigner, 'createAssigner', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_createAssigner.js');
	}();

	;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var identity = __webpack_require__(146),
	    overRest = __webpack_require__(163),
	    setToString = __webpack_require__(165);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseRest, 'baseRest', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseRest.js');
	}();

	;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var apply = __webpack_require__(164);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(nativeMax, 'nativeMax', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_overRest.js');

	  __REACT_HOT_LOADER__.register(overRest, 'overRest', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_overRest.js');
	}();

	;

/***/ },
/* 164 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0:
	      return func.call(thisArg);
	    case 1:
	      return func.call(thisArg, args[0]);
	    case 2:
	      return func.call(thisArg, args[0], args[1]);
	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(apply, "apply", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_apply.js");
	}();

	;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseSetToString = __webpack_require__(166),
	    shortOut = __webpack_require__(168);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(setToString, 'setToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_setToString.js');
	}();

	;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var constant = __webpack_require__(167),
	    defineProperty = __webpack_require__(159),
	    identity = __webpack_require__(146);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function (func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseSetToString, 'baseSetToString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseSetToString.js');
	}();

	;

/***/ },
/* 167 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function () {
	    return value;
	  };
	}

	module.exports = constant;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(constant, "constant", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/constant.js");
	}();

	;

/***/ },
/* 168 */
/***/ function(module, exports) {

	"use strict";

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 500,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function () {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(HOT_COUNT, "HOT_COUNT", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_shortOut.js");

	  __REACT_HOT_LOADER__.register(HOT_SPAN, "HOT_SPAN", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_shortOut.js");

	  __REACT_HOT_LOADER__.register(nativeNow, "nativeNow", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_shortOut.js");

	  __REACT_HOT_LOADER__.register(shortOut, "shortOut", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_shortOut.js");
	}();

	;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var eq = __webpack_require__(52),
	    isArrayLike = __webpack_require__(120),
	    isIndex = __webpack_require__(110),
	    isObject = __webpack_require__(65);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
	  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(isIterateeCall, 'isIterateeCall', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isIterateeCall.js');
	}();

	;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseDifference = __webpack_require__(171),
	    baseFlatten = __webpack_require__(177),
	    baseRest = __webpack_require__(162),
	    isArrayLikeObject = __webpack_require__(180);

	/**
	 * Creates an array of `array` values not included in the other given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * **Note:** Unlike `_.pullAll`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.without, _.xor
	 * @example
	 *
	 * _.difference([2, 1], [2, 3]);
	 * // => [1]
	 */
	var difference = baseRest(function (array, values) {
	    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
	});

	module.exports = difference;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(difference, 'difference', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/difference.js');
	}();

	;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SetCache = __webpack_require__(90),
	    arrayIncludes = __webpack_require__(172),
	    arrayIncludesWith = __webpack_require__(176),
	    arrayMap = __webpack_require__(139),
	    baseUnary = __webpack_require__(114),
	    cacheHas = __webpack_require__(94);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  } else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer: while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = comparator || value !== 0 ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    } else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(LARGE_ARRAY_SIZE, 'LARGE_ARRAY_SIZE', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseDifference.js');

	  __REACT_HOT_LOADER__.register(baseDifference, 'baseDifference', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseDifference.js');
	}();

	;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIndexOf = __webpack_require__(173);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(arrayIncludes, 'arrayIncludes', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_arrayIncludes.js');
	}();

	;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseFindIndex = __webpack_require__(151),
	    baseIsNaN = __webpack_require__(174),
	    strictIndexOf = __webpack_require__(175);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(baseIndexOf, 'baseIndexOf', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIndexOf.js');
	}();

	;

/***/ },
/* 174 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseIsNaN, "baseIsNaN", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseIsNaN.js");
	}();

	;

/***/ },
/* 175 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(strictIndexOf, "strictIndexOf", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_strictIndexOf.js");
	}();

	;

/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(arrayIncludesWith, "arrayIncludesWith", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_arrayIncludesWith.js");
	}();

	;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayPush = __webpack_require__(178),
	    isFlattenable = __webpack_require__(179);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(baseFlatten, 'baseFlatten', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_baseFlatten.js');
	}();

	;

/***/ },
/* 178 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(arrayPush, "arrayPush", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_arrayPush.js");
	}();

	;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(96),
	    isArguments = __webpack_require__(104),
	    isArray = __webpack_require__(107);

	/** Built-in value references. */
	var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(spreadableSymbol, 'spreadableSymbol', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isFlattenable.js');

	    __REACT_HOT_LOADER__.register(isFlattenable, 'isFlattenable', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/_isFlattenable.js');
	}();

	;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArrayLike = __webpack_require__(120),
	    isObjectLike = __webpack_require__(106);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(isArrayLikeObject, 'isArrayLikeObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/node_modules/lodash/isArrayLikeObject.js');
	}();

	;

/***/ },
/* 181 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = bindAutoBindMethods;
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of React source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * Original:
	 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
	 */

	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);

	  boundMethod.__reactBoundContext = component;
	  boundMethod.__reactBoundMethod = method;
	  boundMethod.__reactBoundArguments = null;

	  var componentName = component.constructor.displayName,
	      _bind = boundMethod.bind;

	  boundMethod.bind = function (newThis) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    if (newThis !== component && newThis !== null) {
	      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
	    } else if (!args.length) {
	      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
	      return boundMethod;
	    }

	    var reboundMethod = _bind.apply(boundMethod, arguments);
	    reboundMethod.__reactBoundContext = component;
	    reboundMethod.__reactBoundMethod = method;
	    reboundMethod.__reactBoundArguments = args;

	    return reboundMethod;
	  };

	  return boundMethod;
	}

	function bindAutoBindMethodsFromMap(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      return;
	    }

	    // Tweak: skip methods that are already bound.
	    // This is to preserve method reference in case it is used
	    // as a subscription handler that needs to be detached later.
	    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
	      continue;
	    }

	    var method = component.__reactAutoBindMap[autoBindKey];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	function bindAutoBindMethods(component) {
	  if (component.__reactAutoBindPairs) {
	    bindAutoBindMethodsFromArray(component);
	  } else if (component.__reactAutoBindMap) {
	    bindAutoBindMethodsFromMap(component);
	  }
	}

	function bindAutoBindMethodsFromArray(component) {
	  var pairs = component.__reactAutoBindPairs;

	  if (!pairs) {
	    return;
	  }

	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];

	    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
	      continue;
	    }

	    var method = pairs[i + 1];

	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(bindAutoBindMethod, 'bindAutoBindMethod', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/bindAutoBindMethods.js');

	  __REACT_HOT_LOADER__.register(bindAutoBindMethodsFromMap, 'bindAutoBindMethodsFromMap', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/bindAutoBindMethods.js');

	  __REACT_HOT_LOADER__.register(bindAutoBindMethods, 'bindAutoBindMethods', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/bindAutoBindMethods.js');

	  __REACT_HOT_LOADER__.register(bindAutoBindMethodsFromArray, 'bindAutoBindMethodsFromArray', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/bindAutoBindMethods.js');
	}();

	;

/***/ },
/* 182 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deleteUnknownAutoBindMethods;
	function shouldDeleteClassicInstanceMethod(component, name) {
	  if (component.__reactAutoBindMap && component.__reactAutoBindMap.hasOwnProperty(name)) {
	    // It's a known autobound function, keep it
	    return false;
	  }

	  if (component.__reactAutoBindPairs && component.__reactAutoBindPairs.indexOf(name) >= 0) {
	    // It's a known autobound function, keep it
	    return false;
	  }

	  if (component[name].__reactBoundArguments !== null) {
	    // It's a function bound to specific args, keep it
	    return false;
	  }

	  // It's a cached bound method for a function
	  // that was deleted by user, so we delete it from component.
	  return true;
	}

	function shouldDeleteModernInstanceMethod(component, name) {
	  var prototype = component.constructor.prototype;

	  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);

	  if (!prototypeDescriptor || !prototypeDescriptor.get) {
	    // This is definitely not an autobinding getter
	    return false;
	  }

	  if (prototypeDescriptor.get().length !== component[name].length) {
	    // The length doesn't match, bail out
	    return false;
	  }

	  // This seems like a method bound using an autobinding getter on the prototype
	  // Hopefully we won't run into too many false positives.
	  return true;
	}

	function shouldDeleteInstanceMethod(component, name) {
	  var descriptor = Object.getOwnPropertyDescriptor(component, name);
	  if (typeof descriptor.value !== 'function') {
	    // Not a function, or something fancy: bail out
	    return;
	  }

	  if (component.__reactAutoBindMap || component.__reactAutoBindPairs) {
	    // Classic
	    return shouldDeleteClassicInstanceMethod(component, name);
	  } else {
	    // Modern
	    return shouldDeleteModernInstanceMethod(component, name);
	  }
	}

	/**
	 * Deletes autobound methods from the instance.
	 *
	 * For classic React classes, we only delete the methods that no longer exist in map.
	 * This means the user actually deleted them in code.
	 *
	 * For modern classes, we delete methods that exist on prototype with the same length,
	 * and which have getters on prototype, but are normal values on the instance.
	 * This is usually an indication that an autobinding decorator is being used,
	 * and the getter will re-generate the memoized handler on next access.
	 */
	function deleteUnknownAutoBindMethods(component) {
	  var names = Object.getOwnPropertyNames(component);

	  names.forEach(function (name) {
	    if (shouldDeleteInstanceMethod(component, name)) {
	      delete component[name];
	    }
	  });
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(shouldDeleteClassicInstanceMethod, 'shouldDeleteClassicInstanceMethod', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/deleteUnknownAutoBindMethods.js');

	  __REACT_HOT_LOADER__.register(shouldDeleteModernInstanceMethod, 'shouldDeleteModernInstanceMethod', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/deleteUnknownAutoBindMethods.js');

	  __REACT_HOT_LOADER__.register(shouldDeleteInstanceMethod, 'shouldDeleteInstanceMethod', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/deleteUnknownAutoBindMethods.js');

	  __REACT_HOT_LOADER__.register(deleteUnknownAutoBindMethods, 'deleteUnknownAutoBindMethods', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-proxy/modules/deleteUnknownAutoBindMethods.js');
	}();

	;

/***/ },
/* 183 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	if (typeof window !== "undefined") {
	    module.exports = window;
	} else if (typeof global !== "undefined") {
	    module.exports = global;
	} else if (typeof self !== "undefined") {
	    module.exports = self;
	} else {
	    module.exports = {};
	}
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__resourceQuery) {var url = __webpack_require__(185);
	var stripAnsi = __webpack_require__(191);
	var socket = __webpack_require__(193);

	function getCurrentScriptSource() {
		// `document.currentScript` is the most accurate way to find the current script,
		// but is not supported in all browsers.
		if(document.currentScript)
			return document.currentScript.getAttribute("src");
		// Fall back to getting all scripts in the document.
		var scriptElements = document.scripts || [];
		var currentScript = scriptElements[scriptElements.length - 1];
		if(currentScript)
			return currentScript.getAttribute("src");
		// Fail as there was no script to use.
		throw new Error("[WDS] Failed to get current script source");
	}

	var urlParts;
	if(true) {
		// If this bundle is inlined, use the resource query to get the correct url.
		urlParts = url.parse(__resourceQuery.substr(1));
	} else {
		// Else, get the url from the <script> this file was called with.
		var scriptHost = getCurrentScriptSource();
		scriptHost = scriptHost.replace(/\/[^\/]+$/, "");
		urlParts = url.parse((scriptHost ? scriptHost : "/"), false, true);
	}

	var hot = false;
	var initial = true;
	var currentHash = "";
	var logLevel = "info";

	function log(level, msg) {
		if(logLevel === "info" && level === "info")
			return console.log(msg);
		if(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning")
			return console.warn(msg);
		if(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error")
			return console.error(msg);
	}

	var onSocketMsg = {
		hot: function() {
			hot = true;
			log("info", "[WDS] Hot Module Replacement enabled.");
		},
		invalid: function() {
			log("info", "[WDS] App updated. Recompiling...");
		},
		hash: function(hash) {
			currentHash = hash;
		},
		"still-ok": function() {
			log("info", "[WDS] Nothing changed.")
		},
		"log-level": function(level) {
			logLevel = level;
		},
		ok: function() {
			if(initial) return initial = false;
			reloadApp();
		},
		warnings: function(warnings) {
			log("info", "[WDS] Warnings while compiling.");
			for(var i = 0; i < warnings.length; i++)
				console.warn(stripAnsi(warnings[i]));
			if(initial) return initial = false;
			reloadApp();
		},
		errors: function(errors) {
			log("info", "[WDS] Errors while compiling.");
			for(var i = 0; i < errors.length; i++)
				console.error(stripAnsi(errors[i]));
			if(initial) return initial = false;
			reloadApp();
		},
		"proxy-error": function(errors) {
			log("info", "[WDS] Proxy error.");
			for(var i = 0; i < errors.length; i++)
				log("error", stripAnsi(errors[i]));
			if(initial) return initial = false;
		},
		close: function() {
			log("error", "[WDS] Disconnected!");
		}
	};

	var hostname = urlParts.hostname;
	var protocol = urlParts.protocol;

	if(urlParts.hostname === '0.0.0.0') {
		// why do we need this check?
		// hostname n/a for file protocol (example, when using electron, ionic)
		// see: https://github.com/webpack/webpack-dev-server/pull/384
		if(window.location.hostname && !!~window.location.protocol.indexOf('http')) {
			hostname = window.location.hostname;
		}
	}

	// `hostname` can be empty when the script path is relative. In that case, specifying
	// a protocol would result in an invalid URL.
	// When https is used in the app, secure websockets are always necessary
	// because the browser doesn't accept non-secure websockets.
	if(hostname && (window.location.protocol === "https:" || urlParts.hostname === '0.0.0.0')) {
		protocol = window.location.protocol;
	}

	var socketUrl = url.format({
		protocol: protocol,
		auth: urlParts.auth,
		hostname: hostname,
		port: (urlParts.port === '0') ? window.location.port : urlParts.port,
		pathname: urlParts.path == null || urlParts.path === '/' ? "/sockjs-node" : urlParts.path
	});

	socket(socketUrl, onSocketMsg);

	function reloadApp() {
		if(hot) {
			log("info", "[WDS] App hot update...");
			window.postMessage("webpackHotUpdate" + currentHash, "*");
		} else {
			log("info", "[WDS] App updated. Reloading...");
			window.location.reload();
		}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, "?http://localhost:3000"))

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var punycode = __webpack_require__(186);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,


	// RFC 2396: characters reserved for delimiting URLs.
	// We actually just auto-escape these.
	delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],


	// RFC 2396: characters not allowed for various reasons.
	unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),


	// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	autoEscape = ['\''].concat(unwise),

	// Characters that are never ever allowed in a hostname.
	// Note that any invalid chars are also handled, but these
	// are the ones that are *expected* to be seen, so we fast-path
	// them.
	nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,

	// protocols that can allow "unsafe" and "unwise" chars.
	unsafeProtocol = {
	  'javascript': true,
	  'javascript:': true
	},

	// protocols that never have a hostname.
	hostlessProtocol = {
	  'javascript': true,
	  'javascript:': true
	},

	// protocols that always contain a // bit.
	slashedProtocol = {
	  'http': true,
	  'https': true,
	  'ftp': true,
	  'gopher': true,
	  'file': true,
	  'http:': true,
	  'https:': true,
	  'ftp:': true,
	  'gopher:': true,
	  'file:': true
	},
	    querystring = __webpack_require__(188);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && isObject(url) && url instanceof Url) return url;

	  var u = new Url();
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
	  if (!isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + (typeof url === 'undefined' ? 'undefined' : _typeof(url)));
	  }

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1) hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a puny coded representation of "domain".
	      // It only converts the part of the domain name that
	      // has non ASCII characters. I.e. it dosent matter if
	      // you call it with a domain that already is in ASCII.
	      var domainArray = this.hostname.split('.');
	      var newOut = [];
	      for (var i = 0; i < domainArray.length; ++i) {
	        var s = domainArray[i];
	        newOut.push(s.match(/[^A-Za-z0-9_-]/) ? 'xn--' + punycode.encode(s) : s);
	      }
	      this.hostname = newOut.join('.');
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }

	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function () {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query && isObject(this.query) && Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || query && '?' + query || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function (match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function (relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function (relative) {
	  if (isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  Object.keys(this).forEach(function (k) {
	    result[k] = this[k];
	  }, this);

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    Object.keys(relative).forEach(function (k) {
	      if (k !== 'protocol') result[k] = relative[k];
	    });

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      Object.keys(relative).forEach(function (k) {
	        result[k] = relative[k];
	      });
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift())) {}
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
	      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
	      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = relative.host || relative.host === '' ? relative.host : result.host;
	    result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especialy happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!isNull(result.pathname) || !isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (result.host || relative.host) && (last === '.' || last === '..') || last === '';

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last == '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especialy happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || result.host && srcPath.length;

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!isNull(result.pathname) || !isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function () {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};

	function isString(arg) {
	  return typeof arg === "string";
	}

	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}

	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Url, 'Url', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(protocolPattern, 'protocolPattern', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(portPattern, 'portPattern', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(delims, 'delims', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(unwise, 'unwise', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(autoEscape, 'autoEscape', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(nonHostChars, 'nonHostChars', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(hostEndingChars, 'hostEndingChars', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(hostnameMaxLen, 'hostnameMaxLen', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(hostnamePartPattern, 'hostnamePartPattern', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(hostnamePartStart, 'hostnamePartStart', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(unsafeProtocol, 'unsafeProtocol', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(hostlessProtocol, 'hostlessProtocol', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(slashedProtocol, 'slashedProtocol', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(urlParse, 'urlParse', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(urlFormat, 'urlFormat', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(urlResolve, 'urlResolve', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(urlResolveObject, 'urlResolveObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(isString, 'isString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(isObject, 'isObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(isNull, 'isNull', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');

	  __REACT_HOT_LOADER__.register(isNullOrUndefined, 'isNullOrUndefined', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/url.js');
	}();

	;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function (root) {

		/** Detect free variables */
		var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
		var freeModule = ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
		var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
			root = freeGlobal;
		}

		/**
	  * The `punycode` object.
	  * @name punycode
	  * @type Object
	  */
		var punycode,


		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647,
		    // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		    tMin = 1,
		    tMax = 26,
		    skew = 38,
		    damp = 700,
		    initialBias = 72,
		    initialN = 128,
		    // 0x80
		delimiter = '-',
		    // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		    regexNonASCII = /[^\x20-\x7E]/,
		    // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
		    // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},


		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		    floor = Math.floor,
		    stringFromCharCode = String.fromCharCode,


		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
	  * A generic error utility function.
	  * @private
	  * @param {String} type The error type.
	  * @returns {Error} Throws a `RangeError` with the applicable error message.
	  */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
	  * A generic `Array#map` utility function.
	  * @private
	  * @param {Array} array The array to iterate over.
	  * @param {Function} callback The function that gets called for every array
	  * item.
	  * @returns {Array} A new array of values returned by the callback function.
	  */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
	  * A simple `Array#map`-like wrapper to work with domain name strings or email
	  * addresses.
	  * @private
	  * @param {String} domain The domain name or email address.
	  * @param {Function} callback The function that gets called for every
	  * character.
	  * @returns {Array} A new string of characters returned by the callback
	  * function.
	  */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
	  * Creates an array containing the numeric code points of each Unicode
	  * character in the string. While JavaScript uses UCS-2 internally,
	  * this function will convert a pair of surrogate halves (each of which
	  * UCS-2 exposes as separate characters) into a single code point,
	  * matching UTF-16.
	  * @see `punycode.ucs2.encode`
	  * @see <https://mathiasbynens.be/notes/javascript-encoding>
	  * @memberOf punycode.ucs2
	  * @name decode
	  * @param {String} string The Unicode input string (UCS-2).
	  * @returns {Array} The new array of code points.
	  */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) {
						// low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
	  * Creates a string based on an array of numeric code points.
	  * @see `punycode.ucs2.decode`
	  * @memberOf punycode.ucs2
	  * @name encode
	  * @param {Array} codePoints The array of numeric code points.
	  * @returns {String} The new Unicode string (UCS-2).
	  */
		function ucs2encode(array) {
			return map(array, function (value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
	  * Converts a basic code point into a digit/integer.
	  * @see `digitToBasic()`
	  * @private
	  * @param {Number} codePoint The basic numeric code point value.
	  * @returns {Number} The numeric value of a basic code point (for use in
	  * representing integers) in the range `0` to `base - 1`, or `base` if
	  * the code point does not represent a value.
	  */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
	  * Converts a digit/integer into a basic code point.
	  * @see `basicToDigit()`
	  * @private
	  * @param {Number} digit The numeric value of a basic code point.
	  * @returns {Number} The basic code point whose value (when used for
	  * representing integers) is `digit`, which needs to be in the range
	  * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	  * used; else, the lowercase form is used. The behavior is undefined
	  * if `flag` is non-zero and `digit` has no uppercase form.
	  */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
	  * Bias adaptation function as per section 3.4 of RFC 3492.
	  * http://tools.ietf.org/html/rfc3492#section-3.4
	  * @private
	  */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
	  * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	  * symbols.
	  * @memberOf punycode
	  * @param {String} input The Punycode string of ASCII-only symbols.
	  * @returns {String} The resulting string of Unicode symbols.
	  */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,

			/** Cached calculation results */
			baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base;; /* no condition */k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;
				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);
			}

			return ucs2encode(output);
		}

		/**
	  * Converts a string of Unicode symbols (e.g. a domain name label) to a
	  * Punycode string of ASCII-only symbols.
	  * @memberOf punycode
	  * @param {String} input The string of Unicode symbols.
	  * @returns {String} The resulting Punycode string of ASCII-only symbols.
	  */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],

			/** `inputLength` will hold the number of code points in `input`. */
			inputLength,

			/** Cached calculation results */
			handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base;; /* no condition */k += base) {
							t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;
			}
			return output.join('');
		}

		/**
	  * Converts a Punycode string representing a domain name or an email address
	  * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	  * it doesn't matter if you call it on a string that has already been
	  * converted to Unicode.
	  * @memberOf punycode
	  * @param {String} input The Punycoded domain name or email address to
	  * convert to Unicode.
	  * @returns {String} The Unicode representation of the given Punycode
	  * string.
	  */
		function toUnicode(input) {
			return mapDomain(input, function (string) {
				return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
			});
		}

		/**
	  * Converts a Unicode string representing a domain name or an email address to
	  * Punycode. Only the non-ASCII parts of the domain name will be converted,
	  * i.e. it doesn't matter if you call it with a domain that's already in
	  * ASCII.
	  * @memberOf punycode
	  * @param {String} input The domain name or email address to convert, as a
	  * Unicode string.
	  * @returns {String} The Punycode representation of the given domain name or
	  * email address.
	  */
		function toASCII(input) {
			return mapDomain(input, function (string) {
				return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
	   * A string representing the current Punycode.js version number.
	   * @memberOf punycode
	   * @type String
	   */
			'version': '1.3.2',
			/**
	   * An object of methods to convert from JavaScript's internal character
	   * representation (UCS-2) to Unicode code points, and back.
	   * @see <https://mathiasbynens.be/notes/javascript-encoding>
	   * @memberOf punycode
	   * @type Object
	   */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if ("function" == 'function' && _typeof(__webpack_require__(187)) == 'object' && __webpack_require__(187)) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) {
				// in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.punycode = punycode;
		}
	})(undefined);
	;

	var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
			return;
		}
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module), (function() { return this; }())))

/***/ },
/* 187 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(189);
	exports.encode = exports.stringify = __webpack_require__(190);
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 189 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function (qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr,
	        vstr,
	        k,
	        v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/node_modules/querystring/decode.js');
	}();

	;

/***/ },
/* 190 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var stringifyPrimitive = function stringifyPrimitive(v) {
	  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function (obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	    return Object.keys(obj).map(function (k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function (v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(stringifyPrimitive, 'stringifyPrimitive', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/node_modules/node-libs-browser/node_modules/url/node_modules/querystring/encode.js');
	}();

	;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ansiRegex = __webpack_require__(192)();

	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};
	;

	var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
			return;
		}

		__REACT_HOT_LOADER__.register(ansiRegex, 'ansiRegex', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/strip-ansi/index.js');
	}();

	;

/***/ },
/* 192 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		return (/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g
		);
	};
	;

	var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
			return;
		}
	}();

	;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var SockJS = __webpack_require__(194);

	var retries = 0;
	var sock = null;

	function socket(url, handlers) {
		sock = new SockJS(url);

		sock.onopen = function () {
			retries = 0;
		};

		sock.onclose = function () {
			if (retries === 0) handlers.close();

			// Try to reconnect.
			sock = null;

			// After 10 retries stop trying, to prevent logspam.
			if (retries <= 10) {
				// Exponentially increase timeout to reconnect.
				// Respectfully copied from the package `got`.
				var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
				retries += 1;

				setTimeout(function () {
					socket(url, handlers);
				}, retryInMs);
			}
		};

		sock.onmessage = function (e) {
			// This assumes that all data sent via the websocket is JSON.
			var msg = JSON.parse(e.data);
			if (handlers[msg.type]) handlers[msg.type](msg.data);
		};
	}

	module.exports = socket;
	;

	var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
			return;
		}

		__REACT_HOT_LOADER__.register(retries, "retries", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/client/socket.js");

		__REACT_HOT_LOADER__.register(sock, "sock", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/client/socket.js");

		__REACT_HOT_LOADER__.register(socket, "socket", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/client/socket.js");
	}();

	;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var transportList = __webpack_require__(195);

	module.exports = __webpack_require__(240)(transportList);

	// TODO can't get rid of this until all servers do
	if ('_sockjs_onload' in global) {
	  setTimeout(global._sockjs_onload, 1);
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = [
	// streaming transports
	__webpack_require__(196), __webpack_require__(212), __webpack_require__(222), __webpack_require__(224), __webpack_require__(227)(__webpack_require__(224))

	// polling transports
	, __webpack_require__(233), __webpack_require__(227)(__webpack_require__(233)), __webpack_require__(235), __webpack_require__(236), __webpack_require__(227)(__webpack_require__(235)), __webpack_require__(237)];
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(197),
	    urlUtils = __webpack_require__(200),
	    inherits = __webpack_require__(208),
	    EventEmitter = __webpack_require__(209).EventEmitter,
	    WebsocketDriver = __webpack_require__(211);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:websocket');
	}

	function WebSocketTransport(transUrl, ignore, options) {
	  if (!WebSocketTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }

	  EventEmitter.call(this);
	  debug('constructor', transUrl);

	  var self = this;
	  var url = urlUtils.addPath(transUrl, '/websocket');
	  if (url.slice(0, 5) === 'https') {
	    url = 'wss' + url.slice(5);
	  } else {
	    url = 'ws' + url.slice(4);
	  }
	  this.url = url;

	  this.ws = new WebsocketDriver(this.url, [], options);
	  this.ws.onmessage = function (e) {
	    debug('message event', e.data);
	    self.emit('message', e.data);
	  };
	  // Firefox has an interesting bug. If a websocket connection is
	  // created after onunload, it stays alive even when user
	  // navigates away from the page. In such situation let's lie -
	  // let's not open the ws connection at all. See:
	  // https://github.com/sockjs/sockjs-client/issues/28
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
	  this.unloadRef = utils.unloadAdd(function () {
	    debug('unload');
	    self.ws.close();
	  });
	  this.ws.onclose = function (e) {
	    debug('close event', e.code, e.reason);
	    self.emit('close', e.code, e.reason);
	    self._cleanup();
	  };
	  this.ws.onerror = function (e) {
	    debug('error event', e);
	    self.emit('close', 1006, 'WebSocket connection broken');
	    self._cleanup();
	  };
	}

	inherits(WebSocketTransport, EventEmitter);

	WebSocketTransport.prototype.send = function (data) {
	  var msg = '[' + data + ']';
	  debug('send', msg);
	  this.ws.send(msg);
	};

	WebSocketTransport.prototype.close = function () {
	  debug('close');
	  if (this.ws) {
	    this.ws.close();
	  }
	  this._cleanup();
	};

	WebSocketTransport.prototype._cleanup = function () {
	  debug('_cleanup');
	  var ws = this.ws;
	  if (ws) {
	    ws.onmessage = ws.onclose = ws.onerror = null;
	  }
	  utils.unloadDel(this.unloadRef);
	  this.unloadRef = this.ws = null;
	  this.removeAllListeners();
	};

	WebSocketTransport.enabled = function () {
	  debug('enabled');
	  return !!WebsocketDriver;
	};
	WebSocketTransport.transportName = 'websocket';

	// In theory, ws should require 1 round trip. But in chrome, this is
	// not very stable over SSL. Most likely a ws connection requires a
	// separate SSL connection, in which case 2 round trips are an
	// absolute minumum.
	WebSocketTransport.roundTrips = 2;

	module.exports = WebSocketTransport;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/websocket.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/websocket.js');

	  __REACT_HOT_LOADER__.register(WebSocketTransport, 'WebSocketTransport', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/websocket.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var random = __webpack_require__(198);

	var onUnload = {},
	    afterUnload = false
	// detect google chrome packaged apps because they don't allow the 'unload' event
	,
	    isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime;

	module.exports = {
	  attachEvent: function attachEvent(event, listener) {
	    if (typeof global.addEventListener !== 'undefined') {
	      global.addEventListener(event, listener, false);
	    } else if (global.document && global.attachEvent) {
	      // IE quirks.
	      // According to: http://stevesouders.com/misc/test-postmessage.php
	      // the message gets delivered only to 'document', not 'window'.
	      global.document.attachEvent('on' + event, listener);
	      // I get 'window' for ie8.
	      global.attachEvent('on' + event, listener);
	    }
	  },

	  detachEvent: function detachEvent(event, listener) {
	    if (typeof global.addEventListener !== 'undefined') {
	      global.removeEventListener(event, listener, false);
	    } else if (global.document && global.detachEvent) {
	      global.document.detachEvent('on' + event, listener);
	      global.detachEvent('on' + event, listener);
	    }
	  },

	  unloadAdd: function unloadAdd(listener) {
	    if (isChromePackagedApp) {
	      return null;
	    }

	    var ref = random.string(8);
	    onUnload[ref] = listener;
	    if (afterUnload) {
	      setTimeout(this.triggerUnloadCallbacks, 0);
	    }
	    return ref;
	  },

	  unloadDel: function unloadDel(ref) {
	    if (ref in onUnload) {
	      delete onUnload[ref];
	    }
	  },

	  triggerUnloadCallbacks: function triggerUnloadCallbacks() {
	    for (var ref in onUnload) {
	      onUnload[ref]();
	      delete onUnload[ref];
	    }
	  }
	};

	var unloadTriggered = function unloadTriggered() {
	  if (afterUnload) {
	    return;
	  }
	  afterUnload = true;
	  module.exports.triggerUnloadCallbacks();
	};

	// 'unload' alone is not reliable in opera within an iframe, but we
	// can't use `beforeunload` as IE fires it on javascript: links.
	if (!isChromePackagedApp) {
	  module.exports.attachEvent('unload', unloadTriggered);
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(onUnload, 'onUnload', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/event.js');

	  __REACT_HOT_LOADER__.register(afterUnload, 'afterUnload', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/event.js');

	  __REACT_HOT_LOADER__.register(isChromePackagedApp, 'isChromePackagedApp', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/event.js');

	  __REACT_HOT_LOADER__.register(unloadTriggered, 'unloadTriggered', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/event.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* global crypto:true */

	var crypto = __webpack_require__(199);

	// This string has length 32, a power of 2, so the modulus doesn't introduce a
	// bias.
	var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
	module.exports = {
	  string: function string(length) {
	    var max = _randomStringChars.length;
	    var bytes = crypto.randomBytes(length);
	    var ret = [];
	    for (var i = 0; i < length; i++) {
	      ret.push(_randomStringChars.substr(bytes[i] % max, 1));
	    }
	    return ret.join('');
	  },

	  number: function number(max) {
	    return Math.floor(Math.random() * max);
	  },

	  numberString: function numberString(max) {
	    var t = ('' + (max - 1)).length;
	    var p = new Array(t + 1).join('0');
	    return (p + this.number(max)).slice(-t);
	  }
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_randomStringChars, '_randomStringChars', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/random.js');
	}();

	;

/***/ },
/* 199 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	if (global.crypto && global.crypto.getRandomValues) {
	  module.exports.randomBytes = function (length) {
	    var bytes = new Uint8Array(length);
	    global.crypto.getRandomValues(bytes);
	    return bytes;
	  };
	} else {
	  module.exports.randomBytes = function (length) {
	    var bytes = new Array(length);
	    for (var i = 0; i < length; i++) {
	      bytes[i] = Math.floor(Math.random() * 256);
	    }
	    return bytes;
	  };
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var URL = __webpack_require__(201);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:utils:url');
	}

	module.exports = {
	  getOrigin: function getOrigin(url) {
	    if (!url) {
	      return null;
	    }

	    var p = new URL(url);
	    if (p.protocol === 'file:') {
	      return null;
	    }

	    var port = p.port;
	    if (!port) {
	      port = p.protocol === 'https:' ? '443' : '80';
	    }

	    return p.protocol + '//' + p.hostname + ':' + port;
	  },

	  isOriginEqual: function isOriginEqual(a, b) {
	    var res = this.getOrigin(a) === this.getOrigin(b);
	    debug('same', a, b, res);
	    return res;
	  },

	  isSchemeEqual: function isSchemeEqual(a, b) {
	    return a.split(':')[0] === b.split(':')[0];
	  },

	  addPath: function addPath(url, path) {
	    var qs = url.split('?');
	    return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
	  },

	  addQuery: function addQuery(url, q) {
	    return url + (url.indexOf('?') === -1 ? '?' + q : '&' + q);
	  }
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/url.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var required = __webpack_require__(202),
	    lolcation = __webpack_require__(203),
	    qs = __webpack_require__(204),
	    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;

	/**
	 * These are the parse rules for the URL parser, it informs the parser
	 * about:
	 *
	 * 0. The char it Needs to parse, if it's a string it should be done using
	 *    indexOf, RegExp using exec and NaN means set as current value.
	 * 1. The property we should set when parsing this value.
	 * 2. Indication if it's backwards or forward parsing, when set as number it's
	 *    the value of extra chars that should be split off.
	 * 3. Inherit from location if non existing in the parser.
	 * 4. `toLowerCase` the resulting value.
	 */
	var rules = [['#', 'hash'], // Extract from the back.
	['?', 'query'], // Extract from the back.
	['/', 'pathname'], // Extract from the back.
	['@', 'auth', 1], // Extract from the front.
	[NaN, 'host', undefined, 1, 1], // Set left over value.
	[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
	[NaN, 'hostname', undefined, 1, 1] // Set left over.
	];

	/**
	 * @typedef ProtocolExtract
	 * @type Object
	 * @property {String} protocol Protocol matched in the URL, in lowercase.
	 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
	 * @property {String} rest Rest of the URL that is not part of the protocol.
	 */

	/**
	 * Extract protocol information from a URL with/without double slash ("//").
	 *
	 * @param {String} address URL we want to extract from.
	 * @return {ProtocolExtract} Extracted information.
	 * @api private
	 */
	function extractProtocol(address) {
	  var match = protocolre.exec(address);

	  return {
	    protocol: match[1] ? match[1].toLowerCase() : '',
	    slashes: !!match[2],
	    rest: match[3]
	  };
	}

	/**
	 * Resolve a relative URL pathname against a base URL pathname.
	 *
	 * @param {String} relative Pathname of the relative URL.
	 * @param {String} base Pathname of the base URL.
	 * @return {String} Resolved pathname.
	 * @api private
	 */
	function resolve(relative, base) {
	  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
	      i = path.length,
	      last = path[i - 1],
	      unshift = false,
	      up = 0;

	  while (i--) {
	    if (path[i] === '.') {
	      path.splice(i, 1);
	    } else if (path[i] === '..') {
	      path.splice(i, 1);
	      up++;
	    } else if (up) {
	      if (i === 0) unshift = true;
	      path.splice(i, 1);
	      up--;
	    }
	  }

	  if (unshift) path.unshift('');
	  if (last === '.' || last === '..') path.push('');

	  return path.join('/');
	}

	/**
	 * The actual URL instance. Instead of returning an object we've opted-in to
	 * create an actual constructor as it's much more memory efficient and
	 * faster and it pleases my OCD.
	 *
	 * @constructor
	 * @param {String} address URL we want to parse.
	 * @param {Object|String} location Location defaults for relative paths.
	 * @param {Boolean|Function} parser Parser for the query string.
	 * @api public
	 */
	function URL(address, location, parser) {
	  if (!(this instanceof URL)) {
	    return new URL(address, location, parser);
	  }

	  var relative,
	      extracted,
	      parse,
	      instruction,
	      index,
	      key,
	      instructions = rules.slice(),
	      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
	      url = this,
	      i = 0;

	  //
	  // The following if statements allows this module two have compatibility with
	  // 2 different API:
	  //
	  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
	  //    where the boolean indicates that the query string should also be parsed.
	  //
	  // 2. The `URL` interface of the browser which accepts a URL, object as
	  //    arguments. The supplied object will be used as default values / fall-back
	  //    for relative paths.
	  //
	  if ('object' !== type && 'string' !== type) {
	    parser = location;
	    location = null;
	  }

	  if (parser && 'function' !== typeof parser) parser = qs.parse;

	  location = lolcation(location);

	  //
	  // Extract protocol information before running the instructions.
	  //
	  extracted = extractProtocol(address);
	  relative = !extracted.protocol && !extracted.slashes;
	  url.slashes = extracted.slashes || relative && location.slashes;
	  url.protocol = extracted.protocol || location.protocol || '';
	  address = extracted.rest;

	  //
	  // When the authority component is absent the URL starts with a path
	  // component.
	  //
	  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

	  for (; i < instructions.length; i++) {
	    instruction = instructions[i];
	    parse = instruction[0];
	    key = instruction[1];

	    if (parse !== parse) {
	      url[key] = address;
	    } else if ('string' === typeof parse) {
	      if (~(index = address.indexOf(parse))) {
	        if ('number' === typeof instruction[2]) {
	          url[key] = address.slice(0, index);
	          address = address.slice(index + instruction[2]);
	        } else {
	          url[key] = address.slice(index);
	          address = address.slice(0, index);
	        }
	      }
	    } else if (index = parse.exec(address)) {
	      url[key] = index[1];
	      address = address.slice(0, index.index);
	    }

	    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

	    //
	    // Hostname, host and protocol should be lowercased so they can be used to
	    // create a proper `origin`.
	    //
	    if (instruction[4]) url[key] = url[key].toLowerCase();
	  }

	  //
	  // Also parse the supplied query string in to an object. If we're supplied
	  // with a custom parser as function use that instead of the default build-in
	  // parser.
	  //
	  if (parser) url.query = parser(url.query);

	  //
	  // If the URL is relative, resolve the pathname against the base URL.
	  //
	  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
	    url.pathname = resolve(url.pathname, location.pathname);
	  }

	  //
	  // We should not add port numbers if they are already the default port number
	  // for a given protocol. As the host also contains the port number we're going
	  // override it with the hostname which contains no port number.
	  //
	  if (!required(url.port, url.protocol)) {
	    url.host = url.hostname;
	    url.port = '';
	  }

	  //
	  // Parse down the `auth` for the username and password.
	  //
	  url.username = url.password = '';
	  if (url.auth) {
	    instruction = url.auth.split(':');
	    url.username = instruction[0] || '';
	    url.password = instruction[1] || '';
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

	  //
	  // The href is just the compiled result.
	  //
	  url.href = url.toString();
	}

	/**
	 * This is convenience method for changing properties in the URL instance to
	 * insure that they all propagate correctly.
	 *
	 * @param {String} part          Property we need to adjust.
	 * @param {Mixed} value          The newly assigned value.
	 * @param {Boolean|Function} fn  When setting the query, it will be the function
	 *                               used to parse the query.
	 *                               When setting the protocol, double slash will be
	 *                               removed from the final url if it is true.
	 * @returns {URL}
	 * @api public
	 */
	URL.prototype.set = function set(part, value, fn) {
	  var url = this;

	  switch (part) {
	    case 'query':
	      if ('string' === typeof value && value.length) {
	        value = (fn || qs.parse)(value);
	      }

	      url[part] = value;
	      break;

	    case 'port':
	      url[part] = value;

	      if (!required(value, url.protocol)) {
	        url.host = url.hostname;
	        url[part] = '';
	      } else if (value) {
	        url.host = url.hostname + ':' + value;
	      }

	      break;

	    case 'hostname':
	      url[part] = value;

	      if (url.port) value += ':' + url.port;
	      url.host = value;
	      break;

	    case 'host':
	      url[part] = value;

	      if (/:\d+$/.test(value)) {
	        value = value.split(':');
	        url.port = value.pop();
	        url.hostname = value.join(':');
	      } else {
	        url.hostname = value;
	        url.port = '';
	      }

	      break;

	    case 'protocol':
	      url.protocol = value.toLowerCase();
	      url.slashes = !fn;
	      break;

	    case 'pathname':
	      url.pathname = value.charAt(0) === '/' ? value : '/' + value;
	      break;

	    default:
	      url[part] = value;
	      break;
	  }

	  for (var i = 0; i < rules.length; i++) {
	    var ins = rules[i];

	    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

	  url.href = url.toString();

	  return url;
	};

	/**
	 * Transform the properties back in to a valid and full URL string.
	 *
	 * @param {Function} stringify Optional query stringify function.
	 * @returns {String}
	 * @api public
	 */
	URL.prototype.toString = function toString(stringify) {
	  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

	  var query,
	      url = this,
	      protocol = url.protocol;

	  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

	  var result = protocol + (url.slashes ? '//' : '');

	  if (url.username) {
	    result += url.username;
	    if (url.password) result += ':' + url.password;
	    result += '@';
	  }

	  result += url.host + url.pathname;

	  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
	  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

	  if (url.hash) result += url.hash;

	  return result;
	};

	//
	// Expose the URL parser and some additional properties that might be useful for
	// others or testing.
	//
	URL.extractProtocol = extractProtocol;
	URL.location = lolcation;
	URL.qs = qs;

	module.exports = URL;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(protocolre, 'protocolre', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/index.js');

	  __REACT_HOT_LOADER__.register(rules, 'rules', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/index.js');

	  __REACT_HOT_LOADER__.register(extractProtocol, 'extractProtocol', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/index.js');

	  __REACT_HOT_LOADER__.register(resolve, 'resolve', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/index.js');

	  __REACT_HOT_LOADER__.register(URL, 'URL', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/index.js');
	}();

	;

/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Check if we're required to add a port number.
	 *
	 * @see https://url.spec.whatwg.org/#default-port
	 * @param {Number|String} port Port number we need to check
	 * @param {String} protocol Protocol we need to check against.
	 * @returns {Boolean} Is it a default port for the given protocol
	 * @api private
	 */

	module.exports = function required(port, protocol) {
	  protocol = protocol.split(':')[0];
	  port = +port;

	  if (!port) return false;

	  switch (protocol) {
	    case 'http':
	    case 'ws':
	      return port !== 80;

	    case 'https':
	    case 'wss':
	      return port !== 443;

	    case 'ftp':
	      return port !== 21;

	    case 'gopher':
	      return port !== 70;

	    case 'file':
	      return false;
	  }

	  return port !== 0;
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

	/**
	 * These properties should not be copied or inherited from. This is only needed
	 * for all non blob URL's as a blob URL does not include a hash, only the
	 * origin.
	 *
	 * @type {Object}
	 * @private
	 */
	var ignore = { hash: 1, query: 1 },
	    URL;

	/**
	 * The location object differs when your code is loaded through a normal page,
	 * Worker or through a worker using a blob. And with the blobble begins the
	 * trouble as the location object will contain the URL of the blob, not the
	 * location of the page where our code is loaded in. The actual origin is
	 * encoded in the `pathname` so we can thankfully generate a good "default"
	 * location from it so we can generate proper relative URL's again.
	 *
	 * @param {Object|String} loc Optional default location object.
	 * @returns {Object} lolcation object.
	 * @api public
	 */
	module.exports = function lolcation(loc) {
	  loc = loc || global.location || {};
	  URL = URL || __webpack_require__(201);

	  var finaldestination = {},
	      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
	      key;

	  if ('blob:' === loc.protocol) {
	    finaldestination = new URL(unescape(loc.pathname), {});
	  } else if ('string' === type) {
	    finaldestination = new URL(loc, {});
	    for (key in ignore) {
	      delete finaldestination[key];
	    }
	  } else if ('object' === type) {
	    for (key in loc) {
	      if (key in ignore) continue;
	      finaldestination[key] = loc[key];
	    }

	    if (finaldestination.slashes === undefined) {
	      finaldestination.slashes = slashes.test(loc.href);
	    }
	  }

	  return finaldestination;
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(slashes, 'slashes', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/lolcation.js');

	  __REACT_HOT_LOADER__.register(ignore, 'ignore', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/lolcation.js');

	  __REACT_HOT_LOADER__.register(URL, 'URL', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/lolcation.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 204 */
/***/ function(module, exports) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Simple query string parser.
	 *
	 * @param {String} query The query string that needs to be parsed.
	 * @returns {Object}
	 * @api public
	 */
	function querystring(query) {
	  var parser = /([^=?&]+)=?([^&]*)/g,
	      result = {},
	      part;

	  //
	  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
	  // the lastIndex property so we can continue executing this loop until we've
	  // parsed all results.
	  //
	  for (; part = parser.exec(query); result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])) {}

	  return result;
	}

	/**
	 * Transform a query string to an object.
	 *
	 * @param {Object} obj Object that should be transformed.
	 * @param {String} prefix Optional prefix.
	 * @returns {String}
	 * @api public
	 */
	function querystringify(obj, prefix) {
	  prefix = prefix || '';

	  var pairs = [];

	  //
	  // Optionally prefix with a '?' if needed
	  //
	  if ('string' !== typeof prefix) prefix = '?';

	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	    }
	  }

	  return pairs.length ? prefix + pairs.join('&') : '';
	}

	//
	// Expose the module.
	//
	exports.stringify = querystringify;
	exports.parse = querystring;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(has, 'has', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/node_modules/querystringify/index.js');

	  __REACT_HOT_LOADER__.register(querystring, 'querystring', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/node_modules/querystringify/index.js');

	  __REACT_HOT_LOADER__.register(querystringify, 'querystringify', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/url-parse/node_modules/querystringify/index.js');
	}();

	;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(206);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return 'WebkitAppearance' in document.documentElement.style ||
	  // is firebug? http://stackoverflow.com/a/398120/376773
	  window.console && (console.firebug || console.exception && console.table) ||
	  // is firefox >= v31?
	  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function (v) {
	  return JSON.stringify(v);
	};

	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function (match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch (e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch (e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(useColors, 'useColors', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/browser.js');

	  __REACT_HOT_LOADER__.register(formatArgs, 'formatArgs', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/browser.js');

	  __REACT_HOT_LOADER__.register(log, 'log', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/browser.js');

	  __REACT_HOT_LOADER__.register(save, 'save', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/browser.js');

	  __REACT_HOT_LOADER__.register(load, 'load', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/browser.js');

	  __REACT_HOT_LOADER__.register(localstorage, 'localstorage', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/browser.js');
	}();

	;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(207);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {}
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(prevColor, 'prevColor', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/debug.js');

	  __REACT_HOT_LOADER__.register(prevTime, 'prevTime', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/debug.js');

	  __REACT_HOT_LOADER__.register(selectColor, 'selectColor', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/debug.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/debug.js');

	  __REACT_HOT_LOADER__.register(enable, 'enable', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/debug.js');

	  __REACT_HOT_LOADER__.register(disable, 'disable', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/debug.js');

	  __REACT_HOT_LOADER__.register(enabled, 'enabled', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/debug.js');

	  __REACT_HOT_LOADER__.register(coerce, 'coerce', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/debug.js');
	}();

	;

/***/ },
/* 207 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function (val, options) {
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long ? long(val) : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(s, 's', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/node_modules/ms/index.js');

	  __REACT_HOT_LOADER__.register(m, 'm', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/node_modules/ms/index.js');

	  __REACT_HOT_LOADER__.register(h, 'h', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/node_modules/ms/index.js');

	  __REACT_HOT_LOADER__.register(d, 'd', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/node_modules/ms/index.js');

	  __REACT_HOT_LOADER__.register(y, 'y', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/node_modules/ms/index.js');

	  __REACT_HOT_LOADER__.register(parse, 'parse', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/node_modules/ms/index.js');

	  __REACT_HOT_LOADER__.register(short, 'short', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/node_modules/ms/index.js');

	  __REACT_HOT_LOADER__.register(long, 'long', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/node_modules/ms/index.js');

	  __REACT_HOT_LOADER__.register(plural, 'plural', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/node_modules/debug/node_modules/ms/index.js');
	}();

	;

/***/ },
/* 208 */
/***/ function(module, exports) {

	'use strict';

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function TempCtor() {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    EventTarget = __webpack_require__(210);

	function EventEmitter() {
	  EventTarget.call(this);
	}

	inherits(EventEmitter, EventTarget);

	EventEmitter.prototype.removeAllListeners = function (type) {
	  if (type) {
	    delete this._listeners[type];
	  } else {
	    this._listeners = {};
	  }
	};

	EventEmitter.prototype.once = function (type, listener) {
	  var self = this,
	      fired = false;

	  function g() {
	    self.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  this.on(type, g);
	};

	EventEmitter.prototype.emit = function () {
	  var type = arguments[0];
	  var listeners = this._listeners[type];
	  if (!listeners) {
	    return;
	  }
	  // equivalent of Array.prototype.slice.call(arguments, 1);
	  var l = arguments.length;
	  var args = new Array(l - 1);
	  for (var ai = 1; ai < l; ai++) {
	    args[ai - 1] = arguments[ai];
	  }
	  for (var i = 0; i < listeners.length; i++) {
	    listeners[i].apply(this, args);
	  }
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
	EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;

	module.exports.EventEmitter = EventEmitter;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/event/emitter.js');
	}();

	;

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';

	/* Simplified implementation of DOM2 EventTarget.
	 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
	 */

	function EventTarget() {
	  this._listeners = {};
	}

	EventTarget.prototype.addEventListener = function (eventType, listener) {
	  if (!(eventType in this._listeners)) {
	    this._listeners[eventType] = [];
	  }
	  var arr = this._listeners[eventType];
	  // #4
	  if (arr.indexOf(listener) === -1) {
	    // Make a copy so as not to interfere with a current dispatchEvent.
	    arr = arr.concat([listener]);
	  }
	  this._listeners[eventType] = arr;
	};

	EventTarget.prototype.removeEventListener = function (eventType, listener) {
	  var arr = this._listeners[eventType];
	  if (!arr) {
	    return;
	  }
	  var idx = arr.indexOf(listener);
	  if (idx !== -1) {
	    if (arr.length > 1) {
	      // Make a copy so as not to interfere with a current dispatchEvent.
	      this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
	    } else {
	      delete this._listeners[eventType];
	    }
	    return;
	  }
	};

	EventTarget.prototype.dispatchEvent = function () {
	  var event = arguments[0];
	  var t = event.type;
	  // equivalent of Array.prototype.slice.call(arguments, 0);
	  var args = arguments.length === 1 ? [event] : Array.apply(null, arguments);
	  // TODO: This doesn't match the real behavior; per spec, onfoo get
	  // their place in line from the /first/ time they're set from
	  // non-null. Although WebKit bumps it to the end every time it's
	  // set.
	  if (this['on' + t]) {
	    this['on' + t].apply(this, args);
	  }
	  if (t in this._listeners) {
	    // Grab a reference to the listeners list. removeEventListener may alter the list.
	    var listeners = this._listeners[t];
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i].apply(this, args);
	    }
	  }
	};

	module.exports = EventTarget;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventTarget, 'EventTarget', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/event/eventtarget.js');
	}();

	;

/***/ },
/* 211 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var Driver = global.WebSocket || global.MozWebSocket;
	if (Driver) {
		module.exports = function WebSocketBrowserDriver(url) {
			return new Driver(url);
		};
	}
	;

	var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
			return;
		}

		__REACT_HOT_LOADER__.register(Driver, 'Driver', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/browser/websocket.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var inherits = __webpack_require__(208),
	    AjaxBasedTransport = __webpack_require__(213),
	    XhrReceiver = __webpack_require__(217),
	    XHRCorsObject = __webpack_require__(218),
	    XHRLocalObject = __webpack_require__(220),
	    browser = __webpack_require__(221);

	function XhrStreamingTransport(transUrl) {
	  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
	}

	inherits(XhrStreamingTransport, AjaxBasedTransport);

	XhrStreamingTransport.enabled = function (info) {
	  if (info.nullOrigin) {
	    return false;
	  }
	  // Opera doesn't support xhr-streaming #60
	  // But it might be able to #92
	  if (browser.isOpera()) {
	    return false;
	  }

	  return XHRCorsObject.enabled;
	};

	XhrStreamingTransport.transportName = 'xhr-streaming';
	XhrStreamingTransport.roundTrips = 2; // preflight, ajax

	// Safari gets confused when a streaming ajax request is started
	// before onload. This causes the load indicator to spin indefinetely.
	// Only require body when used in a browser
	XhrStreamingTransport.needBody = !!global.document;

	module.exports = XhrStreamingTransport;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(XhrStreamingTransport, 'XhrStreamingTransport', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/xhr-streaming.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var inherits = __webpack_require__(208),
	    urlUtils = __webpack_require__(200),
	    SenderReceiver = __webpack_require__(214);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:ajax-based');
	}

	function createAjaxSender(AjaxObject) {
	  return function (url, payload, callback) {
	    debug('create ajax sender', url, payload);
	    var opt = {};
	    if (typeof payload === 'string') {
	      opt.headers = { 'Content-type': 'text/plain' };
	    }
	    var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
	    var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
	    xo.once('finish', function (status) {
	      debug('finish', status);
	      xo = null;

	      if (status !== 200 && status !== 204) {
	        return callback(new Error('http status ' + status));
	      }
	      callback();
	    });
	    return function () {
	      debug('abort');
	      xo.close();
	      xo = null;

	      var err = new Error('Aborted');
	      err.code = 1000;
	      callback(err);
	    };
	  };
	}

	function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
	  SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
	}

	inherits(AjaxBasedTransport, SenderReceiver);

	module.exports = AjaxBasedTransport;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/ajax-based.js');

	  __REACT_HOT_LOADER__.register(createAjaxSender, 'createAjaxSender', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/ajax-based.js');

	  __REACT_HOT_LOADER__.register(AjaxBasedTransport, 'AjaxBasedTransport', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/ajax-based.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var inherits = __webpack_require__(208),
	    urlUtils = __webpack_require__(200),
	    BufferedSender = __webpack_require__(215),
	    Polling = __webpack_require__(216);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:sender-receiver');
	}

	function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
	  var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
	  debug(pollUrl);
	  var self = this;
	  BufferedSender.call(this, transUrl, senderFunc);

	  this.poll = new Polling(Receiver, pollUrl, AjaxObject);
	  this.poll.on('message', function (msg) {
	    debug('poll message', msg);
	    self.emit('message', msg);
	  });
	  this.poll.once('close', function (code, reason) {
	    debug('poll close', code, reason);
	    self.poll = null;
	    self.emit('close', code, reason);
	    self.close();
	  });
	}

	inherits(SenderReceiver, BufferedSender);

	SenderReceiver.prototype.close = function () {
	  debug('close');
	  this.removeAllListeners();
	  if (this.poll) {
	    this.poll.abort();
	    this.poll = null;
	  }
	  this.stop();
	};

	module.exports = SenderReceiver;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/sender-receiver.js');

	  __REACT_HOT_LOADER__.register(SenderReceiver, 'SenderReceiver', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/sender-receiver.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var inherits = __webpack_require__(208),
	    EventEmitter = __webpack_require__(209).EventEmitter;

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:buffered-sender');
	}

	function BufferedSender(url, sender) {
	  debug(url);
	  EventEmitter.call(this);
	  this.sendBuffer = [];
	  this.sender = sender;
	  this.url = url;
	}

	inherits(BufferedSender, EventEmitter);

	BufferedSender.prototype.send = function (message) {
	  debug('send', message);
	  this.sendBuffer.push(message);
	  if (!this.sendStop) {
	    this.sendSchedule();
	  }
	};

	// For polling transports in a situation when in the message callback,
	// new message is being send. If the sending connection was started
	// before receiving one, it is possible to saturate the network and
	// timeout due to the lack of receiving socket. To avoid that we delay
	// sending messages by some small time, in order to let receiving
	// connection be started beforehand. This is only a halfmeasure and
	// does not fix the big problem, but it does make the tests go more
	// stable on slow networks.
	BufferedSender.prototype.sendScheduleWait = function () {
	  debug('sendScheduleWait');
	  var self = this;
	  var tref;
	  this.sendStop = function () {
	    debug('sendStop');
	    self.sendStop = null;
	    clearTimeout(tref);
	  };
	  tref = setTimeout(function () {
	    debug('timeout');
	    self.sendStop = null;
	    self.sendSchedule();
	  }, 25);
	};

	BufferedSender.prototype.sendSchedule = function () {
	  debug('sendSchedule', this.sendBuffer.length);
	  var self = this;
	  if (this.sendBuffer.length > 0) {
	    var payload = '[' + this.sendBuffer.join(',') + ']';
	    this.sendStop = this.sender(this.url, payload, function (err) {
	      self.sendStop = null;
	      if (err) {
	        debug('error', err);
	        self.emit('close', err.code || 1006, 'Sending error: ' + err);
	        self._cleanup();
	      } else {
	        self.sendScheduleWait();
	      }
	    });
	    this.sendBuffer = [];
	  }
	};

	BufferedSender.prototype._cleanup = function () {
	  debug('_cleanup');
	  this.removeAllListeners();
	};

	BufferedSender.prototype.stop = function () {
	  debug('stop');
	  this._cleanup();
	  if (this.sendStop) {
	    this.sendStop();
	    this.sendStop = null;
	  }
	};

	module.exports = BufferedSender;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/buffered-sender.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/buffered-sender.js');

	  __REACT_HOT_LOADER__.register(BufferedSender, 'BufferedSender', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/buffered-sender.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var inherits = __webpack_require__(208),
	    EventEmitter = __webpack_require__(209).EventEmitter;

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:polling');
	}

	function Polling(Receiver, receiveUrl, AjaxObject) {
	  debug(receiveUrl);
	  EventEmitter.call(this);
	  this.Receiver = Receiver;
	  this.receiveUrl = receiveUrl;
	  this.AjaxObject = AjaxObject;
	  this._scheduleReceiver();
	}

	inherits(Polling, EventEmitter);

	Polling.prototype._scheduleReceiver = function () {
	  debug('_scheduleReceiver');
	  var self = this;
	  var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);

	  poll.on('message', function (msg) {
	    debug('message', msg);
	    self.emit('message', msg);
	  });

	  poll.once('close', function (code, reason) {
	    debug('close', code, reason, self.pollIsClosing);
	    self.poll = poll = null;

	    if (!self.pollIsClosing) {
	      if (reason === 'network') {
	        self._scheduleReceiver();
	      } else {
	        self.emit('close', code || 1006, reason);
	        self.removeAllListeners();
	      }
	    }
	  });
	};

	Polling.prototype.abort = function () {
	  debug('abort');
	  this.removeAllListeners();
	  this.pollIsClosing = true;
	  if (this.poll) {
	    this.poll.abort();
	  }
	};

	module.exports = Polling;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/polling.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/polling.js');

	  __REACT_HOT_LOADER__.register(Polling, 'Polling', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/lib/polling.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var inherits = __webpack_require__(208),
	    EventEmitter = __webpack_require__(209).EventEmitter;

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:receiver:xhr');
	}

	function XhrReceiver(url, AjaxObject) {
	  debug(url);
	  EventEmitter.call(this);
	  var self = this;

	  this.bufferPosition = 0;

	  this.xo = new AjaxObject('POST', url, null);
	  this.xo.on('chunk', this._chunkHandler.bind(this));
	  this.xo.once('finish', function (status, text) {
	    debug('finish', status, text);
	    self._chunkHandler(status, text);
	    self.xo = null;
	    var reason = status === 200 ? 'network' : 'permanent';
	    debug('close', reason);
	    self.emit('close', null, reason);
	    self._cleanup();
	  });
	}

	inherits(XhrReceiver, EventEmitter);

	XhrReceiver.prototype._chunkHandler = function (status, text) {
	  debug('_chunkHandler', status);
	  if (status !== 200 || !text) {
	    return;
	  }

	  for (var idx = -1;; this.bufferPosition += idx + 1) {
	    var buf = text.slice(this.bufferPosition);
	    idx = buf.indexOf('\n');
	    if (idx === -1) {
	      break;
	    }
	    var msg = buf.slice(0, idx);
	    if (msg) {
	      debug('message', msg);
	      this.emit('message', msg);
	    }
	  }
	};

	XhrReceiver.prototype._cleanup = function () {
	  debug('_cleanup');
	  this.removeAllListeners();
	};

	XhrReceiver.prototype.abort = function () {
	  debug('abort');
	  if (this.xo) {
	    this.xo.close();
	    debug('close');
	    this.emit('close', null, 'user');
	    this.xo = null;
	  }
	  this._cleanup();
	};

	module.exports = XhrReceiver;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/xhr.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/xhr.js');

	  __REACT_HOT_LOADER__.register(XhrReceiver, 'XhrReceiver', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/xhr.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    XhrDriver = __webpack_require__(219);

	function XHRCorsObject(method, url, payload, opts) {
	  XhrDriver.call(this, method, url, payload, opts);
	}

	inherits(XHRCorsObject, XhrDriver);

	XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;

	module.exports = XHRCorsObject;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(XHRCorsObject, 'XHRCorsObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/xhr-cors.js');
	}();

	;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';

	var EventEmitter = __webpack_require__(209).EventEmitter,
	    inherits = __webpack_require__(208),
	    utils = __webpack_require__(197),
	    urlUtils = __webpack_require__(200),
	    XHR = global.XMLHttpRequest;

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:browser:xhr');
	}

	function AbstractXHRObject(method, url, payload, opts) {
	  debug(method, url);
	  var self = this;
	  EventEmitter.call(this);

	  setTimeout(function () {
	    self._start(method, url, payload, opts);
	  }, 0);
	}

	inherits(AbstractXHRObject, EventEmitter);

	AbstractXHRObject.prototype._start = function (method, url, payload, opts) {
	  var self = this;

	  try {
	    this.xhr = new XHR();
	  } catch (x) {
	    // intentionally empty
	  }

	  if (!this.xhr) {
	    debug('no xhr');
	    this.emit('finish', 0, 'no xhr support');
	    this._cleanup();
	    return;
	  }

	  // several browsers cache POSTs
	  url = urlUtils.addQuery(url, 't=' + +new Date());

	  // Explorer tends to keep connection open, even after the
	  // tab gets closed: http://bugs.jquery.com/ticket/5280
	  this.unloadRef = utils.unloadAdd(function () {
	    debug('unload cleanup');
	    self._cleanup(true);
	  });
	  try {
	    this.xhr.open(method, url, true);
	    if (this.timeout && 'timeout' in this.xhr) {
	      this.xhr.timeout = this.timeout;
	      this.xhr.ontimeout = function () {
	        debug('xhr timeout');
	        self.emit('finish', 0, '');
	        self._cleanup(false);
	      };
	    }
	  } catch (e) {
	    debug('exception', e);
	    // IE raises an exception on wrong port.
	    this.emit('finish', 0, '');
	    this._cleanup(false);
	    return;
	  }

	  if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
	    debug('withCredentials');
	    // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
	    // "This never affects same-site requests."

	    this.xhr.withCredentials = 'true';
	  }
	  if (opts && opts.headers) {
	    for (var key in opts.headers) {
	      this.xhr.setRequestHeader(key, opts.headers[key]);
	    }
	  }

	  this.xhr.onreadystatechange = function () {
	    if (self.xhr) {
	      var x = self.xhr;
	      var text, status;
	      debug('readyState', x.readyState);
	      switch (x.readyState) {
	        case 3:
	          // IE doesn't like peeking into responseText or status
	          // on Microsoft.XMLHTTP and readystate=3
	          try {
	            status = x.status;
	            text = x.responseText;
	          } catch (e) {
	            // intentionally empty
	          }
	          debug('status', status);
	          // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
	          if (status === 1223) {
	            status = 204;
	          }

	          // IE does return readystate == 3 for 404 answers.
	          if (status === 200 && text && text.length > 0) {
	            debug('chunk');
	            self.emit('chunk', status, text);
	          }
	          break;
	        case 4:
	          status = x.status;
	          debug('status', status);
	          // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
	          if (status === 1223) {
	            status = 204;
	          }
	          // IE returns this for a bad port
	          // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
	          if (status === 12005 || status === 12029) {
	            status = 0;
	          }

	          debug('finish', status, x.responseText);
	          self.emit('finish', status, x.responseText);
	          self._cleanup(false);
	          break;
	      }
	    }
	  };

	  try {
	    self.xhr.send(payload);
	  } catch (e) {
	    self.emit('finish', 0, '');
	    self._cleanup(false);
	  }
	};

	AbstractXHRObject.prototype._cleanup = function (abort) {
	  debug('cleanup');
	  if (!this.xhr) {
	    return;
	  }
	  this.removeAllListeners();
	  utils.unloadDel(this.unloadRef);

	  // IE needs this field to be a function
	  this.xhr.onreadystatechange = function () {};
	  if (this.xhr.ontimeout) {
	    this.xhr.ontimeout = null;
	  }

	  if (abort) {
	    try {
	      this.xhr.abort();
	    } catch (x) {
	      // intentionally empty
	    }
	  }
	  this.unloadRef = this.xhr = null;
	};

	AbstractXHRObject.prototype.close = function () {
	  debug('close');
	  this._cleanup(true);
	};

	AbstractXHRObject.enabled = !!XHR;
	// override XMLHttpRequest for IE6/7
	// obfuscate to avoid firewalls
	var axo = ['Active'].concat('Object').join('X');
	if (!AbstractXHRObject.enabled && axo in global) {
	  debug('overriding xmlhttprequest');
	  XHR = function XHR() {
	    try {
	      return new global[axo]('Microsoft.XMLHTTP');
	    } catch (e) {
	      return null;
	    }
	  };
	  AbstractXHRObject.enabled = !!new XHR();
	}

	var cors = false;
	try {
	  cors = 'withCredentials' in new XHR();
	} catch (ignored) {
	  // intentionally empty
	}

	AbstractXHRObject.supportsCORS = cors;

	module.exports = AbstractXHRObject;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js');

	  __REACT_HOT_LOADER__.register(XHR, 'XHR', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js');

	  __REACT_HOT_LOADER__.register(AbstractXHRObject, 'AbstractXHRObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js');

	  __REACT_HOT_LOADER__.register(axo, 'axo', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js');

	  __REACT_HOT_LOADER__.register(cors, 'cors', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    XhrDriver = __webpack_require__(219);

	function XHRLocalObject(method, url, payload /*, opts */) {
	  XhrDriver.call(this, method, url, payload, {
	    noCredentials: true
	  });
	}

	inherits(XHRLocalObject, XhrDriver);

	XHRLocalObject.enabled = XhrDriver.enabled;

	module.exports = XHRLocalObject;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(XHRLocalObject, 'XHRLocalObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/xhr-local.js');
	}();

	;

/***/ },
/* 221 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	module.exports = {
	  isOpera: function isOpera() {
	    return global.navigator && /opera/i.test(global.navigator.userAgent);
	  },

	  isKonqueror: function isKonqueror() {
	    return global.navigator && /konqueror/i.test(global.navigator.userAgent);
	  }

	  // #187 wrap document.domain in try/catch because of WP8 from file:///
	  , hasDomain: function hasDomain() {
	    // non-browser client always has a domain
	    if (!global.document) {
	      return true;
	    }

	    try {
	      return !!global.document.domain;
	    } catch (e) {
	      return false;
	    }
	  }
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    AjaxBasedTransport = __webpack_require__(213),
	    XhrReceiver = __webpack_require__(217),
	    XDRObject = __webpack_require__(223);

	// According to:
	//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
	//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/

	function XdrStreamingTransport(transUrl) {
	  if (!XDRObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
	}

	inherits(XdrStreamingTransport, AjaxBasedTransport);

	XdrStreamingTransport.enabled = function (info) {
	  if (info.cookie_needed || info.nullOrigin) {
	    return false;
	  }
	  return XDRObject.enabled && info.sameScheme;
	};

	XdrStreamingTransport.transportName = 'xdr-streaming';
	XdrStreamingTransport.roundTrips = 2; // preflight, ajax

	module.exports = XdrStreamingTransport;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(XdrStreamingTransport, 'XdrStreamingTransport', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/xdr-streaming.js');
	}();

	;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	var EventEmitter = __webpack_require__(209).EventEmitter,
	    inherits = __webpack_require__(208),
	    eventUtils = __webpack_require__(197),
	    browser = __webpack_require__(221),
	    urlUtils = __webpack_require__(200);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:sender:xdr');
	}

	// References:
	//   http://ajaxian.com/archives/100-line-ajax-wrapper
	//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx

	function XDRObject(method, url, payload) {
	  debug(method, url);
	  var self = this;
	  EventEmitter.call(this);

	  setTimeout(function () {
	    self._start(method, url, payload);
	  }, 0);
	}

	inherits(XDRObject, EventEmitter);

	XDRObject.prototype._start = function (method, url, payload) {
	  debug('_start');
	  var self = this;
	  var xdr = new global.XDomainRequest();
	  // IE caches even POSTs
	  url = urlUtils.addQuery(url, 't=' + +new Date());

	  xdr.onerror = function () {
	    debug('onerror');
	    self._error();
	  };
	  xdr.ontimeout = function () {
	    debug('ontimeout');
	    self._error();
	  };
	  xdr.onprogress = function () {
	    debug('progress', xdr.responseText);
	    self.emit('chunk', 200, xdr.responseText);
	  };
	  xdr.onload = function () {
	    debug('load');
	    self.emit('finish', 200, xdr.responseText);
	    self._cleanup(false);
	  };
	  this.xdr = xdr;
	  this.unloadRef = eventUtils.unloadAdd(function () {
	    self._cleanup(true);
	  });
	  try {
	    // Fails with AccessDenied if port number is bogus
	    this.xdr.open(method, url);
	    if (this.timeout) {
	      this.xdr.timeout = this.timeout;
	    }
	    this.xdr.send(payload);
	  } catch (x) {
	    this._error();
	  }
	};

	XDRObject.prototype._error = function () {
	  this.emit('finish', 0, '');
	  this._cleanup(false);
	};

	XDRObject.prototype._cleanup = function (abort) {
	  debug('cleanup', abort);
	  if (!this.xdr) {
	    return;
	  }
	  this.removeAllListeners();
	  eventUtils.unloadDel(this.unloadRef);

	  this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
	  if (abort) {
	    try {
	      this.xdr.abort();
	    } catch (x) {
	      // intentionally empty
	    }
	  }
	  this.unloadRef = this.xdr = null;
	};

	XDRObject.prototype.close = function () {
	  debug('close');
	  this._cleanup(true);
	};

	// IE 8/9 if the request target uses the same scheme - #79
	XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());

	module.exports = XDRObject;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/xdr.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/xdr.js');

	  __REACT_HOT_LOADER__.register(XDRObject, 'XDRObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/xdr.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), (function() { return this; }())))

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    AjaxBasedTransport = __webpack_require__(213),
	    EventSourceReceiver = __webpack_require__(225),
	    XHRCorsObject = __webpack_require__(218),
	    EventSourceDriver = __webpack_require__(226);

	function EventSourceTransport(transUrl) {
	  if (!EventSourceTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }

	  AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
	}

	inherits(EventSourceTransport, AjaxBasedTransport);

	EventSourceTransport.enabled = function () {
	  return !!EventSourceDriver;
	};

	EventSourceTransport.transportName = 'eventsource';
	EventSourceTransport.roundTrips = 2;

	module.exports = EventSourceTransport;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventSourceTransport, 'EventSourceTransport', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/eventsource.js');
	}();

	;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var inherits = __webpack_require__(208),
	    EventEmitter = __webpack_require__(209).EventEmitter,
	    EventSourceDriver = __webpack_require__(226);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:receiver:eventsource');
	}

	function EventSourceReceiver(url) {
	  debug(url);
	  EventEmitter.call(this);

	  var self = this;
	  var es = this.es = new EventSourceDriver(url);
	  es.onmessage = function (e) {
	    debug('message', e.data);
	    self.emit('message', decodeURI(e.data));
	  };
	  es.onerror = function (e) {
	    debug('error', es.readyState, e);
	    // ES on reconnection has readyState = 0 or 1.
	    // on network error it's CLOSED = 2
	    var reason = es.readyState !== 2 ? 'network' : 'permanent';
	    self._cleanup();
	    self._close(reason);
	  };
	}

	inherits(EventSourceReceiver, EventEmitter);

	EventSourceReceiver.prototype.abort = function () {
	  debug('abort');
	  this._cleanup();
	  this._close('user');
	};

	EventSourceReceiver.prototype._cleanup = function () {
	  debug('cleanup');
	  var es = this.es;
	  if (es) {
	    es.onmessage = es.onerror = null;
	    es.close();
	    this.es = null;
	  }
	};

	EventSourceReceiver.prototype._close = function (reason) {
	  debug('close', reason);
	  var self = this;
	  // Safari and chrome < 15 crash if we close window before
	  // waiting for ES cleanup. See:
	  // https://code.google.com/p/chromium/issues/detail?id=89155
	  setTimeout(function () {
	    self.emit('close', null, reason);
	    self.removeAllListeners();
	  }, 200);
	};

	module.exports = EventSourceReceiver;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/eventsource.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/eventsource.js');

	  __REACT_HOT_LOADER__.register(EventSourceReceiver, 'EventSourceReceiver', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/eventsource.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 226 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	module.exports = global.EventSource;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var inherits = __webpack_require__(208),
	    IframeTransport = __webpack_require__(228),
	    objectUtils = __webpack_require__(232);

	module.exports = function (transport) {

	  function IframeWrapTransport(transUrl, baseUrl) {
	    IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
	  }

	  inherits(IframeWrapTransport, IframeTransport);

	  IframeWrapTransport.enabled = function (url, info) {
	    if (!global.document) {
	      return false;
	    }

	    var iframeInfo = objectUtils.extend({}, info);
	    iframeInfo.sameOrigin = true;
	    return transport.enabled(iframeInfo) && IframeTransport.enabled();
	  };

	  IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
	  IframeWrapTransport.needBody = true;
	  IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)

	  IframeWrapTransport.facadeTransport = transport;

	  return IframeWrapTransport;
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	// Few cool transports do work only for same-origin. In order to make
	// them work cross-domain we shall use iframe, served from the
	// remote domain. New browsers have capabilities to communicate with
	// cross domain iframe using postMessage(). In IE it was implemented
	// from IE 8+, but of course, IE got some details wrong:
	//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
	//    http://stevesouders.com/misc/test-postmessage.php

	var inherits = __webpack_require__(208),
	    JSON3 = __webpack_require__(229),
	    EventEmitter = __webpack_require__(209).EventEmitter,
	    version = __webpack_require__(230),
	    urlUtils = __webpack_require__(200),
	    iframeUtils = __webpack_require__(231),
	    eventUtils = __webpack_require__(197),
	    random = __webpack_require__(198);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:transport:iframe');
	}

	function IframeTransport(transport, transUrl, baseUrl) {
	  if (!IframeTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }
	  EventEmitter.call(this);

	  var self = this;
	  this.origin = urlUtils.getOrigin(baseUrl);
	  this.baseUrl = baseUrl;
	  this.transUrl = transUrl;
	  this.transport = transport;
	  this.windowId = random.string(8);

	  var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
	  debug(transport, transUrl, iframeUrl);

	  this.iframeObj = iframeUtils.createIframe(iframeUrl, function (r) {
	    debug('err callback');
	    self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
	    self.close();
	  });

	  this.onmessageCallback = this._message.bind(this);
	  eventUtils.attachEvent('message', this.onmessageCallback);
	}

	inherits(IframeTransport, EventEmitter);

	IframeTransport.prototype.close = function () {
	  debug('close');
	  this.removeAllListeners();
	  if (this.iframeObj) {
	    eventUtils.detachEvent('message', this.onmessageCallback);
	    try {
	      // When the iframe is not loaded, IE raises an exception
	      // on 'contentWindow'.
	      this.postMessage('c');
	    } catch (x) {
	      // intentionally empty
	    }
	    this.iframeObj.cleanup();
	    this.iframeObj = null;
	    this.onmessageCallback = this.iframeObj = null;
	  }
	};

	IframeTransport.prototype._message = function (e) {
	  debug('message', e.data);
	  if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
	    debug('not same origin', e.origin, this.origin);
	    return;
	  }

	  var iframeMessage;
	  try {
	    iframeMessage = JSON3.parse(e.data);
	  } catch (ignored) {
	    debug('bad json', e.data);
	    return;
	  }

	  if (iframeMessage.windowId !== this.windowId) {
	    debug('mismatched window id', iframeMessage.windowId, this.windowId);
	    return;
	  }

	  switch (iframeMessage.type) {
	    case 's':
	      this.iframeObj.loaded();
	      // window global dependency
	      this.postMessage('s', JSON3.stringify([version, this.transport, this.transUrl, this.baseUrl]));
	      break;
	    case 't':
	      this.emit('message', iframeMessage.data);
	      break;
	    case 'c':
	      var cdata;
	      try {
	        cdata = JSON3.parse(iframeMessage.data);
	      } catch (ignored) {
	        debug('bad json', iframeMessage.data);
	        return;
	      }
	      this.emit('close', cdata[0], cdata[1]);
	      this.close();
	      break;
	  }
	};

	IframeTransport.prototype.postMessage = function (type, data) {
	  debug('postMessage', type, data);
	  this.iframeObj.post(JSON3.stringify({
	    windowId: this.windowId,
	    type: type,
	    data: data || ''
	  }), this.origin);
	};

	IframeTransport.prototype.send = function (message) {
	  debug('send', message);
	  this.postMessage('m', message);
	};

	IframeTransport.enabled = function () {
	  return iframeUtils.iframeEnabled;
	};

	IframeTransport.transportName = 'iframe';
	IframeTransport.roundTrips = 2;

	module.exports = IframeTransport;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/iframe.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/iframe.js');

	  __REACT_HOT_LOADER__.register(IframeTransport, 'IframeTransport', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/iframe.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(187);

	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };

	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[ false ? "undefined" : _typeof(exports)] && exports && !exports.nodeType && exports;

	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window === "undefined" ? "undefined" : _typeof(window)] && window || this,
	      freeGlobal = freeExports && objectTypes[ false ? "undefined" : _typeof(module)] && module && !module.nodeType && (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global;

	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }

	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());

	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];

	    // Delegate to the native `stringify` and `parse` implementations.
	    if ((typeof nativeJSON === "undefined" ? "undefined" : _typeof(nativeJSON)) == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }

	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        _isProperty,
	        _forEach,
	        undef;

	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	      // Safari < 2.0.2 stores the internal millisecond time value correctly,
	      // but clips the values returned by the date methods to the range of
	      // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}

	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value,
	            serialized = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify,
	              stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function value() {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	              // Firefox 3.1b1 and b2 serialize string, number, and boolean
	              // primitives as object literals.
	              stringify(0) === "0" &&
	              // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	              // literals.
	              stringify(new Number()) === "0" && stringify(new String()) == '""' &&
	              // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	              // does not define a canonical JSON representation (this applies to
	              // objects with `toJSON` properties as well, *unless* they are nested
	              // within an object or array).
	              stringify(getClass) === undef &&
	              // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	              // FF 3.1b3 pass this test.
	              stringify(undef) === undef &&
	              // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	              // respectively, if the value is omitted entirely.
	              stringify() === undef &&
	              // FF 3.1b1, 2 throw an error if the given value is not a number,
	              // string, array, object, Boolean, or `null` literal. This applies to
	              // objects with custom `toJSON` methods as well, unless they are nested
	              // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	              // methods entirely.
	              stringify(value) === "1" && stringify([value]) == "[1]" &&
	              // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	              // `"[null]"`.
	              stringify([undef]) == "[null]" &&
	              // YUI 3.0.0b1 fails to serialize `null` literals.
	              stringify(null) == "null" &&
	              // FF 3.1b1, 2 halts serialization if an array contains a function:
	              // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	              // elides non-JSON values from objects and arrays, unless they
	              // define custom `toJSON` methods.
	              stringify([undef, getClass, null]) == "[null,null,null]" &&
	              // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	              // where character escape codes are expected (e.g., `\b` => `\u0008`).
	              stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	              // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	              stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	              // serialize extended years.
	              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	              // The milliseconds are optional in ES 5, but required in 5.1.
	              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	              // four-digit years instead of six-digit years. Credits: @Yaffle.
	              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	              // values less than 1000. Credits: @Yaffle.
	              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }

	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";

	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");

	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function getDay(year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }

	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(_isProperty = objectProto.hasOwnProperty)) {
	        _isProperty = function isProperty(property) {
	          var members = {},
	              constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            _isProperty = function isProperty(property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__,
	                  result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            _isProperty = function isProperty(property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return _isProperty.call(this, property);
	        };
	      }

	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      _forEach = function forEach(object, callback) {
	        var size = 0,
	            Properties,
	            members,
	            property;

	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function Properties() {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;

	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (_isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;

	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          _forEach = function forEach(object, callback) {
	            var isFunction = getClass.call(object) == functionClass,
	                property,
	                length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[_typeof(object.hasOwnProperty)] && object.hasOwnProperty || _isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property)) {}
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          _forEach = function forEach(object, callback) {
	            // Create a set of iterated properties.
	            var members = {},
	                isFunction = getClass.call(object) == functionClass,
	                property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !_isProperty.call(members, property) && (members[property] = 1) && _isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          _forEach = function forEach(object, callback) {
	            var isFunction = getClass.call(object) == functionClass,
	                property,
	                isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && _isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || _isProperty.call(object, property = "constructor")) {
	              callback(property);
	            }
	          };
	        }
	        return _forEach(object, callback);
	      };

	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };

	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function toPaddedString(width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };

	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function quote(value) {
	          var result = '"',
	              index = 0,
	              length = value.length,
	              useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8:case 9:case 10:case 12:case 13:case 34:case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };

	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function serialize(property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !_isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++) {}
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++) {}
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                // Months, dates, hours, minutes, and seconds should have two
	                // digits; milliseconds should have three.
	                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                // Milliseconds are optional in ES 5.0, but required in 5.1.
	                "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && (className != numberClass && className != stringClass && className != arrayClass || _isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              _forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };

	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter === "undefined" ? "undefined" : _typeof(filter)] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1)) {}
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ") {}
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }

	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;

	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };

	        // Internal: Stores the parser state.
	        var Index, Source;

	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function abort() {
	          Index = Source = null;
	          throw SyntaxError();
	        };

	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function lex() {
	          var source = Source,
	              length = source.length,
	              value,
	              begin,
	              position,
	              isSigned,
	              charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9:case 10:case 13:case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123:case 125:case 91:case 93:case 58:case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++) {}
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++) {}
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++) {}
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };

	        // Internal: Parses a JSON `value` token.
	        var get = function get(value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };

	        // Internal: Updates a traversed object member.
	        var update = function update(source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };

	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function walk(source, property, callback) {
	          var value = source[property],
	              length;
	          if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              _forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };

	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }

	    exports["runInContext"] = runInContext;
	    return exports;
	  }

	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;

	    var JSON3 = runInContext(root, root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function noConflict() {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    });

	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }

	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(undefined);
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module), (function() { return this; }())))

/***/ },
/* 230 */
/***/ function(module, exports) {

	'use strict';

	module.exports = '1.1.1';
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var eventUtils = __webpack_require__(197),
	    JSON3 = __webpack_require__(229),
	    browser = __webpack_require__(221);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:utils:iframe');
	}

	module.exports = {
	  WPrefix: '_jp',
	  currentWindowId: null,

	  polluteGlobalNamespace: function polluteGlobalNamespace() {
	    if (!(module.exports.WPrefix in global)) {
	      global[module.exports.WPrefix] = {};
	    }
	  },

	  postMessage: function postMessage(type, data) {
	    if (global.parent !== global) {
	      global.parent.postMessage(JSON3.stringify({
	        windowId: module.exports.currentWindowId,
	        type: type,
	        data: data || ''
	      }), '*');
	    } else {
	      debug('Cannot postMessage, no parent window.', type, data);
	    }
	  },

	  createIframe: function createIframe(iframeUrl, errorCallback) {
	    var iframe = global.document.createElement('iframe');
	    var tref, unloadRef;
	    var unattach = function unattach() {
	      debug('unattach');
	      clearTimeout(tref);
	      // Explorer had problems with that.
	      try {
	        iframe.onload = null;
	      } catch (x) {
	        // intentionally empty
	      }
	      iframe.onerror = null;
	    };
	    var cleanup = function cleanup() {
	      debug('cleanup');
	      if (iframe) {
	        unattach();
	        // This timeout makes chrome fire onbeforeunload event
	        // within iframe. Without the timeout it goes straight to
	        // onunload.
	        setTimeout(function () {
	          if (iframe) {
	            iframe.parentNode.removeChild(iframe);
	          }
	          iframe = null;
	        }, 0);
	        eventUtils.unloadDel(unloadRef);
	      }
	    };
	    var onerror = function onerror(err) {
	      debug('onerror', err);
	      if (iframe) {
	        cleanup();
	        errorCallback(err);
	      }
	    };
	    var post = function post(msg, origin) {
	      debug('post', msg, origin);
	      try {
	        // When the iframe is not loaded, IE raises an exception
	        // on 'contentWindow'.
	        setTimeout(function () {
	          if (iframe && iframe.contentWindow) {
	            iframe.contentWindow.postMessage(msg, origin);
	          }
	        }, 0);
	      } catch (x) {
	        // intentionally empty
	      }
	    };

	    iframe.src = iframeUrl;
	    iframe.style.display = 'none';
	    iframe.style.position = 'absolute';
	    iframe.onerror = function () {
	      onerror('onerror');
	    };
	    iframe.onload = function () {
	      debug('onload');
	      // `onload` is triggered before scripts on the iframe are
	      // executed. Give it few seconds to actually load stuff.
	      clearTimeout(tref);
	      tref = setTimeout(function () {
	        onerror('onload timeout');
	      }, 2000);
	    };
	    global.document.body.appendChild(iframe);
	    tref = setTimeout(function () {
	      onerror('timeout');
	    }, 15000);
	    unloadRef = eventUtils.unloadAdd(cleanup);
	    return {
	      post: post,
	      cleanup: cleanup,
	      loaded: unattach
	    };
	  }

	  /* jshint undef: false, newcap: false */
	  /* eslint no-undef: 0, new-cap: 0 */
	  , createHtmlfile: function createHtmlfile(iframeUrl, errorCallback) {
	    var axo = ['Active'].concat('Object').join('X');
	    var doc = new global[axo]('htmlfile');
	    var tref, unloadRef;
	    var iframe;
	    var unattach = function unattach() {
	      clearTimeout(tref);
	      iframe.onerror = null;
	    };
	    var cleanup = function cleanup() {
	      if (doc) {
	        unattach();
	        eventUtils.unloadDel(unloadRef);
	        iframe.parentNode.removeChild(iframe);
	        iframe = doc = null;
	        CollectGarbage();
	      }
	    };
	    var onerror = function onerror(r) {
	      debug('onerror', r);
	      if (doc) {
	        cleanup();
	        errorCallback(r);
	      }
	    };
	    var post = function post(msg, origin) {
	      try {
	        // When the iframe is not loaded, IE raises an exception
	        // on 'contentWindow'.
	        setTimeout(function () {
	          if (iframe && iframe.contentWindow) {
	            iframe.contentWindow.postMessage(msg, origin);
	          }
	        }, 0);
	      } catch (x) {
	        // intentionally empty
	      }
	    };

	    doc.open();
	    doc.write('<html><s' + 'cript>' + 'document.domain="' + global.document.domain + '";' + '</s' + 'cript></html>');
	    doc.close();
	    doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
	    var c = doc.createElement('div');
	    doc.body.appendChild(c);
	    iframe = doc.createElement('iframe');
	    c.appendChild(iframe);
	    iframe.src = iframeUrl;
	    iframe.onerror = function () {
	      onerror('onerror');
	    };
	    tref = setTimeout(function () {
	      onerror('timeout');
	    }, 15000);
	    unloadRef = eventUtils.unloadAdd(cleanup);
	    return {
	      post: post,
	      cleanup: cleanup,
	      loaded: unattach
	    };
	  }
	};

	module.exports.iframeEnabled = false;
	if (global.document) {
	  // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
	  // huge delay, or not at all.
	  module.exports.iframeEnabled = (typeof global.postMessage === 'function' || _typeof(global.postMessage) === 'object') && !browser.isKonqueror();
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/iframe.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), (function() { return this; }())))

/***/ },
/* 232 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = {
	  isObject: function isObject(obj) {
	    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    return type === 'function' || type === 'object' && !!obj;
	  },

	  extend: function extend(obj) {
	    if (!this.isObject(obj)) {
	      return obj;
	    }
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      source = arguments[i];
	      for (prop in source) {
	        if (Object.prototype.hasOwnProperty.call(source, prop)) {
	          obj[prop] = source[prop];
	        }
	      }
	    }
	    return obj;
	  }
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    HtmlfileReceiver = __webpack_require__(234),
	    XHRLocalObject = __webpack_require__(220),
	    AjaxBasedTransport = __webpack_require__(213);

	function HtmlFileTransport(transUrl) {
	  if (!HtmlfileReceiver.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
	}

	inherits(HtmlFileTransport, AjaxBasedTransport);

	HtmlFileTransport.enabled = function (info) {
	  return HtmlfileReceiver.enabled && info.sameOrigin;
	};

	HtmlFileTransport.transportName = 'htmlfile';
	HtmlFileTransport.roundTrips = 2;

	module.exports = HtmlFileTransport;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(HtmlFileTransport, 'HtmlFileTransport', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/htmlfile.js');
	}();

	;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	var inherits = __webpack_require__(208),
	    iframeUtils = __webpack_require__(231),
	    urlUtils = __webpack_require__(200),
	    EventEmitter = __webpack_require__(209).EventEmitter,
	    random = __webpack_require__(198);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:receiver:htmlfile');
	}

	function HtmlfileReceiver(url) {
	  debug(url);
	  EventEmitter.call(this);
	  var self = this;
	  iframeUtils.polluteGlobalNamespace();

	  this.id = 'a' + random.string(6);
	  url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));

	  debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
	  var constructFunc = HtmlfileReceiver.htmlfileEnabled ? iframeUtils.createHtmlfile : iframeUtils.createIframe;

	  global[iframeUtils.WPrefix][this.id] = {
	    start: function start() {
	      debug('start');
	      self.iframeObj.loaded();
	    },
	    message: function message(data) {
	      debug('message', data);
	      self.emit('message', data);
	    },
	    stop: function stop() {
	      debug('stop');
	      self._cleanup();
	      self._close('network');
	    }
	  };
	  this.iframeObj = constructFunc(url, function () {
	    debug('callback');
	    self._cleanup();
	    self._close('permanent');
	  });
	}

	inherits(HtmlfileReceiver, EventEmitter);

	HtmlfileReceiver.prototype.abort = function () {
	  debug('abort');
	  this._cleanup();
	  this._close('user');
	};

	HtmlfileReceiver.prototype._cleanup = function () {
	  debug('_cleanup');
	  if (this.iframeObj) {
	    this.iframeObj.cleanup();
	    this.iframeObj = null;
	  }
	  delete global[iframeUtils.WPrefix][this.id];
	};

	HtmlfileReceiver.prototype._close = function (reason) {
	  debug('_close', reason);
	  this.emit('close', null, reason);
	  this.removeAllListeners();
	};

	HtmlfileReceiver.htmlfileEnabled = false;

	// obfuscate to avoid firewalls
	var axo = ['Active'].concat('Object').join('X');
	if (axo in global) {
	  try {
	    HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
	  } catch (x) {
	    // intentionally empty
	  }
	}

	HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;

	module.exports = HtmlfileReceiver;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/htmlfile.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/htmlfile.js');

	  __REACT_HOT_LOADER__.register(HtmlfileReceiver, 'HtmlfileReceiver', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/htmlfile.js');

	  __REACT_HOT_LOADER__.register(axo, 'axo', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/htmlfile.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), (function() { return this; }())))

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    AjaxBasedTransport = __webpack_require__(213),
	    XhrReceiver = __webpack_require__(217),
	    XHRCorsObject = __webpack_require__(218),
	    XHRLocalObject = __webpack_require__(220);

	function XhrPollingTransport(transUrl) {
	  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
	}

	inherits(XhrPollingTransport, AjaxBasedTransport);

	XhrPollingTransport.enabled = function (info) {
	  if (info.nullOrigin) {
	    return false;
	  }

	  if (XHRLocalObject.enabled && info.sameOrigin) {
	    return true;
	  }
	  return XHRCorsObject.enabled;
	};

	XhrPollingTransport.transportName = 'xhr-polling';
	XhrPollingTransport.roundTrips = 2; // preflight, ajax

	module.exports = XhrPollingTransport;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(XhrPollingTransport, 'XhrPollingTransport', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/xhr-polling.js');
	}();

	;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    AjaxBasedTransport = __webpack_require__(213),
	    XdrStreamingTransport = __webpack_require__(222),
	    XhrReceiver = __webpack_require__(217),
	    XDRObject = __webpack_require__(223);

	function XdrPollingTransport(transUrl) {
	  if (!XDRObject.enabled) {
	    throw new Error('Transport created when disabled');
	  }
	  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
	}

	inherits(XdrPollingTransport, AjaxBasedTransport);

	XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
	XdrPollingTransport.transportName = 'xdr-polling';
	XdrPollingTransport.roundTrips = 2; // preflight, ajax

	module.exports = XdrPollingTransport;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(XdrPollingTransport, 'XdrPollingTransport', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/xdr-polling.js');
	}();

	;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// The simplest and most robust transport, using the well-know cross
	// domain hack - JSONP. This transport is quite inefficient - one
	// message could use up to one http request. But at least it works almost
	// everywhere.
	// Known limitations:
	//   o you will get a spinning cursor
	//   o for Konqueror a dumb timer is needed to detect errors

	var inherits = __webpack_require__(208),
	    SenderReceiver = __webpack_require__(214),
	    JsonpReceiver = __webpack_require__(238),
	    jsonpSender = __webpack_require__(239);

	function JsonPTransport(transUrl) {
	  if (!JsonPTransport.enabled()) {
	    throw new Error('Transport created when disabled');
	  }
	  SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
	}

	inherits(JsonPTransport, SenderReceiver);

	JsonPTransport.enabled = function () {
	  return !!global.document;
	};

	JsonPTransport.transportName = 'jsonp-polling';
	JsonPTransport.roundTrips = 1;
	JsonPTransport.needBody = true;

	module.exports = JsonPTransport;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(JsonPTransport, 'JsonPTransport', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/jsonp-polling.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	var utils = __webpack_require__(231),
	    random = __webpack_require__(198),
	    browser = __webpack_require__(221),
	    urlUtils = __webpack_require__(200),
	    inherits = __webpack_require__(208),
	    EventEmitter = __webpack_require__(209).EventEmitter;

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:receiver:jsonp');
	}

	function JsonpReceiver(url) {
	  debug(url);
	  var self = this;
	  EventEmitter.call(this);

	  utils.polluteGlobalNamespace();

	  this.id = 'a' + random.string(6);
	  var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));

	  global[utils.WPrefix][this.id] = this._callback.bind(this);
	  this._createScript(urlWithId);

	  // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
	  this.timeoutId = setTimeout(function () {
	    debug('timeout');
	    self._abort(new Error('JSONP script loaded abnormally (timeout)'));
	  }, JsonpReceiver.timeout);
	}

	inherits(JsonpReceiver, EventEmitter);

	JsonpReceiver.prototype.abort = function () {
	  debug('abort');
	  if (global[utils.WPrefix][this.id]) {
	    var err = new Error('JSONP user aborted read');
	    err.code = 1000;
	    this._abort(err);
	  }
	};

	JsonpReceiver.timeout = 35000;
	JsonpReceiver.scriptErrorTimeout = 1000;

	JsonpReceiver.prototype._callback = function (data) {
	  debug('_callback', data);
	  this._cleanup();

	  if (this.aborting) {
	    return;
	  }

	  if (data) {
	    debug('message', data);
	    this.emit('message', data);
	  }
	  this.emit('close', null, 'network');
	  this.removeAllListeners();
	};

	JsonpReceiver.prototype._abort = function (err) {
	  debug('_abort', err);
	  this._cleanup();
	  this.aborting = true;
	  this.emit('close', err.code, err.message);
	  this.removeAllListeners();
	};

	JsonpReceiver.prototype._cleanup = function () {
	  debug('_cleanup');
	  clearTimeout(this.timeoutId);
	  if (this.script2) {
	    this.script2.parentNode.removeChild(this.script2);
	    this.script2 = null;
	  }
	  if (this.script) {
	    var script = this.script;
	    // Unfortunately, you can't really abort script loading of
	    // the script.
	    script.parentNode.removeChild(script);
	    script.onreadystatechange = script.onerror = script.onload = script.onclick = null;
	    this.script = null;
	  }
	  delete global[utils.WPrefix][this.id];
	};

	JsonpReceiver.prototype._scriptError = function () {
	  debug('_scriptError');
	  var self = this;
	  if (this.errorTimer) {
	    return;
	  }

	  this.errorTimer = setTimeout(function () {
	    if (!self.loadedOkay) {
	      self._abort(new Error('JSONP script loaded abnormally (onerror)'));
	    }
	  }, JsonpReceiver.scriptErrorTimeout);
	};

	JsonpReceiver.prototype._createScript = function (url) {
	  debug('_createScript', url);
	  var self = this;
	  var script = this.script = global.document.createElement('script');
	  var script2; // Opera synchronous load trick.

	  script.id = 'a' + random.string(8);
	  script.src = url;
	  script.type = 'text/javascript';
	  script.charset = 'UTF-8';
	  script.onerror = this._scriptError.bind(this);
	  script.onload = function () {
	    debug('onload');
	    self._abort(new Error('JSONP script loaded abnormally (onload)'));
	  };

	  // IE9 fires 'error' event after onreadystatechange or before, in random order.
	  // Use loadedOkay to determine if actually errored
	  script.onreadystatechange = function () {
	    debug('onreadystatechange', script.readyState);
	    if (/loaded|closed/.test(script.readyState)) {
	      if (script && script.htmlFor && script.onclick) {
	        self.loadedOkay = true;
	        try {
	          // In IE, actually execute the script.
	          script.onclick();
	        } catch (x) {
	          // intentionally empty
	        }
	      }
	      if (script) {
	        self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
	      }
	    }
	  };
	  // IE: event/htmlFor/onclick trick.
	  // One can't rely on proper order for onreadystatechange. In order to
	  // make sure, set a 'htmlFor' and 'event' properties, so that
	  // script code will be installed as 'onclick' handler for the
	  // script object. Later, onreadystatechange, manually execute this
	  // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
	  // set. For reference see:
	  //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
	  // Also, read on that about script ordering:
	  //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
	  if (typeof script.async === 'undefined' && global.document.attachEvent) {
	    // According to mozilla docs, in recent browsers script.async defaults
	    // to 'true', so we may use it to detect a good browser:
	    // https://developer.mozilla.org/en/HTML/Element/script
	    if (!browser.isOpera()) {
	      // Naively assume we're in IE
	      try {
	        script.htmlFor = script.id;
	        script.event = 'onclick';
	      } catch (x) {
	        // intentionally empty
	      }
	      script.async = true;
	    } else {
	      // Opera, second sync script hack
	      script2 = this.script2 = global.document.createElement('script');
	      script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
	      script.async = script2.async = false;
	    }
	  }
	  if (typeof script.async !== 'undefined') {
	    script.async = true;
	  }

	  var head = global.document.getElementsByTagName('head')[0];
	  head.insertBefore(script, head.firstChild);
	  if (script2) {
	    head.insertBefore(script2, head.firstChild);
	  }
	};

	module.exports = JsonpReceiver;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/jsonp.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/jsonp.js');

	  __REACT_HOT_LOADER__.register(JsonpReceiver, 'JsonpReceiver', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/receiver/jsonp.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), (function() { return this; }())))

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	var random = __webpack_require__(198),
	    urlUtils = __webpack_require__(200);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:sender:jsonp');
	}

	var form, area;

	function createIframe(id) {
	  debug('createIframe', id);
	  try {
	    // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	    return global.document.createElement('<iframe name="' + id + '">');
	  } catch (x) {
	    var iframe = global.document.createElement('iframe');
	    iframe.name = id;
	    return iframe;
	  }
	}

	function createForm() {
	  debug('createForm');
	  form = global.document.createElement('form');
	  form.style.display = 'none';
	  form.style.position = 'absolute';
	  form.method = 'POST';
	  form.enctype = 'application/x-www-form-urlencoded';
	  form.acceptCharset = 'UTF-8';

	  area = global.document.createElement('textarea');
	  area.name = 'd';
	  form.appendChild(area);

	  global.document.body.appendChild(form);
	}

	module.exports = function (url, payload, callback) {
	  debug(url, payload);
	  if (!form) {
	    createForm();
	  }
	  var id = 'a' + random.string(8);
	  form.target = id;
	  form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);

	  var iframe = createIframe(id);
	  iframe.id = id;
	  iframe.style.display = 'none';
	  form.appendChild(iframe);

	  try {
	    area.value = payload;
	  } catch (e) {
	    // seriously broken browsers get here
	  }
	  form.submit();

	  var completed = function completed(err) {
	    debug('completed', id, err);
	    if (!iframe.onerror) {
	      return;
	    }
	    iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
	    // Opera mini doesn't like if we GC iframe
	    // immediately, thus this timeout.
	    setTimeout(function () {
	      debug('cleaning up', id);
	      iframe.parentNode.removeChild(iframe);
	      iframe = null;
	    }, 500);
	    area.value = '';
	    // It is not possible to detect if the iframe succeeded or
	    // failed to submit our form.
	    callback(err);
	  };
	  iframe.onerror = function () {
	    debug('onerror', id);
	    completed();
	  };
	  iframe.onload = function () {
	    debug('onload', id);
	    completed();
	  };
	  iframe.onreadystatechange = function (e) {
	    debug('onreadystatechange', id, iframe.readyState, e);
	    if (iframe.readyState === 'complete') {
	      completed();
	    }
	  };
	  return function () {
	    debug('aborted', id);
	    completed(new Error('Aborted'));
	  };
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/jsonp.js');

	  __REACT_HOT_LOADER__.register(form, 'form', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/jsonp.js');

	  __REACT_HOT_LOADER__.register(area, 'area', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/jsonp.js');

	  __REACT_HOT_LOADER__.register(createIframe, 'createIframe', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/jsonp.js');

	  __REACT_HOT_LOADER__.register(createForm, 'createForm', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/jsonp.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), (function() { return this; }())))

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	__webpack_require__(241);

	var URL = __webpack_require__(201),
	    inherits = __webpack_require__(208),
	    JSON3 = __webpack_require__(229),
	    random = __webpack_require__(198),
	    escape = __webpack_require__(242),
	    urlUtils = __webpack_require__(200),
	    eventUtils = __webpack_require__(197),
	    transport = __webpack_require__(243),
	    objectUtils = __webpack_require__(232),
	    browser = __webpack_require__(221),
	    log = __webpack_require__(244),
	    Event = __webpack_require__(245),
	    EventTarget = __webpack_require__(210),
	    loc = __webpack_require__(246),
	    CloseEvent = __webpack_require__(247),
	    TransportMessageEvent = __webpack_require__(248),
	    InfoReceiver = __webpack_require__(249);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:main');
	}

	var transports;

	// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
	function SockJS(url, protocols, options) {
	  if (!(this instanceof SockJS)) {
	    return new SockJS(url, protocols, options);
	  }
	  if (arguments.length < 1) {
	    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
	  }
	  EventTarget.call(this);

	  this.readyState = SockJS.CONNECTING;
	  this.extensions = '';
	  this.protocol = '';

	  // non-standard extension
	  options = options || {};
	  if (options.protocols_whitelist) {
	    log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
	  }
	  this._transportsWhitelist = options.transports;
	  this._transportOptions = options.transportOptions || {};

	  var sessionId = options.sessionId || 8;
	  if (typeof sessionId === 'function') {
	    this._generateSessionId = sessionId;
	  } else if (typeof sessionId === 'number') {
	    this._generateSessionId = function () {
	      return random.string(sessionId);
	    };
	  } else {
	    throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
	  }

	  this._server = options.server || random.numberString(1000);

	  // Step 1 of WS spec - parse and validate the url. Issue #8
	  var parsedUrl = new URL(url);
	  if (!parsedUrl.host || !parsedUrl.protocol) {
	    throw new SyntaxError("The URL '" + url + "' is invalid");
	  } else if (parsedUrl.hash) {
	    throw new SyntaxError('The URL must not contain a fragment');
	  } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
	    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
	  }

	  var secure = parsedUrl.protocol === 'https:';
	  // Step 2 - don't allow secure origin with an insecure protocol
	  if (loc.protocol === 'https' && !secure) {
	    throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
	  }

	  // Step 3 - check port access - no need here
	  // Step 4 - parse protocols argument
	  if (!protocols) {
	    protocols = [];
	  } else if (!Array.isArray(protocols)) {
	    protocols = [protocols];
	  }

	  // Step 5 - check protocols argument
	  var sortedProtocols = protocols.sort();
	  sortedProtocols.forEach(function (proto, i) {
	    if (!proto) {
	      throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
	    }
	    if (i < sortedProtocols.length - 1 && proto === sortedProtocols[i + 1]) {
	      throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
	    }
	  });

	  // Step 6 - convert origin
	  var o = urlUtils.getOrigin(loc.href);
	  this._origin = o ? o.toLowerCase() : null;

	  // remove the trailing slash
	  parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));

	  // store the sanitized url
	  this.url = parsedUrl.href;
	  debug('using url', this.url);

	  // Step 7 - start connection in background
	  // obtain server info
	  // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
	  this._urlInfo = {
	    nullOrigin: !browser.hasDomain(),
	    sameOrigin: urlUtils.isOriginEqual(this.url, loc.href),
	    sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
	  };

	  this._ir = new InfoReceiver(this.url, this._urlInfo);
	  this._ir.once('finish', this._receiveInfo.bind(this));
	}

	inherits(SockJS, EventTarget);

	function userSetCode(code) {
	  return code === 1000 || code >= 3000 && code <= 4999;
	}

	SockJS.prototype.close = function (code, reason) {
	  // Step 1
	  if (code && !userSetCode(code)) {
	    throw new Error('InvalidAccessError: Invalid code');
	  }
	  // Step 2.4 states the max is 123 bytes, but we are just checking length
	  if (reason && reason.length > 123) {
	    throw new SyntaxError('reason argument has an invalid length');
	  }

	  // Step 3.1
	  if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
	    return;
	  }

	  // TODO look at docs to determine how to set this
	  var wasClean = true;
	  this._close(code || 1000, reason || 'Normal closure', wasClean);
	};

	SockJS.prototype.send = function (data) {
	  // #13 - convert anything non-string to string
	  // TODO this currently turns objects into [object Object]
	  if (typeof data !== 'string') {
	    data = '' + data;
	  }
	  if (this.readyState === SockJS.CONNECTING) {
	    throw new Error('InvalidStateError: The connection has not been established yet');
	  }
	  if (this.readyState !== SockJS.OPEN) {
	    return;
	  }
	  this._transport.send(escape.quote(data));
	};

	SockJS.version = __webpack_require__(230);

	SockJS.CONNECTING = 0;
	SockJS.OPEN = 1;
	SockJS.CLOSING = 2;
	SockJS.CLOSED = 3;

	SockJS.prototype._receiveInfo = function (info, rtt) {
	  debug('_receiveInfo', rtt);
	  this._ir = null;
	  if (!info) {
	    this._close(1002, 'Cannot connect to server');
	    return;
	  }

	  // establish a round-trip timeout (RTO) based on the
	  // round-trip time (RTT)
	  this._rto = this.countRTO(rtt);
	  // allow server to override url used for the actual transport
	  this._transUrl = info.base_url ? info.base_url : this.url;
	  info = objectUtils.extend(info, this._urlInfo);
	  debug('info', info);
	  // determine list of desired and supported transports
	  var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
	  this._transports = enabledTransports.main;
	  debug(this._transports.length + ' enabled transports');

	  this._connect();
	};

	SockJS.prototype._connect = function () {
	  for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
	    debug('attempt', Transport.transportName);
	    if (Transport.needBody) {
	      if (!global.document.body || typeof global.document.readyState !== 'undefined' && global.document.readyState !== 'complete' && global.document.readyState !== 'interactive') {
	        debug('waiting for body');
	        this._transports.unshift(Transport);
	        eventUtils.attachEvent('load', this._connect.bind(this));
	        return;
	      }
	    }

	    // calculate timeout based on RTO and round trips. Default to 5s
	    var timeoutMs = this._rto * Transport.roundTrips || 5000;
	    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
	    debug('using timeout', timeoutMs);

	    var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
	    var options = this._transportOptions[Transport.transportName];
	    debug('transport url', transportUrl);
	    var transportObj = new Transport(transportUrl, this._transUrl, options);
	    transportObj.on('message', this._transportMessage.bind(this));
	    transportObj.once('close', this._transportClose.bind(this));
	    transportObj.transportName = Transport.transportName;
	    this._transport = transportObj;

	    return;
	  }
	  this._close(2000, 'All transports failed', false);
	};

	SockJS.prototype._transportTimeout = function () {
	  debug('_transportTimeout');
	  if (this.readyState === SockJS.CONNECTING) {
	    this._transportClose(2007, 'Transport timed out');
	  }
	};

	SockJS.prototype._transportMessage = function (msg) {
	  debug('_transportMessage', msg);
	  var self = this,
	      type = msg.slice(0, 1),
	      content = msg.slice(1),
	      payload;

	  // first check for messages that don't need a payload
	  switch (type) {
	    case 'o':
	      this._open();
	      return;
	    case 'h':
	      this.dispatchEvent(new Event('heartbeat'));
	      debug('heartbeat', this.transport);
	      return;
	  }

	  if (content) {
	    try {
	      payload = JSON3.parse(content);
	    } catch (e) {
	      debug('bad json', content);
	    }
	  }

	  if (typeof payload === 'undefined') {
	    debug('empty payload', content);
	    return;
	  }

	  switch (type) {
	    case 'a':
	      if (Array.isArray(payload)) {
	        payload.forEach(function (p) {
	          debug('message', self.transport, p);
	          self.dispatchEvent(new TransportMessageEvent(p));
	        });
	      }
	      break;
	    case 'm':
	      debug('message', this.transport, payload);
	      this.dispatchEvent(new TransportMessageEvent(payload));
	      break;
	    case 'c':
	      if (Array.isArray(payload) && payload.length === 2) {
	        this._close(payload[0], payload[1], true);
	      }
	      break;
	  }
	};

	SockJS.prototype._transportClose = function (code, reason) {
	  debug('_transportClose', this.transport, code, reason);
	  if (this._transport) {
	    this._transport.removeAllListeners();
	    this._transport = null;
	    this.transport = null;
	  }

	  if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
	    this._connect();
	    return;
	  }

	  this._close(code, reason);
	};

	SockJS.prototype._open = function () {
	  debug('_open', this._transport.transportName, this.readyState);
	  if (this.readyState === SockJS.CONNECTING) {
	    if (this._transportTimeoutId) {
	      clearTimeout(this._transportTimeoutId);
	      this._transportTimeoutId = null;
	    }
	    this.readyState = SockJS.OPEN;
	    this.transport = this._transport.transportName;
	    this.dispatchEvent(new Event('open'));
	    debug('connected', this.transport);
	  } else {
	    // The server might have been restarted, and lost track of our
	    // connection.
	    this._close(1006, 'Server lost session');
	  }
	};

	SockJS.prototype._close = function (code, reason, wasClean) {
	  debug('_close', this.transport, code, reason, wasClean, this.readyState);
	  var forceFail = false;

	  if (this._ir) {
	    forceFail = true;
	    this._ir.close();
	    this._ir = null;
	  }
	  if (this._transport) {
	    this._transport.close();
	    this._transport = null;
	    this.transport = null;
	  }

	  if (this.readyState === SockJS.CLOSED) {
	    throw new Error('InvalidStateError: SockJS has already been closed');
	  }

	  this.readyState = SockJS.CLOSING;
	  setTimeout(function () {
	    this.readyState = SockJS.CLOSED;

	    if (forceFail) {
	      this.dispatchEvent(new Event('error'));
	    }

	    var e = new CloseEvent('close');
	    e.wasClean = wasClean || false;
	    e.code = code || 1000;
	    e.reason = reason;

	    this.dispatchEvent(e);
	    this.onmessage = this.onclose = this.onerror = null;
	    debug('disconnected');
	  }.bind(this), 0);
	};

	// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
	// and RFC 2988.
	SockJS.prototype.countRTO = function (rtt) {
	  // In a local environment, when using IE8/9 and the `jsonp-polling`
	  // transport the time needed to establish a connection (the time that pass
	  // from the opening of the transport to the call of `_dispatchOpen`) is
	  // around 200msec (the lower bound used in the article above) and this
	  // causes spurious timeouts. For this reason we calculate a value slightly
	  // larger than that used in the article.
	  if (rtt > 100) {
	    return 4 * rtt; // rto > 400msec
	  }
	  return 300 + rtt; // 300msec < rto <= 400msec
	};

	module.exports = function (availableTransports) {
	  transports = transport(availableTransports);
	  __webpack_require__(254)(SockJS, availableTransports);
	  return SockJS;
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/main.js');

	  __REACT_HOT_LOADER__.register(transports, 'transports', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/main.js');

	  __REACT_HOT_LOADER__.register(SockJS, 'SockJS', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/main.js');

	  __REACT_HOT_LOADER__.register(userSetCode, 'userSetCode', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/main.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), (function() { return this; }())))

/***/ },
/* 241 */
/***/ function(module, exports) {

	/* eslint-disable */
	/* jscs: disable */
	'use strict';

	// pulled specific shims from https://github.com/es-shims/es5-shim

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var ArrayPrototype = Array.prototype;
	var ObjectPrototype = Object.prototype;
	var FunctionPrototype = Function.prototype;
	var StringPrototype = String.prototype;
	var array_slice = ArrayPrototype.slice;

	var _toString = ObjectPrototype.toString;
	var isFunction = function isFunction(val) {
	    return ObjectPrototype.toString.call(val) === '[object Function]';
	};
	var isArray = function isArray(obj) {
	    return _toString.call(obj) === '[object Array]';
	};
	var isString = function isString(obj) {
	    return _toString.call(obj) === '[object String]';
	};

	var supportsDescriptors = Object.defineProperty && function () {
	    try {
	        Object.defineProperty({}, 'x', {});
	        return true;
	    } catch (e) {
	        /* this is ES3 */
	        return false;
	    }
	}();

	// Define configurable, writable and non-enumerable props
	// if they don't exist.
	var defineProperty;
	if (supportsDescriptors) {
	    defineProperty = function defineProperty(object, name, method, forceAssign) {
	        if (!forceAssign && name in object) {
	            return;
	        }
	        Object.defineProperty(object, name, {
	            configurable: true,
	            enumerable: false,
	            writable: true,
	            value: method
	        });
	    };
	} else {
	    defineProperty = function defineProperty(object, name, method, forceAssign) {
	        if (!forceAssign && name in object) {
	            return;
	        }
	        object[name] = method;
	    };
	}
	var defineProperties = function defineProperties(object, map, forceAssign) {
	    for (var name in map) {
	        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
	            defineProperty(object, name, map[name], forceAssign);
	        }
	    }
	};

	var toObject = function toObject(o) {
	    if (o == null) {
	        // this matches both null and undefined
	        throw new TypeError("can't convert " + o + ' to object');
	    }
	    return Object(o);
	};

	//
	// Util
	// ======
	//

	// ES5 9.4
	// http://es5.github.com/#x9.4
	// http://jsperf.com/to-integer

	function toInteger(num) {
	    var n = +num;
	    if (n !== n) {
	        // isNaN
	        n = 0;
	    } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
	        n = (n > 0 || -1) * Math.floor(Math.abs(n));
	    }
	    return n;
	}

	function ToUint32(x) {
	    return x >>> 0;
	}

	//
	// Function
	// ========
	//

	// ES-5 15.3.4.5
	// http://es5.github.com/#x15.3.4.5

	function Empty() {}

	defineProperties(FunctionPrototype, {
	    bind: function bind(that) {
	        // .length is 1
	        // 1. Let Target be the this value.
	        var target = this;
	        // 2. If IsCallable(Target) is false, throw a TypeError exception.
	        if (!isFunction(target)) {
	            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
	        }
	        // 3. Let A be a new (possibly empty) internal list of all of the
	        //   argument values provided after thisArg (arg1, arg2 etc), in order.
	        // XXX slicedArgs will stand in for "A" if used
	        var args = array_slice.call(arguments, 1); // for normal call
	        // 4. Let F be a new native ECMAScript object.
	        // 11. Set the [[Prototype]] internal property of F to the standard
	        //   built-in Function prototype object as specified in 15.3.3.1.
	        // 12. Set the [[Call]] internal property of F as described in
	        //   15.3.4.5.1.
	        // 13. Set the [[Construct]] internal property of F as described in
	        //   15.3.4.5.2.
	        // 14. Set the [[HasInstance]] internal property of F as described in
	        //   15.3.4.5.3.
	        var binder = function binder() {

	            if (this instanceof bound) {
	                // 15.3.4.5.2 [[Construct]]
	                // When the [[Construct]] internal method of a function object,
	                // F that was created using the bind function is called with a
	                // list of arguments ExtraArgs, the following steps are taken:
	                // 1. Let target be the value of F's [[TargetFunction]]
	                //   internal property.
	                // 2. If target has no [[Construct]] internal method, a
	                //   TypeError exception is thrown.
	                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
	                //   property.
	                // 4. Let args be a new list containing the same values as the
	                //   list boundArgs in the same order followed by the same
	                //   values as the list ExtraArgs in the same order.
	                // 5. Return the result of calling the [[Construct]] internal
	                //   method of target providing args as the arguments.

	                var result = target.apply(this, args.concat(array_slice.call(arguments)));
	                if (Object(result) === result) {
	                    return result;
	                }
	                return this;
	            } else {
	                // 15.3.4.5.1 [[Call]]
	                // When the [[Call]] internal method of a function object, F,
	                // which was created using the bind function is called with a
	                // this value and a list of arguments ExtraArgs, the following
	                // steps are taken:
	                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
	                //   property.
	                // 2. Let boundThis be the value of F's [[BoundThis]] internal
	                //   property.
	                // 3. Let target be the value of F's [[TargetFunction]] internal
	                //   property.
	                // 4. Let args be a new list containing the same values as the
	                //   list boundArgs in the same order followed by the same
	                //   values as the list ExtraArgs in the same order.
	                // 5. Return the result of calling the [[Call]] internal method
	                //   of target providing boundThis as the this value and
	                //   providing args as the arguments.

	                // equiv: target.call(this, ...boundArgs, ...args)
	                return target.apply(that, args.concat(array_slice.call(arguments)));
	            }
	        };

	        // 15. If the [[Class]] internal property of Target is "Function", then
	        //     a. Let L be the length property of Target minus the length of A.
	        //     b. Set the length own property of F to either 0 or L, whichever is
	        //       larger.
	        // 16. Else set the length own property of F to 0.

	        var boundLength = Math.max(0, target.length - args.length);

	        // 17. Set the attributes of the length own property of F to the values
	        //   specified in 15.3.5.1.
	        var boundArgs = [];
	        for (var i = 0; i < boundLength; i++) {
	            boundArgs.push('$' + i);
	        }

	        // XXX Build a dynamic function with desired amount of arguments is the only
	        // way to set the length property of a function.
	        // In environments where Content Security Policies enabled (Chrome extensions,
	        // for ex.) all use of eval or Function costructor throws an exception.
	        // However in all of these environments Function.prototype.bind exists
	        // and so this code will never be executed.
	        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

	        if (target.prototype) {
	            Empty.prototype = target.prototype;
	            bound.prototype = new Empty();
	            // Clean up dangling references.
	            Empty.prototype = null;
	        }

	        // TODO
	        // 18. Set the [[Extensible]] internal property of F to true.

	        // TODO
	        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
	        // 20. Call the [[DefineOwnProperty]] internal method of F with
	        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
	        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
	        //   false.
	        // 21. Call the [[DefineOwnProperty]] internal method of F with
	        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
	        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
	        //   and false.

	        // TODO
	        // NOTE Function objects created using Function.prototype.bind do not
	        // have a prototype property or the [[Code]], [[FormalParameters]], and
	        // [[Scope]] internal properties.
	        // XXX can't delete prototype in pure-js.

	        // 22. Return F.
	        return bound;
	    }
	});

	//
	// Array
	// =====
	//

	// ES5 15.4.3.2
	// http://es5.github.com/#x15.4.3.2
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
	defineProperties(Array, { isArray: isArray });

	var boxedString = Object('a');
	var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

	var properlyBoxesContext = function properlyBoxed(method) {
	    // Check node 0.6.21 bug where third parameter is not boxed
	    var properlyBoxesNonStrict = true;
	    var properlyBoxesStrict = true;
	    if (method) {
	        method.call('foo', function (_, __, context) {
	            if ((typeof context === 'undefined' ? 'undefined' : _typeof(context)) !== 'object') {
	                properlyBoxesNonStrict = false;
	            }
	        });

	        method.call([1], function () {
	            'use strict';

	            properlyBoxesStrict = typeof this === 'string';
	        }, 'x');
	    }
	    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
	};

	defineProperties(ArrayPrototype, {
	    forEach: function forEach(fun /*, thisp*/) {
	        var object = toObject(this),
	            self = splitString && isString(this) ? this.split('') : object,
	            thisp = arguments[1],
	            i = -1,
	            length = self.length >>> 0;

	        // If no callback function or if callback is not a callable function
	        if (!isFunction(fun)) {
	            throw new TypeError(); // TODO message
	        }

	        while (++i < length) {
	            if (i in self) {
	                // Invoke the callback function with call, passing arguments:
	                // context, property value, property key, thisArg object
	                // context
	                fun.call(thisp, self[i], i, object);
	            }
	        }
	    }
	}, !properlyBoxesContext(ArrayPrototype.forEach));

	// ES5 15.4.4.14
	// http://es5.github.com/#x15.4.4.14
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
	var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
	defineProperties(ArrayPrototype, {
	    indexOf: function indexOf(sought /*, fromIndex */) {
	        var self = splitString && isString(this) ? this.split('') : toObject(this),
	            length = self.length >>> 0;

	        if (!length) {
	            return -1;
	        }

	        var i = 0;
	        if (arguments.length > 1) {
	            i = toInteger(arguments[1]);
	        }

	        // handle negative indices
	        i = i >= 0 ? i : Math.max(0, length + i);
	        for (; i < length; i++) {
	            if (i in self && self[i] === sought) {
	                return i;
	            }
	        }
	        return -1;
	    }
	}, hasFirefox2IndexOfBug);

	//
	// String
	// ======
	//

	// ES5 15.5.4.14
	// http://es5.github.com/#x15.5.4.14

	// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
	// Many browsers do not split properly with regular expressions or they
	// do not perform the split correctly under obscure conditions.
	// See http://blog.stevenlevithan.com/archives/cross-browser-split
	// I've tested in many browsers and this seems to cover the deviant ones:
	//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
	//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
	//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
	//       [undefined, "t", undefined, "e", ...]
	//    ''.split(/.?/) should be [], not [""]
	//    '.'.split(/()()/) should be ["."], not ["", "", "."]

	var string_split = StringPrototype.split;
	if ('ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 || 'tesst'.split(/(s)*/)[1] === 't' || 'test'.split(/(?:)/, -1).length !== 4 || ''.split(/.?/).length || '.'.split(/()()/).length > 1) {
	    (function () {
	        var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group

	        StringPrototype.split = function (separator, limit) {
	            var string = this;
	            if (separator === void 0 && limit === 0) {
	                return [];
	            }

	            // If `separator` is not a regex, use native split
	            if (_toString.call(separator) !== '[object RegExp]') {
	                return string_split.call(this, separator, limit);
	            }

	            var output = [],
	                flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.extended ? 'x' : '') + ( // Proposed for ES6
	            separator.sticky ? 'y' : ''),
	                // Firefox 3+
	            lastLastIndex = 0,

	            // Make `global` and avoid `lastIndex` issues by working with a copy
	            separator2,
	                match,
	                lastIndex,
	                lastLength;
	            separator = new RegExp(separator.source, flags + 'g');
	            string += ''; // Type-convert
	            if (!compliantExecNpcg) {
	                // Doesn't need flags gy, but they don't hurt
	                separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
	            }
	            /* Values for `limit`, per the spec:
	             * If undefined: 4294967295 // Math.pow(2, 32) - 1
	             * If 0, Infinity, or NaN: 0
	             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	             * If other: Type-convert, then use the above rules
	             */
	            limit = limit === void 0 ? -1 >>> 0 : // Math.pow(2, 32) - 1
	            ToUint32(limit);
	            while (match = separator.exec(string)) {
	                // `separator.lastIndex` is not reliable cross-browser
	                lastIndex = match.index + match[0].length;
	                if (lastIndex > lastLastIndex) {
	                    output.push(string.slice(lastLastIndex, match.index));
	                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
	                    // nonparticipating capturing groups
	                    if (!compliantExecNpcg && match.length > 1) {
	                        match[0].replace(separator2, function () {
	                            for (var i = 1; i < arguments.length - 2; i++) {
	                                if (arguments[i] === void 0) {
	                                    match[i] = void 0;
	                                }
	                            }
	                        });
	                    }
	                    if (match.length > 1 && match.index < string.length) {
	                        ArrayPrototype.push.apply(output, match.slice(1));
	                    }
	                    lastLength = match[0].length;
	                    lastLastIndex = lastIndex;
	                    if (output.length >= limit) {
	                        break;
	                    }
	                }
	                if (separator.lastIndex === match.index) {
	                    separator.lastIndex++; // Avoid an infinite loop
	                }
	            }
	            if (lastLastIndex === string.length) {
	                if (lastLength || !separator.test('')) {
	                    output.push('');
	                }
	            } else {
	                output.push(string.slice(lastLastIndex));
	            }
	            return output.length > limit ? output.slice(0, limit) : output;
	        };
	    })();

	    // [bugfix, chrome]
	    // If separator is undefined, then the result array contains just one String,
	    // which is the this value (converted to a String). If limit is not undefined,
	    // then the output array is truncated so that it contains no more than limit
	    // elements.
	    // "0".split(undefined, 0) -> []
	} else if ('0'.split(void 0, 0).length) {
	    StringPrototype.split = function split(separator, limit) {
	        if (separator === void 0 && limit === 0) {
	            return [];
	        }
	        return string_split.call(this, separator, limit);
	    };
	}

	// ES5 15.5.4.20
	// whitespace from: http://es5.github.io/#x15.5.4.20
	var ws = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
	var zeroWidth = '\u200B';
	var wsRegexChars = '[' + ws + ']';
	var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
	var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
	var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
	defineProperties(StringPrototype, {
	    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
	    // http://perfectionkills.com/whitespace-deviations/
	    trim: function trim() {
	        if (this === void 0 || this === null) {
	            throw new TypeError("can't convert " + this + ' to object');
	        }
	        return String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
	    }
	}, hasTrimWhitespaceBug);

	// ECMA-262, 3rd B.2.3
	// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
	// non-normative section suggesting uniform semantics and it should be
	// normalized across all browsers
	// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
	var string_substr = StringPrototype.substr;
	var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
	defineProperties(StringPrototype, {
	    substr: function substr(start, length) {
	        return string_substr.call(this, start < 0 ? (start = this.length + start) < 0 ? 0 : start : start, length);
	    }
	}, hasNegativeSubstrBug);
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(ArrayPrototype, 'ArrayPrototype', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(ObjectPrototype, 'ObjectPrototype', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(FunctionPrototype, 'FunctionPrototype', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(StringPrototype, 'StringPrototype', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(array_slice, 'array_slice', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(_toString, '_toString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(isFunction, 'isFunction', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(isArray, 'isArray', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(isString, 'isString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(supportsDescriptors, 'supportsDescriptors', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(defineProperty, 'defineProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(defineProperties, 'defineProperties', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(toObject, 'toObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(toInteger, 'toInteger', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(ToUint32, 'ToUint32', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(Empty, 'Empty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(boxedString, 'boxedString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(splitString, 'splitString', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(properlyBoxesContext, 'properlyBoxesContext', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(hasFirefox2IndexOfBug, 'hasFirefox2IndexOfBug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(string_split, 'string_split', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(ws, 'ws', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(zeroWidth, 'zeroWidth', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(wsRegexChars, 'wsRegexChars', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(trimBeginRegexp, 'trimBeginRegexp', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(trimEndRegexp, 'trimEndRegexp', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(hasTrimWhitespaceBug, 'hasTrimWhitespaceBug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(string_substr, 'string_substr', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');

	    __REACT_HOT_LOADER__.register(hasNegativeSubstrBug, 'hasNegativeSubstrBug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/shims.js');
	}();

	;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var JSON3 = __webpack_require__(229);

	// Some extra characters that Chrome gets wrong, and substitutes with
	// something else on the wire.
	var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
	    extraLookup;

	// This may be quite slow, so let's delay until user actually uses bad
	// characters.
	var unrollLookup = function unrollLookup(escapable) {
	  var i;
	  var unrolled = {};
	  var c = [];
	  for (i = 0; i < 65536; i++) {
	    c.push(String.fromCharCode(i));
	  }
	  escapable.lastIndex = 0;
	  c.join('').replace(escapable, function (a) {
	    unrolled[a] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	    return '';
	  });
	  escapable.lastIndex = 0;
	  return unrolled;
	};

	// Quote string, also taking care of unicode characters that browsers
	// often break. Especially, take care of unicode surrogates:
	// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
	module.exports = {
	  quote: function quote(string) {
	    var quoted = JSON3.stringify(string);

	    // In most cases this should be very fast and good enough.
	    extraEscapable.lastIndex = 0;
	    if (!extraEscapable.test(quoted)) {
	      return quoted;
	    }

	    if (!extraLookup) {
	      extraLookup = unrollLookup(extraEscapable);
	    }

	    return quoted.replace(extraEscapable, function (a) {
	      return extraLookup[a];
	    });
	  }
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(extraEscapable, 'extraEscapable', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/escape.js');

	  __REACT_HOT_LOADER__.register(extraLookup, 'extraLookup', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/escape.js');

	  __REACT_HOT_LOADER__.register(unrollLookup, 'unrollLookup', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/escape.js');
	}();

	;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:utils:transport');
	}

	module.exports = function (availableTransports) {
	  return {
	    filterToEnabled: function filterToEnabled(transportsWhitelist, info) {
	      var transports = {
	        main: [],
	        facade: []
	      };
	      if (!transportsWhitelist) {
	        transportsWhitelist = [];
	      } else if (typeof transportsWhitelist === 'string') {
	        transportsWhitelist = [transportsWhitelist];
	      }

	      availableTransports.forEach(function (trans) {
	        if (!trans) {
	          return;
	        }

	        if (trans.transportName === 'websocket' && info.websocket === false) {
	          debug('disabled from server', 'websocket');
	          return;
	        }

	        if (transportsWhitelist.length && transportsWhitelist.indexOf(trans.transportName) === -1) {
	          debug('not in whitelist', trans.transportName);
	          return;
	        }

	        if (trans.enabled(info)) {
	          debug('enabled', trans.transportName);
	          transports.main.push(trans);
	          if (trans.facadeTransport) {
	            transports.facade.push(trans.facadeTransport);
	          }
	        } else {
	          debug('disabled', trans.transportName);
	        }
	      });
	      return transports;
	    }
	  };
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/transport.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 244 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var logObject = {};
	['log', 'debug', 'warn'].forEach(function (level) {
	  var levelExists;

	  try {
	    levelExists = global.console && global.console[level] && global.console[level].apply;
	  } catch (e) {
	    // do nothing
	  }

	  logObject[level] = levelExists ? function () {
	    return global.console[level].apply(global.console, arguments);
	  } : level === 'log' ? function () {} : logObject.log;
	});

	module.exports = logObject;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(logObject, 'logObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/utils/log.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 245 */
/***/ function(module, exports) {

	'use strict';

	function Event(eventType) {
	  this.type = eventType;
	}

	Event.prototype.initEvent = function (eventType, canBubble, cancelable) {
	  this.type = eventType;
	  this.bubbles = canBubble;
	  this.cancelable = cancelable;
	  this.timeStamp = +new Date();
	  return this;
	};

	Event.prototype.stopPropagation = function () {};
	Event.prototype.preventDefault = function () {};

	Event.CAPTURING_PHASE = 1;
	Event.AT_TARGET = 2;
	Event.BUBBLING_PHASE = 3;

	module.exports = Event;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Event, 'Event', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/event/event.js');
	}();

	;

/***/ },
/* 246 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	module.exports = global.location || {
	  origin: 'http://localhost:80',
	  protocol: 'http',
	  host: 'localhost',
	  port: 80,
	  href: 'http://localhost/',
	  hash: ''
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    Event = __webpack_require__(245);

	function CloseEvent() {
	  Event.call(this);
	  this.initEvent('close', false, false);
	  this.wasClean = false;
	  this.code = 0;
	  this.reason = '';
	}

	inherits(CloseEvent, Event);

	module.exports = CloseEvent;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(CloseEvent, 'CloseEvent', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/event/close.js');
	}();

	;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    Event = __webpack_require__(245);

	function TransportMessageEvent(data) {
	  Event.call(this);
	  this.initEvent('message', false, false);
	  this.data = data;
	}

	inherits(TransportMessageEvent, Event);

	module.exports = TransportMessageEvent;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(TransportMessageEvent, 'TransportMessageEvent', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/event/trans-message.js');
	}();

	;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var EventEmitter = __webpack_require__(209).EventEmitter,
	    inherits = __webpack_require__(208),
	    urlUtils = __webpack_require__(200),
	    XDR = __webpack_require__(223),
	    XHRCors = __webpack_require__(218),
	    XHRLocal = __webpack_require__(220),
	    XHRFake = __webpack_require__(250),
	    InfoIframe = __webpack_require__(251),
	    InfoAjax = __webpack_require__(253);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:info-receiver');
	}

	function InfoReceiver(baseUrl, urlInfo) {
	  debug(baseUrl);
	  var self = this;
	  EventEmitter.call(this);

	  setTimeout(function () {
	    self.doXhr(baseUrl, urlInfo);
	  }, 0);
	}

	inherits(InfoReceiver, EventEmitter);

	// TODO this is currently ignoring the list of available transports and the whitelist

	InfoReceiver._getReceiver = function (baseUrl, url, urlInfo) {
	  // determine method of CORS support (if needed)
	  if (urlInfo.sameOrigin) {
	    return new InfoAjax(url, XHRLocal);
	  }
	  if (XHRCors.enabled) {
	    return new InfoAjax(url, XHRCors);
	  }
	  if (XDR.enabled && urlInfo.sameScheme) {
	    return new InfoAjax(url, XDR);
	  }
	  if (InfoIframe.enabled()) {
	    return new InfoIframe(baseUrl, url);
	  }
	  return new InfoAjax(url, XHRFake);
	};

	InfoReceiver.prototype.doXhr = function (baseUrl, urlInfo) {
	  var self = this,
	      url = urlUtils.addPath(baseUrl, '/info');
	  debug('doXhr', url);

	  this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);

	  this.timeoutRef = setTimeout(function () {
	    debug('timeout');
	    self._cleanup(false);
	    self.emit('finish');
	  }, InfoReceiver.timeout);

	  this.xo.once('finish', function (info, rtt) {
	    debug('finish', info, rtt);
	    self._cleanup(true);
	    self.emit('finish', info, rtt);
	  });
	};

	InfoReceiver.prototype._cleanup = function (wasClean) {
	  debug('_cleanup');
	  clearTimeout(this.timeoutRef);
	  this.timeoutRef = null;
	  if (!wasClean && this.xo) {
	    this.xo.close();
	  }
	  this.xo = null;
	};

	InfoReceiver.prototype.close = function () {
	  debug('close');
	  this.removeAllListeners();
	  this._cleanup(false);
	};

	InfoReceiver.timeout = 8000;

	module.exports = InfoReceiver;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-receiver.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-receiver.js');

	  __REACT_HOT_LOADER__.register(InfoReceiver, 'InfoReceiver', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-receiver.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EventEmitter = __webpack_require__(209).EventEmitter,
	    inherits = __webpack_require__(208);

	function XHRFake() /* method, url, payload, opts */{
	  var self = this;
	  EventEmitter.call(this);

	  this.to = setTimeout(function () {
	    self.emit('finish', 200, '{}');
	  }, XHRFake.timeout);
	}

	inherits(XHRFake, EventEmitter);

	XHRFake.prototype.close = function () {
	  clearTimeout(this.to);
	};

	XHRFake.timeout = 2000;

	module.exports = XHRFake;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/xhr-fake.js');

	  __REACT_HOT_LOADER__.register(XHRFake, 'XHRFake', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/transport/sender/xhr-fake.js');
	}();

	;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	var EventEmitter = __webpack_require__(209).EventEmitter,
	    inherits = __webpack_require__(208),
	    JSON3 = __webpack_require__(229),
	    utils = __webpack_require__(197),
	    IframeTransport = __webpack_require__(228),
	    InfoReceiverIframe = __webpack_require__(252);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:info-iframe');
	}

	function InfoIframe(baseUrl, url) {
	  var self = this;
	  EventEmitter.call(this);

	  var go = function go() {
	    var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);

	    ifr.once('message', function (msg) {
	      if (msg) {
	        var d;
	        try {
	          d = JSON3.parse(msg);
	        } catch (e) {
	          debug('bad json', msg);
	          self.emit('finish');
	          self.close();
	          return;
	        }

	        var info = d[0],
	            rtt = d[1];
	        self.emit('finish', info, rtt);
	      }
	      self.close();
	    });

	    ifr.once('close', function () {
	      self.emit('finish');
	      self.close();
	    });
	  };

	  // TODO this seems the same as the 'needBody' from transports
	  if (!global.document.body) {
	    utils.attachEvent('load', go);
	  } else {
	    go();
	  }
	}

	inherits(InfoIframe, EventEmitter);

	InfoIframe.enabled = function () {
	  return IframeTransport.enabled();
	};

	InfoIframe.prototype.close = function () {
	  if (this.ifr) {
	    this.ifr.close();
	  }
	  this.removeAllListeners();
	  this.ifr = null;
	};

	module.exports = InfoIframe;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-iframe.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-iframe.js');

	  __REACT_HOT_LOADER__.register(InfoIframe, 'InfoIframe', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-iframe.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), (function() { return this; }())))

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(208),
	    EventEmitter = __webpack_require__(209).EventEmitter,
	    JSON3 = __webpack_require__(229),
	    XHRLocalObject = __webpack_require__(220),
	    InfoAjax = __webpack_require__(253);

	function InfoReceiverIframe(transUrl) {
	  var self = this;
	  EventEmitter.call(this);

	  this.ir = new InfoAjax(transUrl, XHRLocalObject);
	  this.ir.once('finish', function (info, rtt) {
	    self.ir = null;
	    self.emit('message', JSON3.stringify([info, rtt]));
	  });
	}

	inherits(InfoReceiverIframe, EventEmitter);

	InfoReceiverIframe.transportName = 'iframe-info-receiver';

	InfoReceiverIframe.prototype.close = function () {
	  if (this.ir) {
	    this.ir.close();
	    this.ir = null;
	  }
	  this.removeAllListeners();
	};

	module.exports = InfoReceiverIframe;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-iframe-receiver.js');

	  __REACT_HOT_LOADER__.register(InfoReceiverIframe, 'InfoReceiverIframe', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-iframe-receiver.js');
	}();

	;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var EventEmitter = __webpack_require__(209).EventEmitter,
	    inherits = __webpack_require__(208),
	    JSON3 = __webpack_require__(229),
	    objectUtils = __webpack_require__(232);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:info-ajax');
	}

	function InfoAjax(url, AjaxObject) {
	  EventEmitter.call(this);

	  var self = this;
	  var t0 = +new Date();
	  this.xo = new AjaxObject('GET', url);

	  this.xo.once('finish', function (status, text) {
	    var info, rtt;
	    if (status === 200) {
	      rtt = +new Date() - t0;
	      if (text) {
	        try {
	          info = JSON3.parse(text);
	        } catch (e) {
	          debug('bad json', text);
	        }
	      }

	      if (!objectUtils.isObject(info)) {
	        info = {};
	      }
	    }
	    self.emit('finish', info, rtt);
	    self.removeAllListeners();
	  });
	}

	inherits(InfoAjax, EventEmitter);

	InfoAjax.prototype.close = function () {
	  this.removeAllListeners();
	  this.xo.close();
	};

	module.exports = InfoAjax;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(EventEmitter, 'EventEmitter', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-ajax.js');

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-ajax.js');

	  __REACT_HOT_LOADER__.register(InfoAjax, 'InfoAjax', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/info-ajax.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var urlUtils = __webpack_require__(200),
	    eventUtils = __webpack_require__(197),
	    JSON3 = __webpack_require__(229),
	    FacadeJS = __webpack_require__(255),
	    InfoIframeReceiver = __webpack_require__(252),
	    iframeUtils = __webpack_require__(231),
	    loc = __webpack_require__(246);

	var debug = function debug() {};
	if (process.env.NODE_ENV !== 'production') {
	  debug = __webpack_require__(205)('sockjs-client:iframe-bootstrap');
	}

	module.exports = function (SockJS, availableTransports) {
	  var transportMap = {};
	  availableTransports.forEach(function (at) {
	    if (at.facadeTransport) {
	      transportMap[at.facadeTransport.transportName] = at.facadeTransport;
	    }
	  });

	  // hard-coded for the info iframe
	  // TODO see if we can make this more dynamic
	  transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
	  var parentOrigin;

	  /* eslint-disable camelcase */
	  SockJS.bootstrap_iframe = function () {
	    /* eslint-enable camelcase */
	    var facade;
	    iframeUtils.currentWindowId = loc.hash.slice(1);
	    var onMessage = function onMessage(e) {
	      if (e.source !== parent) {
	        return;
	      }
	      if (typeof parentOrigin === 'undefined') {
	        parentOrigin = e.origin;
	      }
	      if (e.origin !== parentOrigin) {
	        return;
	      }

	      var iframeMessage;
	      try {
	        iframeMessage = JSON3.parse(e.data);
	      } catch (ignored) {
	        debug('bad json', e.data);
	        return;
	      }

	      if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
	        return;
	      }
	      switch (iframeMessage.type) {
	        case 's':
	          var p;
	          try {
	            p = JSON3.parse(iframeMessage.data);
	          } catch (ignored) {
	            debug('bad json', iframeMessage.data);
	            break;
	          }
	          var version = p[0];
	          var transport = p[1];
	          var transUrl = p[2];
	          var baseUrl = p[3];
	          debug(version, transport, transUrl, baseUrl);
	          // change this to semver logic
	          if (version !== SockJS.version) {
	            throw new Error('Incompatible SockJS! Main site uses:' + ' "' + version + '", the iframe:' + ' "' + SockJS.version + '".');
	          }

	          if (!urlUtils.isOriginEqual(transUrl, loc.href) || !urlUtils.isOriginEqual(baseUrl, loc.href)) {
	            throw new Error('Can\'t connect to different domain from within an ' + 'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
	          }
	          facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
	          break;
	        case 'm':
	          facade._send(iframeMessage.data);
	          break;
	        case 'c':
	          if (facade) {
	            facade._close();
	          }
	          facade = null;
	          break;
	      }
	    };

	    eventUtils.attachEvent('message', onMessage);

	    // Start
	    iframeUtils.postMessage('s');
	  };
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(debug, 'debug', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/iframe-bootstrap.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var JSON3 = __webpack_require__(229),
	    iframeUtils = __webpack_require__(231);

	function FacadeJS(transport) {
	  this._transport = transport;
	  transport.on('message', this._transportMessage.bind(this));
	  transport.on('close', this._transportClose.bind(this));
	}

	FacadeJS.prototype._transportClose = function (code, reason) {
	  iframeUtils.postMessage('c', JSON3.stringify([code, reason]));
	};
	FacadeJS.prototype._transportMessage = function (frame) {
	  iframeUtils.postMessage('t', frame);
	};
	FacadeJS.prototype._send = function (data) {
	  this._transport.send(data);
	};
	FacadeJS.prototype._close = function () {
	  this._transport.close();
	  this._transport.removeAllListeners();
	};

	module.exports = FacadeJS;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(FacadeJS, 'FacadeJS', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack-dev-server/node_modules/sockjs-client/lib/facade.js');
	}();

	;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if (false) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_hash__) >= 0;
		};
		var check = function check() {
			module.hot.check(function (err, updatedModules) {
				if (err) {
					if (module.hot.status() in {
						abort: 1,
						fail: 1
					}) {
						console.warn("[HMR] Cannot check for update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
					} else {
						console.warn("[HMR] Update check failed: " + err.stack || err.message);
					}
					return;
				}

				if (!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					return;
				}

				module.hot.apply({
					ignoreUnaccepted: true
				}, function (err, renewedModules) {
					if (err) {
						if (module.hot.status() in {
							abort: 1,
							fail: 1
						}) {
							console.warn("[HMR] Cannot apply update. Need to do a full reload!");
							console.warn("[HMR] " + err.stack || err.message);
						} else {
							console.warn("[HMR] Update failed: " + err.stack || err.message);
						}
						return;
					}

					if (!upToDate()) {
						check();
					}

					require("./log-apply-result")(updatedModules, renewedModules);

					if (upToDate()) {
						console.log("[HMR] App is up to date.");
					}
				});
			});
		};
		var addEventListener = window.addEventListener ? function (eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function (eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function (event) {
			if (typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if (!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}
	;

	var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
			return;
		}

		__REACT_HOT_LOADER__.register(lastData, "lastData", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/hot/only-dev-server.js");

		__REACT_HOT_LOADER__.register(upToDate, "upToDate", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/hot/only-dev-server.js");

		__REACT_HOT_LOADER__.register(check, "check", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/hot/only-dev-server.js");

		__REACT_HOT_LOADER__.register(addEventListener, "addEventListener", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/webpack/hot/only-dev-server.js");
	}();

	;

/***/ }
/******/ ]);