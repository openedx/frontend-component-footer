function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableCell from './TableCell';
import DataTableContext from './DataTableContext';

var TableRow = function TableRow(_ref) {
  var row = _ref.row;
  var getRowProps = row.getRowProps,
      cells = row.cells,
      id = row.id,
      isSelected = row.isSelected,
      isExpanded = row.isExpanded;

  var _useContext = useContext(DataTableContext),
      renderRowSubComponent = _useContext.renderRowSubComponent,
      visibleColumns = _useContext.visibleColumns;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", getRowProps({
    className: classNames({
      'pgn__data-table-row': true,
      'is-selected': isSelected
    })
  }), cells.map(function (cell) {
    return /*#__PURE__*/React.createElement(TableCell, _extends({}, cell, {
      key: "".concat(cell.column.Header).concat(id)
    }));
  })), isExpanded && renderRowSubComponent ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: visibleColumns.length
  }, renderRowSubComponent({
    row: row
  }))) : null);
};

TableRow.propTypes = {
  /** Row data that is received from `react-table` API. */
  row: PropTypes.shape({
    /** props to include on the tr tag (must include id) */
    getRowProps: PropTypes.func.isRequired,

    /** cells in the row */
    cells: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

    /** row id */
    id: PropTypes.string.isRequired,

    /** indicates if row has been selected */
    isSelected: PropTypes.bool,

    /** Indicates if row has been expanded. */
    isExpanded: PropTypes.bool
  }).isRequired
};
export default TableRow;
//# sourceMappingURL=TableRow.js.map