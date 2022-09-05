var _excluded = ["isIndeterminate"],
    _excluded2 = ["children", "className", "helperText"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormCheckbox from './FormCheckbox';
import { useFormGroupContext } from './FormGroupContext';
var SwitchControl = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var isIndeterminate = _ref.isIndeterminate,
      props = _objectWithoutProperties(_ref, _excluded);

  var defaultRef = React.useRef();
  var resolvedRef = ref || defaultRef;

  var _useFormGroupContext = useFormGroupContext(),
      getControlProps = _useFormGroupContext.getControlProps;

  var checkboxProps = getControlProps(_objectSpread(_objectSpread({}, props), {}, {
    className: classNames('pgn__form-switch-input', props.className)
  }));
  React.useEffect(function () {
    // this if(resolvedRef.current) prevents console errors in testing
    if (resolvedRef.current) {
      resolvedRef.current.indeterminate = isIndeterminate;
    }
  }, [resolvedRef, isIndeterminate]);
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, checkboxProps, {
    ref: resolvedRef
  }));
});
SwitchControl.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: PropTypes.bool,

  /** Specifies class name to append to the base element. */
  className: PropTypes.string
};
SwitchControl.defaultProps = {
  isIndeterminate: false,
  className: undefined
};
var FormSwitch = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
      className = _ref2.className,
      helperText = _ref2.helperText,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("div", {
    className: "d-inline-flex flex-column"
  }, /*#__PURE__*/React.createElement(FormCheckbox, _extends({
    className: classNames('pgn__form-switch', className)
  }, props, {
    role: "switch",
    ref: ref,
    controlAs: SwitchControl // ignore the following props for form switch
    ,
    isValid: null,
    isInvalid: null,
    description: null
  }), children), helperText && /*#__PURE__*/React.createElement("div", {
    className: "pgn__form-switch-helper-text"
  }, helperText));
});
FormSwitch.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,

  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  helperText: PropTypes.node,
  floatLabelLeft: PropTypes.bool
};
FormSwitch.defaultProps = {
  className: undefined,
  labelClassName: undefined,
  helperText: undefined,
  floatLabelLeft: false
};
export { SwitchControl };
export default FormSwitch;
//# sourceMappingURL=FormSwitch.js.map