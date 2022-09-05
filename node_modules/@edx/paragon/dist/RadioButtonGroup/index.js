function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["children", "index", "isChecked", "name", "value"],
    _excluded2 = ["children", "label", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "selectedIndex"];

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

/* eslint-disable react/no-multi-comp, max-classes-per-file, max-len */
import React from 'react';
import PropTypes from 'prop-types';

var RadioButton = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(RadioButton, _React$PureComponent);

  var _super = _createSuper(RadioButton);

  function RadioButton(props) {
    var _this;

    _classCallCheck(this, RadioButton);

    _this = _super.call(this, props);
    var onBlur = props.onBlur,
        onClick = props.onClick,
        onFocus = props.onFocus,
        onKeyDown = props.onKeyDown;
    _this.onBlur = onBlur.bind(_assertThisInitialized(_this));
    _this.onClick = onClick.bind(_assertThisInitialized(_this));
    _this.onFocus = onFocus.bind(_assertThisInitialized(_this));
    _this.onKeyDown = onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          index = _this$props.index,
          isChecked = _this$props.isChecked,
          name = _this$props.name,
          value = _this$props.value,
          other = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", _extends({
        type: "radio",
        name: name,
        "aria-checked": isChecked,
        defaultChecked: isChecked,
        value: value,
        "aria-label": children,
        "data-index": index,
        onBlur: this.onBlur,
        onClick: this.onClick,
        onFocus: this.onFocus,
        onKeyDown: this.onKeyDown
      }, other)), children);
    }
  }]);

  return RadioButton;
}(React.PureComponent);

var RadioButtonGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioButtonGroup, _React$Component);

  var _super2 = _createSuper(RadioButtonGroup);

  function RadioButtonGroup(props) {
    var _this2;

    _classCallCheck(this, RadioButtonGroup);

    _this2 = _super2.call(this); // Bind the method to the component context

    _this2.renderChildren = _this2.renderChildren.bind(_assertThisInitialized(_this2));
    _this2.onChange = _this2.onChange.bind(_assertThisInitialized(_this2));
    _this2.state = {
      selectedIndex: props.selectedIndex
    };
    return _this2;
  }

  _createClass(RadioButtonGroup, [{
    key: "onChange",
    value: function onChange(event) {
      if (event.target.checked && event.target.hasAttribute('data-index')) {
        this.setState({
          selectedIndex: parseInt(event.target.getAttribute('data-index'), 10)
        });
      }

      this.props.onChange(event);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this3 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          name = _this$props2.name,
          onBlur = _this$props2.onBlur,
          onClick = _this$props2.onClick,
          onFocus = _this$props2.onFocus,
          onKeyDown = _this$props2.onKeyDown;
      return React.Children.map(children, function (child, index) {
        return /*#__PURE__*/React.cloneElement(child, {
          name: name,
          value: child.props.value,
          isChecked: index === _this3.state.selectedIndex,
          onBlur: onBlur,
          onClick: onClick,
          onFocus: onFocus,
          onKeyDown: onKeyDown,
          index: index
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          label = _this$props3.label,
          name = _this$props3.name,
          onBlur = _this$props3.onBlur,
          onChange = _this$props3.onChange,
          onClick = _this$props3.onClick,
          onFocus = _this$props3.onFocus,
          onKeyDown = _this$props3.onKeyDown,
          selectedIndex = _this$props3.selectedIndex,
          other = _objectWithoutProperties(_this$props3, _excluded2);

      return /*#__PURE__*/React.createElement("div", _extends({
        role: "radiogroup",
        "aria-label": label,
        onChange: this.onChange,
        tabIndex: -1
      }, other), this.renderChildren());
    }
  }]);

  return RadioButtonGroup;
}(React.Component);

RadioButton.defaultProps = {
  children: undefined,
  index: undefined,
  isChecked: false,
  name: undefined,
  onBlur: function onBlur() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {}
};
RadioButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  index: PropTypes.number,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
};
RadioButtonGroup.defaultProps = {
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  selectedIndex: undefined
};
RadioButtonGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,

  /** specifies the `aria-label` value for the `RadioButtonGroup` */
  label: PropTypes.string.isRequired,

  /** specifies the `name` value for the `RadioButtonGroup` so that no more than one `RadioButton` can be selected at any given time */
  name: PropTypes.string.isRequired,

  /** specifies the callback for the `onBlur` event for each `RadioButton` within the group. The default value is a no-op function. */
  onBlur: PropTypes.func,

  /** specifies the callback for the onChange event for each RadioButton within the group. The default value is a no-op function. */
  onChange: PropTypes.func,

  /** specifies the callback for the `onClick` event for each `RadioButton` within the group. The default value is a no-op function. */
  onClick: PropTypes.func,

  /** specifies the callback for the `onFocus` event for each `RadioButton` within the group. The default value is a no-op function. */
  onFocus: PropTypes.func,

  /** specifies the callback for the `onKeyDown` event for each `RadioButton` within the group. The default value is a no-op function. */
  onKeyDown: PropTypes.func,

  /** specifies which `RadioButton` is initially selected. The default value is `undefined` which signifies that no `RadioButton` is initially selected. */
  selectedIndex: PropTypes.number
};
export { RadioButtonGroup as default, RadioButton };
//# sourceMappingURL=index.js.map