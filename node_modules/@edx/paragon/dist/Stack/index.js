import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var DIRECTION_VARIANTS = ['horizontal', 'vertical'];

var Stack = function Stack(_ref) {
  var direction = _ref.direction,
      gap = _ref.gap,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(direction === 'horizontal' ? 'pgn__hstack' : 'pgn__vstack', gap ? "pgn__stack-gap--".concat(gap) : '', className)
  }, children);
};

Stack.propTypes = {
  /** Specifies the content of the `Stack`. */
  children: PropTypes.node.isRequired,

  /** Specifies direction of the children blocks (column/row). */
  direction: PropTypes.oneOf(DIRECTION_VARIANTS),

  /**
   * Specifies inner space between children blocks.
   *
   * Valid values are based on `the spacing classes`:
   * `0, 0.5, ... 6`.
   */
  gap: PropTypes.number,

  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string
};
Stack.defaultProps = {
  direction: 'vertical',
  gap: 0,
  className: undefined
};
export default Stack;
//# sourceMappingURL=index.js.map