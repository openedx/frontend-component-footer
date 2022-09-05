function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

// TODO: @jaebradley fix these eslint errors

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import newId from '../../utils/newId';

var Tabs = /*#__PURE__*/function (_React$Component) {
  _inherits(Tabs, _React$Component);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, props);
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      activeTab: 0,
      uuid: newId('tabInterface')
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "genLabelId",
    value: function genLabelId(index) {
      return "tab-label-".concat(this.state.uuid, "-").concat(index);
    }
  }, {
    key: "genPanelId",
    value: function genPanelId(index) {
      return "tab-panel-".concat(this.state.uuid, "-").concat(index);
    }
  }, {
    key: "buildLabels",
    value: function buildLabels() {
      var _this2 = this;

      return this.props.labels.map(function (label, i) {
        var selected = _this2.state.activeTab === i;

        var labelId = _this2.genLabelId(i);

        return /*#__PURE__*/React.createElement("li", {
          key: labelId
        }, /*#__PURE__*/React.createElement("button", {
          role: "tab",
          "aria-selected": selected,
          "aria-controls": _this2.genPanelId(i),
          id: labelId,
          onClick: function onClick() {
            _this2.toggle(i);
          },
          className: classNames('nav-link nav-item', {
            active: selected
          })
        }, label));
      });
    }
  }, {
    key: "buildPanels",
    value: function buildPanels() {
      var _this3 = this;

      return this.props.children.map(function (panel, i) {
        var selected = _this3.state.activeTab === i;

        var panelId = _this3.genPanelId(i);

        return /*#__PURE__*/React.createElement("div", {
          "aria-hidden": !selected,
          "aria-labelledby": _this3.genLabelId(i),
          className: classNames('tab-pane', {
            active: selected
          }),
          id: panelId,
          key: panelId,
          role: "tabpanel"
        }, panel);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var labels = this.buildLabels();
      var panels = this.buildPanels();
      return /*#__PURE__*/React.createElement("div", {
        className: "tabs"
      }, /*#__PURE__*/React.createElement("ul", {
        role: "tablist",
        className: classNames(['nav', 'nav-tabs'])
      }, labels), /*#__PURE__*/React.createElement("div", {
        role: "tabpanel",
        className: "tab-content"
      }, panels));
    }
  }]);

  return Tabs;
}(React.Component); // TODO: custom validator that ensures labels and panels are the same length


Tabs.propTypes = {
  /** specifies the list of elements that will be displayed within each of the tabbed views.  It is the content relevant to each label. Children should not be passed as Props, but should instead be nested between the opening and closing `<Tabs> </Tabs>` tags. */
  labels: PropTypes.arrayOf(PropTypes.node).isRequired,

  /** specifies the list of headings that will appear on all of the tabs that will be created.
  */
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
export default Tabs;
//# sourceMappingURL=index.js.map