var _excluded = ["children", "name", "value", "defaultValue", "isInline", "onChange", "onFocus", "onBlur"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { useFormGroupContext } from './FormGroupContext';
import { FormCheckboxSetContextProvider } from './FormCheckboxSetContext';
import FormControlSet from './FormControlSet';

var FormCheckboxSet = function FormCheckboxSet(_ref) {
  var children = _ref.children,
      name = _ref.name,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      isInline = _ref.isInline,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useFormGroupContext = useFormGroupContext(),
      getControlProps = _useFormGroupContext.getControlProps,
      useSetIsControlGroupEffect = _useFormGroupContext.useSetIsControlGroupEffect;

  useSetIsControlGroupEffect(true);
  var controlProps = getControlProps(props);
  return /*#__PURE__*/React.createElement(FormCheckboxSetContextProvider, {
    name: name,
    value: value,
    defaultValue: defaultValue,
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: onChange
  }, /*#__PURE__*/React.createElement(FormControlSet, _extends({
    role: "group",
    isInline: isInline
  }, controlProps), children));
};

FormCheckboxSet.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,

  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies name for the component. */
  name: PropTypes.string.isRequired,

  /** Specifies values for the checkboxes. */
  value: PropTypes.arrayOf(PropTypes.string),

  /** Specifies default values for the checkboxes. */
  defaultValue: PropTypes.arrayOf(PropTypes.string),

  /** Specifies whether to display components with inline styling. */
  isInline: PropTypes.bool,

  /** Specifies onChange event handler. */
  onChange: PropTypes.func,

  /** Specifies onFocus event handler. */
  onFocus: PropTypes.func,

  /** Specifies onBlur event handler. */
  onBlur: PropTypes.func
};
FormCheckboxSet.defaultProps = {
  className: undefined,
  value: undefined,
  defaultValue: undefined,
  isInline: false,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined
};
export default FormCheckboxSet;
//# sourceMappingURL=FormCheckboxSet.js.map