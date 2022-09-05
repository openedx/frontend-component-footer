function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRows } from './hooks';
import { CardGrid } from '..';

var CardView = function CardView(_ref) {
  var columnSizes = _ref.columnSizes,
      CardComponent = _ref.CardComponent,
      className = _ref.className;

  var _useRows = useRows(),
      getTableProps = _useRows.getTableProps,
      prepareRow = _useRows.prepareRow,
      displayRows = _useRows.displayRows;

  var renderCards = function renderCards() {
    return displayRows.map(function (row) {
      prepareRow(row);
      return /*#__PURE__*/React.createElement(CardComponent, _extends({}, row, {
        key: row.id
      }));
    });
  };

  if (!getTableProps) {
    return null;
  }

  return /*#__PURE__*/React.createElement(CardGrid, {
    className: classNames('pgn__data-table-card-view', className),
    columnSizes: columnSizes
  }, renderCards());
};

CardView.defaultProps = {
  columnSizes: {
    xs: 12,
    lg: 6,
    xl: 4
  },
  className: ''
};
CardView.propTypes = {
  /** The class name for the CardGrid component */
  className: PropTypes.string,

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
  }),

  /** Your card component must be individualized to your table.
   * It will be called with props from the "row" of data it will display */
  CardComponent: PropTypes.func.isRequired
};
export default CardView;
//# sourceMappingURL=CardView.js.map