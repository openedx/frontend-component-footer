function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';
import { Button } from '..';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

var StatusAlert = /*#__PURE__*/function (_React$Component) {
  _inherits(StatusAlert, _React$Component);

  var _super = _createSuper(StatusAlert);

  function StatusAlert(props) {
    var _this;

    _classCallCheck(this, StatusAlert);

    _this = _super.call(this, props);
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.renderDialog = _this.renderDialog.bind(_assertThisInitialized(_this));
    _this.state = {
      open: props.open
    };
    return _this;
  }

  _createClass(StatusAlert, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.xButton) {
        this.xButton.focus();
      }
    }
    /* eslint-disable react/no-did-update-set-state */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.open && !prevState.open && this.xButton) {
        this.xButton.focus();
      }

      if (this.props.open !== prevProps.open) {
        this.setState({
          open: this.props.open
        });
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if (e.key === 'Enter' || e.key === 'Escape') {
        e.preventDefault();
        this.close();
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
      this.props.onClose();
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.xButton) {
        this.xButton.focus();
      }
    }
  }, {
    key: "renderDialog",
    value: function renderDialog() {
      var dialog = this.props.dialog;
      return /*#__PURE__*/React.createElement("div", {
        className: "alert-dialog"
      }, dialog);
    }
  }, {
    key: "renderDismissible",
    value: function renderDismissible() {
      var _this2 = this;

      var _this$props = this.props,
          closeButtonAriaLabel = _this$props.closeButtonAriaLabel,
          dismissible = _this$props.dismissible;
      return dismissible ? /*#__PURE__*/React.createElement(Button.Deprecated, {
        "aria-label": closeButtonAriaLabel,
        inputRef: function inputRef(input) {
          _this2.xButton = input;
        },
        onClick: this.close,
        onKeyDown: this.handleKeyDown,
        isClose: true
      }, /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7")) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          alertType = _this$props2.alertType,
          className = _this$props2.className,
          dismissible = _this$props2.dismissible;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames([className, 'alert', 'fade'], {
          'alert-dismissible': dismissible
        }, _defineProperty({}, "alert-".concat(alertType), alertType !== undefined), {
          show: this.state.open
        }),
        role: "alert",
        hidden: !this.state.open
      }, this.renderDismissible(), this.renderDialog());
    }
  }]);

  return StatusAlert;
}(React.Component);

StatusAlert.propTypes = {
  /** specifies the type of alert that is being diplayed. It defaults to "warning".  See the other available [bootstrap](https://v4-alpha.getbootstrap.com/components/alerts/) options. */
  alertType: PropTypes.string,

  /** is a string array that defines the classes to be used within the status alert. */
  className: PropTypes.string,
  dialog: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

  /** specifies if the status alert will include the dismissible X button to close the alert. It defaults to true. */
  dismissible: PropTypes.bool,

  /* eslint-disable react/require-default-props */
  closeButtonAriaLabel: PropTypes.string,

  /** is a function that is called on close. It can be used to perform actions upon closing of the status alert, such as restoring focus to the previous logical focusable element.  It is only required if `dismissible` is set to `true` and not required if the alert is not `dismissible`. */
  onClose: isRequiredIf(PropTypes.func, function (props) {
    return props.dismissible;
  }),

  /** specifies whether the status alert renders open or closed on the initial render. It defaults to false. */
  open: PropTypes.bool
};
StatusAlert.defaultProps = {
  alertType: 'warning',
  className: undefined,
  closeButtonAriaLabel: 'Close',
  dismissible: true,
  open: false
};
export default withDeprecatedProps(StatusAlert, 'StatusAlert', {
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
});
//# sourceMappingURL=index.js.map