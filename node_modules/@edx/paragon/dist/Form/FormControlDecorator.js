import React from 'react';
import PropTypes from 'prop-types';

var FormControlDecorator = function FormControlDecorator(_ref) {
  var children = _ref.children,
      location = _ref.location;
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__form-control-decorator pgn__form-control-decorator-".concat(location)
  }, children);
};

FormControlDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.oneOf(['leading', 'trailing'])
};
FormControlDecorator.defaultProps = {
  location: 'leading'
};
export default FormControlDecorator;
//# sourceMappingURL=FormControlDecorator.js.map