var _excluded = ["variant", "submitButtonLocation", "buttonText"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchFieldContext } from './SearchFieldAdvanced';
import { Button } from '../index';
var STYLE_VARIANTS = ['light', 'dark'];
var BUTTON_LOCATION_VARIANTS = ['internal', 'external'];

var SearchFieldSubmitButton = function SearchFieldSubmitButton(props) {
  var variant = props.variant,
      submitButtonLocation = props.submitButtonLocation,
      buttonText = props.buttonText,
      others = _objectWithoutProperties(props, _excluded);

  var _useContext = useContext(SearchFieldContext),
      screenReaderText = _useContext.screenReaderText,
      icons = _useContext.icons,
      refs = _useContext.refs,
      value = _useContext.value,
      disabled = _useContext.disabled;

  if (submitButtonLocation === 'internal' && value.length) {
    return null;
  }

  return submitButtonLocation === 'external' ? /*#__PURE__*/React.createElement(Button, _extends({
    type: "submit",
    ref: refs.submitButton,
    variant: variant === 'light' ? 'primary' : 'brand',
    className: "pgn__searchfield__button",
    disabled: disabled
  }, others), buttonText, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, screenReaderText.submitButton)) : /*#__PURE__*/React.createElement("button", _extends({
    type: "submit",
    className: classNames('btn'),
    ref: refs.submitButton,
    disabled: disabled
  }, others), icons.submit, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, screenReaderText.submitButton));
};

SearchFieldSubmitButton.propTypes = {
  /** The button style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),

  /** Controls whether the search button is internal as an icon or external as a button. */
  submitButtonLocation: PropTypes.oneOf(BUTTON_LOCATION_VARIANTS),

  /**
   * Specifies a text that is displayed on the button.
   * The `submitButtonLocation` prop should be set to `external`.
   */
  buttonText: PropTypes.string
};
SearchFieldSubmitButton.defaultProps = {
  variant: 'light',
  submitButtonLocation: 'internal',
  buttonText: 'Search'
};
export default SearchFieldSubmitButton;
//# sourceMappingURL=SearchFieldSubmitButton.js.map