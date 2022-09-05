function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["className", "inputRef", "type", "isValid", "validator", "themes", "inline", "inputGroupPrepend", "inputGroupAppend", "label", "dangerIconDescription", "description", "validationMessage"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import newId from '../utils/newId';
import ValidationMessage from '../ValidationMessage/index';
import Variant from '../utils/constants';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';
export var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
export var inputProps = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dangerIconDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  validator: PropTypes.func,
  isValid: PropTypes.bool,
  validationMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  themes: PropTypes.arrayOf(PropTypes.string),
  inline: PropTypes.bool,
  inputGroupPrepend: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  inputGroupAppend: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  type: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(PropTypes.element)
  })])
};
export var defaultProps = {
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyPress: function onKeyPress() {},
  id: undefined,
  value: '',
  dangerIconDescription: '',
  description: undefined,
  disabled: false,
  required: false,
  validator: undefined,
  isValid: true,
  validationMessage: '',
  className: undefined,
  themes: [],
  inline: false,
  inputGroupPrepend: undefined,
  inputGroupAppend: undefined,
  type: undefined,
  inputRef: undefined
};

var asInput = function asInput(WrappedComponent) {
  var inputType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var labelFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var NewComponent = /*#__PURE__*/function (_React$Component) {
    _inherits(NewComponent, _React$Component);

    var _super = _createSuper(NewComponent);

    function NewComponent(props) {
      var _this;

      _classCallCheck(this, NewComponent);

      _this = _super.call(this, props);
      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
      _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
      _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
      _this.renderInput = _this.renderInput.bind(_assertThisInitialized(_this));
      var id = _this.props.id ? _this.props.id : newId('asInput');
      var isValid = _this.props.validator ? true : _this.props.isValid;
      var validationMessage = _this.props.validator ? '' : _this.props.validationMessage;
      var dangerIconDescription = _this.props.validator ? '' : _this.props.dangerIconDescription;
      _this.state = {
        id: id,
        value: _this.props.value,
        isValid: isValid,
        validationMessage: validationMessage,
        dangerIconDescription: dangerIconDescription
      };
      return _this;
    }
    /* eslint-disable react/no-did-update-set-state */


    _createClass(NewComponent, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var updatedState = {};

        if (this.props.value !== prevProps.value) {
          updatedState.value = this.props.value;
        }

        if (this.props.isValid !== prevProps.isValid && !this.props.validator) {
          updatedState.isValid = this.props.isValid;
        }

        if (this.props.validationMessage !== prevProps.validationMessage && !this.props.validator) {
          updatedState.validationMessage = this.props.validationMessage;
        }

        if (this.props.dangerIconDescription !== prevProps.dangerIconDescription && !this.props.validator) {
          updatedState.dangerIconDescription = this.props.dangerIconDescription;
        } // If validator goes away, revert to props


        if (this.props.validator !== prevProps.validator && !this.props.validator) {
          updatedState.isValid = this.props.isValid;
          updatedState.validationMessage = this.props.validationMessage;
          updatedState.dangerIconDescription = this.props.dangerIconDescription;
        }

        if (Object.keys(updatedState).length > 0) {
          this.setState(updatedState);
        }
      }
    }, {
      key: "handleChange",
      value: function handleChange(event) {
        this.setState({
          value: event.target.value
        });
        this.props.onChange(event.target.type === 'checkbox' ? event.target.checked : event.target.value, this.props.name);
      }
    }, {
      key: "handleKeyPress",
      value: function handleKeyPress(event) {
        this.props.onKeyPress(event, this.props.name);
      }
    }, {
      key: "handleBlur",
      value: function handleBlur(event) {
        var val = event.target.value;

        if (this.props.validator) {
          this.setState(this.props.validator(val));
        }

        this.props.onBlur(val, this.props.name);
      }
    }, {
      key: "getLabel",
      value: function getLabel() {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line jsx-a11y/label-has-for
          React.createElement("label", {
            id: "label-".concat(this.state.id),
            htmlFor: this.state.id,
            className: classNames({
              'form-check-label': this.isGroupedInput()
            })
          }, this.props.label)
        );
      }
    }, {
      key: "getDescriptions",
      value: function getDescriptions() {
        // possible future work: multiple feedback msgs?
        var errorId = "error-".concat(this.state.id);
        var descriptionId = "description-".concat(this.state.id);
        var desc = {}; // TODO: refactor this component to use Variants instead of the themes array.

        desc.error = /*#__PURE__*/React.createElement(ValidationMessage, {
          id: errorId,
          isValid: this.state.isValid,
          invalidMessage: this.state.validationMessage,
          variant: {
            status: this.hasDangerTheme() ? Variant.status.DANGER : Variant.status.INFO
          },
          variantIconDescription: this.state.dangerIconDescription
        });
        desc.describedBy = errorId;

        if (this.props.description) {
          desc.description = /*#__PURE__*/React.createElement("small", {
            className: "form-text",
            id: descriptionId,
            key: "1"
          }, this.props.description);
          desc.describedBy = "".concat(desc.describedBy, " ").concat(descriptionId).trim();
        }

        return desc;
      }
    }, {
      key: "getAddons",
      value: function getAddons(_ref) {
        var _this2 = this;

        var addonElements = _ref.addonElements,
            type = _ref.type;

        if (Array.isArray(addonElements)) {
          return addonElements.map(function (addon, index) {
            return /*#__PURE__*/React.cloneElement(addon, {
              key: _this2.generateInputGroupAddonKey({
                prefix: type,
                index: index
              })
            });
          });
        }

        return addonElements;
      }
    }, {
      key: "hasDangerTheme",
      value: function hasDangerTheme() {
        return this.props.themes.indexOf('danger') >= 0;
      }
    }, {
      key: "isGroupedInput",
      value: function isGroupedInput() {
        switch (inputType) {
          case 'checkbox':
            return true;

          default:
            return false;
        }
      }
    }, {
      key: "generateInputGroupAddonKey",
      value: function generateInputGroupAddonKey(_ref2) {
        var prefix = _ref2.prefix,
            index = _ref2.index;
        return "".concat(this.state.id, "-").concat(prefix, "-").concat(index);
      }
    }, {
      key: "renderInput",
      value: function renderInput(describedBy) {
        var _this$props = this.props,
            className = _this$props.className,
            inputRef = _this$props.inputRef,
            type = _this$props.type,
            isValid = _this$props.isValid,
            validator = _this$props.validator,
            themes = _this$props.themes,
            inline = _this$props.inline,
            inputGroupPrepend = _this$props.inputGroupPrepend,
            inputGroupAppend = _this$props.inputGroupAppend,
            label = _this$props.label,
            dangerIconDescription = _this$props.dangerIconDescription,
            description = _this$props.description,
            validationMessage = _this$props.validationMessage,
            others = _objectWithoutProperties(_this$props, _excluded);

        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, others, {
          id: this.state.id,
          value: this.state.value,
          className: classNames({
            'form-control': !this.isGroupedInput(),
            'form-check-input': this.isGroupedInput(),
            'is-invalid': !this.state.isValid,
            'is-invalid-nodanger': !this.hasDangerTheme()
          }, className),
          "aria-describedby": describedBy,
          "aria-invalid": !isValid,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          onKeyPress: this.handleKeyPress,
          type: type,
          inputRef: inputRef
        }));
      }
    }, {
      key: "renderInputGroupAppend",
      value: function renderInputGroupAppend() {
        return /*#__PURE__*/React.createElement("div", {
          className: "input-group-append"
        }, this.getAddons({
          type: 'append',
          addonElements: this.props.inputGroupAppend
        }));
      }
    }, {
      key: "renderInputGroupPrepend",
      value: function renderInputGroupPrepend() {
        return /*#__PURE__*/React.createElement("div", {
          className: "input-group-prepend"
        }, this.getAddons({
          type: 'prepend',
          addonElements: this.props.inputGroupPrepend
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$getDescriptions = this.getDescriptions(),
            description = _this$getDescriptions.description,
            error = _this$getDescriptions.error,
            describedBy = _this$getDescriptions.describedBy;

        return /*#__PURE__*/React.createElement("div", {
          className: classNames({
            'form-group': !this.isGroupedInput(),
            'form-inline': !this.isGroupedInput() && this.props.inline,
            'form-check': this.isGroupedInput()
          })
        }, labelFirst && this.getLabel(), this.props.inputGroupPrepend || this.props.inputGroupAppend ? /*#__PURE__*/React.createElement("div", {
          className: classNames('input-group')
        }, this.renderInputGroupPrepend(), this.renderInput(describedBy), this.renderInputGroupAppend()) : this.renderInput(describedBy), !labelFirst && this.getLabel(), error, description);
      }
    }]);

    return NewComponent;
  }(React.Component);

  NewComponent.displayName = "asInput(".concat(getDisplayName(WrappedComponent), ")");
  NewComponent.propTypes = inputProps;
  NewComponent.defaultProps = defaultProps;
  return withDeprecatedProps(NewComponent, 'asInput', {
    className: {
      deprType: DEPR_TYPES.FORMAT,
      expect: function expect(value) {
        return typeof value === 'string';
      },
      transform: function transform(value) {
        return Array.isArray(value) ? value.join(' ') : value;
      },
      message: 'It should be a string.'
    },
    ariaLabel: {
      deprType: DEPR_TYPES.MOVED,
      newName: 'aria-label'
    }
  });
};

export default asInput;
//# sourceMappingURL=index.js.map