var _excluded = ["alt", "size", "src"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import defaultAvatar from './default-avatar.svg';

var Avatar = function Avatar(_ref) {
  var alt = _ref.alt,
      size = _ref.size,
      src = _ref.src,
      attrs = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("img", _extends({}, attrs, {
    className: classNames('pgn__avatar', "pgn__avatar-".concat(size), attrs.className),
    src: src || defaultAvatar,
    alt: alt
  }));
};

Avatar.propTypes = {
  /** Alt text. Usually the user's name */
  alt: PropTypes.string,

  /** Size of the avatar */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'huge']),

  /** Image src of the avatar image */
  src: PropTypes.string
};
Avatar.defaultProps = {
  alt: '',
  size: 'md',
  src: undefined
};
export default Avatar;
//# sourceMappingURL=index.js.map