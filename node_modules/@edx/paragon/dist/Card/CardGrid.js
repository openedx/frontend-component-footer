import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var CardGrid = function CardGrid(_ref) {
  var className = _ref.className,
      children = _ref.children,
      columnSizes = _ref.columnSizes;
  var cards = useMemo(function () {
    return React.Children.map(children, function (card) {
      return /*#__PURE__*/React.createElement(Col, columnSizes, card);
    });
  }, [children, columnSizes]);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__card-grid', className)
  }, /*#__PURE__*/React.createElement(Row, null, cards));
};

CardGrid.propTypes = {
  /** The class name for the CardGrid component */
  className: PropTypes.string,

  /** The Card components to organize into a responsive grid */
  children: PropTypes.node.isRequired,

  /**
   * An object containing the desired column size at each breakpoint, following a similar
   * props API as ``react-bootstrap/Col``
   */
  columnSizes: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
  })
};
CardGrid.defaultProps = {
  className: undefined,
  columnSizes: {
    sm: 12,
    lg: 6,
    xl: 4
  }
};
export default CardGrid;
//# sourceMappingURL=CardGrid.js.map