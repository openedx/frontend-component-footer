var _excluded = ["as", "className", "controlClassName", "leadingElement", "trailingElement", "floatingLabel"],
    _excluded2 = ["isInvalid", "isValid", "getControlProps"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RBFormControl from 'react-bootstrap/FormControl';
import { useFormGroupContext } from './FormGroupContext';
import FormControlFeedback from './FormControlFeedback';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';
import { callAllHandlers, useHasValue } from './fieldUtils';
var FormControl = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var as = _ref.as,
      className = _ref.className,
      controlClassName = _ref.controlClassName,
      leadingElement = _ref.leadingElement,
      trailingElement = _ref.trailingElement,
      floatingLabel = _ref.floatingLabel,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useFormGroupContext = useFormGroupContext(),
      isInvalid = _useFormGroupContext.isInvalid,
      isValid = _useFormGroupContext.isValid,
      getControlProps = _useFormGroupContext.getControlProps,
      formGroupContext = _objectWithoutProperties(_useFormGroupContext, _excluded2);

  var size = props.size || formGroupContext.size;

  var _useHasValue = useHasValue({
    defaultValue: props.defaultValue,
    value: props.value
  }),
      _useHasValue2 = _slicedToArray(_useHasValue, 2),
      hasValue = _useHasValue2[0],
      checkInputEventValue = _useHasValue2[1];

  var controlProps = getControlProps(_objectSpread(_objectSpread({}, props), {}, {
    // eslint-disable-next-line react/prop-types
    onBlur: callAllHandlers(checkInputEventValue, props.onBlur)
  }));
  return /*#__PURE__*/React.createElement(FormControlDecoratorGroup, {
    size: size,
    leadingElement: leadingElement,
    trailingElement: trailingElement,
    floatingLabel: floatingLabel,
    className: className
  }, /*#__PURE__*/React.createElement(RBFormControl, _extends({
    as: as,
    ref: ref,
    size: size,
    isInvalid: isInvalid,
    isValid: isValid,
    className: classNames(controlClassName, {
      'has-value': hasValue
    })
  }, controlProps)));
});
var SIZE_CHOICES = ['sm', 'lg'];
FormControl.Feedback = FormControlFeedback;
FormControl.Description = FormControlFeedback;
FormControl.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies base element for the control component. */
  as: PropTypes.elementType,

  /** Specifies default value of the input component. */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Specifies current value of the input component. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Specifies id of the control component. */
  id: PropTypes.string,

  /** Specifies class name for the control component. */
  controlClassName: PropTypes.string,

  /** Specifies size for the control component. */
  size: PropTypes.oneOf(SIZE_CHOICES),

  /** Specifies leading element to display for the input component. */
  leadingElement: PropTypes.node,

  /** Specifies trailing element to display for the input component. */
  trailingElement: PropTypes.node,

  /** Specifies floating label to display for the input component. */
  floatingLabel: PropTypes.node,

  /** Specifies whether to render input as plain text. */
  plaintext: PropTypes.bool,

  /** Specifies whether to display control in valid state, this affects styling. */
  isValid: PropTypes.bool,

  /** Specifies whether to display control in invalid state, this affects styling. */
  isInvalid: PropTypes.bool
};
FormControl.defaultProps = {
  as: 'input',
  className: undefined,
  id: undefined,
  controlClassName: undefined,
  defaultValue: undefined,
  value: undefined,
  size: undefined,
  leadingElement: undefined,
  trailingElement: undefined,
  floatingLabel: undefined,
  plaintext: false,
  isValid: undefined,
  isInvalid: undefined
};
export default FormControl;
//# sourceMappingURL=FormControl.js.map