function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import TableHeaderCell from './TableHeaderCell';

var TableHeaderRow = function TableHeaderRow(_ref) {
  var headerGroups = _ref.headerGroups;
  return /*#__PURE__*/React.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React.createElement(TableHeaderCell, _extends({}, column, column.getHeaderProps()));
    }));
  }));
};

TableHeaderRow.propTypes = {
  headerGroups: PropTypes.arrayOf(PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.shape({
      /** Props for the TableHeaderCell component. Must include a key */
      getHeaderProps: PropTypes.func.isRequired
    })).isRequired,

    /** Returns props for the header tr element */
    getHeaderGroupProps: PropTypes.func.isRequired
  })).isRequired
};
export default TableHeaderRow;
//# sourceMappingURL=TableHeaderRow.js.map