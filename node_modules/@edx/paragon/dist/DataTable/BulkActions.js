function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';

var BulkActions = function BulkActions(_ref) {
  var className = _ref.className;
  var tableInstance = useContext(DataTableContext);

  var bulkActions = tableInstance.bulkActions,
      selectedFlatRows = tableInstance.selectedFlatRows,
      _tableInstance$contro = _slicedToArray(tableInstance.controlledTableSelections, 1),
      isEntireTableSelected = _tableInstance$contro[0].isEntireTableSelected;

  var args = {
    selectedFlatRows: selectedFlatRows,
    isEntireTableSelected: isEntireTableSelected,
    tableInstance: tableInstance
  };

  if (typeof bulkActions === 'function') {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('pgn__bulk-actions', className)
    }, bulkActions(args));
  }

  var actions = bulkActions.map(function (action) {
    return {
      component: action,
      args: args
    };
  });
  return /*#__PURE__*/React.createElement(Actions, {
    className: classNames('pgn__bulk-actions', className),
    actions: actions
  });
};

BulkActions.defaultProps = {
  className: null
};
BulkActions.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string
};
export default BulkActions;
//# sourceMappingURL=BulkActions.js.map