function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["children"];

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // eslint-disable-next-line import/no-cycle

import DropdownButton from './DropdownButton'; // eslint-disable-next-line import/no-cycle

import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import withDeprecatedProps, { DEPR_TYPES } from '../../withDeprecatedProps';

var _React$createContext = /*#__PURE__*/React.createContext(),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  // eslint-disable-next-line react/sort-comp
  // For creating unique ids
  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (e) {
      if (_this.containerRef.current.contains(e.target) && _this.containerRef.current !== e.target) {
        return;
      }

      if (_this.state.open) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMenuKeyDown", function (e) {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();

          _this.focusPrevious();

          break;

        case 'ArrowDown':
          e.preventDefault();

          _this.focusNext();

          break;

        case 'Tab':
          e.preventDefault();

          if (e.shiftKey) {
            _this.focusPrevious();
          } else {
            _this.focusNext();
          }

          break;

        case 'Escape':
          e.stopPropagation();

          _this.close();

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      if (_this.state.open) {
        _this.close();
      } else {
        _this.open();
      }
    });

    _this.state = {
      open: false
    }; // Used for aria labelling. Increment the id counter so the next id can be unique

    _this.uniqueId = Dropdown.idCounter;
    Dropdown.idCounter += 1;
    _this.triggerId = "pgn__dropdown-trigger-".concat(_this.uniqueId);
    _this.containerRef = /*#__PURE__*/React.createRef();
    _this.menuRef = /*#__PURE__*/React.createRef();
    _this.buttonRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.open !== this.state.open) {
        if (this.state.open) {
          this.focusFirst();
        } else {
          this.buttonRef.current.focus();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "getFocusableElements",
    value: function getFocusableElements() {
      var selector = 'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])';
      return Array.from(this.menuRef.current.querySelectorAll(selector));
    }
  }, {
    key: "close",
    value: function close() {
      document.removeEventListener('click', this.handleDocumentClick, true);
      this.setState({
        open: false
      });
    }
  }, {
    key: "open",
    value: function open() {
      // adding event listener here so the user can close dropdown on click outside of the dropdown
      document.addEventListener('click', this.handleDocumentClick, true);
      this.setState({
        open: true
      });
    }
  }, {
    key: "focusFirst",
    value: function focusFirst() {
      var focusableElements = this.getFocusableElements();

      if (focusableElements.length) {
        focusableElements[0].focus();
      }
    }
  }, {
    key: "focusNext",
    value: function focusNext() {
      var allFocusableElements = this.getFocusableElements();

      if (allFocusableElements.length === 0) {
        return;
      }

      var activeIndex = allFocusableElements.indexOf(document.activeElement);
      var nextIndex = (activeIndex + 1) % allFocusableElements.length;
      allFocusableElements[nextIndex].focus();
    }
  }, {
    key: "focusPrevious",
    value: function focusPrevious() {
      var allFocusableElements = this.getFocusableElements();

      if (allFocusableElements.length === 0) {
        return;
      }

      var activeIndex = allFocusableElements.indexOf(document.activeElement);
      var previousIndex = (activeIndex - 1 + allFocusableElements.length) % allFocusableElements.length;
      allFocusableElements[previousIndex].focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({}, other, {
        className: classNames('dropdown', {
          show: this.state.open
        }, other.className),
        ref: this.containerRef
      }), /*#__PURE__*/React.createElement(Provider, {
        value: {
          buttonRef: this.buttonRef,
          handleMenuKeyDown: this.handleMenuKeyDown,
          isOpen: this.state.open,
          menuRef: this.menuRef,
          toggle: this.toggle,
          triggerId: this.triggerId
        }
      }, children));
    }
  }]);

  return Dropdown;
}(React.Component);

_defineProperty(Dropdown, "idCounter", 0);

Dropdown.propTypes = {
  children: PropTypes.node.isRequired
};
Dropdown.Item = DropdownItem;
Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
var DropdownWithDeprecatedProps = withDeprecatedProps(Dropdown, 'Dropdown', {
  menuItems: {
    deprType: DEPR_TYPES.MOVED_AND_FORMAT,
    message: 'They should be components sent as children.',
    newName: 'children',
    transform: function transform(menuItems, allProps) {
      if (!Array.isArray(menuItems)) {
        return null;
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DropdownButton, null, /*#__PURE__*/React.isValidElement(allProps.iconElement) ? allProps.iconElement : null, allProps.title), /*#__PURE__*/React.createElement(DropdownMenu, null, menuItems.map(function (menuItem, i) {
        /* eslint-disable react/no-array-index-key */
        if ( /*#__PURE__*/React.isValidElement(menuItem)) {
          return /*#__PURE__*/React.cloneElement(menuItem, {
            className: 'dropdown-item',
            key: i
          });
        }

        return /*#__PURE__*/React.createElement(DropdownItem, {
          key: i,
          href: menuItem.href
        }, menuItem.label);
        /* eslint-enable react/no-array-index-key */
      })));
    }
  },
  title: {
    deprType: DEPR_TYPES.REMOVED,
    message: 'It should be specified inside the Dropdown.Button component'
  },
  buttonType: {
    deprType: DEPR_TYPES.REMOVED,
    message: 'It should be specified as a className prop'
  },
  iconElement: {
    deprType: DEPR_TYPES.REMOVED,
    message: 'It should be specified inside the buttonContent prop.'
  }
});
DropdownWithDeprecatedProps.propTypes = Dropdown.propTypes;
DropdownWithDeprecatedProps.defaultProps = Dropdown.defaultProps;
DropdownWithDeprecatedProps.Item = Dropdown.Item;
DropdownWithDeprecatedProps.Button = Dropdown.Button;
DropdownWithDeprecatedProps.Menu = Dropdown.Menu;
export { Provider, Consumer };
export default DropdownWithDeprecatedProps;
//# sourceMappingURL=index.js.map