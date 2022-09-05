var _excluded = ["as", "children", "defaultSelected", "iconAfter", "iconBefore"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '..';

var MenuItem = function MenuItem(_ref) {
  var as = _ref.as,
      children = _ref.children,
      defaultSelected = _ref.defaultSelected,
      iconAfter = _ref.iconAfter,
      iconBefore = _ref.iconBefore,
      props = _objectWithoutProperties(_ref, _excluded);

  var className = classNames(props.className, 'pgn__menu-item');
  return /*#__PURE__*/React.createElement(as, _objectSpread(_objectSpread({}, props), {}, {
    className: className
  }), /*#__PURE__*/React.createElement(React.Fragment, null, iconBefore && /*#__PURE__*/React.createElement(Icon, {
    className: "btn-icon-before",
    src: iconBefore
  }), children, /*#__PURE__*/React.createElement("span", {
    className: "pgn__menu-item-content-spacer"
  }), iconAfter && /*#__PURE__*/React.createElement(Icon, {
    className: "btn-icon-after",
    src: iconAfter
  })));
};

MenuItem.propTypes = {
  /** Specifies that this ``MenuItem`` is selected inside the ``SelectMenu`` */
  defaultSelected: PropTypes.bool,

  /** Specifies class name to append to the base element */
  className: PropTypes.string,

  /** Specifies the content of the ``MenuItem`` */
  children: PropTypes.node,

  /** Specifies the base element */
  as: PropTypes.elementType,

  /** Specifies the jsx before the content of the ``MenuItem`` */
  iconBefore: PropTypes.node,

  /** Specifies the jsx after the content of the ``MenuItem`` */
  iconAfter: PropTypes.node
};
MenuItem.defaultProps = {
  defaultSelected: false,
  as: 'button',
  className: undefined,
  children: null,
  iconBefore: undefined,
  iconAfter: undefined
};
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map