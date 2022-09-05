import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var CardBody = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__card-body', className),
    ref: ref
  }, children);
});
CardBody.propTypes = {
  /** Specifies the content of the component. */
  children: PropTypes.node,

  /** The class to append to the base element. */
  className: PropTypes.string
};
CardBody.defaultProps = {
  children: undefined,
  className: undefined
};
export default CardBody;
//# sourceMappingURL=CardBody.js.map