var _excluded = ["children", "className", "controlClassName", "labelClassName", "description", "isInvalid", "isValid"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRadioSetContext } from './FormRadioSetContext';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormLabel from './FormLabel';
import FormControlFeedback from './FormControlFeedback';
var RadioControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useFormGroupContext = useFormGroupContext(),
      getControlProps = _useFormGroupContext.getControlProps;

  var radioProps = getControlProps(_objectSpread(_objectSpread({}, props), {}, {
    className: classNames('pgn__form-radio-input', props.className)
  }));
  return /*#__PURE__*/React.createElement("input", _extends({}, radioProps, {
    type: "radio",
    ref: ref
  }));
});
RadioControl.propTypes = {
  className: PropTypes.string
};
RadioControl.defaultProps = {
  className: undefined
};
var FormRadio = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      controlClassName = _ref.controlClassName,
      labelClassName = _ref.labelClassName,
      description = _ref.description,
      isInvalid = _ref.isInvalid,
      isValid = _ref.isValid,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useRadioSetContext = useRadioSetContext(),
      getRadioControlProps = _useRadioSetContext.getRadioControlProps;

  var radioInputProps = getRadioControlProps(_objectSpread(_objectSpread({}, props), {}, {
    className: controlClassName
  }));
  return /*#__PURE__*/React.createElement(FormGroupContextProvider, {
    controlId: radioInputProps.id,
    isInvalid: isInvalid,
    isValid: isValid
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__form-radio', className, {
      'pgn__form-control-valid': isValid,
      'pgn__form-control-invalid': isInvalid,
      'pgn__form-control-disabled': radioInputProps.disabled
    })
  }, /*#__PURE__*/React.createElement(RadioControl, _extends({}, radioInputProps, {
    ref: ref
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormLabel, {
    className: labelClassName
  }, children), description && /*#__PURE__*/React.createElement(FormControlFeedback, {
    hasIcon: false
  }, description))));
});
FormRadio.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,

  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies class name for control component. */
  controlClassName: PropTypes.string,

  /** Specifies class name for label component. */
  labelClassName: PropTypes.string,

  /** Specifies description to show under the radio's value. */
  description: PropTypes.node,

  /** Specifies whether to display component in invalid state, this affects styling. */
  isInvalid: PropTypes.bool,

  /** Specifies whether to display component in valid state, this affects styling. */
  isValid: PropTypes.bool
};
FormRadio.defaultProps = {
  className: undefined,
  controlClassName: undefined,
  labelClassName: undefined,
  description: undefined,
  isInvalid: false,
  isValid: false
};
export default FormRadio;
//# sourceMappingURL=FormRadio.js.map