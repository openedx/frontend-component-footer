function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import selectionsReducer, { initialState as defaultInitialState } from '../data/reducer';
import { setSelectedRowsAction, setSelectAllRowsAllPagesAction, deleteSelectedRowAction, addSelectedRowAction, clearSelectionAction, clearPageSelectionAction } from '../data/actions';
describe('DataTable selections reducer', function () {
  it('sets individual selected rows', function () {
    var rows = [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }];
    var itemCount = 20;
    var action = setSelectedRowsAction(rows, itemCount);
    var updatedState = selectionsReducer(defaultInitialState, action);
    expect(updatedState).toEqual(_objectSpread(_objectSpread({}, defaultInitialState), {}, {
      selectedRows: rows
    }));
  });
  it('sets selected rows, when the entire table is selected', function () {
    var rows = [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }];
    var itemCount = 3;
    var action = setSelectedRowsAction(rows, itemCount);
    var updatedState = selectionsReducer(defaultInitialState, action);
    expect(updatedState).toEqual({
      isEntireTableSelected: true,
      selectedRows: rows
    });
  });
  it('selects entire table', function () {
    var initialState = _objectSpread(_objectSpread({}, defaultInitialState), {}, {
      selectedRows: [{
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }]
    });

    var action = setSelectAllRowsAllPagesAction();
    var updatedState = selectionsReducer(initialState, action);
    expect(updatedState).toEqual({
      isEntireTableSelected: true,
      selectedRows: initialState.selectedRows
    });
  });
  it('deletes a selected row', function () {
    var rows = [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }];

    var initialState = _objectSpread(_objectSpread({}, defaultInitialState), {}, {
      selectedRows: rows
    });

    var action = deleteSelectedRowAction(1);
    var updatedState = selectionsReducer(initialState, action);
    expect(updatedState).toEqual(_objectSpread(_objectSpread({}, defaultInitialState), {}, {
      selectedRows: [{
        id: 2
      }, {
        id: 3
      }]
    }));
  });
  it('adds a selected row', function () {
    var row = {
      id: 1
    };
    var itemCount = 5;
    var action = addSelectedRowAction(row, itemCount);
    var updatedState = selectionsReducer(defaultInitialState, action);
    expect(updatedState).toEqual(_objectSpread(_objectSpread({}, defaultInitialState), {}, {
      selectedRows: [row]
    }));
  });
  it('adds a selected row, when entire table is selected', function () {
    var row = {
      id: 1
    };
    var itemCount = 1;
    var action = addSelectedRowAction(row, itemCount);
    var updatedState = selectionsReducer(defaultInitialState, action);
    expect(updatedState).toEqual({
      selectedRows: [row],
      isEntireTableSelected: true
    });
  });
  it('clears all selections and resets to default initial state', function () {
    var rows = [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }];

    var initialState = _objectSpread(_objectSpread({}, defaultInitialState), {}, {
      selectedRows: rows
    });

    var action = clearSelectionAction();
    var updatedState = selectionsReducer(initialState, action);
    expect(updatedState).toEqual(defaultInitialState);
  });
  it('clears page selections', function () {
    var rows = [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }];

    var initialState = _objectSpread(_objectSpread({}, defaultInitialState), {}, {
      selectedRows: rows
    });

    var action = clearPageSelectionAction([1, 2]);
    var updatedState = selectionsReducer(initialState, action);
    expect(updatedState).toEqual(_objectSpread(_objectSpread({}, defaultInitialState), {}, {
      selectedRows: [{
        id: 3
      }]
    }));
  });
  it('handles unknown action', function () {
    var action = {
      type: 'SOME UNKNOWN ACTION'
    };
    var updatedState = selectionsReducer(defaultInitialState, action);
    expect(updatedState).toEqual(defaultInitialState);
  });
});
//# sourceMappingURL=reducer.test.js.map