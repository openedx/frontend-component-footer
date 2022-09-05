function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["buttonType", "className", "children", "isClose", "type", "inputRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import withDeprecatedProps, { DEPR_TYPES } from '../../withDeprecatedProps';

var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, props);
    var onBlur = props.onBlur,
        onKeyDown = props.onKeyDown;
    _this.onBlur = onBlur.bind(_assertThisInitialized(_this));
    _this.onKeyDown = onKeyDown.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.setRefs = _this.setRefs.bind(_assertThisInitialized(_this));
    return _this;
  }
  /*
    The button component is given focus explicitly in its onClick to account
    for the fact that an HTML <button> element in Firefox and Safari does not get
    focus on onClick.
     See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button.
  */


  _createClass(Button, [{
    key: "onClick",
    value: function onClick(e) {
      this.buttonRef.focus();
      this.props.onClick(e);
    }
    /*
      The button component needs a ref to itself to be able to force
      focus in its onClick function (buttonRef). It also needs to accept
      a callback function from parent components to give those parents
      a reference to their child button (e.g. for the modal component).
      Therefore, both have been wrapped in a function bound on the class,
      since one cannot set two ref attributes on a component.
    */

  }, {
    key: "setRefs",
    value: function setRefs(input) {
      this.buttonRef = input;
      this.props.inputRef(input);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          buttonType = _this$props.buttonType,
          className = _this$props.className,
          children = _this$props.children,
          isClose = _this$props.isClose,
          type = _this$props.type,
          inputRef = _this$props.inputRef,
          other = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("button", _extends({}, other, {
        className: classNames(['btn', className], _defineProperty({}, "btn-".concat(buttonType), buttonType !== undefined), {
          close: isClose
        }),
        onBlur: this.onBlur,
        onClick: this.onClick,
        onKeyDown: this.onKeyDown // eslint-disable-next-line react/button-has-type
        ,
        type: type,
        ref: this.setRefs
      }), children);
    }
  }]);

  return Button;
}(React.Component);

export var buttonPropTypes = {
  /** Used to determine the type of button to be rendered.  See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types. For example, `buttonType="light"`. The default is `undefined`. */
  buttonType: PropTypes.string,

  /** Specifies Bootstrap class names to apply to the button. See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable class names. The default is an empty array. */
  className: PropTypes.string,

  /** Specifies the text that is displayed within the button. */
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line max-len

  /** A function that defines a reference for the button. An example `inputRef` from the calling component could look something like: `inputRef={(input) => { this.button = input; }}`. The default is an empty function. */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(PropTypes.element)
  })]),

  /** Used to determine if the button is a "Close" style button to leverage bootstrap styling. Example use case is with the Status Alert [dismiss button](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing). The default is false. */
  isClose: PropTypes.bool,
  // eslint-disable-next-line max-len

  /** A function that would specify what the button should do when the `onBlur` event is triggered. For example, the button could change in color or `buttonType` when focus is changed. The default is an empty function. */
  onBlur: PropTypes.func,
  // eslint-disable-next-line max-len

  /** A function that would specify what the button should do when the `onClick` event is triggered. For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: PropTypes.func,
  // eslint-disable-next-line max-len

  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.  For example, this could handle using the `Escape` key to trigger the button's action. The default is an empty function. */
  onKeyDown: PropTypes.func,

  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: PropTypes.string
};
Button.propTypes = buttonPropTypes;
Button.defaultProps = {
  buttonType: undefined,
  className: undefined,
  inputRef: function inputRef() {},
  isClose: false,
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  onClick: function onClick() {},
  type: 'button'
};
export default withDeprecatedProps(Button, 'Button', {
  label: {
    deprType: DEPR_TYPES.MOVED,
    newName: 'children'
  },
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