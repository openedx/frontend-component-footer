var _excluded = ["src", "id", "className", "hidden", "screenReaderText", "svgAttrs"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import newId from '../utils/newId';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';
/**
 * An svg with an "img" role must satisfy the following a11y requirements
 * - It needs a text alternative in the form of aria-label, aria-labelledby, or screen-reader only text.
 * - If no label is desired, aria-label will be set to an empty string and aria-hidden to "true".
 * - focusable is set to false on the svg in all cases as a workaround for an ie11 bug
 */

function Icon(_ref) {
  var Component = _ref.src,
      id = _ref.id,
      className = _ref.className,
      hidden = _ref.hidden,
      screenReaderText = _ref.screenReaderText,
      svgAttrs = _ref.svgAttrs,
      attrs = _objectWithoutProperties(_ref, _excluded);

  if (Component) {
    // If no aria label is specified, hide this icon from screenreaders
    var hasAriaLabel = svgAttrs['aria-label'] || svgAttrs['aria-labelledby'];

    var mergedSvgProps = _objectSpread({}, svgAttrs);

    if (!hasAriaLabel) {
      mergedSvgProps['aria-label'] = undefined;
      mergedSvgProps['aria-hidden'] = true;
    }

    return /*#__PURE__*/React.createElement("span", _extends({
      className: classNames('pgn__icon', className),
      id: id
    }, attrs), /*#__PURE__*/React.createElement(Component, _extends({
      role: "img",
      focusable: false
    }, mergedSvgProps)), screenReaderText && /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, screenReaderText));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    id: id || newId('Icon'),
    className: className,
    "aria-hidden": hidden
  }), screenReaderText && /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, screenReaderText));
}

Icon.propTypes = {
  // eslint-disable-next-line max-len

  /** An icon component to render. Example import of a Paragon icon component: `import { Check } from '@edx/paragon/dist/icon';` */
  src: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: PropTypes.shape({
    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string
  }),
  // eslint-disable-next-line max-len

  /** the `id` property of the Icon element, by default this value is generated with the `newId` function with the `prefix` of `Icon`. */
  id: PropTypes.string,
  // eslint-disable-next-line max-len

  /** A class name that will define what the Icon looks like. */
  className: PropTypes.string,
  // eslint-disable-next-line max-len

  /** a boolean that determines the value of `aria-hidden` attribute on the Icon span, this value is `true` by default. */
  hidden: PropTypes.bool,
  // eslint-disable-next-line max-len

  /** a string or an element that will be used on a secondary span leveraging the `sr-only` style for screenreader only text, this value is `undefined` by default. This value is recommended for use unless the Icon is being used in a way that is purely decorative or provides no additional context for screen reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
Icon.defaultProps = {
  src: null,
  svgAttrs: {},
  id: undefined,
  hidden: true,
  screenReaderText: undefined,
  className: undefined
};
export default withDeprecatedProps(Icon, 'Icon', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: function expect(value) {
      return typeof value === 'string';
    },
    transform: function transform(value) {
      return Array.isArray(value) ? value.join(' ') : value;
    },
    message: 'It should be a string.'
  }
});
//# sourceMappingURL=index.js.map