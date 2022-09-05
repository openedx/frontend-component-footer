var _excluded = ["as", "arrowKeyNavigationSelector", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigation';

var Menu = function Menu(_ref) {
  var as = _ref.as,
      arrowKeyNavigationSelector = _ref.arrowKeyNavigationSelector,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var parentRef = useArrowKeyNavigation({
    selectors: arrowKeyNavigationSelector
  });
  var className = classNames(props.className, 'pgn__menu');
  return /*#__PURE__*/React.createElement(as, _objectSpread(_objectSpread({}, props), {}, {
    ref: parentRef,
    className: className
  }), /*#__PURE__*/React.createElement(React.Fragment, null, children));
};

Menu.propTypes = {
  /** Specifies class name to append to the base element */
  className: PropTypes.string,

  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
   */
  arrowKeyNavigationSelector: PropTypes.string,

  /** Specifies the base element */
  as: PropTypes.elementType,

  /** Specifies the content of the menu */
  children: PropTypes.node
};
Menu.defaultProps = {
  className: undefined,
  arrowKeyNavigationSelector: 'a:not(:disabled),button:not(:disabled),input:not(:disabled)',
  as: 'div',
  children: null
};
export default Menu;
//# sourceMappingURL=index.js.map