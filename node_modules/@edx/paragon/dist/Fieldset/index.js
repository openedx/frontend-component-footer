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
import newId from '../utils/newId';
import ValidationMessage from '../ValidationMessage/index';
import Variant from '../utils/constants';
var inputProps = {
  legend: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
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
  children: null,
  className: undefined,
  id: '',
  isValid: true,
  invalidMessage: '',
  variant: {
    status: Variant.status.INFO
  },
  variantIconDescription: ''
};

var Fieldset = /*#__PURE__*/function (_React$Component) {
  _inherits(Fieldset, _React$Component);

  var _super = _createSuper(Fieldset);

  function Fieldset(props) {
    var _this;

    _classCallCheck(this, Fieldset);

    _this = _super.call(this, props);
    _this.state = {
      id: props.id || newId('fieldset')
    };
    return _this;
  }

  _createClass(Fieldset, [{
    key: "getVariantClassName",
    value: function getVariantClassName() {
      var variant = this.props.variant;
      var className;

      switch (variant.status) {
        case Variant.status.INFO:
          className = 'is-invalid-nodanger';
          break;

        default:
          break;
      }

      return className;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          variantIconDescription = _this$props.variantIconDescription,
          invalidMessage = _this$props.invalidMessage,
          isValid = _this$props.isValid,
          legend = _this$props.legend,
          variant = _this$props.variant;
      var errorId = "error-".concat(this.state.id);
      return /*#__PURE__*/React.createElement("div", {
        className: "paragon-fieldset"
      }, /*#__PURE__*/React.createElement("fieldset", {
        className: classNames('form-control', 'p-3', {
          'is-invalid': !isValid
        }, this.getVariantClassName(), className),
        "aria-describedby": errorId
      }, /*#__PURE__*/React.createElement("legend", {
        className: "p-1"
      }, legend), children), /*#__PURE__*/React.createElement(ValidationMessage, {
        id: errorId,
        isValid: isValid,
        invalidMessage: invalidMessage,
        variant: variant,
        variantIconDescription: variantIconDescription
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.id !== prevState.id) {
        return {
          id: nextProps.id || newId('fieldset')
        };
      }

      return null;
    }
  }]);

  return Fieldset;
}(React.Component);

Fieldset.propTypes = inputProps;
Fieldset.defaultProps = defaultProps;
export default Fieldset;
//# sourceMappingURL=index.js.map