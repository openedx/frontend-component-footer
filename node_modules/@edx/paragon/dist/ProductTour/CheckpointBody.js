import React from 'react';
import PropTypes from 'prop-types';
var CheckpointBody = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children;

  if (!children) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__checkpoint-body",
    ref: ref
  }, children);
});
CheckpointBody.defaultProps = {
  children: null
};
CheckpointBody.propTypes = {
  children: PropTypes.node
};
export default CheckpointBody;
//# sourceMappingURL=CheckpointBody.js.map