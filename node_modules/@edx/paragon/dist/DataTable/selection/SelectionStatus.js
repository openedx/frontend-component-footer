import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DataTableContext from '../DataTableContext';
import BaseSelectionStatus from './BaseSelectionStatus';
import { CLEAR_SELECTION_TEXT } from './data/constants';

var SelectionStatus = function SelectionStatus(_ref) {
  var className = _ref.className,
      clearSelectionText = _ref.clearSelectionText;

  var _useContext = useContext(DataTableContext),
      toggleAllRowsSelected = _useContext.toggleAllRowsSelected,
      selectedFlatRows = _useContext.selectedFlatRows;

  var numSelectedRows = selectedFlatRows.length;
  var selectionStatusProps = {
    className: className,
    numSelectedRows: numSelectedRows,
    clearSelectionText: clearSelectionText,
    onSelectAll: function onSelectAll() {
      return toggleAllRowsSelected(true);
    },
    onClear: function onClear() {
      return toggleAllRowsSelected(false);
    }
  };
  return /*#__PURE__*/React.createElement(BaseSelectionStatus, selectionStatusProps);
};

SelectionStatus.propTypes = {
  /** A class name to append to the base element */
  className: PropTypes.string,

  /** A text that appears on the `Clear selection` button */
  clearSelectionText: PropTypes.string
};
SelectionStatus.defaultProps = {
  className: undefined,
  clearSelectionText: CLEAR_SELECTION_TEXT
};
export default SelectionStatus;
//# sourceMappingURL=SelectionStatus.js.map