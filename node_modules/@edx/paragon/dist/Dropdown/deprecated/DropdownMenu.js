var _excluded = ["children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // eslint-disable-next-line import/no-cycle

import { Consumer } from './index';

var DropdownMenu = function DropdownMenu(_ref) {
  var children = _ref.children,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Consumer, null, function (_ref2) {
    var handleMenuKeyDown = _ref2.handleMenuKeyDown,
        isOpen = _ref2.isOpen,
        menuRef = _ref2.menuRef,
        triggerId = _ref2.triggerId;
    return (
      /*#__PURE__*/

      /* eslint-disable-next-line jsx-a11y/interactive-supports-focus */
      React.createElement("div", _extends({}, other, {
        "aria-labelledby": triggerId,
        "aria-hidden": !isOpen,
        ref: menuRef,
        role: "menu",
        className: classNames('dropdown-menu', {
          show: isOpen
        }, other.className),
        onKeyDown: function onKeyDown(e) {
          handleMenuKeyDown(e);

          if (other.onKeyDown) {
            other.onKeyDown(e);
          }
        }
      }), children)
    );
  });
};

DropdownMenu.propTypes = {
  children: PropTypes.node
};
DropdownMenu.defaultProps = {
  children: undefined
};
export default DropdownMenu;
//# sourceMappingURL=DropdownMenu.js.map