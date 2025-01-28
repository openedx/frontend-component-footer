var _excluded = ["intl", "options", "onSubmit"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
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
    "data-testid": "site-footer-submit-btn",
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