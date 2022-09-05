import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var CardDivider = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__card-divider', className),
    ref: ref
  });
});
CardDivider.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string
};
CardDivider.defaultProps = {
  className: undefined
};
export default CardDivider;
//# sourceMappingURL=CardDivider.js.map