var _excluded = ["children", "isInline"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { FORM_CONTROL_SIZES } from './constants';

var FormLabel = function FormLabel(_ref) {
  var children = _ref.children,
      isInline = _ref.isInline,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useFormGroupContext = useFormGroupContext(),
      size = _useFormGroupContext.size,
      isControlGroup = _useFormGroupContext.isControlGroup,
      getLabelProps = _useFormGroupContext.getLabelProps;

  var className = classNames('pgn__form-label', {
    'pgn__form-label-inline': isInline,
    'pgn__form-label-lg': size === FORM_CONTROL_SIZES.LARGE,
    'pgn__form-label-sm': size === FORM_CONTROL_SIZES.SMALL
  }, props.className);
  var labelProps = getLabelProps(_objectSpread(_objectSpread({}, props), {}, {
    className: className
  }));
  var componentType = isControlGroup ? 'p' : 'label';
  return /*#__PURE__*/React.createElement(componentType, labelProps, children);
};

var SIZE_CHOICES = ['sm', 'lg'];
FormLabel.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,

  /** Specifies whether the component should be displayed with inline styling. */
  isInline: PropTypes.bool,

  /** Specifies size of the component. */
  size: PropTypes.oneOf(SIZE_CHOICES)
};
FormLabel.defaultProps = {
  isInline: false,
  size: undefined,
  className: undefined
};
export default FormLabel;
//# sourceMappingURL=FormLabel.js.map