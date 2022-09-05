function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';

var TransitionReplace = /*#__PURE__*/function (_React$Component) {
  _inherits(TransitionReplace, _React$Component);

  var _super = _createSuper(TransitionReplace);

  function TransitionReplace(props) {
    var _this;

    _classCallCheck(this, TransitionReplace);

    _this = _super.call(this, props);
    _this.state = {
      height: null
    };
    _this.onChildEnter = _this.onChildEnter.bind(_assertThisInitialized(_this));
    _this.onChildEntering = _this.onChildEntering.bind(_assertThisInitialized(_this));
    _this.onChildEntered = _this.onChildEntered.bind(_assertThisInitialized(_this));
    _this.onChildExit = _this.onChildExit.bind(_assertThisInitialized(_this));
    _this.onChildExiting = _this.onChildExiting.bind(_assertThisInitialized(_this));
    _this.onChildExited = _this.onChildExited.bind(_assertThisInitialized(_this));
    return _this;
  } // Transition events are fired in this order:
  //
  // onEnter > onEntering > onEntered
  // onExit  > onExiting  > onExited
  //
  // Keep in mind that we always have two transitions happening
  // both the entering and leaving children
  //
  // We set the container height (for animation) in this order:
  //
  // 1. onChildExit         (explicitly set the height to match the current current)
  // 2. onChildEntering     (set the height to match the new content)
  // 3. onChildExited       (reset the height to null)


  _createClass(TransitionReplace, [{
    key: "onChildEnter",
    value: function onChildEnter(htmlNode) {
      if (this.props.onChildEnter) {
        this.props.onChildEnter(htmlNode);
      }
    }
  }, {
    key: "onChildEntering",
    value: function onChildEntering(htmlNode) {
      this.setState({
        height: htmlNode.offsetHeight
      });

      if (this.props.onChildEntering) {
        this.props.onChildEntering(htmlNode);
      }
    }
  }, {
    key: "onChildEntered",
    value: function onChildEntered(htmlNode) {
      this.setState({
        height: null
      });

      if (this.props.onChildEntered) {
        this.props.onChildEntered(htmlNode);
      }
    }
  }, {
    key: "onChildExit",
    value: function onChildExit(htmlNode) {
      this.setState({
        height: htmlNode.offsetHeight
      });

      if (this.props.onChildExit) {
        this.props.onChildExit(htmlNode);
      }
    }
  }, {
    key: "onChildExiting",
    value: function onChildExiting(htmlNode) {
      if (this.props.onChildExiting) {
        this.props.onChildExiting(htmlNode);
      }
    }
  }, {
    key: "onChildExited",
    value: function onChildExited(htmlNode) {
      this.setState({
        height: null
      });

      if (this.props.onChildExited) {
        this.props.onChildExited(htmlNode);
      }
    }
  }, {
    key: "renderChildTransition",
    value: function renderChildTransition(child) {
      var _this2 = this;

      if (!child.key && process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn("TransitionReplace: A child is missing a 'key' prop. Keys are required for any child of this component.");
      } // Makes the exiting and entering children occupy the same space
      // SCSS handles the crossfade so it can be easily overridden


      var commonChildStyles = {
        // Prevent margin-collapsing which throws off height calculations
        padding: '.1px 0'
      };
      var transitionStyles = {
        entering: {},
        entered: {},
        exiting: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          pointerEvents: 'none'
        },
        exited: {}
      };
      return /*#__PURE__*/React.createElement(CSSTransition, {
        timeout: {
          enter: this.props.enterDuration,
          exit: this.props.exitDuration
        },
        unmountOnExit: true,
        mountOnEnter: true,
        onEnter: this.onChildEnter,
        onEntering: this.onChildEntering,
        onEntered: this.onChildEntered,
        onExit: this.onChildExit,
        onExiting: this.onChildExiting,
        onExited: this.onChildExited,
        classNames: this.props.transitionClassNames
      }, function (state) {
        return /*#__PURE__*/React.createElement("div", {
          style: _objectSpread(_objectSpread(_objectSpread({}, commonChildStyles), transitionStyles[state]), _this2.props.transitionStyles[state])
        }, child);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(TransitionGroup, {
        className: classNames('pgn-transition-replace-group', 'position-relative', {
          'overflow-hidden': this.state.height !== null
        }, this.props.className),
        style: {
          height: this.state.height
        }
      }, React.Children.map(this.props.children, this.renderChildTransition, this));
    }
  }]);

  return TransitionReplace;
}(React.Component);

TransitionReplace.propTypes = {
  /** Specifies an additional class for the base element */
  children: PropTypes.element,

  /** Duration of the element appearance transition. */
  enterDuration: PropTypes.number,

  /** Duration of the element dismiss transition. */
  exitDuration: PropTypes.number,

  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** A `Transition` callback fired immediately after the `enter` or `appear` class is applied. */
  onChildEnter: PropTypes.func,

  /** A `Transition` callback fired immediately after the `enter-active` or `appear-active` class is applied. */
  onChildEntering: PropTypes.func,

  /**
   * A `Transition` callback fired immediately after the `enter` or
   * `appear` classes are removed and the done class is added to the DOM node.
   */
  onChildEntered: PropTypes.func,

  /** A `Transition` callback fired immediately after the `exit` class is applied. */
  onChildExit: PropTypes.func,

  /** A `Transition` callback fired immediately after the `exit-active` is applied. */
  onChildExiting: PropTypes.func,

  /**
   * A `Transition` callback fired immediately after the `exit` classes
   * are removed and the exit-done class is added to the DOM node.
   */
  onChildExited: PropTypes.func,

  /** An object that specifies transition styles. */
  transitionStyles: PropTypes.shape({
    entering: PropTypes.shape({}),
    entered: PropTypes.shape({}),
    exiting: PropTypes.shape({}),
    exited: PropTypes.shape({})
  }),

  /** Specifies class name to append to the `Transition`. */
  transitionClassNames: PropTypes.string
};
TransitionReplace.defaultProps = {
  children: undefined,
  enterDuration: 300,
  exitDuration: 300,
  className: undefined,
  onChildEnter: undefined,
  onChildEntering: undefined,
  onChildEntered: undefined,
  onChildExit: undefined,
  onChildExiting: undefined,
  onChildExited: undefined,
  transitionStyles: {},
  transitionClassNames: 'pgn__transition-replace'
};
export default TransitionReplace;
//# sourceMappingURL=index.js.map