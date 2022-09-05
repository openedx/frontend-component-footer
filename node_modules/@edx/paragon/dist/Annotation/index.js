import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var Annotation = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      variant = _ref.variant,
      children = _ref.children,
      arrowPlacement = _ref.arrowPlacement;
  return /*#__PURE__*/React.createElement("span", {
    className: classNames(className, 'pgn__annotation', "pgn__annotation-".concat(variant, "-").concat(arrowPlacement)),
    ref: ref
  }, children);
});
Annotation.defaultProps = {
  className: undefined,
  variant: 'success',
  arrowPlacement: 'bottom'
};
Annotation.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,

  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies variant to use. */
  variant: PropTypes.oneOf(['error', 'success', 'warning', 'light', 'dark']),

  /** Specifies arrow position. */
  arrowPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};
export default Annotation;
//# sourceMappingURL=index.js.map