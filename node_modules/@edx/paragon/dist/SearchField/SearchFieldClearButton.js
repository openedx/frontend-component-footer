function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { SearchFieldContext } from './SearchFieldAdvanced';

var SearchFieldClearButton = function SearchFieldClearButton(props) {
  var _useContext = useContext(SearchFieldContext),
      screenReaderText = _useContext.screenReaderText,
      icons = _useContext.icons,
      value = _useContext.value,
      disabled = _useContext.disabled,
      refs = _useContext.refs;

  if (!value) {
    return null;
  }

  var handleClick = function handleClick() {
    if (refs.input.current) {
      refs.input.current.focus();
    }
  };

  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React.createElement("button", _extends({
      type: "reset",
      className: "btn",
      disabled: disabled,
      onClick: handleClick
    }, props), icons.clear, /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, screenReaderText.clearButton))
  );
};

export default SearchFieldClearButton;
//# sourceMappingURL=SearchFieldClearButton.js.map