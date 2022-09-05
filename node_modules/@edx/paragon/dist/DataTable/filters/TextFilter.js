import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, Input } from '../..';
import { newId } from '../../utils';

function TextFilter(_ref) {
  var _ref$column = _ref.column,
      filterValue = _ref$column.filterValue,
      setFilter = _ref$column.setFilter,
      Header = _ref$column.Header,
      getHeaderProps = _ref$column.getHeaderProps;
  var ariaLabel = useRef(newId("text-filter-label-".concat(getHeaderProps().key, "-")));
  var inputText = "Search ".concat(Header);
  return /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(FormLabel, {
    id: ariaLabel.current,
    className: "sr-only"
  }, inputText), /*#__PURE__*/React.createElement(Input, {
    "aria-labelledby": ariaLabel.current,
    value: filterValue || '',
    type: "text",
    onChange: function onChange(e) {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: inputText
  }));
}

TextFilter.propTypes = {
  /**
   * Specifies a column object.
   *
   * `setFilter`: Function to set the filter value.
   *
   * `Header`: Column header used for labels and placeholders.
   *
   * `getHeaderProps`: Generates a key unique to the column being filtered.
   *
   * `filterValue`: Value for the filter input.
   */
  column: PropTypes.shape({
    setFilter: PropTypes.func.isRequired,
    Header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    getHeaderProps: PropTypes.func.isRequired,
    filterValue: PropTypes.string
  }).isRequired
};
export default TextFilter;
//# sourceMappingURL=TextFilter.js.map