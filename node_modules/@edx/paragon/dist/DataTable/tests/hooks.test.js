import { useSelectionActions } from '../hooks';
var mockToggleAllRowsSelected = jest.fn();
var mockInstanceDispatcher = jest.fn();

var controlledTableSelectionsGenerator = function controlledTableSelectionsGenerator() {
  var selectedRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var isEntireTableSelected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return [{
    selectedRows: selectedRows,
    isEntireTableSelected: isEntireTableSelected
  }, mockInstanceDispatcher];
};

describe('hooks', function () {
  describe('useSelectionActions', function () {
    afterEach(function () {
      jest.clearAllMocks();
    });
    it('calls toggleAllRowsSelected when controlled selection is empty', function () {
      var _useSelectionActions = useSelectionActions({
        toggleAllRowsSelected: mockToggleAllRowsSelected
      }, controlledTableSelectionsGenerator([], false)),
          clearSelection = _useSelectionActions.clearSelection;

      clearSelection();
      expect(mockToggleAllRowsSelected.mock.calls.length).toBe(1);
      expect(mockInstanceDispatcher.mock.calls.length).toBe(0);
    });
    it('calls dispatcher when all rows selected flagged', function () {
      var _useSelectionActions2 = useSelectionActions({
        toggleAllRowsSelected: mockToggleAllRowsSelected
      }, controlledTableSelectionsGenerator([], true)),
          clearSelection = _useSelectionActions2.clearSelection;

      clearSelection();
      expect(mockToggleAllRowsSelected.mock.calls.length).toBe(0);
      expect(mockInstanceDispatcher.mock.calls.length).toBe(1);
    });
    it('calls dispatcher when some row is selected', function () {
      var _useSelectionActions3 = useSelectionActions({
        toggleAllRowsSelected: mockToggleAllRowsSelected
      }, controlledTableSelectionsGenerator(['row'], true)),
          clearSelection = _useSelectionActions3.clearSelection;

      clearSelection();
      expect(mockToggleAllRowsSelected.mock.calls.length).toBe(0);
      expect(mockInstanceDispatcher.mock.calls.length).toBe(1);
    });
  });
});
//# sourceMappingURL=hooks.test.js.map