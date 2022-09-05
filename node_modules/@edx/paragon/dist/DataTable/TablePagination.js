import React, { useContext } from 'react';
import { Pagination } from '..';
import DataTableContext from './DataTableContext';

var TablePagination = function TablePagination() {
  var _useContext = useContext(DataTableContext),
      pageCount = _useContext.pageCount,
      state = _useContext.state,
      gotoPage = _useContext.gotoPage;

  if (!pageCount || pageCount < 2) {
    return null;
  }

  var pageIndex = state === null || state === void 0 ? void 0 : state.pageIndex;
  return /*#__PURE__*/React.createElement(Pagination.Reduced, {
    currentPage: pageIndex + 1,
    handlePageSelect: function handlePageSelect(pageNum) {
      return gotoPage(pageNum - 1);
    },
    pageCount: pageCount
  });
};

export default TablePagination;
//# sourceMappingURL=TablePagination.js.map