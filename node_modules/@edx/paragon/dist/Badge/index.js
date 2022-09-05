function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import BaseBadge from 'react-bootstrap/Badge';
var Badge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(BaseBadge, _extends({}, props, {
    ref: ref
  }));
});
var STYLE_VARIANTS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
Badge.propTypes = {
  /** Specifies element type for this component */
  as: PropTypes.elementType,

  /** Visual style of the badge */
  variant: PropTypes.oneOf(STYLE_VARIANTS),

  /** Add the `pill` modifier to make badges more rounded with some additional horizontal padding */
  pill: PropTypes.bool,

  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
Badge.defaultProps = {
  as: 'span',
  variant: 'primary',
  pill: false,
  bsPrefix: 'badge'
};
export default Badge;
//# sourceMappingURL=index.js.map