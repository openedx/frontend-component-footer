var _excluded = ["children", "className", "showLabel", "size", "src"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Avatar } from '..';
var buttonSizesToAvatarSize = {
  sm: 'xs',
  md: 'sm',
  lg: 'md'
};
var AvatarButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      showLabel = _ref.showLabel,
      size = _ref.size,
      src = _ref.src,
      attrs = _objectWithoutProperties(_ref, _excluded);

  var avatarSize = buttonSizesToAvatarSize[size] || 'sm';
  return /*#__PURE__*/React.createElement(Button, _extends({}, attrs, {
    className: classNames('btn-avatar', // the public class name for custom styling
    'pgn__avatar-button-avatar', "pgn__avatar-button-avatar-".concat(size), className, {
      'pgn__avatar-button-hide-label': !showLabel
    }),
    size: size,
    ref: ref
  }), /*#__PURE__*/React.createElement(Avatar, {
    src: src,
    alt: showLabel ? '' : children,
    size: avatarSize
  }), showLabel && children);
});
AvatarButton.propTypes = {
  /** The button text */
  children: PropTypes.string,

  /** A class name to append to the button */
  className: PropTypes.string,

  /** Show the label or only the avatar */
  showLabel: PropTypes.bool,

  /** The button size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /** Image src of the avatar image */
  src: PropTypes.string,

  /** The button style variant to use */
  variant: PropTypes.string
};
AvatarButton.defaultProps = {
  children: undefined,
  className: undefined,
  showLabel: true,
  size: 'md',
  src: undefined,
  variant: 'tertiary'
};
export default AvatarButton;
//# sourceMappingURL=index.js.map