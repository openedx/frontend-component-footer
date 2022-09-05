var _excluded = ["as", "children", "eventKey"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StepperContext } from './StepperContext';
import { ActionRow } from '..';

var StepperActionRow = function StepperActionRow(_ref) {
  var as = _ref.as,
      children = _ref.children,
      eventKey = _ref.eventKey,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = useContext(StepperContext),
      activeKey = _useContext.activeKey;

  var isActive = activeKey === eventKey;

  if (!isActive) {
    return null;
  }

  return /*#__PURE__*/React.createElement(as, props, children);
};

StepperActionRow.propTypes = {
  /** Specifies the content of the `ActionRow`. */
  children: PropTypes.node.isRequired,

  /**
   * An identifier of the `ActionRow`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `ActionRow` will be displayed.
   */
  eventKey: PropTypes.string.isRequired,

  /** Specifies the base element */
  as: PropTypes.elementType
};
StepperActionRow.defaultProps = {
  as: ActionRow
};
StepperActionRow.Spacer = ActionRow.Spacer;
export default StepperActionRow;
//# sourceMappingURL=StepperActionRow.js.map