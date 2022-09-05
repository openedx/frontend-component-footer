var _excluded = ["size", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
import RBContainer from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
var SIZE_CLASS_NAMES = {
  xs: 'container-mw-xs',
  sm: 'container-mw-sm',
  md: 'container-mw-md',
  lg: 'container-mw-lg',
  xl: 'container-mw-xl'
};

var Container = function Container(_ref) {
  var size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(RBContainer, _extends({}, props, {
    className: classNames(props.className, SIZE_CLASS_NAMES[size])
  }), children);
};

Container.propTypes = _objectSpread(_objectSpread({}, RBContainer.propTypes), {}, {
  /** Override the base element */
  as: PropTypes.elementType,
  children: PropTypes.node,

  /** Fill all available space at any breakpoint */
  fluid: PropTypes.bool,

  /** Set the maximum width for the container */
  size: PropTypes.oneOf(Object.keys(SIZE_CLASS_NAMES))
});
Container.defaultProps = {
  as: 'div',
  children: undefined,
  fluid: true,
  size: undefined
};
export default Container;
//# sourceMappingURL=index.js.map