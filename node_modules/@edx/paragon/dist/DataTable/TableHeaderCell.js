import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '..';
import { ArrowDropDown, ArrowDropUp, ArrowDropUpDown } from '../../icons';
export var SortIndicator = function SortIndicator(_ref) {
  var isSorted = _ref.isSorted,
      isSortedDesc = _ref.isSortedDesc;

  if (!isSorted) {
    return /*#__PURE__*/React.createElement(Icon, {
      style: {
        opacity: 0.5
      },
      src: ArrowDropUpDown
    });
  }

  if (isSortedDesc) {
    return /*#__PURE__*/React.createElement(Icon, {
      src: ArrowDropUp
    });
  }

  return /*#__PURE__*/React.createElement(Icon, {
    src: ArrowDropDown
  });
};
SortIndicator.propTypes = {
  isSorted: PropTypes.bool.isRequired,
  isSortedDesc: PropTypes.bool.isRequired
};

var TableHeaderCell = function TableHeaderCell(_ref2) {
  var getHeaderProps = _ref2.getHeaderProps,
      render = _ref2.render,
      canSort = _ref2.canSort,
      getSortByToggleProps = _ref2.getSortByToggleProps,
      isSorted = _ref2.isSorted,
      isSortedDesc = _ref2.isSortedDesc,
      headerClassName = _ref2.headerClassName;
  var toggleProps = canSort && getSortByToggleProps ? getSortByToggleProps() : {};
  return /*#__PURE__*/React.createElement("th", getHeaderProps(toggleProps), /*#__PURE__*/React.createElement("span", {
    className: classNames('d-flex align-items-center', headerClassName)
  }, /*#__PURE__*/React.createElement("span", null, render('Header')), canSort && /*#__PURE__*/React.createElement(SortIndicator, {
    isSorted: isSorted,
    isSortedDesc: isSortedDesc || false
  })));
};

TableHeaderCell.defaultProps = {
  headerClassName: null,
  isSorted: false,
  isSortedDesc: false,
  canSort: false,
  getSortByToggleProps: function getSortByToggleProps() {}
};
TableHeaderCell.propTypes = {
  /** Returns props for the th element */
  getHeaderProps: PropTypes.func.isRequired,

  /** Indicates whether or not a column is sorted */
  isSorted: PropTypes.bool,

  /** Renders the header content. Passed the string 'Header' */
  render: PropTypes.func.isRequired,

  /** Indicates whether the column is sorted in descending order */
  isSortedDesc: PropTypes.bool,

  /** Gets props related to sorting that will be passed to th */
  getSortByToggleProps: PropTypes.func,

  /** Indicates whether a column is sortable */
  canSort: PropTypes.bool,

  /** Class(es) to be applied to header cells */
  headerClassName: PropTypes.string
};
export default TableHeaderCell;
//# sourceMappingURL=TableHeaderCell.js.map