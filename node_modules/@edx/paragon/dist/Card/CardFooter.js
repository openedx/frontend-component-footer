import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardContext from './CardContext';
var CardFooter = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      isStacked = _ref.isStacked,
      textElement = _ref.textElement,
      orientation = _ref.orientation;

  var _useContext = useContext(CardContext),
      cardOrientation = _useContext.orientation;

  var footerOrientation = orientation || cardOrientation;
  var wrapperClassName = "pgn__card-footer ".concat(footerOrientation).concat(isStacked ? '-stacked' : '');
  var textElementClassName = "pgn__card-footer-text ".concat(footerOrientation).concat(isStacked ? '-stacked' : '');
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, wrapperClassName),
    ref: ref
  }, textElement && /*#__PURE__*/React.createElement("div", {
    className: textElementClassName
  }, textElement), children);
});
CardFooter.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,

  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: PropTypes.node,

  /** Specifies whether to use stacked variant. */
  isStacked: PropTypes.bool,

  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};
CardFooter.defaultProps = {
  className: undefined,
  textElement: undefined,
  isStacked: false,
  orientation: undefined
};
export default CardFooter;
//# sourceMappingURL=CardFooter.js.map