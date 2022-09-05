var _excluded = ["children", "transitionWrapper", "tag"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CollapsibleContext } from './CollapsibleAdvanced';
import TransitionReplace from '../TransitionReplace';

function CollapsibleBody(_ref) {
  var children = _ref.children,
      transitionWrapper = _ref.transitionWrapper,
      tag = _ref.tag,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = useContext(CollapsibleContext),
      isOpen = _useContext.isOpen; // Keys are added to these elements so that TransitionReplace
  // will recognize them as unique components and perform the
  // transition properly.


  var content = isOpen ? /*#__PURE__*/React.createElement(tag, _objectSpread({
    key: 'body'
  }, props), children) : /*#__PURE__*/React.createElement("div", {
    key: "empty"
  });

  if (transitionWrapper) {
    return /*#__PURE__*/React.cloneElement(transitionWrapper, {}, content);
  }
  /* istanbul ignore next */


  return /*#__PURE__*/React.createElement(TransitionReplace, null, content);
}

CollapsibleBody.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,

  /** Specifies content's base element. */
  tag: PropTypes.string,

  /** Specifies transition element. */
  transitionWrapper: PropTypes.element
};
CollapsibleBody.defaultProps = {
  children: undefined,
  tag: 'div',
  transitionWrapper: undefined
};
export default CollapsibleBody;
//# sourceMappingURL=CollapsibleBody.js.map