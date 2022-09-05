var _excluded = ["as", "children", "className", "variant", "active", "iconBefore", "iconAfter"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
var STYLE_VARIANTS = ['light', 'dark'];

var Chip = function Chip(_ref) {
  var as = _ref.as,
      children = _ref.children,
      className = _ref.className,
      variant = _ref.variant,
      active = _ref.active,
      iconBefore = _ref.iconBefore,
      iconAfter = _ref.iconAfter,
      props = _objectWithoutProperties(_ref, _excluded);

  var elementProps = _objectSpread(_objectSpread({}, props), {}, {
    className: classNames('pgn__chip', "pgn__chip-".concat(variant), {
      active: active
    }, className)
  });

  var elementContent = /*#__PURE__*/React.createElement(React.Fragment, null, iconBefore && /*#__PURE__*/React.createElement(Icon, {
    className: classNames('chip-icon-before'),
    src: iconBefore
  }), children, iconAfter && /*#__PURE__*/React.createElement(Icon, {
    className: classNames('chip-icon-after'),
    src: iconAfter
  }));
  return /*#__PURE__*/React.createElement(props.href ? 'a' : as, elementProps, elementContent);
};

Chip.propTypes = {
  /** Specifies the base HTML element. */
  as: PropTypes.elementType,

  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,

  /** Specifies the content of the `Chip`. */
  children: PropTypes.node,

  /** The `Chip` style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),

  /** Adds the `active` class to the `Chip`. */
  active: PropTypes.bool,

  /** Disables the `Chip`. */
  disabled: PropTypes.bool,

  /** Providing a `href` will render an `<a>` element, styled as a button. */
  href: PropTypes.string,

  /**
   * An icon component to render before the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@edx/paragon/icons';`
   */
  iconBefore: PropTypes.node,

  /**
   * An icon component to render before after the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@edx/paragon/icons';`
   */
  iconAfter: PropTypes.node,

  /** A click handler for the `Chip` */
  onClick: PropTypes.func
};
Chip.defaultProps = {
  as: 'button',
  className: undefined,
  children: null,
  variant: 'light',
  active: false,
  disabled: false,
  href: undefined,
  iconBefore: undefined,
  iconAfter: undefined,
  onClick: function onClick() {}
};
export default Chip;
//# sourceMappingURL=index.js.map