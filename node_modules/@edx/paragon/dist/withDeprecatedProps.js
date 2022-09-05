function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint no-console: 0 */
import React from 'react';
export var DEPR_TYPES = {
  MOVED: 'MOVED',
  REMOVED: 'REMOVED',
  FORMAT: 'FORMAT',
  MOVED_AND_FORMAT: 'MOVED_AND_FORMAT'
};

function withDeprecatedProps(WrappedComponent, componentName, deprecatedProps) {
  var WithDeprecatedProps = /*#__PURE__*/function (_React$Component) {
    _inherits(WithDeprecatedProps, _React$Component);

    var _super = _createSuper(WithDeprecatedProps);

    function WithDeprecatedProps(props) {
      var _this;

      _classCallCheck(this, WithDeprecatedProps);

      _this = _super.call(this, props);
      _this.transformProps = _this.transformProps.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(WithDeprecatedProps, [{
      key: "warn",
      value: function warn(message) {
        if (process.env.NODE_ENV === 'development') {
          if (console) {
            console.warn("[Deprecated] ".concat(message));
          }
        }
      }
    }, {
      key: "transformProps",
      value: function transformProps(acc, propName) {
        if (deprecatedProps[propName] === undefined) {
          acc[propName] = this.props[propName];
          return acc;
        }

        var _deprecatedProps$prop = deprecatedProps[propName],
            deprType = _deprecatedProps$prop.deprType,
            newName = _deprecatedProps$prop.newName,
            expect = _deprecatedProps$prop.expect,
            transform = _deprecatedProps$prop.transform,
            message = _deprecatedProps$prop.message;

        switch (deprType) {
          case DEPR_TYPES.MOVED:
            this.warn("".concat(componentName, ": The prop '").concat(propName, "' has been moved to '").concat(newName, "'."));
            acc[newName] = this.props[propName];
            break;

          case DEPR_TYPES.REMOVED:
            this.warn("".concat(componentName, ": The prop '").concat(propName, "' has been removed. '").concat(message, "'"));
            break;

          case DEPR_TYPES.FORMAT:
            if (!expect(this.props[propName])) {
              this.warn("".concat(componentName, ": The prop '").concat(propName, "' expects a new format. ").concat(message));
              acc[propName] = transform(this.props[propName], this.props);
            } else {
              acc[propName] = this.props[propName];
            }

            break;

          case DEPR_TYPES.MOVED_AND_FORMAT:
            this.warn("".concat(componentName, ": The prop '").concat(propName, "' has been moved to '").concat(newName, "' and expects a new format. ").concat(message));
            acc[newName] = transform(this.props[propName], this.props);
            break;

          default:
            acc[propName] = this.props[propName];
            break;
        }

        return acc;
      }
    }, {
      key: "render",
      value: function render() {
        var _Object$keys$reduce = Object.keys(this.props).reduce(this.transformProps, {}),
            children = _Object$keys$reduce.children,
            transformedProps = _objectWithoutProperties(_Object$keys$reduce, _excluded);

        return /*#__PURE__*/React.createElement(WrappedComponent, transformedProps, this.props.children || children
        /* eslint-disable-line react/prop-types */
        );
      }
    }]);

    return WithDeprecatedProps;
  }(React.Component);

  WithDeprecatedProps.displayName = "withDeprecatedProps(".concat(componentName, ")");
  return WithDeprecatedProps;
}

export default withDeprecatedProps;
//# sourceMappingURL=withDeprecatedProps.js.map