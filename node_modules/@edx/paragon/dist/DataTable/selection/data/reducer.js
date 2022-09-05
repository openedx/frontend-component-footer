function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import uniqBy from 'lodash.uniqby';
import { SET_SELECTED_ROWS, DELETE_ROW, ADD_ROW, CLEAR_SELECTION, CLEAR_PAGE_SELECTION, SET_SELECT_ALL_ROWS_ALL_PAGES } from './actions';
export var initialState = {
  selectedRows: [],
  isEntireTableSelected: false
};

var selectionsReducer = function selectionsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_SELECTED_ROWS:
      {
        var selectedRows = uniqBy([].concat(_toConsumableArray(state.selectedRows), _toConsumableArray(action.rows)), function (row) {
          return row.id;
        });

        var updatedState = _objectSpread(_objectSpread({}, state), {}, {
          selectedRows: selectedRows
        });

        if (selectedRows.length === action.itemCount) {
          updatedState.isEntireTableSelected = true;
        }

        return updatedState;
      }

    case SET_SELECT_ALL_ROWS_ALL_PAGES:
      return _objectSpread(_objectSpread({}, state), {}, {
        isEntireTableSelected: true
      });

    case DELETE_ROW:
      return {
        selectedRows: state.selectedRows.filter(function (row) {
          return row.id !== action.rowId;
        }),
        isEntireTableSelected: false
      };

    case ADD_ROW:
      {
        var _selectedRows = uniqBy([].concat(_toConsumableArray(state.selectedRows), [action.row]), function (row) {
          return row.id;
        });

        var isEntireTableSelected = _selectedRows.length === action.itemCount;
        return {
          selectedRows: _selectedRows,
          isEntireTableSelected: isEntireTableSelected
        };
      }

    case CLEAR_SELECTION:
      return initialState;

    case CLEAR_PAGE_SELECTION:
      return {
        isEntireTableSelected: false,
        selectedRows: state.selectedRows.filter(function (row) {
          return !action.rowIds.includes(row.id);
        })
      };

    default:
      return state;
  }
};

export default selectionsReducer;
//# sourceMappingURL=reducer.js.map