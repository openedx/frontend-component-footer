/* eslint-disable object-curly-newline */
import getVisibleColumns, { selectColumn } from '../getVisibleColumns';
describe('getVisibleColums', function () {
  var visibleColumns = [{
    id: 'foo'
  }];
  it('adds the sort column', function () {
    expect(getVisibleColumns(true, [], [])).toEqual([selectColumn]);
  });
  it('returns the visible columns', function () {
    expect(getVisibleColumns(false, visibleColumns)).toEqual(visibleColumns);
  });
  it('adds the sort column before visible columns', function () {
    expect(getVisibleColumns(true, visibleColumns)).toEqual([selectColumn].concat(visibleColumns));
  });
  it('uses a manual sort column if given one', function () {
    var manualSort = {
      id: 'manual'
    };
    expect(getVisibleColumns(true, visibleColumns, [], manualSort)).toEqual([manualSort].concat(visibleColumns));
  });
  it('adds additional columns after the visible columns', function () {
    var additionalColumns = [{
      id: 'bar'
    }, {
      id: 'baz'
    }];
    expect(getVisibleColumns(false, visibleColumns, additionalColumns)).toEqual([].concat(visibleColumns, additionalColumns));
  });
  it('puts columns in the correct order', function () {
    var additionalColumns = [{
      id: 'bar'
    }, {
      id: 'baz'
    }];
    expect(getVisibleColumns(true, visibleColumns, additionalColumns)).toEqual([selectColumn].concat(visibleColumns, additionalColumns));
  });
});
//# sourceMappingURL=getVisibleColumns.test.js.map