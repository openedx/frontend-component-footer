function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["className", "inputRef"];

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
import PropTypes from 'prop-types';
import asInput from '../asInput';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select() {
    _classCallCheck(this, Select);

    return _super.apply(this, arguments);
  }

  _createClass(Select, [{
    key: "getOptions",
    value: function getOptions() {
      return this.props.options.map(function (option, i) {
        var section;

        if (option.options) {
          var groupOpts = option.options.map(function (opt, j) {
            return Select.getOption(opt, j);
          });
          section = /*#__PURE__*/React.createElement("optgroup", {
            label: option.label,
            key: option.label
          }, groupOpts);
        } else {
          section = Select.getOption(option, i);
        }

        return section;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          inputRef = _this$props.inputRef,
          others = _objectWithoutProperties(_this$props, _excluded);

      var options = this.getOptions();
      return /*#__PURE__*/React.createElement("select", _extends({}, others, {
        className: className,
        type: "select",
        ref: inputRef
      }), options);
    }
  }], [{
    key: "getOption",
    value: function getOption(option, i) {
      var disabled = option.disabled;
      var label = option.label,
          value = option.value;

      if (typeof option === 'string') {
        label = option;
        value = option;
      }

      return /*#__PURE__*/React.createElement("option", {
        key: "option-".concat(i),
        value: value,
        disabled: disabled
      }, label);
    }
  }]);

  return Select;
}(React.Component);

Select.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(PropTypes.element)
  })]),
  options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.shape({}))]).isRequired
};
Select.defaultProps = {
  className: undefined,
  inputRef: undefined
};
var InputSelect = asInput(withDeprecatedProps(Select, 'InputSelect', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: function expect(value) {
      return typeof value === 'string';
    },
    transform: function transform(value) {
      return Array.isArray(value) ? value.join(' ') : value;
    },
    message: 'It should be a string.'
  }
}));
export default InputSelect;
//# sourceMappingURL=index.js.map