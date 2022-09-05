/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RowStatus from './RowStatus';
import TablePagination from './TablePagination';
import TablePaginationMinimal from './TablePaginationMinimal';

var TableFooter = function TableFooter(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, 'pgn__data-table-footer')
  }, children);
};

TableFooter.propTypes = {
  /** Specifies the content of the `TableFooter` */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node]))]),

  /** Specifies class name to append to the base element. */
  className: PropTypes.string
};
TableFooter.defaultProps = {
  children: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RowStatus, null), /*#__PURE__*/React.createElement(TablePagination, null), /*#__PURE__*/React.createElement(TablePaginationMinimal, null)),
  className: null
};
export default TableFooter;
//# sourceMappingURL=TableFooter.js.map