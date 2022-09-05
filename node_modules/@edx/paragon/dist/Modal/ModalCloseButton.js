var _excluded = ["as", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '..';
import ModalContext from './ModalContext';
var ModalCloseButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var as = _ref.as,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = useContext(ModalContext),
      onClose = _useContext.onClose;

  var type = as;

  var componentProps = _objectSpread(_objectSpread({}, props), {}, {
    className: classNames('pgn__modal-close-button', props.className),
    onClick: function onClick() {
      onClose();

      if (props.onClick) {
        props.onClick();
      }
    },
    ref: ref
  }); // Use the non-jsx syntax to create this element so we can more
  // finely control the component type (defaulted to Button via defaultProps)


  return /*#__PURE__*/React.createElement(type, componentProps, children);
});
ModalCloseButton.propTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,

  /** Specifies the content of the button */
  children: PropTypes.node,

  /** Specifies class name to append to the base element */
  className: PropTypes.string,

  /** Specifies the callback function when the close button is clicked */
  onClick: PropTypes.func
};
ModalCloseButton.defaultProps = {
  as: Button,
  onClick: undefined,
  className: undefined,
  children: null
};
export default ModalCloseButton;
//# sourceMappingURL=ModalCloseButton.js.map