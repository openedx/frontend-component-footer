function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { callAllHandlers } from './fieldUtils';

var identityFn = function identityFn(props) {
  return props;
};

var FormCheckboxSetContext = /*#__PURE__*/React.createContext({
  getCheckboxControlProps: identityFn,
  hasCheckboxSetProvider: false
});

var useCheckboxSetContext = function useCheckboxSetContext() {
  return useContext(FormCheckboxSetContext);
};

var FormCheckboxSetContextProvider = function FormCheckboxSetContextProvider(_ref) {
  var children = _ref.children,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      value = _ref.value,
      defaultValue = _ref.defaultValue;
  var isControlled = !defaultValue && Array.isArray(value);

  var getCheckboxControlProps = function getCheckboxControlProps(checkboxProps) {
    return _objectSpread(_objectSpread({}, checkboxProps), {}, {
      name: name,

      /* istanbul ignore next */
      onBlur: checkboxProps.onBlur ? callAllHandlers(onBlur, checkboxProps.onBlur) : onBlur,

      /* istanbul ignore next */
      onFocus: checkboxProps.onFocus ? callAllHandlers(onFocus, checkboxProps.onFocus) : onFocus,

      /* istanbul ignore next */
      onChange: checkboxProps.onChange ? callAllHandlers(onChange, checkboxProps.onChange) : onChange,
      checked: isControlled ? value.includes(checkboxProps.value) : undefined,
      defaultChecked: isControlled ? undefined : defaultValue && defaultValue.includes(checkboxProps.value)
    });
  };

  var contextValue = {
    name: name,
    value: value,
    defaultValue: defaultValue,
    getCheckboxControlProps: getCheckboxControlProps,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: onChange,
    hasCheckboxSetProvider: true
  };
  return /*#__PURE__*/React.createElement(FormCheckboxSetContext.Provider, {
    value: contextValue
  }, children);
};

FormCheckboxSetContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.arrayOf(PropTypes.string)
};
FormCheckboxSetContextProvider.defaultProps = {
  onBlur: undefined,
  name: undefined,
  onFocus: undefined,
  onChange: undefined,
  value: undefined,
  defaultValue: undefined
};
export default FormCheckboxSetContext;
export { useCheckboxSetContext, FormCheckboxSetContextProvider };
//# sourceMappingURL=FormCheckboxSetContext.js.map