var _excluded = ["className", "inputRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import asInput from '../asInput';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

function Text(props) {
  var className = props.className,
      inputRef = props.inputRef,
      others = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("textarea", _extends({}, others, {
    className: className,
    ref: inputRef
  }));
}

Text.propTypes = {
  className: PropTypes.string,

  /** specifies all of the properties that are necessary from the included `asInput` component.  Please see details for input requirements within that component.
  */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(PropTypes.element)
  })])
};
Text.defaultProps = {
  className: undefined,
  inputRef: undefined
};
var TextArea = asInput(withDeprecatedProps(Text, 'TextArea', {
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
export default TextArea;
//# sourceMappingURL=index.js.map