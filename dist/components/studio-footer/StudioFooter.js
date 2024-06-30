function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useContext, useState } from 'react';
import _ from 'lodash';
import { intlShape, injectIntl, FormattedMessage } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import { ActionRow, Button, Container, Hyperlink, Image, TransitionReplace } from '@openedx/paragon';
import { ExpandLess, ExpandMore, Help } from '@openedx/paragon/icons';
import messages from './messages';
ensureConfig(['LMS_BASE_URL', 'MARKETING_SITE_BASE_URL', 'TERMS_OF_SERVICE_URL', 'PRIVACY_POLICY_URL', 'SUPPORT_EMAIL', 'SITE_NAME', 'STUDIO_BASE_URL', 'ENABLE_ACCESSIBILITY_PAGE'], 'Studio Footer component');
var StudioFooter = function StudioFooter(_ref) {
  var intl = _ref.intl;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useContext = useContext(AppContext),
    config = _useContext.config;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "m-0 mt-6 row align-items-center justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col border-top mr-2"
  }), /*#__PURE__*/React.createElement(Button, {
    "data-testid": "helpToggleButton",
    variant: "outline-primary",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    iconBefore: Help,
    iconAfter: isOpen ? ExpandLess : ExpandMore,
    size: "sm"
  }, isOpen ? intl.formatMessage(messages.closeHelpButtonLabel) : intl.formatMessage(messages.openHelpButtonLabel)), /*#__PURE__*/React.createElement("div", {
    className: "col border-top ml-2"
  })), /*#__PURE__*/React.createElement(Container, {
    size: "xl",
    className: "px-4"
  }, /*#__PURE__*/React.createElement(TransitionReplace, null, isOpen ? /*#__PURE__*/React.createElement(ActionRow, {
    key: "help-link-button-row",
    className: "py-4",
    "data-testid": "helpButtonRow"
  }, /*#__PURE__*/React.createElement(ActionRow.Spacer, null), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "https://docs.edx.org/",
    size: "sm"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.edxDocumentationButtonLabel)), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "https://open.edx.org/",
    size: "sm",
    "data-testid": "openEdXPortalButton"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.openEdxPortalButtonLabel)), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "https://www.edx.org/course/edx101-overview-of-creating-an-edx-course#.VO4eaLPF-n1",
    size: "sm"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.edx101ButtonLabel)), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "https://www.edx.org/course/studiox-creating-a-course-with-edx-studio",
    size: "sm"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.studioXButtonLabel)), !_.isEmpty(config.SUPPORT_EMAIL) && /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "mailto:".concat(config.SUPPORT_EMAIL),
    size: "sm",
    "data-testid": "contactUsButton"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.contactUsButtonLabel)), /*#__PURE__*/React.createElement(ActionRow.Spacer, null)) : null), /*#__PURE__*/React.createElement(ActionRow, {
    className: "pt-3 m-0 x-small"
  }, "\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.MARKETING_SITE_BASE_URL,
    target: "_blank",
    className: "ml-2"
  }, config.SITE_NAME), /*#__PURE__*/React.createElement(ActionRow.Spacer, null), !_.isEmpty(config.TERMS_OF_SERVICE_URL) && /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.TERMS_OF_SERVICE_URL,
    "data-testid": "termsOfService"
  }, intl.formatMessage(messages.termsOfServiceLinkLabel)), !_.isEmpty(config.PRIVACY_POLICY_URL) && /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.PRIVACY_POLICY_URL,
    "data-testid": "privacyPolicy"
  }, intl.formatMessage(messages.privacyPolicyLinkLabel)), config.ENABLE_ACCESSIBILITY_PAGE === 'true' && /*#__PURE__*/React.createElement(Hyperlink, {
    destination: "".concat(config.STUDIO_BASE_URL, "/accessibility"),
    "data-testid": "accessibilityRequest"
  }, intl.formatMessage(messages.accessibilityRequestLinkLabel)), /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.LMS_BASE_URL
  }, "LMS")), /*#__PURE__*/React.createElement(ActionRow, {
    className: "mt-3 pb-4 x-small"
  }, /*#__PURE__*/React.createElement(FormattedMessage, messages.trademarkMessage), /*#__PURE__*/React.createElement(Hyperlink, {
    className: "ml-1",
    destination: "https://www.edx.org"
  }, "edX Inc"), ".", /*#__PURE__*/React.createElement(ActionRow.Spacer, null), /*#__PURE__*/React.createElement(Hyperlink, {
    destination: "https://open.edx.org",
    className: "float-right"
  }, /*#__PURE__*/React.createElement(Image, {
    width: "120px",
    alt: "Powered by Open edX",
    src: "https://logos.openedx.org/open-edx-logo-tag.png"
  })))));
};
StudioFooter.propTypes = {
  // injected
  intl: intlShape.isRequired
};
export default injectIntl(StudioFooter);
//# sourceMappingURL=StudioFooter.js.map