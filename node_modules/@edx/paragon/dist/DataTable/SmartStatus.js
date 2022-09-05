import React, { useContext } from 'react';
import DataTableContext from './DataTableContext';
import FilterStatusDefault from './FilterStatus';
import RowStatusDefault from './RowStatus';
import SelectionStatusDefault from './selection/SelectionStatus';
var SMART_STATUS_CLASS = 'pgn__smart-status';

var SmartStatus = function SmartStatus() {
  var _useContext = useContext(DataTableContext),
      state = _useContext.state,
      selectedFlatRows = _useContext.selectedFlatRows,
      SelectionStatusComponent = _useContext.SelectionStatusComponent,
      FilterStatusComponent = _useContext.FilterStatusComponent,
      RowStatusComponent = _useContext.RowStatusComponent,
      showFiltersInSidebar = _useContext.showFiltersInSidebar;

  var numSelectedRows = selectedFlatRows === null || selectedFlatRows === void 0 ? void 0 : selectedFlatRows.length;
  var SelectionStatus = SelectionStatusComponent || SelectionStatusDefault;
  var FilterStatus = FilterStatusComponent || FilterStatusDefault;
  var RowStatus = RowStatusComponent || RowStatusDefault;

  if (selectedFlatRows && numSelectedRows > 0) {
    return /*#__PURE__*/React.createElement(SelectionStatus, {
      className: SMART_STATUS_CLASS
    });
  }

  if (state !== null && state !== void 0 && state.filters && state.filters.length > 0 && !showFiltersInSidebar) {
    return /*#__PURE__*/React.createElement(FilterStatus, {
      className: SMART_STATUS_CLASS
    });
  }

  return /*#__PURE__*/React.createElement(RowStatus, {
    className: SMART_STATUS_CLASS
  });
};

export default SmartStatus;
//# sourceMappingURL=SmartStatus.js.map