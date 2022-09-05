var _excluded = ["className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var TableCell = function TableCell(_ref) {
  var getCellProps = _ref.getCellProps,
      render = _ref.render,
      column = _ref.column;

  var _getCellProps = getCellProps(),
      className = _getCellProps.className,
      rest = _objectWithoutProperties(_getCellProps, _excluded);

  return /*#__PURE__*/React.createElement("td", _extends({}, rest, {
    className: classNames('pgn__data-table-cell-wrap', className, column.cellClassName)
  }), render('Cell'));
};

TableCell.propTypes = {
  /** Props for the td element */
  getCellProps: PropTypes.func.isRequired,

  /** Function that renders the cell contents. Will be called with the string 'Cell' */
  render: PropTypes.func.isRequired,

  /** Table column */
  column: PropTypes.shape({
    /** Class(es) to be applied to the cells in the given column */
    cellClassName: PropTypes.string
  }).isRequired
};
export default TableCell;
//# sourceMappingURL=TableCell.js.map