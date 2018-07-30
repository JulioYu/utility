"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Utility = function () {
    function Utility() {
        _classCallCheck(this, Utility);
    }

    _createClass(Utility, null, [{
        key: "clone",
        value: function clone(obj) {
            if (obj === null || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== 'object') return obj;
            var temp = new obj.constructor();
            if (obj instanceof Set) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = obj.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var key = _step.value;

                        temp.add(key);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            } else {
                for (var _key in obj) {
                    temp[_key] = Utility.clone(obj[_key]);
                }
            }
            return temp;
        }
    }, {
        key: "generateUUID",
        value: function generateUUID() {
            var d = Date.now();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
                d += performance.now();
            }
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
        }
    }, {
        key: "isEquivalent",
        value: function isEquivalent(a, b) {
            if ((typeof a === "undefined" ? "undefined" : _typeof(a)) === 'object' && (typeof b === "undefined" ? "undefined" : _typeof(b)) === 'object' && a !== null && b !== null) {
                var aProps = Object.getOwnPropertyNames(a);
                var bProps = Object.getOwnPropertyNames(b);
                if (aProps.length !== bProps.length) {
                    return false;
                }
                for (var i = 0; i < aProps.length; i += 1) {
                    var propName = aProps[i];
                    if (_typeof(a[propName]) === 'object') {
                        if (!Utility.isEquivalent(a[propName], b[propName])) return false;
                    } else if (a[propName] !== b[propName]) return false;
                }
                for (var _i = 0; _i < bProps.length; _i += 1) {
                    var _propName = bProps[_i];
                    if (_typeof(a[_propName]) === 'object') {
                        if (!Utility.isEquivalent(a[_propName], b[_propName])) return false;
                    } else if (a[_propName] !== b[_propName]) return false;
                }
            } else if (a !== b) return false;
            return true;
        }
    }]);

    return Utility;
}();

exports.default = Utility;
//# sourceMappingURL=index.js.map