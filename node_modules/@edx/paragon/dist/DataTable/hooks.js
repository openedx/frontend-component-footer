function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import DataTableContext from './DataTableContext';
import { clearSelectionAction } from './selection/data/actions';
export var useRows = function useRows() {
  var _useContext = useContext(DataTableContext),
      getTableProps = _useContext.getTableProps,
      prepareRow = _useContext.prepareRow,
      page = _useContext.page,
      rows = _useContext.rows,
      headerGroups = _useContext.headerGroups,
      getTableBodyProps = _useContext.getTableBodyProps;

  var displayRows = page || rows;
  return {
    getTableProps: getTableProps,
    prepareRow: prepareRow,
    displayRows: displayRows,
    headerGroups: headerGroups,
    getTableBodyProps: getTableBodyProps
  };
};
/**
 * Hook that provides selection state functionality
 * @param {Object} param0 Table instance
 * @param {Array} controlledTableSelections Selection Object and dispatch function
 * @returns
 */

export var useSelectionActions = function useSelectionActions(_ref, controlledTableSelections) {
  var toggleAllRowsSelected = _ref.toggleAllRowsSelected;

  var _controlledTableSelec = _slicedToArray(controlledTableSelections, 2),
      _controlledTableSelec2 = _controlledTableSelec[0],
      selectedRows = _controlledTableSelec2.selectedRows,
      isEntireTableSelected = _controlledTableSelec2.isEntireTableSelected,
      dispatch = _controlledTableSelec[1];

  var clearSelection = function clearSelection() {
    // if using controlled selection component DataTable.ControlledSelectionStatus
    if (selectedRows.length > 0 || isEntireTableSelected) {
      dispatch(clearSelectionAction());
    } else {
      toggleAllRowsSelected(false);
    }
  };

  return {
    clearSelection: clearSelection
  };
};
//# sourceMappingURL=hooks.js.map