function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["label"];

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

/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import tabbable from 'tabbable';
import { Button } from '..';
import Icon from '../Icon';
import newId from '../utils/newId';
import Variant from '../utils/constants';
import { Close } from '../../icons';

var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.headerId = newId();
    _this.modalBodyRef = /*#__PURE__*/React.createRef();

    if (typeof document !== 'undefined') {
      _this.el = document.createElement('div'); // Sets true for IE11, false otherwise: https://stackoverflow.com/a/22082397/6620612

      _this.isIE11 = !!global.MSInputMethodContext && !!document.documentMode;
    }

    _this.state = {
      open: props.open
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var parentSelector = this.props.parentSelector;
      this.parentElement = document.querySelector(parentSelector);

      if (this.parentElement === null) {
        throw new Error("Modal received invalid parentSelector: ".concat(parentSelector, ", no matching element found"));
      }

      this.parentElement.appendChild(this.el);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var open = this.props.open;

      if (open !== prevProps.open || open !== prevState.open) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          open: open
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      ReactDOM.unmountComponentAtNode(this.parentElement);
    }
  }, {
    key: "getVariantIconClassName",
    value: function getVariantIconClassName() {
      var variant = this.props.variant;
      var variantIconClassName;

      switch (variant.status) {
        case Variant.status.WARNING:
          variantIconClassName = classNames('fa', 'fa-exclamation-triangle', 'fa-3x', "text-".concat(variant.status.toLowerCase()));
          break;

        default:
          break;
      }

      return variantIconClassName;
    }
  }, {
    key: "getVariantGridBody",
    value: function getVariantGridBody(body) {
      var variant = this.props.variant;
      return /*#__PURE__*/React.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-md-10"
      }, /*#__PURE__*/React.createElement("div", null, body)), /*#__PURE__*/React.createElement("div", {
        className: "col-md-2"
      }, /*#__PURE__*/React.createElement(Icon, {
        id: newId("Modal-".concat(variant.status)),
        className: this.getVariantIconClassName()
      }))));
    }
  }, {
    key: "getTabbableBodyElements",
    value: function getTabbableBodyElements() {
      var _this$modalBodyRef;

      if ((_this$modalBodyRef = this.modalBodyRef) !== null && _this$modalBodyRef !== void 0 && _this$modalBodyRef.current) {
        return tabbable(this.modalBodyRef.current);
      }

      return [];
    }
  }, {
    key: "isValidVariantStatus",
    value: function isValidVariantStatus() {
      var variant = this.props.variant;
      return Object.values(Variant.status).includes(variant.status);
    }
  }, {
    key: "close",
    value: function close(e) {
      if (e) {
        e.stopPropagation();
      }

      this.setState({
        open: false
      });
      this.props.onClose();
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      return this.props.buttons.map(function (button) {
        // button is either a React component that we want clone or a set of props
        if ( /*#__PURE__*/React.isValidElement(button)) {
          return /*#__PURE__*/React.cloneElement(button, {
            key: button.props.children
          });
        }

        var label = button.label,
            buttonProps = _objectWithoutProperties(button, _excluded);

        return /*#__PURE__*/React.createElement(Button.Deprecated, _extends({}, buttonProps, {
          key: label
        }), label);
      });
    }
  }, {
    key: "renderBody",
    value: function renderBody() {
      var body = this.props.body;

      if (typeof body === 'string') {
        body = /*#__PURE__*/React.createElement("p", null, body);
      }

      if (this.isValidVariantStatus()) {
        body = this.getVariantGridBody(body);
      }

      return body;
    }
  }, {
    key: "renderModal",
    value: function renderModal() {
      var open = this.state.open;
      var _this$props = this.props,
          dialogClassName = _this$props.dialogClassName,
          renderDefaultCloseButton = _this$props.renderDefaultCloseButton,
          renderHeaderCloseButton = _this$props.renderHeaderCloseButton,
          buttons = _this$props.buttons,
          closeText = _this$props.closeText,
          title = _this$props.title;
      var hasTabbableElements = renderDefaultCloseButton || renderHeaderCloseButton || buttons.length > 0 || this.getTabbableBodyElements().length > 0;
      var renderModalFooter = renderDefaultCloseButton || buttons.length > 0;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: classNames({
          'modal-backdrop': open,
          show: open,
          fade: !open
        }),
        role: "presentation"
      }), /*#__PURE__*/React.createElement("div", {
        className: classNames('modal', {
          show: open,
          fade: !open,
          'd-block': open,
          'is-ie11': this.isIE11
        }),
        role: "presentation"
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames({
          'modal-dialog': open
        }, dialogClassName),
        role: "dialog",
        "aria-modal": true,
        "aria-labelledby": this.headerId
      }, /*#__PURE__*/React.createElement(FocusOn, {
        enabled: open,
        onClickOutside: this.close,
        onEscapeKey: this.close
      }, /*#__PURE__*/React.createElement("div", _extends({
        className: "modal-content" // if the modal doesn't contain any tabbable elements, make this element programmatically focusable.

      }, !hasTabbableElements ? {
        tabIndex: -1
      } : {}), /*#__PURE__*/React.createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "modal-title",
        id: this.headerId
      }, title), renderHeaderCloseButton && /*#__PURE__*/React.createElement(Button.Deprecated, {
        className: "p-1",
        onClick: this.close
      }, /*#__PURE__*/React.createElement(Icon, {
        src: Close,
        screenReaderText: closeText
      }))), /*#__PURE__*/React.createElement("div", {
        className: "modal-body",
        ref: this.modalBodyRef
      }, this.renderBody()), renderModalFooter && /*#__PURE__*/React.createElement("div", {
        className: "modal-footer"
      }, renderDefaultCloseButton && /*#__PURE__*/React.createElement(Button, {
        variant: "link",
        onClick: this.close
      }, closeText), this.renderButtons()))))));
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.el) {
        return null;
      }

      return /*#__PURE__*/ReactDOM.createPortal(this.renderModal(), this.el);
    }
  }]);

  return Modal;
}(React.Component);

Modal.propTypes = {
  /** specifies whether the modal renders open or closed on the initial render. It defaults to false. */
  open: PropTypes.bool,

  /** is the selector for an element in the dom which the modal should be rendered under. It uses querySelector to find the first element that matches that selector, and then creates a react portal to a div underneath the parent element.
  */
  parentSelector: PropTypes.string,

  /** a string or an element that is rendered inside of the modal title, above the modal body. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

  /** a string or an element that is rendered inside of the modal body, between the title and the footer. */
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

  /** an array of either elements or shapes that take the form of the buttonPropTypes. See the [buttonPropTypes](https://github.com/edx/paragon/blob/master/src/Button/index.jsx#L40) for a list of acceptable props to pass as part of a button. */
  buttons: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.shape({}) // TODO: Only accept nodes in the future
  ])),

  /** specifies the display text of the default Close button. It defaults to "Close". */
  closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** a function that is called on close. It can be used to perform actions upon closing of the modal, such as restoring focus to the previous logical focusable element. */
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.shape({
    status: PropTypes.string
  }),

  /** specifies whether the default close button is rendered in the footer. It defaults to true. */
  renderDefaultCloseButton: PropTypes.bool,

  /** specifies whether a close button is rendered in the modal header. It defaults to true. */
  renderHeaderCloseButton: PropTypes.bool,

  /**
   * Specifies optional classes to add to the element with the '.modal-dialog' class.  See Bootstrap documentation for possible classes.  Some options: modal-lg, modal-sm, modal-dialog-centered
   */
  dialogClassName: PropTypes.string
};
Modal.defaultProps = {
  open: false,
  parentSelector: 'body',
  buttons: [],
  closeText: 'Close',
  variant: {},
  renderDefaultCloseButton: true,
  renderHeaderCloseButton: true,
  dialogClassName: undefined
};
export default Modal;
//# sourceMappingURL=index.js.map