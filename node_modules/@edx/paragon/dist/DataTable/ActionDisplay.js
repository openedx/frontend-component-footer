import React, { useContext } from 'react';
import BulkActions from './BulkActions';
import TableActions from './TableActions';
import DataTableContext from './DataTableContext'; // handles display logic for actions

var ActionDisplay = function ActionDisplay() {
  var _useContext = useContext(DataTableContext),
      bulkActions = _useContext.bulkActions,
      tableActions = _useContext.tableActions,
      selectedFlatRows = _useContext.selectedFlatRows;

  var noBulkActions = typeof bulkActions !== 'function' && (bulkActions === null || bulkActions === void 0 ? void 0 : bulkActions.length) < 1;
  var noTableActions = typeof tableActions !== 'function' && (tableActions === null || tableActions === void 0 ? void 0 : tableActions.length) < 1;
  var noActionsAvailable = noBulkActions && noTableActions;
  var hasRowsSelected = (selectedFlatRows === null || selectedFlatRows === void 0 ? void 0 : selectedFlatRows.length) > 0; // return null if there are no actions or if there are only bulk actions and no selected rows

  if (noActionsAvailable || noTableActions && !hasRowsSelected) {
    return null;
  }

  if (!noBulkActions && hasRowsSelected) {
    return /*#__PURE__*/React.createElement(BulkActions, null);
  }

  return /*#__PURE__*/React.createElement(TableActions, null);
};

export default ActionDisplay;
//# sourceMappingURL=ActionDisplay.js.map