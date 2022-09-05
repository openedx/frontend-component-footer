var _excluded = ["children", "leadingElement", "trailingElement", "floatingLabel", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { FORM_CONTROL_SIZES } from './constants';
import FormControlFloatingLabel from './FormControlFloatingLabel';
import FormControlDecorator from './FormControlDecorator';
/**
  * Decorates a textual input.
  */

var FormControlDecoratorGroup = function FormControlDecoratorGroup(_ref) {
  var children = _ref.children,
      leadingElement = _ref.leadingElement,
      trailingElement = _ref.trailingElement,
      floatingLabel = _ref.floatingLabel,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var formGroupContext = useFormGroupContext(props);
  var size = props.size || formGroupContext.size;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('pgn__form-control-decorator-group', {
      'has-prepended-node': !!leadingElement,
      'has-appended-node': !!trailingElement,
      'has-leading-element': !!leadingElement,
      'has-trailing-element': !!trailingElement,
      'has-floating-label': !!floatingLabel,
      'pgn__form-control-decorator-group-lg': size === FORM_CONTROL_SIZES.LARGE,
      'pgn__form-control-decorator-group-sm': size === FORM_CONTROL_SIZES.SMALL
    }, className)
  }, props), children, leadingElement && /*#__PURE__*/React.createElement(FormControlDecorator, {
    location: "leading"
  }, leadingElement), trailingElement && /*#__PURE__*/React.createElement(FormControlDecorator, {
    location: "trailing"
  }, trailingElement), floatingLabel && /*#__PURE__*/React.createElement(FormControlFloatingLabel, null, floatingLabel));
};

FormControlDecoratorGroup.propTypes = {
  children: PropTypes.node.isRequired,
  leadingElement: PropTypes.node,
  trailingElement: PropTypes.node,
  floatingLabel: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf([FORM_CONTROL_SIZES.SMALL, FORM_CONTROL_SIZES.LARGE])
};
FormControlDecoratorGroup.defaultProps = {
  leadingElement: undefined,
  trailingElement: undefined,
  floatingLabel: undefined,
  className: undefined,
  size: undefined
};
export default FormControlDecoratorGroup;
//# sourceMappingURL=FormControlDecoratorGroup.js.map