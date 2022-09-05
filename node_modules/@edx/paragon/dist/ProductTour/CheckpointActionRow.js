import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
var CheckpointActionRow = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var advanceButtonText = _ref.advanceButtonText,
      dismissButtonText = _ref.dismissButtonText,
      endButtonText = _ref.endButtonText,
      isLastCheckpoint = _ref.isLastCheckpoint,
      onAdvance = _ref.onAdvance,
      onDismiss = _ref.onDismiss,
      onEnd = _ref.onEnd,
      showDismissButton = _ref.showDismissButton;
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__checkpoint-action-row",
    ref: ref
  }, (showDismissButton === undefined ? !isLastCheckpoint : showDismissButton) && /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    className: "pgn__checkpoint-button_dismiss",
    onClick: onDismiss
  }, dismissButtonText), /*#__PURE__*/React.createElement(Button, {
    autoFocus: true,
    className: "pgn__checkpoint-button_advance",
    variant: "primary",
    onClick: isLastCheckpoint ? onEnd : onAdvance
  }, isLastCheckpoint ? endButtonText : advanceButtonText));
});
CheckpointActionRow.defaultProps = {
  advanceButtonText: '',
  dismissButtonText: '',
  endButtonText: '',
  isLastCheckpoint: false,
  onAdvance: function onAdvance() {},
  onDismiss: function onDismiss() {},
  onEnd: function onEnd() {},
  showDismissButton: undefined
};
CheckpointActionRow.propTypes = {
  /** The text displayed on the button used to advance the tour. */
  advanceButtonText: PropTypes.node,

  /** The text displayed on the button used to dismiss the tour. */
  dismissButtonText: PropTypes.node,

  /** The text displayed on the button used to end the tour. */
  endButtonText: PropTypes.node,

  /** Whether the parent Checkpoint is the last in the tour. */
  isLastCheckpoint: PropTypes.bool,

  /** A function that runs when triggering the `onClick` event of the advance button. */
  onAdvance: PropTypes.func,

  /** A function that runs when triggering the `onClick` event of the dismiss button. */
  onDismiss: PropTypes.func,

  /** A function that runs when triggering the `onClick` event of the advance button if isLastCheckpoint is true. */
  onEnd: PropTypes.func,

  /** Enforces visibility of the dismiss button under all circumstances */
  showDismissButton: PropTypes.bool
};
export default CheckpointActionRow;
//# sourceMappingURL=CheckpointActionRow.js.map