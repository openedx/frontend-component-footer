import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataTableContext from './DataTableContext';

var EmptyTable = function EmptyTable(_ref) {
  var content = _ref.content,
      className = _ref.className;

  var _useContext = useContext(DataTableContext),
      rows = _useContext.rows,
      isLoading = _useContext.isLoading;

  if (isLoading || !rows || rows.length > 0) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__data-table-empty', className)
  }, content);
};

EmptyTable.defaultProps = {
  className: null
};
EmptyTable.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired
};
export default EmptyTable;
//# sourceMappingURL=EmptyTable.js.map