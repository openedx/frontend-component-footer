var _excluded = ["children", "variant"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseTooltip from 'react-bootstrap/Tooltip';
var PLACEMENT_VARIANTS = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var Tooltip = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BaseTooltip, _extends({}, props, {
    className: classNames({
      'tooltip-light': variant === 'light'
    }, props.className),
    ref: ref
  }), children);
});
Tooltip.propTypes = _objectSpread(_objectSpread({}, BaseTooltip.propTypes), {}, {
  /** An html id attribute, necessary for accessibility. */
  id: PropTypes.string.isRequired,

  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: PropTypes.oneOf(PLACEMENT_VARIANTS),

  /**
   * An `Overlay` injected set of props for positioning the `Tooltip` arrow.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  arrowProps: PropTypes.shape({
    ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.element
    })]),
    style: PropTypes.shape({})
  }),

  /** Whether the `Overlay` is shown. */
  show: PropTypes.bool,

  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper: PropTypes.shape({}),

  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,

  /** Specifies the content of the `Tooltip` */
  children: PropTypes.node,

  /** Specifies class name to append to the base element */
  className: PropTypes.string,

  /** The visual style of the `Tooltip` */
  variant: PropTypes.string
});
Tooltip.defaultProps = _objectSpread(_objectSpread({}, Tooltip.defaultProps), {}, {
  id: undefined,
  placement: 'right',
  arrowProps: undefined,
  show: undefined,
  popper: undefined,
  children: undefined,
  className: undefined,
  variant: undefined,
  bsPrefix: 'tooltip'
});
export default Tooltip;
//# sourceMappingURL=index.js.map