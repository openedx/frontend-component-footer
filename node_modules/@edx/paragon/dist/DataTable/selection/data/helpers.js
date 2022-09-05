export var getUnselectedPageRows = function getUnselectedPageRows(selectedRowsIds, currentRows) {
  var unselectedPageRows = currentRows.filter(function (row) {
    return !selectedRowsIds.includes(row.id);
  });
  return unselectedPageRows;
};
export var getRowIds = function getRowIds(rows) {
  return rows.map(function (row) {
    return row.id;
  });
};
//# sourceMappingURL=helpers.js.map