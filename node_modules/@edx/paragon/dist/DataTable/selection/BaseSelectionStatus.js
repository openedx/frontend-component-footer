import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../..';
import DataTableContext from '../DataTableContext';
import { SELECT_ALL_TEST_ID, CLEAR_SELECTION_TEST_ID } from './data/constants';

var BaseSelectionStatus = function BaseSelectionStatus(_ref) {
  var className = _ref.className,
      clearSelectionText = _ref.clearSelectionText,
      numSelectedRows = _ref.numSelectedRows,
      onSelectAll = _ref.onSelectAll,
      onClear = _ref.onClear;

  var _useContext = useContext(DataTableContext),
      itemCount = _useContext.itemCount;

  var isAllRowsSelected = numSelectedRows === itemCount;
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("span", null, isAllRowsSelected && 'All ', numSelectedRows, " selected "), !isAllRowsSelected && /*#__PURE__*/React.createElement(Button, {
    className: SELECT_ALL_TEST_ID,
    variant: "link",
    size: "inline",
    onClick: onSelectAll
  }, "Select all ", itemCount), numSelectedRows > 0 && /*#__PURE__*/React.createElement(Button, {
    className: CLEAR_SELECTION_TEST_ID,
    variant: "link",
    size: "inline",
    onClick: onClear
  }, clearSelectionText));
};

BaseSelectionStatus.defaultProps = {
  className: undefined
};
BaseSelectionStatus.propTypes = {
  className: PropTypes.string,
  clearSelectionText: PropTypes.string.isRequired,
  numSelectedRows: PropTypes.number.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};
export default BaseSelectionStatus;
//# sourceMappingURL=BaseSelectionStatus.js.map