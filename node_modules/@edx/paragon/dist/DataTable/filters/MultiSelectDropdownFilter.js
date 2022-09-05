import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Badge } from '../..';
import { newId } from '../../utils';
import LabelledCheckbox from './LabelledCheckbox';

function MultiSelectDropdownFilter(_ref) {
  var _ref$column = _ref.column,
      setFilter = _ref$column.setFilter,
      Header = _ref$column.Header,
      filterChoices = _ref$column.filterChoices,
      getHeaderProps = _ref$column.getHeaderProps,
      filterValue = _ref$column.filterValue;
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  var ariaLabel = useRef(newId("multi-dropdown-filter-label-".concat(getHeaderProps().key, "-")));
  var checkedBoxes = filterValue || [];

  var changeCheckbox = function changeCheckbox(value) {
    if (checkedBoxes.includes(value)) {
      var newCheckedBoxes = checkedBoxes.filter(function (val) {
        return val !== value;
      });
      return setFilter(newCheckedBoxes);
    }

    checkedBoxes.push(value);
    return setFilter(checkedBoxes);
  };

  var headerBasedId = useMemo(function () {
    return "checkbox-filter-check-".concat(getHeaderProps().key, "-");
  }, [getHeaderProps]);
  return /*#__PURE__*/React.createElement(DropdownButton, {
    variant: "outline-primary",
    id: ariaLabel.current,
    title: Header
  }, /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": Header,
    className: "pgn__dropdown-filter-checkbox-group"
  }, filterChoices.map(function (_ref2) {
    var name = _ref2.name,
        number = _ref2.number,
        value = _ref2.value;
    return /*#__PURE__*/React.createElement(LabelledCheckbox, {
      key: name,
      id: headerBasedId,
      checked: checkedBoxes.includes(value),
      onChange: function onChange() {
        changeCheckbox(value);
      },
      label: /*#__PURE__*/React.createElement(React.Fragment, null, name, " ", number && /*#__PURE__*/React.createElement(Badge, {
        variant: "light"
      }, number))
    });
  })));
}

MultiSelectDropdownFilter.propTypes = {
  /**
   * Specifies a column object.
   *
   * `setFilter`: Function to set the filter value.
   *
   * `Header`: Column header used for labels and placeholders.
   *
   * `filterChoices`: Specifies array of choices.
   *
   * `getHeaderProps`: Generates a key unique to the column being filtered.
   *
   * `filterValue`: Value for the filter input.
   */
  column: PropTypes.shape({
    /** Function to set the filter value */
    setFilter: PropTypes.func.isRequired,

    /** Column header used for labels and placeholders */
    Header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,

    /** Names and values for the select options */
    filterChoices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })).isRequired,

    /** Generates a key unique to the column being filtered */
    getHeaderProps: PropTypes.func.isRequired,
    filterValue: PropTypes.string
  }).isRequired
};
export default MultiSelectDropdownFilter;
//# sourceMappingURL=MultiSelectDropdownFilter.js.map