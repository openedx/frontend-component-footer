var _excluded = ["children", "iconAfter", "iconBefore"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button';
import BaseButtonGroup from 'react-bootstrap/ButtonGroup';
import BaseButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonDeprecated from './deprecated';
import Icon from '../Icon';
var WrappedButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      iconAfter = _ref.iconAfter,
      iconBefore = _ref.iconBefore,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    className: classNames(props.className),
    ref: ref
  }), iconBefore && /*#__PURE__*/React.createElement(Icon, {
    className: classNames('btn-icon-before', props.size && "pgn__icon__".concat(props.size)),
    src: iconBefore
  }), children, iconAfter && /*#__PURE__*/React.createElement(Icon, {
    className: classNames('btn-icon-after', props.size && "pgn__icon__".concat(props.size)),
    src: iconAfter
  }));
});
WrappedButton.propTypes = _objectSpread(_objectSpread({}, Button.propTypes), {}, {
  /** Docstring for the children prop */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /** Docstring for className... A class name to append to the button */
  className: PropTypes.string,

  /** An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@edx/paragon/icons';` */
  iconBefore: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /** An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@edx/paragon/icons';` */
  iconAfter: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
});
WrappedButton.defaultProps = _objectSpread(_objectSpread({}, Button.defaultProps), {}, {
  children: undefined,
  className: undefined,
  iconBefore: undefined,
  iconAfter: undefined
});
WrappedButton.Deprecated = ButtonDeprecated;

var ButtonGroup = function ButtonGroup(props) {
  return /*#__PURE__*/React.createElement(BaseButtonGroup, props);
};

var ButtonToolbar = function ButtonToolbar(props) {
  return /*#__PURE__*/React.createElement(BaseButtonToolbar, props);
};

ButtonGroup.propTypes = {
  /** Specifies element type for this component. */
  as: PropTypes.elementType,

  /** An ARIA role describing the button group. */
  role: PropTypes.string,

  /** Specifies the size for all Buttons in the group. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /** Display as a button toggle group. */
  toggle: PropTypes.bool,

  /** Specifies if the set of Buttons should appear vertically stacked. */
  vertical: PropTypes.bool,

  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
ButtonGroup.defaultProps = {
  as: 'div',
  role: 'group',
  toggle: false,
  vertical: false,
  bsPrefix: 'btn-group',
  size: 'md'
};
ButtonToolbar.propTypes = {
  /** An ARIA role describing the button group. */
  role: PropTypes.string,

  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string
};
ButtonToolbar.defaultProps = {
  role: 'toolbar',
  bsPrefix: 'btn-toolbar'
};
export default WrappedButton;
export { ButtonGroup, ButtonToolbar };
//# sourceMappingURL=index.js.map