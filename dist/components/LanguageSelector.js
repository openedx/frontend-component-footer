var _excluded = ["intl", "options", "onSubmit"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from '@edx/frontend-platform/i18n';

var LanguageSelector = function LanguageSelector(_ref) {
  var intl = _ref.intl,
      options = _ref.options,
      onSubmit = _ref.onSubmit,
      props = _objectWithoutProperties(_ref, _excluded);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var languageCode = e.target.elements['site-footer-language-select'].value;
    onSubmit(languageCode);
  };

  return /*#__PURE__*/React.createElement("form", _extends({
    className: "form-inline",
    onSubmit: handleSubmit
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "site-footer-language-select",
    className: "d-inline-block m-0"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "footer.languageForm.select.label",
    defaultMessage: "Choose Language",
    description: "The label for the laguage select part of the language selection form."
  })), /*#__PURE__*/React.createElement("select", {
    id: "site-footer-language-select",
    className: "form-control-sm mx-2",
    name: "site-footer-language-select",
    defaultValue: intl.locale
  }, options.map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-primary btn-sm",
    type: "submit"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "footer.languageForm.submit.label",
    defaultMessage: "Apply",
    description: "The label for button to submit the language selection form."
  }))));
};

LanguageSelector.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })).isRequired
};
export default injectIntl(LanguageSelector);
//# sourceMappingURL=LanguageSelector.js.map