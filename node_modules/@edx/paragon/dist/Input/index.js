function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["value", "label", "group"],
    _excluded2 = ["type", "className", "options", "forwardedRef"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input() {
    _classCallCheck(this, Input);

    return _super.apply(this, arguments);
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (process.env.NODE_ENV === 'development') {
        this.checkHasLabel();
      }
    }
  }, {
    key: "getHTMLTagForType",
    value: function getHTMLTagForType() {
      var type = this.props.type;

      if (type === 'select' || type === 'textarea') {
        return type;
      }

      return 'input';
    }
  }, {
    key: "getClassNameForType",
    value: function getClassNameForType() {
      switch (this.props.type) {
        case 'file':
          return 'form-control-file';

        case 'checkbox':
        case 'radio':
          return 'form-check-input';

        default:
          return 'form-control';
      }
    }
  }, {
    key: "setRef",
    value: function setRef(forwardedRef) {
      var _this = this;

      // In production just return the optional forwardedRef
      if (process.env.NODE_ENV !== 'development') {
        return forwardedRef;
      }

      return function (element) {
        if (forwardedRef) {
          forwardedRef.current = element;
        } // eslint-disable-line no-param-reassign


        _this.inputEl = element;
      };
    }
  }, {
    key: "checkHasLabel",
    value: function checkHasLabel() {
      if (this.inputEl.labels.length > 0) {
        return;
      }

      if (this.inputEl.getAttribute('aria-label') !== null) {
        return;
      }

      if (this.inputEl.getAttribute('aria-labelledby') !== null) {
        return;
      }

      if (console) {
        // eslint-disable-next-line no-console
        console.warn('Input[a11y]: There is no associated label for this Input');
      }
    }
  }, {
    key: "renderOptions",
    value: function renderOptions(options) {
      var _this2 = this;

      return options.map(function (option) {
        var value = option.value,
            label = option.label,
            group = option.group,
            attributes = _objectWithoutProperties(option, _excluded);

        if (group) {
          return /*#__PURE__*/React.createElement("optgroup", _extends({
            key: "optgroup-".concat(label),
            label: label
          }, attributes), _this2.renderOptions(group));
        }

        return /*#__PURE__*/React.createElement("option", _extends({
          key: value,
          value: value
        }, attributes), label);
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          className = _this$props.className,
          options = _this$props.options,
          forwardedRef = _this$props.forwardedRef,
          attributes = _objectWithoutProperties(_this$props, _excluded2);

      var htmlTag = this.getHTMLTagForType();

      var htmlProps = _objectSpread(_objectSpread({
        className: classNames(this.getClassNameForType(), className),
        type: htmlTag === 'input' ? type : undefined
      }, attributes), {}, {
        ref: this.setRef(forwardedRef)
      });

      var htmlChildren = type === 'select' ? this.renderOptions(options) : null;
      return /*#__PURE__*/React.createElement(htmlTag, htmlProps, htmlChildren);
    }
  }]);

  return Input;
}(React.Component);

Input.propTypes = {
  /** specifies the type of component.
   * One of select, textarea, or any valid type for an html input tag. */
  type: PropTypes.oneOf(['textarea', 'select', 'checkbox', 'color', 'date', 'datetime', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']).isRequired,

  /** specifies the className in addition to a bootstrap class name. */
  className: PropTypes.string,

  /** should be used to specify the options of an Input of type select */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    group: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disabled: PropTypes.bool
    }))
  }))
};
Input.defaultProps = {
  className: undefined,
  options: []
}; // eslint-disable-next-line react/no-multi-comp

var InputWithRefForwarding = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Input, _extends({
    forwardedRef: ref
  }, props));
});
export default InputWithRefForwarding;
//# sourceMappingURL=index.js.map