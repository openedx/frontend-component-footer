function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { callAllHandlers } from './fieldUtils';

var identityFn = function identityFn(props) {
  return props;
};

var FormRadioSetContext = /*#__PURE__*/React.createContext({
  getRadioControlProps: identityFn
});

var useRadioSetContext = function useRadioSetContext() {
  return useContext(FormRadioSetContext);
};

var FormRadioSetContextProvider = function FormRadioSetContextProvider(_ref) {
  var children = _ref.children,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      value = _ref.value,
      defaultValue = _ref.defaultValue;
  var isControlled = !defaultValue && value !== undefined;

  var getRadioControlProps = function getRadioControlProps(radioProps) {
    return _objectSpread(_objectSpread({}, radioProps), {}, {
      name: name,

      /* istanbul ignore next */
      onBlur: radioProps.onBlur ? callAllHandlers(onBlur, radioProps.onBlur) : onBlur,

      /* istanbul ignore next */
      onFocus: radioProps.onFocus ? callAllHandlers(onFocus, radioProps.onFocus) : onFocus,

      /* istanbul ignore next */
      onChange: radioProps.onChange ? callAllHandlers(onChange, radioProps.onChange) : onChange,
      checked: isControlled ? value === radioProps.value : undefined,
      defaultChecked: isControlled ? undefined : defaultValue === radioProps.value
    });
  };

  var contextValue = {
    name: name,
    value: value,
    defaultValue: defaultValue,
    getRadioControlProps: getRadioControlProps,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: onChange
  };
  return /*#__PURE__*/React.createElement(FormRadioSetContext.Provider, {
    value: contextValue
  }, children);
};

FormRadioSetContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string
};
FormRadioSetContextProvider.defaultProps = {
  onBlur: undefined,
  onFocus: undefined,
  onChange: undefined,
  value: undefined,
  defaultValue: undefined
};
export default FormRadioSetContext;
export { useRadioSetContext, FormRadioSetContextProvider };
//# sourceMappingURL=FormRadioSetContext.js.map