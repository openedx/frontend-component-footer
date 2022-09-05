import React, { useContext } from 'react';
import { Pagination } from '..';
import DataTableContext from './DataTableContext';

var TablePaginationMinimal = function TablePaginationMinimal() {
  var _useContext = useContext(DataTableContext),
      nextPage = _useContext.nextPage,
      pageCount = _useContext.pageCount,
      gotoPage = _useContext.gotoPage,
      state = _useContext.state; // Use nextPage as a proxy for whether or not the table is paginated


  if (!nextPage) {
    return null;
  }

  var pageIndex = state === null || state === void 0 ? void 0 : state.pageIndex;
  return /*#__PURE__*/React.createElement(Pagination, {
    variant: "minimal",
    currentPage: pageIndex + 1,
    pageCount: pageCount,
    paginationLabel: "table pagination",
    onPageSelect: function onPageSelect(pageNum) {
      return gotoPage(pageNum - 1);
    }
  });
};

export default TablePaginationMinimal;
//# sourceMappingURL=TablePaginationMinimal.js.map