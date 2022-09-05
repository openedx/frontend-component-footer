import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from '../..';
import { newId } from '../../utils';
var DEFAULT_VALUE = '';

function DropdownFilter(_ref) {
  var _ref$column = _ref.column,
      setFilter = _ref$column.setFilter,
      Header = _ref$column.Header,
      filterChoices = _ref$column.filterChoices,
      getHeaderProps = _ref$column.getHeaderProps;
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  var ariaLabel = useRef(newId("dropdown-filter-label-".concat(getHeaderProps().key, "-")));

  var onChange = function onChange(e) {
    if (e.target.value === DEFAULT_VALUE) {
      // setting undefined resets the filter
      return setFilter(undefined);
    }

    return setFilter(e.target.value);
  };

  return /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, {
    id: ariaLabel.current,
    className: "sr-only"
  }, Header), /*#__PURE__*/React.createElement(Form.Control, {
    as: "select",
    default: DEFAULT_VALUE,
    onChange: onChange,
    "aria-labelledby": ariaLabel.current
  }, /*#__PURE__*/React.createElement("option", {
    value: DEFAULT_VALUE
  }, Header), filterChoices.map(function (_ref2) {
    var name = _ref2.name,
        number = _ref2.number,
        value = _ref2.value;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, name, " ", number && "(".concat(number, ")"));
  })));
}

DropdownFilter.propTypes = {
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
   */
  column: PropTypes.shape({
    setFilter: PropTypes.func.isRequired,
    Header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    filterChoices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })).isRequired,
    getHeaderProps: PropTypes.func.isRequired
  }).isRequired
};
export default DropdownFilter;
//# sourceMappingURL=DropdownFilter.js.map