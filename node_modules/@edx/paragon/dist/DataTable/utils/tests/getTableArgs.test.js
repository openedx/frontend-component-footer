/* eslint-disable object-curly-newline */
import { useSortBy, useFilters, useRowSelect, usePagination, useExpanded } from 'react-table';
import getTableArgs from '../getTableArgs';
describe('getTableArgs', function () {
  var tableOptions = {
    foo: 'bar'
  };
  it('returns tableOptions if no other arguments are given', function () {
    expect(getTableArgs({
      tableOptions: tableOptions
    })).toEqual([tableOptions]);
  }); // order is important for these arguments

  test.each([[{
    tableOptions: tableOptions,
    isFilterable: true
  }, [tableOptions, useFilters]], [{
    tableOptions: tableOptions,
    isSelectable: true
  }, [tableOptions, useRowSelect]], [{
    tableOptions: tableOptions,
    isSortable: true
  }, [tableOptions, useSortBy]], [{
    tableOptions: tableOptions,
    isPaginated: true
  }, [tableOptions, usePagination]], [{
    tableOptions: tableOptions,
    isExpandable: true
  }, [tableOptions, useExpanded]], [{
    tableOptions: tableOptions,
    isFilterable: true,
    isSelectable: true
  }, [tableOptions, useFilters, useRowSelect]], [{
    tableOptions: tableOptions,
    isFilterable: true,
    isExpandable: true
  }, [tableOptions, useFilters, useExpanded]], [{
    tableOptions: tableOptions,
    isFilterable: true,
    isSelectable: true,
    isSortable: true,
    isPaginated: true,
    isExpandable: true
  }, [tableOptions, useFilters, useSortBy, useExpanded, usePagination, useRowSelect]], [{
    tableOptions: tableOptions,
    isSelectable: true,
    isSortable: true
  }, [tableOptions, useSortBy, useRowSelect]], [{
    tableOptions: tableOptions,
    isFilterable: true,
    isPaginated: true
  }, [tableOptions, useFilters, usePagination]], [{
    tableOptions: tableOptions,
    isPaginated: true,
    isExpandable: true
  }, [tableOptions, useExpanded, usePagination]]])('returns functions in order %#', function (input, expectedResult) {
    expect(getTableArgs(input)).toEqual(expectedResult);
  });
});
//# sourceMappingURL=getTableArgs.test.js.map