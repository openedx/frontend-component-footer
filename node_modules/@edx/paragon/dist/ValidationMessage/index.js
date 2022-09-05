function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
import classNames from 'classnames';
import Variant from '../utils/constants';
var inputProps = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  isValid: PropTypes.bool,
  invalidMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.shape({
    status: PropTypes.oneOf(Object.keys(Variant.status).map(function (k) {
      return Variant.status[k];
    }))
  }),
  variantIconDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
var defaultProps = {
  className: undefined,
  isValid: true,
  invalidMessage: '',
  variant: {
    status: Variant.status.INFO
  },
  variantIconDescription: ''
};

var ValidationMessage = /*#__PURE__*/function (_React$Component) {
  _inherits(ValidationMessage, _React$Component);

  var _super = _createSuper(ValidationMessage);

  function ValidationMessage() {
    _classCallCheck(this, ValidationMessage);

    return _super.apply(this, arguments);
  }

  _createClass(ValidationMessage, [{
    key: "getVariantFeedbackClassName",
    value: function getVariantFeedbackClassName() {
      var variant = this.props.variant;
      var className;

      switch (variant.status) {
        case Variant.status.INFO:
          className = 'invalid-feedback-nodanger';
          break;

        default:
          break;
      }

      return className;
    }
  }, {
    key: "getVariantIcon",
    value: function getVariantIcon() {
      var _this$props = this.props,
          variantIconDescription = _this$props.variantIconDescription,
          variant = _this$props.variant;
      var icon;

      switch (variant.status) {
        case Variant.status.DANGER:
          icon = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
            className: classNames('fa', 'fa-exclamation-circle', 'fa-icon-spacing'),
            "aria-hidden": true
          }), /*#__PURE__*/React.createElement("span", {
            className: classNames('sr-only')
          }, variantIconDescription));
          break;

        default:
          break;
      }

      return icon;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          id = _this$props2.id,
          invalidMessage = _this$props2.invalidMessage,
          isValid = _this$props2.isValid;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('invalid-feedback', this.getVariantFeedbackClassName(), className),
        id: id,
        "aria-live": "polite"
      }, isValid ? /*#__PURE__*/React.createElement("span", null) : /*#__PURE__*/React.createElement(React.Fragment, null, this.getVariantIcon(), invalidMessage));
    }
  }]);

  return ValidationMessage;
}(React.Component);

ValidationMessage.propTypes = inputProps;
ValidationMessage.defaultProps = defaultProps;
export default ValidationMessage;
//# sourceMappingURL=index.js.map