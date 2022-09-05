function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["children", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export var CollapsibleContext = /*#__PURE__*/React.createContext();

var CollapsibleAdvanced = /*#__PURE__*/function (_React$Component) {
  _inherits(CollapsibleAdvanced, _React$Component);

  var _super = _createSuper(CollapsibleAdvanced);

  function CollapsibleAdvanced(props) {
    var _this;

    _classCallCheck(this, CollapsibleAdvanced);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "open", function () {
      _this.setState({
        isOpen: true
      });

      if (_this.props.onOpen) {
        _this.props.onOpen();
      }

      if (_this.props.onToggle) {
        _this.props.onToggle(true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.setState({
        isOpen: false
      });

      if (_this.props.onClose) {
        _this.props.onClose();
      }

      if (_this.props.onToggle) {
        _this.props.onToggle(false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      if (_this.state.isOpen) {
        _this.close();
      } else {
        _this.open();
      }
    });

    _this.state = {
      isOpen: props.open !== undefined ? props.open : props.defaultOpen
    };
    return _this;
  }

  _createClass(CollapsibleAdvanced, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, _excluded); // Unneeded for passthrough props


      delete props.defaultOpen;
      delete props.onToggle;
      delete props.onOpen;
      delete props.onClose;
      return /*#__PURE__*/React.createElement("div", _extends({}, props, {
        className: classNames('pgn_collapsible', className, {
          'is-open': this.state.isOpen
        })
      }), /*#__PURE__*/React.createElement(CollapsibleContext.Provider, {
        value: {
          isOpen: this.state.isOpen,
          open: this.open,
          close: this.close,
          toggle: this.toggle
        }
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      if (props.open !== undefined) {
        return {
          // Since this method fires on both props and state changes, local updates
          // to the controlled value will be ignored, because the props version
          // always overrides it. In this case, this is exactly what we want.
          isOpen: props.open
        };
      }

      return null;
    }
  }]);

  return CollapsibleAdvanced;
}(React.Component);

CollapsibleAdvanced.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,

  /** Specifies classname to append to the base element. */
  className: PropTypes.string,

  /** Specifies whether `Collapsible` should be initially open. */
  defaultOpen: PropTypes.bool,

  /** Specifies whether `Collapsible` is open. */
  open: PropTypes.bool,

  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: PropTypes.func,

  /** Callback fired when `Collapsible` opens. */
  onOpen: PropTypes.func,

  /** Callback fired when `Collapsible` closes. */
  onClose: PropTypes.func
};
CollapsibleAdvanced.defaultProps = {
  children: undefined,
  className: undefined,
  defaultOpen: false,
  open: undefined,
  onToggle: undefined,
  onOpen: undefined,
  onClose: undefined
};
export default CollapsibleAdvanced;
//# sourceMappingURL=CollapsibleAdvanced.js.map