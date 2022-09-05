function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import { SearchFieldContext } from './SearchFieldAdvanced';

var SearchFieldInput = function SearchFieldInput(props) {
  var _useContext = useContext(SearchFieldContext),
      inputId = _useContext.inputId,
      value = _useContext.value,
      handleChange = _useContext.handleChange,
      handleFocus = _useContext.handleFocus,
      handleBlur = _useContext.handleBlur,
      refs = _useContext.refs,
      disabled = _useContext.disabled;

  return /*#__PURE__*/React.createElement(Input, _extends({}, props, {
    ref: refs.input,
    type: "text",
    role: "searchbox",
    id: inputId.current,
    name: "searchfield-input",
    value: value,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    disabled: disabled
  }));
};

SearchFieldInput.propTypes = {
  /** specifies a custom class name. */
  className: PropTypes.string,

  /** specifies the placeholder text for the input. */
  placeholder: PropTypes.string
};
SearchFieldInput.defaultProps = {
  className: undefined,
  placeholder: undefined
};
export default SearchFieldInput;
//# sourceMappingURL=SearchFieldInput.js.map