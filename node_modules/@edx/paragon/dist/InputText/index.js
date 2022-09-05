var _excluded = ["className", "inputRef", "type"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import asInput from '../asInput';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

function Text(props) {
  var className = props.className,
      inputRef = props.inputRef,
      type = props.type,
      others = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("input", _extends({}, others, {
    className: className,
    type: type || 'text',
    ref: inputRef
  }));
}

Text.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(PropTypes.element)
  })]),
  type: PropTypes.string
};
Text.defaultProps = {
  className: undefined,
  inputRef: undefined,
  type: 'text'
};
var InputText = asInput(withDeprecatedProps(Text, 'InputText', {
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
}));
export default InputText;
//# sourceMappingURL=index.js.map