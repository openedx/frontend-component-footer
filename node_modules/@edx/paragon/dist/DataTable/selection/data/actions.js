export var SET_SELECT_ALL_ROWS_ALL_PAGES = 'SELECT ALL ROWS ALL PAGES';
export var setSelectAllRowsAllPagesAction = function setSelectAllRowsAllPagesAction() {
  return {
    type: SET_SELECT_ALL_ROWS_ALL_PAGES
  };
};
export var SET_SELECTED_ROWS = 'SET SELECTED ROWS';
export var setSelectedRowsAction = function setSelectedRowsAction(rows, itemCount) {
  return {
    type: SET_SELECTED_ROWS,
    rows: rows,
    itemCount: itemCount
  };
};
export var DELETE_ROW = 'DELETE ROW';
export var deleteSelectedRowAction = function deleteSelectedRowAction(rowId) {
  return {
    type: DELETE_ROW,
    rowId: rowId
  };
};
export var ADD_ROW = 'ADD ROW';
export var addSelectedRowAction = function addSelectedRowAction(row, itemCount) {
  return {
    type: ADD_ROW,
    row: row,
    itemCount: itemCount
  };
};
export var CLEAR_SELECTION = 'CLEAR SELECTION';
export var clearSelectionAction = function clearSelectionAction() {
  return {
    type: CLEAR_SELECTION
  };
};
export var CLEAR_PAGE_SELECTION = 'CLEAR PAGE SELECTION';
export var clearPageSelectionAction = function clearPageSelectionAction(rowIds) {
  return {
    type: CLEAR_PAGE_SELECTION,
    rowIds: rowIds
  };
};
//# sourceMappingURL=actions.js.map