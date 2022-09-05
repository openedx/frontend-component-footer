import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DataTableContext from './DataTableContext';

var RowStatus = function RowStatus(_ref) {
  var className = _ref.className;

  var _useContext = useContext(DataTableContext),
      page = _useContext.page,
      rows = _useContext.rows,
      itemCount = _useContext.itemCount;

  var pageSize = (page === null || page === void 0 ? void 0 : page.length) || (rows === null || rows === void 0 ? void 0 : rows.length);

  if (!pageSize) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, "Showing ", pageSize, " of ", itemCount, ".");
};

RowStatus.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string
};
RowStatus.defaultProps = {
  className: undefined
};
export default RowStatus;
//# sourceMappingURL=RowStatus.js.map