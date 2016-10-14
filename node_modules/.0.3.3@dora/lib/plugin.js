'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.resolvePlugin = resolvePlugin;
exports.resolvePlugins = resolvePlugins;
exports.applyPlugins = applyPlugins;

var _loaderUtils = require('loader-utils');

var _path = require('path');

var _isPlainObject = require('is-plain-object');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _resolve = require('./resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _spmLog = require('spm-log');

var _spmLog2 = _interopRequireDefault(_spmLog);

var _reduceAsync = require('./reduceAsync');

var _reduceAsync2 = _interopRequireDefault(_reduceAsync);

var _isGeneratorFn = require('is-generator-fn');

var _isGeneratorFn2 = _interopRequireDefault(_isGeneratorFn);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isRelative(filepath) {
  return filepath.charAt(0) === '.';
}

function isAbsolute(filepath) {
  return filepath.charAt(0) === '/';
}

function resolvePlugin(_pluginName, resolveDir) {
  var cwd = arguments.length <= 2 || arguments[2] === undefined ? process.cwd() : arguments[2];

  var plugin = void 0;
  var query = {};
  var originQuery = void 0;
  var name = void 0;

  if (typeof _pluginName === 'string') {
    var _pluginName$split = _pluginName.split('?');

    var _pluginName$split2 = _slicedToArray(_pluginName$split, 2);

    var pluginName = _pluginName$split2[0];
    var _query = _pluginName$split2[1];

    if (_query) {
      originQuery = '?' + _query;
      query = (0, _loaderUtils.parseQuery)(originQuery);
    }
    name = pluginName;

    if (isRelative(pluginName)) {
      plugin = require((0, _path.join)(cwd, pluginName));
    } else if (isAbsolute(pluginName)) {
      plugin = require(pluginName);
    } else {
      // is Module
      var pluginPath = (0, _resolve2.default)(pluginName, resolveDir);
      if (!pluginPath) {
        throw new Error('[Error] ' + pluginName + ' not found in ' + resolveDir);
      }
      plugin = require(pluginPath);
    }
  } else if ((0, _isPlainObject2.default)(_pluginName)) {
    plugin = _pluginName;
  } else {
    throw Error('[Error] pluginName must be string or object');
  }

  return _extends({
    name: name,
    originQuery: originQuery,
    query: query
  }, plugin);
}

function resolvePlugins(pluginNames, resolveDir, cwd) {
  return pluginNames.map(function (pluginName) {
    return resolvePlugin(pluginName, resolveDir, cwd);
  });
}

function applyPlugins(plugins, name, context, pluginArgs) {
  var _callback = arguments.length <= 4 || arguments[4] === undefined ? function noop() {} : arguments[4];

  var ret = void 0;
  var contextModify = context;

  (0, _reduceAsync2.default)(plugins, pluginArgs, function (memo, plugin, callback) {
    var func = plugin[name];
    if (!func) return callback(null, memo);

    var log = ['debug', 'info', 'warn', 'error'].reduce(function (_memo, key) {
      var m = _memo;
      m[key] = function (msg) {
        _spmLog2.default[key](plugin.name, msg);
      };
      return m;
    }, {});
    // Add more context api
    contextModify.plugins = plugins;
    contextModify.query = plugin.query;
    contextModify.log = log;
    contextModify.callback = callback;
    contextModify.restart = function () {
      console.log();
      _spmLog2.default.info('dora', 'try to restart...');
      process.send('restart');
    };

    if (name === 'middleware') {
      contextModify.app.use(func.call(contextModify));
      callback();
    } else if ((0, _isGeneratorFn2.default)(func)) {
      _co2.default.wrap(func).call(contextModify).then(function (val) {
        callback(null, val);
      }, callback);
    } else {
      var funcResult = func.call(contextModify, memo);
      if (funcResult && funcResult.then) {
        funcResult.then(function (result) {
          callback(null, result);
        }).catch(callback);
      } else {
        callback(null, funcResult);
      }
    }
  }, function (err, result) {
    ret = result;
    if (_callback) _callback(err, result);
  });

  // For all sync plugins.
  return ret;
}