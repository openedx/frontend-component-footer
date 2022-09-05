import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SmartStatus from './SmartStatus';
import DropdownFilters from './DropdownFilters';
import DataTableContext from './DataTableContext';
import ActionDisplay from './ActionDisplay';
import DataViewToggle from './DataViewToggle'; // handles layout for filters, status, and bulk actions

var TableControlBar = function TableControlBar(_ref) {
  var className = _ref.className;

  var _useContext = useContext(DataTableContext),
      setFilter = _useContext.setFilter,
      showFiltersInSidebar = _useContext.showFiltersInSidebar,
      togglePlacement = _useContext.dataViewToggleOptions.togglePlacement;

  var invalidTogglePlacement = !togglePlacement || !['left', 'bottom'].includes(togglePlacement);
  var actionsSectionClassName = classNames({
    'pgn__data-table-actions-right-toggle-bottom': togglePlacement === 'bottom',
    'pgn__data-table-actions-right': invalidTogglePlacement || togglePlacement === 'left'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__data-table-status-bar', className)
  }, setFilter && !showFiltersInSidebar && /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-actions-left"
  }, /*#__PURE__*/React.createElement(DropdownFilters, null)), /*#__PURE__*/React.createElement("div", {
    className: actionsSectionClassName
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ActionDisplay, null)))), /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-status-left"
  }, togglePlacement !== 'bottom' ? /*#__PURE__*/React.createElement(SmartStatus, null) : null), (!setFilter || setFilter && showFiltersInSidebar) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: actionsSectionClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-toggle"
  }, togglePlacement === 'bottom' ? /*#__PURE__*/React.createElement(SmartStatus, null) : null, /*#__PURE__*/React.createElement(DataViewToggle, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ActionDisplay, null)))), setFilter && !showFiltersInSidebar && /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-toggle"
  }, /*#__PURE__*/React.createElement(DataViewToggle, null))));
};

TableControlBar.propTypes = {
  /** Specifies class name to append to the base element */
  className: PropTypes.string
};
TableControlBar.defaultProps = {
  className: null
};
export default TableControlBar;
//# sourceMappingURL=TableControlBar.js.map