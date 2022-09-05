import { useSortBy, useFilters, useRowSelect, usePagination, useExpanded } from 'react-table';

var getTableArgs = function getTableArgs(_ref) {
  var tableOptions = _ref.tableOptions,
      isFilterable = _ref.isFilterable,
      isSortable = _ref.isSortable,
      isPaginated = _ref.isPaginated,
      isSelectable = _ref.isSelectable,
      isExpandable = _ref.isExpandable;
  var tableArgs = [tableOptions];

  if (isFilterable) {
    tableArgs.push(useFilters);
  }

  if (isSortable) {
    tableArgs.push(useSortBy);
  }

  if (isExpandable) {
    tableArgs.push(useExpanded);
  }

  if (isPaginated) {
    tableArgs.push(usePagination);
  }

  if (isSelectable) {
    tableArgs.push(useRowSelect);
  }

  return tableArgs;
};

export default getTableArgs;
//# sourceMappingURL=getTableArgs.js.map