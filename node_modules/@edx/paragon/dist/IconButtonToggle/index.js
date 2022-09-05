import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
/**
 *
 * @param {object} args arguments
 * @param {boolean} args.activeValue the current value of the active/selected iconButton.
 *                                   if not provided, none of the iconButtons will initially be active
 * @param {Function} args.onChange callback to call when toggle value changes.
 *                                 Receives value of the selected toggle button.
 * @param {Array<IconButton>} args.children children components expected to be IconButton
 * @returns {React.Component} A React component
 */

var IconButtonToggle = function IconButtonToggle(_ref) {
  var activeValue = _ref.activeValue,
      onChange = _ref.onChange,
      children = _ref.children;
  var iconButtons = useMemo(function () {
    return React.Children.map(children, function (iconButton) {
      var isActive = iconButton.props.value === activeValue;
      return /*#__PURE__*/React.cloneElement(iconButton, {
        onClick: function onClick() {
          onChange(iconButton.props.value);
        },
        isActive: isActive,
        'aria-selected': isActive,
        'data-testid': "icon-btn-val-".concat(iconButton.props.value)
      });
    });
  }, [children, activeValue, onChange]);
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__icon-button-toggle__container"
  }, iconButtons);
};

IconButtonToggle.defaultProps = {
  onChange: function onChange() {},
  activeValue: undefined
};
IconButtonToggle.propTypes = {
  /** value to use to check which button to set to active */
  activeValue: PropTypes.string,

  /** handler that is passed the currently active button's value when a button is selected */
  onChange: PropTypes.func,

  /** child nodes of type `IconButton` (or its subcomponents) to be rendered within toggle group */
  children: PropTypes.node.isRequired
};
export default IconButtonToggle;
//# sourceMappingURL=index.js.map