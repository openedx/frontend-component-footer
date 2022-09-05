var _excluded = ["children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable max-len */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchFieldContext } from './SearchFieldAdvanced';

var SearchFieldLabel = function SearchFieldLabel(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = useContext(SearchFieldContext),
      screenReaderText = _useContext.screenReaderText,
      inputId = _useContext.inputId;

  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: inputId.current,
    className: classNames('m-0', {
      'has-label-text': !!children
    })
  }, props), children || /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, screenReaderText.label));
};

SearchFieldLabel.propTypes = {
  /**
   * specifies the label to use for the input field (e.g., for i18n translations). Note: if `children` is not provided,
   * a screenreader-only label will be used in its placed based on the `screenReaderText.label` prop for `SearchField.Advanced`.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
SearchFieldLabel.defaultProps = {
  children: undefined
};
export default SearchFieldLabel;
//# sourceMappingURL=SearchFieldLabel.js.map