import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';

var ExpandAll = function ExpandAll(_ref) {
  var getToggleAllRowsExpandedProps = _ref.getToggleAllRowsExpandedProps,
      isAllRowsExpanded = _ref.isAllRowsExpanded;
  return /*#__PURE__*/React.createElement("span", getToggleAllRowsExpandedProps(), isAllRowsExpanded ? /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "inline"
  }, "Collapse all") : /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "inline"
  }, "Expand all"));
};

ExpandAll.propTypes = {
  /** A helper function that returns props necessary for expand / collapse all rows behaviour. */
  getToggleAllRowsExpandedProps: PropTypes.func.isRequired,

  /** Specifies whether all rows are expanded. */
  isAllRowsExpanded: PropTypes.bool.isRequired
};
export default ExpandAll;
//# sourceMappingURL=ExpandAll.js.map