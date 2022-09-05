var _excluded = ["children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import FormText, { resolveTextType } from './FormText';

var FormControlFeedback = function FormControlFeedback(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useFormGroupContext = useFormGroupContext(),
      getDescriptorProps = _useFormGroupContext.getDescriptorProps,
      isInvalid = _useFormGroupContext.isInvalid,
      isValid = _useFormGroupContext.isValid;

  var descriptorProps = getDescriptorProps(props);
  var className = classNames('pgn__form-control-description', props.className);
  var textType = props.type || resolveTextType({
    isInvalid: isInvalid,
    isValid: isValid
  });
  return /*#__PURE__*/React.createElement(FormText, _extends({}, descriptorProps, {
    className: className,
    type: textType
  }), children);
};

var FEEDBACK_TYPES = ['default', 'valid', 'invalid', 'warning', 'criteria-empty', 'criteria-valid', 'criteria-invalid'];
FormControlFeedback.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,

  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies whether to show an icon next to the text. */
  hasIcon: PropTypes.bool,

  /** Specifies feedback type, this affects styling. */
  type: PropTypes.oneOf(FEEDBACK_TYPES),

  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: PropTypes.node,

  /** Specifies whether to show feedback with muted styling. */
  muted: PropTypes.bool
};
FormControlFeedback.defaultProps = {
  hasIcon: true,
  type: undefined,
  icon: undefined,
  className: undefined,
  muted: false
};
export default FormControlFeedback;
//# sourceMappingURL=FormControlFeedback.js.map