import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardContext from './CardContext';
var CardImageCap = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var src = _ref.src,
      srcAlt = _ref.srcAlt,
      logoSrc = _ref.logoSrc,
      logoAlt = _ref.logoAlt,
      className = _ref.className;

  var _useContext = useContext(CardContext),
      orientation = _useContext.orientation;

  var wrapperClassName = "pgn__card-wrapper-image-cap ".concat(orientation);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, wrapperClassName),
    ref: ref
  }, /*#__PURE__*/React.createElement("img", {
    className: "pgn__card-image-cap",
    src: src,
    alt: srcAlt
  }), !!logoSrc && /*#__PURE__*/React.createElement("img", {
    className: "pgn__card-logo-cap",
    src: logoSrc,
    alt: logoAlt
  }));
});
CardImageCap.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies image src. */
  src: PropTypes.string,

  /** Specifies image alt text. */
  srcAlt: PropTypes.string,

  /** Specifies logo src to put on top of the image. */
  logoSrc: PropTypes.string,

  /** Specifies logo image alt text. */
  logoAlt: PropTypes.string
};
CardImageCap.defaultProps = {
  src: undefined,
  logoSrc: undefined,
  className: undefined,
  srcAlt: undefined,
  logoAlt: undefined
};
export default CardImageCap;
//# sourceMappingURL=CardImageCap.js.map