import React from 'react';
import PropTypes from 'prop-types';
var CheckpointBreadcrumbs = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var currentIndex = _ref.currentIndex,
      totalCheckpoints = _ref.totalCheckpoints;

  if (totalCheckpoints === 1) {
    return null;
  }

  return /*#__PURE__*/React.createElement("span", {
    className: "pgn__checkpoint-breadcrumb-container",
    ref: ref
  }, new Array(totalCheckpoints).fill(0).map(function (v, i) {
    return i === currentIndex ? /*#__PURE__*/React.createElement("span", {
      className: "pgn__checkpoint-breadcrumb pgn__checkpoint-breadcrumb_active",
      "data-testid": "pgn__checkpoint-breadcrumb_active"
    }) : /*#__PURE__*/React.createElement("span", {
      className: "pgn__checkpoint-breadcrumb pgn__checkpoint-breadcrumb_inactive",
      "data-testid": "pgn__checkpoint-breadcrumb_inactive"
    });
  }));
});
CheckpointBreadcrumbs.defaultProps = {
  currentIndex: null,
  totalCheckpoints: null
};
CheckpointBreadcrumbs.propTypes = {
  /** The current index of the parent Checkpoint within the tour. */
  currentIndex: PropTypes.number,

  /** The total number of Checkpoints within the tour. */
  totalCheckpoints: PropTypes.number
};
export default CheckpointBreadcrumbs;
//# sourceMappingURL=CheckpointBreadcrumbs.js.map