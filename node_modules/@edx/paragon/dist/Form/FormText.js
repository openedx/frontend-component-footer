var _excluded = ["children", "type", "icon", "muted", "hasIcon"];

var _FORM_TEXT_ICONS;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '..';
import { Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled } from '../../icons';
import { FORM_TEXT_TYPES } from './constants';
var FORM_TEXT_ICONS = (_FORM_TEXT_ICONS = {}, _defineProperty(_FORM_TEXT_ICONS, FORM_TEXT_TYPES.DEFAULT, null), _defineProperty(_FORM_TEXT_ICONS, FORM_TEXT_TYPES.VALID, Check), _defineProperty(_FORM_TEXT_ICONS, FORM_TEXT_TYPES.INVALID, Close), _defineProperty(_FORM_TEXT_ICONS, FORM_TEXT_TYPES.WARNING, WarningFilled), _defineProperty(_FORM_TEXT_ICONS, FORM_TEXT_TYPES.CRITERIA_EMPTY, RadioButtonUnchecked), _defineProperty(_FORM_TEXT_ICONS, FORM_TEXT_TYPES.CRITERIA_VALID, CheckCircle), _defineProperty(_FORM_TEXT_ICONS, FORM_TEXT_TYPES.CRITERIA_INVALID, Cancel), _FORM_TEXT_ICONS);

var resolveTextType = function resolveTextType(_ref) {
  var isInvalid = _ref.isInvalid,
      isValid = _ref.isValid;

  if (isValid) {
    return FORM_TEXT_TYPES.VALID;
  }

  if (isInvalid) {
    return FORM_TEXT_TYPES.INVALID;
  }

  return FORM_TEXT_TYPES.DEFAULT;
};

var FormTextIcon = function FormTextIcon(_ref2) {
  var type = _ref2.type,
      customIcon = _ref2.customIcon;

  if (customIcon) {
    return customIcon;
  }

  var typeIcon = FORM_TEXT_ICONS[type];

  if (typeIcon) {
    return /*#__PURE__*/React.createElement(Icon, {
      src: typeIcon
    });
  }

  return null;
};

FormTextIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(FORM_TEXT_TYPES)),
  customIcon: PropTypes.node
};
FormTextIcon.defaultProps = {
  type: undefined,
  customIcon: undefined
};

var FormText = function FormText(_ref3) {
  var children = _ref3.children,
      type = _ref3.type,
      icon = _ref3.icon,
      muted = _ref3.muted,
      hasIcon = _ref3.hasIcon,
      props = _objectWithoutProperties(_ref3, _excluded);

  var className = classNames(props.className, 'pgn__form-text', "pgn__form-text-".concat(type), {
    'text-muted': muted
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: className
  }), hasIcon && /*#__PURE__*/React.createElement(FormTextIcon, {
    customIcon: icon,
    type: type
  }), children);
};

var FORM_TEXT_TYPE_CHOICES = ['default', 'valid', 'invalid', 'warning', 'criteria-empty', 'criteria-valid', 'criteria-invalid'];
FormText.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,

  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies whether to show an icon next to the text. */
  hasIcon: PropTypes.bool,

  /** Specifies text type, this affects styling. */
  type: PropTypes.oneOf(FORM_TEXT_TYPE_CHOICES),

  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: PropTypes.node,

  /** Specifies whether to show text with muted styling. */
  muted: PropTypes.bool
};
FormText.defaultProps = {
  hasIcon: true,
  type: 'default',
  icon: undefined,
  className: undefined,
  muted: false
};
export default FormText;
export { FORM_TEXT_TYPES, FORM_TEXT_ICONS, FormTextIcon, resolveTextType };
//# sourceMappingURL=FormText.js.map