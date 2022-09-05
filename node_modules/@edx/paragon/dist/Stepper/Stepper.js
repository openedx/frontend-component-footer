import React from 'react';
import PropTypes from 'prop-types';
import StepperStep from './StepperStep';
import StepperHeader from './StepperHeader';
import StepperActionRow from './StepperActionRow';
import { StepperContextProvider } from './StepperContext';

var Stepper = function Stepper(_ref) {
  var children = _ref.children,
      activeKey = _ref.activeKey;
  return /*#__PURE__*/React.createElement(StepperContextProvider, {
    activeKey: activeKey
  }, children);
};

Stepper.propTypes = {
  /**
   * Specifies the content of the `Stepper`.
   */
  children: PropTypes.node.isRequired,

  /**
   * The eventKey of the step to display.
   */
  activeKey: PropTypes.string.isRequired
};
Stepper.Step = StepperStep;
Stepper.Header = StepperHeader;
Stepper.ActionRow = StepperActionRow;
export default Stepper;
//# sourceMappingURL=Stepper.js.map