var _excluded = ["orientation", "className", "isClickable"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import BaseCard from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardContext, { CardContextProvider } from './CardContext';
import CardHeader from './CardHeader';
import CardDivider from './CardDivider';
import CardSection from './CardSection';
import CardFooter from './CardFooter';
import CardImageCap from './CardImageCap';
import CardBody from './CardBody';
var Card = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var orientation = _ref.orientation,
      className = _ref.className,
      isClickable = _ref.isClickable,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(CardContextProvider, {
    orientation: orientation
  }, /*#__PURE__*/React.createElement(BaseCard, _extends({}, props, {
    className: classNames(className, 'pgn__card', {
      horizontal: orientation === 'horizontal',
      clickable: isClickable
    }),
    ref: ref,
    tabIndex: isClickable ? '0' : '-1'
  })));
});
export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardDeck } from 'react-bootstrap/CardDeck';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';
export { default as CardGrid } from './CardGrid';
Card.propTypes = _objectSpread(_objectSpread({}, BaseCard.propTypes), {}, {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),

  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: PropTypes.bool
});
Card.defaultProps = _objectSpread(_objectSpread({}, BaseCard.defaultProps), {}, {
  className: undefined,
  orientation: 'vertical',
  isClickable: false
});
Card.Header = CardHeader;
Card.Divider = CardDivider;
Card.Section = CardSection;
Card.Footer = CardFooter;
Card.ImageCap = CardImageCap;
Card.Context = CardContext;
Card.Body = CardBody;
export default Card;
//# sourceMappingURL=index.js.map