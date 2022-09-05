var _excluded = ["as", "backgroundSrc", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var ModalDialogHeroBackground = function ModalDialogHeroBackground(_ref) {
  var as = _ref.as,
      backgroundSrc = _ref.backgroundSrc,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(as, _objectSpread(_objectSpread({}, props), {}, {
    className: classNames('pgn__modal-hero-bg', props.className),
    style: _objectSpread({
      backgroundImage: backgroundSrc ? "url(".concat(backgroundSrc, ")") : undefined
    }, props.style)
  }), children);
};

ModalDialogHeroBackground.propTypes = {
  as: PropTypes.elementType,
  backgroundSrc: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({})
};
ModalDialogHeroBackground.defaultProps = {
  as: 'div',
  backgroundSrc: undefined,
  children: null,
  className: undefined,
  style: {}
};
export default ModalDialogHeroBackground;
//# sourceMappingURL=ModalDialogHeroBackground.js.map