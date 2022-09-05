var _excluded = ["children", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // eslint-disable-next-line import/no-cycle

import { Consumer } from './index';

var DropdownButton = function DropdownButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Consumer, null, function (_ref2) {
    var buttonRef = _ref2.buttonRef,
        isOpen = _ref2.isOpen,
        toggle = _ref2.toggle,
        triggerId = _ref2.triggerId;
    return /*#__PURE__*/React.createElement("button", _extends({}, other, {
      id: classNames(triggerId, other.id),
      "aria-expanded": isOpen,
      "aria-haspopup": true,
      type: "button",
      ref: buttonRef,
      className: classNames('dropdown-toggle', 'btn', className),
      onClick: function onClick(e) {
        toggle(e);

        if (other.onClick) {
          other.onClick(e);
        }
      }
    }), children);
  });
};

DropdownButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
DropdownButton.defaultProps = {
  children: undefined,
  className: 'btn-light'
};
export default DropdownButton;
//# sourceMappingURL=DropdownButton.js.map