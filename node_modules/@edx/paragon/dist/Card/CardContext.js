import React, { createContext } from 'react';
import PropTypes from 'prop-types';
var CardContext = /*#__PURE__*/createContext({});

var CardContextProvider = function CardContextProvider(_ref) {
  var orientation = _ref.orientation,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(CardContext.Provider, {
    value: {
      orientation: orientation
    }
  }, children);
};

CardContextProvider.propTypes = {
  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /** Specifies content of the component. */
  children: PropTypes.node
};
CardContextProvider.defaultProps = {
  orientation: 'vertical',
  children: null
};
export { CardContextProvider };
export default CardContext;
//# sourceMappingURL=CardContext.js.map