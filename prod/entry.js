webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(257);


/***/ },

/***/ 3:
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

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactHotLoader = __webpack_require__(258);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(265);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _appContainer = __webpack_require__(408);

	var _appContainer2 = _interopRequireDefault(_appContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const module_1 = require('./module1.js');
	// const module_3 = require('./module3.js');


	// let entry = (opts) => {
	// 	console.log('entry run1!');
	// 	module_1();
	// 	module_3();
	// debugger;
	// const module_2 = require('./module2.js')
	// import * as moudle_2 from './module2';
	_reactDom2.default.render(_react2.default.createElement(
	  _reactHotLoader.AppContainer,
	  null,
	  _react2.default.createElement(_appContainer2.default, null)
	), document.getElementById('app-container'));

	// }

	// window.entry = entry;
	// entry();

	// module.exports = entry;

	if (false) {
	  module.hot.accept('./appContainer', function () {
	    // If you use Webpack 2 in ES modules mode, you can
	    // use <App /> here rather than require() a <NextApp />.
	    var appContainer = require('./appContainer');
	    var NextApp = appContainer.default || appContainer;
	    _reactDom2.default.render(_react2.default.createElement(
	      _reactHotLoader.AppContainer,
	      null,
	      _react2.default.createElement(NextApp, null)
	    ), document.getElementById('app-container'));
	  });
	}
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(259);
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AppContainer = __webpack_require__(260);

	module.exports = function warnAboutIncorrectUsage(arg) {
	  if (this && this.callback) {
	    throw new Error('React Hot Loader: The Webpack loader is now exported separately. ' + 'If you use Babel, we recommend that you remove "react-hot-loader" ' + 'from the "loaders" section of your Webpack configuration altogether, ' + 'and instead add "react-hot-loader/babel" to the "plugins" section ' + 'of your .babelrc file. ' + 'If you prefer not to use Babel, replace "react-hot-loader" or ' + '"react-hot" with "react-hot-loader/webpack" in the "loaders" section ' + 'of your Webpack configuration.');
	  } else if (arg && arg.types && arg.types.IfStatement) {
	    throw new Error('React Hot Loader: The Babel plugin is exported separately. ' + 'Replace "react-hot-loader" with "react-hot-loader/babel" ' + 'in the "plugins" section of your .babelrc file. ' + 'While we recommend the above, if you prefer not to use Babel, ' + 'you may remove "react-hot-loader" from the "plugins" section of ' + 'your .babelrc file altogether, and instead add ' + '"react-hot-loader/webpack" to the "loaders" section of your Webpack ' + 'configuration.');
	  } else {
	    throw new Error('React Hot Loader does not have a default export. ' + 'If you use the import statement, make sure to include the ' + 'curly braces: import { AppContainer } from "react-hot-loader". ' + 'If you use CommonJS, make sure to read the named export: ' + 'require("react-hot-loader").AppContainer.');
	  }
	};

	module.exports.AppContainer = AppContainer;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, process) {/* eslint-disable global-require */

	'use strict';

	if (!module.hot && process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(261);
	} else {
	  module.exports = __webpack_require__(262);
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

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable react/prop-types */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var React = __webpack_require__(7);
	var Component = React.Component;

	var AppContainer = function (_Component) {
	  _inherits(AppContainer, _Component);

	  function AppContainer() {
	    _classCallCheck(this, AppContainer);

	    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
	  }

	  _createClass(AppContainer, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.component) {
	        return React.createElement(this.props.component, this.props.props);
	      }

	      return React.Children.only(this.props.children);
	    }
	  }]);

	  return AppContainer;
	}(Component);

	module.exports = AppContainer;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.prod.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.prod.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.prod.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.prod.js");

	  __REACT_HOT_LOADER__.register(Component, "Component", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.prod.js");

	  __REACT_HOT_LOADER__.register(AppContainer, "AppContainer", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.prod.js");
	}();

	;

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var React = __webpack_require__(7);
	var deepForceUpdate = __webpack_require__(263);
	var Redbox = __webpack_require__(264).default;
	var Component = React.Component;

	var AppContainer = function (_Component) {
	  _inherits(AppContainer, _Component);

	  function AppContainer(props) {
	    _classCallCheck(this, AppContainer);

	    var _this = _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).call(this, props));

	    _this.state = { error: null };
	    return _this;
	  }

	  _createClass(AppContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        console.error('React Hot Loader: It appears that "react-hot-loader/patch" ' + 'did not run immediately before the app started. Make sure that it ' + 'runs before any other code. For example, if you use Webpack, ' + 'you can add "react-hot-loader/patch" as the very first item to the ' + '"entry" array in its config. Alternatively, you can add ' + 'require("react-hot-loader/patch") as the very first line ' + 'in the application code, before any other imports.');
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      // Hot reload is happening.
	      // Retry rendering!
	      this.setState({
	        error: null
	      });
	      // Force-update the whole tree, including
	      // components that refuse to update.
	      deepForceUpdate(this);
	    }

	    // This hook is going to become official in React 15.x.
	    // In 15.0, it only catches errors on initial mount.
	    // Later it will work for updates as well:
	    // https://github.com/facebook/react/pull/6020

	  }, {
	    key: 'unstable_handleError',
	    value: function unstable_handleError(error) {
	      // eslint-disable-line camelcase
	      this.setState({
	        error: error
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var error = this.state.error;

	      if (error) {
	        return React.createElement(this.props.errorReporter, { error: error });
	      }

	      if (this.props.component) {
	        return React.createElement(this.props.component, this.props.props);
	      }

	      return React.Children.only(this.props.children);
	    }
	  }]);

	  return AppContainer;
	}(Component);

	AppContainer.propTypes = {
	  component: function component(props) {
	    if (props.component) {
	      return new Error('Passing "component" prop to <AppContainer /> is deprecated. ' + 'Replace <AppContainer component={App} /> with <AppContainer><App /></AppContainer>.');
	    }

	    return undefined;
	  },
	  props: function props(_props) {
	    if (_props.props) {
	      return new Error('Passing "props" prop to <AppContainer /> is deprecated. ' + 'Replace <AppContainer component={App} props={{ myProp: myValue }} /> ' + 'with <AppContainer><App myProp={myValue} /></AppContainer>.');
	    }

	    return undefined;
	  },
	  children: function children(props) {
	    if (React.Children.count(props.children) !== 1) {
	      return new Error('Invalid prop "children" supplied to AppContainer. ' + 'Expected a single React element with your app’s root component, e.g. <App />.');
	    }

	    return undefined;
	  }
	};

	AppContainer.defaultProps = {
	  errorReporter: Redbox
	};

	module.exports = AppContainer;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.dev.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.dev.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.dev.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.dev.js");

	  __REACT_HOT_LOADER__.register(Redbox, "Redbox", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.dev.js");

	  __REACT_HOT_LOADER__.register(Component, "Component", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.dev.js");

	  __REACT_HOT_LOADER__.register(AppContainer, "AppContainer", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/lib/AppContainer.dev.js");
	}();

	;

/***/ },

/***/ 263:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = deepForceUpdate;
	function traverseRenderedChildren(internalInstance, callback, argument) {
	  callback(internalInstance, argument);

	  if (internalInstance._renderedComponent) {
	    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
	  } else {
	    for (var key in internalInstance._renderedChildren) {
	      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
	        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
	      }
	    }
	  }
	}

	function setPendingForceUpdate(internalInstance) {
	  if (internalInstance._pendingForceUpdate === false) {
	    internalInstance._pendingForceUpdate = true;
	  }
	}

	function forceUpdateIfPending(internalInstance) {
	  if (internalInstance._pendingForceUpdate === true) {
	    var publicInstance = internalInstance._instance;
	    var updater = publicInstance.updater;

	    if (typeof publicInstance.forceUpdate === 'function') {
	      publicInstance.forceUpdate();
	    } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
	      updater.enqueueForceUpdate(publicInstance);
	    }
	  }
	}

	function deepForceUpdate(instance) {
	  var internalInstance = instance._reactInternalInstance;
	  traverseRenderedChildren(internalInstance, setPendingForceUpdate);
	  traverseRenderedChildren(internalInstance, forceUpdateIfPending);
	}

	module.exports = exports['default'];
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(traverseRenderedChildren, 'traverseRenderedChildren', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-deep-force-update/lib/index.js');

	  __REACT_HOT_LOADER__.register(setPendingForceUpdate, 'setPendingForceUpdate', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-deep-force-update/lib/index.js');

	  __REACT_HOT_LOADER__.register(forceUpdateIfPending, 'forceUpdateIfPending', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-deep-force-update/lib/index.js');

	  __REACT_HOT_LOADER__.register(deepForceUpdate, 'deepForceUpdate', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/react-deep-force-update/lib/index.js');
	}();

	;

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.RedBoxError = undefined;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(265);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _style = __webpack_require__(403);

	var _style2 = _interopRequireDefault(_style);

	var _errorStackParser = __webpack_require__(404);

	var _errorStackParser2 = _interopRequireDefault(_errorStackParser);

	var _objectAssign = __webpack_require__(406);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _lib = __webpack_require__(407);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var RedBoxError = exports.RedBoxError = function (_get__2) {
	  _inherits(RedBoxError, _get__2);

	  function RedBoxError() {
	    _classCallCheck(this, RedBoxError);

	    return _possibleConstructorReturn(this, (RedBoxError.__proto__ || Object.getPrototypeOf(RedBoxError)).apply(this, arguments));
	  }

	  _createClass(RedBoxError, [{
	    key: 'renderFrames',
	    value: function renderFrames(frames) {
	      var _props = this.props;
	      var filename = _props.filename;
	      var editorScheme = _props.editorScheme;
	      var useLines = _props.useLines;
	      var useColumns = _props.useColumns;

	      var _get__3 = _get__('assign')({}, _get__('style'), this.props.style);

	      var frame = _get__3.frame;
	      var file = _get__3.file;
	      var linkToFile = _get__3.linkToFile;

	      return frames.map(function (f, index) {
	        var text = void 0;
	        var url = void 0;

	        if (index === 0 && filename && !_get__('isFilenameAbsolute')(f.fileName)) {
	          url = _get__('makeUrl')(filename, editorScheme);
	          text = _get__('makeLinkText')(filename);
	        } else {
	          var lines = useLines ? f.lineNumber : null;
	          var columns = useColumns ? f.columnNumber : null;
	          url = _get__('makeUrl')(f.fileName, editorScheme, lines, columns);
	          text = _get__('makeLinkText')(f.fileName, lines, columns);
	        }

	        return _get__('React').createElement('div', { style: frame, key: index }, _get__('React').createElement('div', null, f.functionName), _get__('React').createElement('div', { style: file }, _get__('React').createElement('a', { href: url, style: linkToFile }, text)));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var error = _props2.error;
	      var className = _props2.className;

	      var _get__4 = _get__('assign')({}, _get__('style'), this.props.style);

	      var redbox = _get__4.redbox;
	      var message = _get__4.message;
	      var stack = _get__4.stack;
	      var frame = _get__4.frame;

	      var frames = void 0;
	      var parseError = void 0;
	      try {
	        frames = _get__('ErrorStackParser').parse(error);
	      } catch (e) {
	        parseError = new Error('Failed to parse stack trace. Stack trace information unavailable.');
	      }

	      if (parseError) {
	        frames = _get__('React').createElement('div', { style: frame, key: 0 }, _get__('React').createElement('div', null, parseError.message));
	      } else {
	        frames = this.renderFrames(frames);
	      }

	      return _get__('React').createElement('div', { style: redbox, className: className }, _get__('React').createElement('div', { style: message }, error.name, ': ', error.message), _get__('React').createElement('div', { style: stack }, frames));
	    }
	  }]);

	  return RedBoxError;
	}(_get__('Component'));

	// "Portal" component for actual RedBoxError component to
	// render to (directly under body). Prevents bugs as in #27.


	RedBoxError.propTypes = {
	  error: _get__('PropTypes').instanceOf(Error).isRequired,
	  filename: _get__('PropTypes').string,
	  editorScheme: _get__('PropTypes').string,
	  useLines: _get__('PropTypes').bool,
	  useColumns: _get__('PropTypes').bool,
	  style: _get__('PropTypes').object,
	  className: _get__('PropTypes').string
	};
	RedBoxError.displayName = 'RedBoxError';
	RedBoxError.defaultProps = {
	  useLines: true,
	  useColumns: true
	};

	var RedBox = function (_get__5) {
	  _inherits(RedBox, _get__5);

	  function RedBox() {
	    _classCallCheck(this, RedBox);

	    return _possibleConstructorReturn(this, (RedBox.__proto__ || Object.getPrototypeOf(RedBox)).apply(this, arguments));
	  }

	  _createClass(RedBox, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.el = document.createElement('div');
	      document.body.appendChild(this.el);
	      this.renderRedBoxError();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.renderRedBoxError();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get__('ReactDOM').unmountComponentAtNode(this.el);
	      document.body.removeChild(this.el);
	      this.el = null;
	    }
	  }, {
	    key: 'renderRedBoxError',
	    value: function renderRedBoxError() {
	      _get__('ReactDOM').render(_get__('React').createElement(_get__('RedBoxError'), this.props), this.el);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return RedBox;
	}(_get__('Component'));

	RedBox.propTypes = {
	  error: _get__('PropTypes').instanceOf(Error).isRequired
	};
	RedBox.displayName = 'RedBox';
	exports.default = RedBox;

	var _RewiredData__ = Object.create(null);

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'PropTypes':
	      return _react.PropTypes;

	    case 'assign':
	      return _objectAssign2.default;

	    case 'style':
	      return _style2.default;

	    case 'isFilenameAbsolute':
	      return _lib.isFilenameAbsolute;

	    case 'makeUrl':
	      return _lib.makeUrl;

	    case 'makeLinkText':
	      return _lib.makeLinkText;

	    case 'ErrorStackParser':
	      return _errorStackParser2.default;

	    case 'Component':
	      return _react.Component;

	    case 'ReactDOM':
	      return _reactDom2.default;

	    case 'React':
	      return _react2.default;

	    case 'RedBoxError':
	      return RedBoxError;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof RedBox === 'undefined' ? 'undefined' : _typeof(RedBox);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(RedBox, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(RedBox)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_typeof, "_typeof", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_reactDom2, "_reactDom2", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_style2, "_style2", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_errorStackParser2, "_errorStackParser2", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_objectAssign2, "_objectAssign2", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(RedBoxError, "RedBoxError", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(RedBox, "RedBox", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_RewiredData__, "_RewiredData__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(INTENTIONAL_UNDEFINED, "INTENTIONAL_UNDEFINED", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_RewireAPI__, "_RewireAPI__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_get__, "_get__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_get_original__, "_get_original__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_assign__, "_assign__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_set_original__, "_set_original__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_update_operation__, "_update_operation__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_set__, "_set__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_reset__, "_reset__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_with__, "_with__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(_typeOfOriginalExport, "_typeOfOriginalExport", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");

	  __REACT_HOT_LOADER__.register(addNonEnumerableProperty, "addNonEnumerableProperty", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/index.js");
	}();

	;

/***/ },

/***/ 403:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _DefaultExportValue = {
	  redbox: {
	    boxSizing: 'border-box',
	    fontFamily: 'sans-serif',
	    position: 'fixed',
	    padding: 10,
	    top: '0px',
	    left: '0px',
	    bottom: '0px',
	    right: '0px',
	    width: '100%',
	    background: 'rgb(204, 0, 0)',
	    color: 'white',
	    zIndex: 9999,
	    textAlign: 'left',
	    fontSize: '16px',
	    lineHeight: 1.2,
	    overflow: 'scroll'
	  },
	  message: {
	    fontWeight: 'bold'
	  },
	  stack: {
	    fontFamily: 'monospace',
	    marginTop: '2em'
	  },
	  frame: {
	    marginTop: '1em'
	  },
	  file: {
	    fontSize: '0.8em',
	    color: 'rgba(255, 255, 255, 0.7)'
	  },
	  linkToFile: {
	    textDecoration: 'none',
	    color: 'rgba(255, 255, 255, 0.7)'
	  }
	};
	exports.default = _DefaultExportValue;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_DefaultExportValue, '_DefaultExportValue', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/style.js');
	}();

	;

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

	    /* istanbul ignore next */

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(405)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	        module.exports = factory(require('stackframe'));
	    } else {
	        root.ErrorStackParser = factory(root.StackFrame);
	    }
	})(undefined, function ErrorStackParser(StackFrame) {
	    'use strict';

	    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
	    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
	    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

	    function _map(array, fn, thisArg) {
	        if (typeof Array.prototype.map === 'function') {
	            return array.map(fn, thisArg);
	        } else {
	            var output = new Array(array.length);
	            for (var i = 0; i < array.length; i++) {
	                output[i] = fn.call(thisArg, array[i]);
	            }
	            return output;
	        }
	    }

	    function _filter(array, fn, thisArg) {
	        if (typeof Array.prototype.filter === 'function') {
	            return array.filter(fn, thisArg);
	        } else {
	            var output = [];
	            for (var i = 0; i < array.length; i++) {
	                if (fn.call(thisArg, array[i])) {
	                    output.push(array[i]);
	                }
	            }
	            return output;
	        }
	    }

	    function _indexOf(array, target) {
	        if (typeof Array.prototype.indexOf === 'function') {
	            return array.indexOf(target);
	        } else {
	            for (var i = 0; i < array.length; i++) {
	                if (array[i] === target) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	    }

	    return {
	        /**
	         * Given an Error object, extract the most information from it.
	         *
	         * @param {Error} error object
	         * @return {Array} of StackFrames
	         */
	        parse: function ErrorStackParser$$parse(error) {
	            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
	                return this.parseOpera(error);
	            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
	                return this.parseV8OrIE(error);
	            } else if (error.stack) {
	                return this.parseFFOrSafari(error);
	            } else {
	                throw new Error('Cannot parse given Error object');
	            }
	        },

	        // Separate line and column numbers from a string of the form: (URI:Line:Column)
	        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
	            // Fail-fast but return locations like "(native)"
	            if (urlLike.indexOf(':') === -1) {
	                return [urlLike];
	            }

	            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
	            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
	            return [parts[1], parts[2] || undefined, parts[3] || undefined];
	        },

	        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !!line.match(CHROME_IE_STACK_REGEXP);
	            }, this);

	            return _map(filtered, function (line) {
	                if (line.indexOf('(eval ') > -1) {
	                    // Throw away eval information until we implement stacktrace.js/stackframe#8
	                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
	                }
	                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = tokens.join(' ') || undefined;
	                var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];

	                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
	            }, this);
	        },

	        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
	            }, this);

	            return _map(filtered, function (line) {
	                // Throw away eval information until we implement stacktrace.js/stackframe#8
	                if (line.indexOf(' > eval') > -1) {
	                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
	                }

	                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
	                    // Safari eval frames only have function names and nothing else
	                    return new StackFrame(line);
	                } else {
	                    var tokens = line.split('@');
	                    var locationParts = this.extractLocation(tokens.pop());
	                    var functionName = tokens.join('@') || undefined;
	                    return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	                }
	            }, this);
	        },

	        parseOpera: function ErrorStackParser$$parseOpera(e) {
	            if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
	                return this.parseOpera9(e);
	            } else if (!e.stack) {
	                return this.parseOpera10(e);
	            } else {
	                return this.parseOpera11(e);
	            }
	        },

	        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
	            var lines = e.message.split('\n');
	            var result = [];

	            for (var i = 2, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }

	            return result;
	        },

	        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
	            var lines = e.stacktrace.split('\n');
	            var result = [];

	            for (var i = 0, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }

	            return result;
	        },

	        // Opera 10.65+ Error.stack very similar to FF/Safari
	        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
	            }, this);

	            return _map(filtered, function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionCall = tokens.shift() || '';
	                var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
	                var argsRaw;
	                if (functionCall.match(/\(([^\)]*)\)/)) {
	                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
	                }
	                var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
	                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        }
	    };
	});
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	}();

	;

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

	    /* istanbul ignore next */

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	        module.exports = factory();
	    } else {
	        root.StackFrame = factory();
	    }
	})(undefined, function () {
	    'use strict';

	    function _isNumber(n) {
	        return !isNaN(parseFloat(n)) && isFinite(n);
	    }

	    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
	        if (functionName !== undefined) {
	            this.setFunctionName(functionName);
	        }
	        if (args !== undefined) {
	            this.setArgs(args);
	        }
	        if (fileName !== undefined) {
	            this.setFileName(fileName);
	        }
	        if (lineNumber !== undefined) {
	            this.setLineNumber(lineNumber);
	        }
	        if (columnNumber !== undefined) {
	            this.setColumnNumber(columnNumber);
	        }
	        if (source !== undefined) {
	            this.setSource(source);
	        }
	    }

	    StackFrame.prototype = {
	        getFunctionName: function getFunctionName() {
	            return this.functionName;
	        },
	        setFunctionName: function setFunctionName(v) {
	            this.functionName = String(v);
	        },

	        getArgs: function getArgs() {
	            return this.args;
	        },
	        setArgs: function setArgs(v) {
	            if (Object.prototype.toString.call(v) !== '[object Array]') {
	                throw new TypeError('Args must be an Array');
	            }
	            this.args = v;
	        },

	        // NOTE: Property name may be misleading as it includes the path,
	        // but it somewhat mirrors V8's JavaScriptStackTraceApi
	        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
	        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
	        getFileName: function getFileName() {
	            return this.fileName;
	        },
	        setFileName: function setFileName(v) {
	            this.fileName = String(v);
	        },

	        getLineNumber: function getLineNumber() {
	            return this.lineNumber;
	        },
	        setLineNumber: function setLineNumber(v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Line Number must be a Number');
	            }
	            this.lineNumber = Number(v);
	        },

	        getColumnNumber: function getColumnNumber() {
	            return this.columnNumber;
	        },
	        setColumnNumber: function setColumnNumber(v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Column Number must be a Number');
	            }
	            this.columnNumber = Number(v);
	        },

	        getSource: function getSource() {
	            return this.source;
	        },
	        setSource: function setSource(v) {
	            this.source = String(v);
	        },

	        toString: function toString() {
	            var functionName = this.getFunctionName() || '{anonymous}';
	            var args = '(' + (this.getArgs() || []).join(',') + ')';
	            var fileName = this.getFileName() ? '@' + this.getFileName() : '';
	            var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
	            var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
	            return functionName + args + fileName + lineNumber + columnNumber;
	        }
	    };

	    return StackFrame;
	});
	;

	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	}();

	;

/***/ },

/***/ 406:
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

		__REACT_HOT_LOADER__.register(hasOwnProperty, 'hasOwnProperty', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/node_modules/object-assign/index.js');

		__REACT_HOT_LOADER__.register(propIsEnumerable, 'propIsEnumerable', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/node_modules/object-assign/index.js');

		__REACT_HOT_LOADER__.register(toObject, 'toObject', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/node_modules/object-assign/index.js');

		__REACT_HOT_LOADER__.register(shouldUseNative, 'shouldUseNative', '/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/node_modules/object-assign/index.js');
	}();

	;

/***/ },

/***/ 407:
/***/ function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var filenameWithoutLoaders = exports.filenameWithoutLoaders = function filenameWithoutLoaders() {
	  var filename = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	  var index = filename.lastIndexOf('!');

	  return index < 0 ? filename : filename.substr(index + 1);
	};

	var filenameHasLoaders = exports.filenameHasLoaders = function filenameHasLoaders(filename) {
	  var actualFilename = _get__('filenameWithoutLoaders')(filename);

	  return actualFilename !== filename;
	};

	var filenameHasSchema = exports.filenameHasSchema = function filenameHasSchema(filename) {
	  return (/^[\w]+\:/.test(filename)
	  );
	};

	var isFilenameAbsolute = exports.isFilenameAbsolute = function isFilenameAbsolute(filename) {
	  var actualFilename = _get__('filenameWithoutLoaders')(filename);

	  if (actualFilename.indexOf('/') === 0) {
	    return true;
	  }

	  return false;
	};

	var makeUrl = exports.makeUrl = function makeUrl(filename, scheme, line, column) {
	  var actualFilename = _get__('filenameWithoutLoaders')(filename);

	  if (_get__('filenameHasSchema')(filename)) {
	    return actualFilename;
	  }

	  var url = 'file://' + actualFilename;

	  if (scheme) {
	    url = scheme + '://open?url=' + url;

	    if (line && actualFilename === filename) {
	      url = url + '&line=' + line;

	      if (column) {
	        url = url + '&column=' + column;
	      }
	    }
	  }

	  return url;
	};

	var makeLinkText = exports.makeLinkText = function makeLinkText(filename, line, column) {
	  var text = _get__('filenameWithoutLoaders')(filename);

	  if (line && text === filename) {
	    text = text + ':' + line;

	    if (column) {
	      text = text + ':' + column;
	    }
	  }

	  return text;
	};

	var _RewiredData__ = Object.create(null);

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'filenameWithoutLoaders':
	      return filenameWithoutLoaders;

	    case 'filenameHasSchema':
	      return filenameHasSchema;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	exports.default = _RewireAPI__;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_typeof, "_typeof", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(filenameWithoutLoaders, "filenameWithoutLoaders", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(filenameHasLoaders, "filenameHasLoaders", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(filenameHasSchema, "filenameHasSchema", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(isFilenameAbsolute, "isFilenameAbsolute", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(makeUrl, "makeUrl", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(makeLinkText, "makeLinkText", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(_RewiredData__, "_RewiredData__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(INTENTIONAL_UNDEFINED, "INTENTIONAL_UNDEFINED", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(_RewireAPI__, "_RewireAPI__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(_get__, "_get__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(_get_original__, "_get_original__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(_assign__, "_assign__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(_set_original__, "_set_original__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(_update_operation__, "_update_operation__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(_set__, "_set__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(_reset__, "_reset__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");

	  __REACT_HOT_LOADER__.register(_with__, "_with__", "/Users/suweirong/Desktop/BEFE/react-proj/node_modules/react-hot-loader/node_modules/redbox-react/lib/lib.js");
	}();

	;

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// If you use React Router, make this component
	// render <Router> with your routes. Currently,
	// only synchronous routes are hot reloaded, and
	// you will see a warning from <Router> on every reload.
	// You can ignore this warning. For details, see:
	// https://github.com/reactjs/react-router/issues/2182

	// export default class App extends Component {
	//   render() {
	//     return (
	//       <h1>423</h1>
	//     );
	//   }
	// }
	module.exports = _react2.default.createClass({
	  displayName: "exports",

	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "productBox" },
	      "Hello World!12"
	    );
	  }
	});
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ }

});