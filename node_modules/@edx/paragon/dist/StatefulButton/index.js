var _excluded = ["className", "state", "labels", "icons", "disabledStates", "onClick"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '..';
import { Cancel, CheckCircleOutline, SpinnerSimple } from '../../icons';
import Icon from '../Icon';

function StatefulButton(_ref) {
  var className = _ref.className,
      state = _ref.state,
      labels = _ref.labels,
      icons = _ref.icons,
      disabledStates = _ref.disabledStates,
      _onClick = _ref.onClick,
      attributes = _objectWithoutProperties(_ref, _excluded);

  var isDisabled = disabledStates.indexOf(state) !== -1;
  var icon = icons[state] !== undefined ? icons[state] : icons.default;
  var label = labels[state] !== undefined ? labels[state] : labels.default;
  return /*#__PURE__*/React.createElement(Button, _extends({
    "aria-live": "assertive",
    "aria-disabled": isDisabled,
    className: classNames('pgn__stateful-btn', "pgn__stateful-btn-state-".concat(state), className, {
      disabled: isDisabled
    }),
    onClick: function onClick(e) {
      // Swallow clicks if the button is disabled.
      // We do this instead of disabling the button to prevent
      // it from losing focus (disabled elements cannot have focus).
      if (isDisabled) {
        e.preventDefault();
        return;
      }

      if (_onClick) {
        _onClick(e);
      }
    }
  }, attributes), /*#__PURE__*/React.createElement("span", {
    className: "d-flex align-items-center justify-content-center"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: classNames({
      'pgn__stateful-btn-icon': !!label
    })
  }, icon), label ? /*#__PURE__*/React.createElement("span", null, label) : /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, state)));
}

StatefulButton.propTypes = {
  className: PropTypes.string,

  /**
   * Each state has:
   * - A label (required)
   * - An icon
   * - an option to be disabled
   *
   * Control the state with the `state` prop. Example usage:
   *
   * ```jsx
   * <StatefulButton
   *   state="pending"
   *   labels={{
   *     default: 'Download',
   *     pending: 'Downloading',
   *     complete: 'Downloaded',
   *   }}
   *   icons={{
   *     default: <Icon className="fa fa-download" />,
   *     pending: <Icon className="fa fa-spinner fa-spin" />,
   *     complete: <Icon className="fa fa-check" />,
   *   }}
   *   disabledStates=['pending']
   *   className='btn-primary mr-2'
   * />
   * ```
   */
  state: PropTypes.string,

  /** Required. Each state has a `label`. */
  labels: PropTypes.objectOf(PropTypes.node).isRequired,

  /** Required. Each state has an `icon`. */
  icons: PropTypes.objectOf(PropTypes.node),

  /** Required. Each state has a `disabledState` */
  disabledStates: PropTypes.arrayOf(PropTypes.string),

  /** Specifies the callback function when the button is clicked */
  onClick: PropTypes.func
};
StatefulButton.defaultProps = {
  className: undefined,
  state: 'default',
  icons: {
    default: undefined,
    pending: /*#__PURE__*/React.createElement(Icon, {
      src: SpinnerSimple,
      className: classNames('icon-spin')
    }),
    complete: /*#__PURE__*/React.createElement(Icon, {
      src: CheckCircleOutline
    }),
    error: /*#__PURE__*/React.createElement(Icon, {
      src: Cancel
    })
  },
  disabledStates: ['pending', 'complete'],
  onClick: undefined
};
export default StatefulButton;
//# sourceMappingURL=index.js.map