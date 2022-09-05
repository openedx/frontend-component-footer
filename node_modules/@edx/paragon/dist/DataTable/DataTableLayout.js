import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarFilters from './SidebarFilters';
import DataTableContext from './DataTableContext';

var DataTableLayout = function DataTableLayout(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var _useContext = useContext(DataTableContext),
      setFilter = _useContext.setFilter,
      showFiltersInSidebar = _useContext.showFiltersInSidebar;

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__data-table-layout-wrapper', className)
  }, showFiltersInSidebar && setFilter && /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-layout-sidebar"
  }, /*#__PURE__*/React.createElement(SidebarFilters, null)), /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-layout-main"
  }, children));
};

DataTableLayout.defaultProps = {
  className: null
};
DataTableLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
export default DataTableLayout;
//# sourceMappingURL=DataTableLayout.js.map