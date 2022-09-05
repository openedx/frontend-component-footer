function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';
import isRequiredIf from 'react-proptype-conditional-require';
import PropTypes from 'prop-types';
import { Button } from '..';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);
    _this.state = {
      sortedColumn: props.tableSortable ? _this.props.defaultSortedColumn : '',
      sortDirection: props.tableSortable ? _this.props.defaultSortDirection : ''
    };
    _this.onSortClick = _this.onSortClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Table, [{
    key: "onSortClick",
    value: function onSortClick(columnKey) {
      var newDirection = 'desc';

      if (this.state.sortedColumn === columnKey) {
        newDirection = this.state.sortDirection === 'desc' ? 'asc' : 'desc';
      }

      this.setState({
        sortedColumn: columnKey,
        sortDirection: newDirection
      });
      var currentlySortedColumn = this.props.columns.find(function (column) {
        return columnKey === column.key;
      });
      currentlySortedColumn.onSort(newDirection);
    }
  }, {
    key: "getCaption",
    value: function getCaption() {
      return this.props.caption && /*#__PURE__*/React.createElement("caption", null, this.props.caption);
    }
  }, {
    key: "getSortButtonScreenReaderText",
    value: function getSortButtonScreenReaderText(columnKey) {
      var text;

      if (this.state.sortedColumn === columnKey) {
        text = this.props.sortButtonsScreenReaderText[this.state.sortDirection];
      } else {
        text = this.props.sortButtonsScreenReaderText.defaultText;
      }

      return text;
    }
  }, {
    key: "getSortIcon",
    value: function getSortIcon(sortDirection) {
      var sortIconClassName = ['fa-sort', sortDirection].filter(function (n) {
        return n;
      }).join('-');
      return /*#__PURE__*/React.createElement("span", {
        className: classNames('fa', sortIconClassName),
        "aria-hidden": true
      });
    }
  }, {
    key: "getTableHeading",
    value: function getTableHeading(column) {
      var _this2 = this;

      var heading;

      if (this.props.tableSortable && column.columnSortable) {
        heading = /*#__PURE__*/React.createElement(Button, {
          variant: "header",
          onClick: function onClick() {
            return _this2.onSortClick(column.key);
          }
        }, /*#__PURE__*/React.createElement("span", null, column.label, /*#__PURE__*/React.createElement("span", {
          className: classNames('sr-only')
        }, ' ', this.getSortButtonScreenReaderText(column.key)), ' ', this.getSortIcon(column.key === this.state.sortedColumn ? this.state.sortDirection : '')));
      } else if (column.hideHeader) {
        heading = /*#__PURE__*/React.createElement("span", {
          className: classNames('sr-only')
        }, column.label);
      } else {
        heading = column.label;
      }

      return heading;
    }
  }, {
    key: "getHeadings",
    value: function getHeadings() {
      var _this3 = this;

      return /*#__PURE__*/React.createElement("thead", {
        className: classNames.apply(void 0, _toConsumableArray(this.props.headingClassName).concat([{
          'd-inline': this.props.hasFixedColumnWidths
        }]))
      }, /*#__PURE__*/React.createElement("tr", {
        className: classNames({
          'd-flex': this.props.hasFixedColumnWidths
        })
      }, this.props.columns.map(function (col) {
        return /*#__PURE__*/React.createElement("th", {
          className: classNames({
            sortable: _this3.props.tableSortable && col.columnSortable
          }, _this3.props.hasFixedColumnWidths ? col.width : null),
          key: col.key,
          scope: "col"
        }, _this3.getTableHeading(col));
      })));
    }
  }, {
    key: "getBody",
    value: function getBody() {
      var _this4 = this;

      return /*#__PURE__*/React.createElement("tbody", {
        className: classNames({
          'd-inline': this.props.hasFixedColumnWidths
        })
      }, this.props.data.map(function (row, i) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          React.createElement("tr", {
            key: i,
            className: classNames({
              'd-flex': _this4.props.hasFixedColumnWidths
            })
          }, _this4.props.columns.map(function (_ref) {
            var key = _ref.key,
                width = _ref.width;
            return /*#__PURE__*/React.createElement(key === _this4.props.rowHeaderColumnKey ? 'th' : 'td', {
              key: key,
              className: classNames(_this4.props.hasFixedColumnWidths ? width : null),
              scope: key === _this4.props.rowHeaderColumnKey ? 'row' : null
            }, row[key]);
          }))
        );
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("table", {
        className: classNames('table', this.props.className)
      }, this.getCaption(), this.getHeadings(), this.getBody());
    }
  }]);

  return Table;
}(React.Component);

Table.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,

  /** specifies the order and contents of the table's columns and provides display strings for each column's heading. It is composed of an ordered array of objects. Each object contains the following keys:
  1. `label` (string or element; required) contains the display string for each column's heading.
  2. `key` (string; required) maps that label to its corresponding datum for each row in `data`, to ensure table data are displayed in their appropriate columns.
  3. `columnSortable` (boolean; optional) specifies at the column-level whether the column is sortable. If `columnSortable` is `true`, a sort button will be rendered in the column table heading. It is only required if `tableSortable` is set to `true`.
  4. `onSort` (function; conditionally required) specifies what function is called when a sortable column is clicked. It is only required if the column's `columnSortable` is set to `true`.
  5. `hideHeader` (boolean; optional) specifies at the column-level whether the column label is visible. A column that is sortable cannot have its label be hidden.
  6. `width` (string; conditionally required) only if `hasFixedColumnWidths` is set to `true`, the `<td>` elements' `class` attributes will be set to this value. This allows restricting columns to specific widths. See [Bootstrap's grid documentation](https://getbootstrap.com/docs/4.0/layout/grid/) for `col` class names that can be used.
  The order of objects in `columns` specifies the order of the columns in the table. */
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

  /** specifies the order and contents of the table's columns and provides display strings for each column's heading. It is composed of an ordered array of objects. Each object contains the following keys:
  1. `label` (string or element; required) contains the display string for each column's heading.
  2. `key` (string; required) maps that label to its corresponding datum for each row in `data`, to ensure table data are displayed in their appropriate columns.
  3. `columnSortable` (boolean; optional) specifies at the column-level whether the column is sortable. If `columnSortable` is `true`, a sort button will be rendered in the column table heading. It is only required if `tableSortable` is set to `true`.
  4. `onSort` (function; conditionally required) specifies what function is called when a sortable column is clicked. It is only required if the column's `columnSortable` is set to `true`.
  5. `hideHeader` (boolean; optional) specifies at the column-level whether the column label is visible. A column that is sortable cannot have its label be hidden.
  6. `width` (string; conditionally required) only if `hasFixedColumnWidths` is set to `true`, the `<td>` elements' `class` attributes will be set to this value. This allows restricting columns to specific widths. See [Bootstrap's grid documentation](https://getbootstrap.com/docs/4.0/layout/grid/) for `col` class names that can be used.
  The order of objects in `columns` specifies the order of the columns in the table. */
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    columnSortable: isRequiredIf(PropTypes.bool, function (props) {
      return props.tableSortable;
    }),
    onSort: isRequiredIf(PropTypes.func, function (props) {
      return props.columnSortable;
    }),
    hideHeader: PropTypes.bool,
    width: isRequiredIf(PropTypes.string, function (props) {
      return props.hasFixedColumnWidths;
    })
  })).isRequired,

  /** Specifies Bootstrap class names to apply to the table heading. Options are detailed in [Bootstrap's docs](https://getbootstrap.com/docs/4.0/content/tables/#table-head-options).
  */
  headingClassName: PropTypes.arrayOf(PropTypes.string),

  /** Specifies whether the table is sortable. This setting supercedes column-level sortability, so if it is `false`, no sortable components will be rendered. */
  tableSortable: PropTypes.bool,

  /** Specifies whether the table's columns have fixed widths. Every element in `columns` must define a `width` if this is `true`.
  */
  hasFixedColumnWidths: PropTypes.bool,

  /* eslint-disable react/require-default-props */

  /** Specifies the key of the column that is sorted by default. It is only required if `tableSortable` is set to `true`. */
  defaultSortedColumn: isRequiredIf(PropTypes.string, function (props) {
    return props.tableSortable;
  }),

  /* eslint-disable react/require-default-props */

  /** Specifies the direction the `defaultSortedColumn` is sorted in by default; it will typically be either 'asc' or 'desc'. It is only required if `tableSortable` is set to `true`. */
  defaultSortDirection: isRequiredIf(PropTypes.string, function (props) {
    return props.tableSortable;
  }),

  /** Specifies the screen reader only text that accompanies the sort buttons for sortable columns. It takes the form of an object containing the following keys:
  1. `asc`: (string) specifies the screen reader only text for sort buttons in the ascending state.
  2. `desc`: (string) specifies the screen reader only text for sort buttons in the descending state.
  3. `defaultText`: (string) specifies the screen reader only text for sort buttons that are not engaged.
  It is only required if `tableSortable` is set to `true`.
  Default:
  ```javascript
  {
  asc: 'sort ascending',
  desc: 'sort descending',
  defaultText: 'click to sort',
  }
  ``` */
  sortButtonsScreenReaderText: isRequiredIf(PropTypes.shape({
    asc: PropTypes.string,
    desc: PropTypes.string,
    defaultText: PropTypes.string
  }), function (props) {
    return props.tableSortable;
  }),

  /** Specifies the key for the column that should act as a row header. Rather than rendering as `<td>` elements,
  cells in this column will render as `<th scope="row">`  */
  rowHeaderColumnKey: PropTypes.string
};
Table.defaultProps = {
  caption: null,
  className: undefined,
  headingClassName: [],
  tableSortable: false,
  hasFixedColumnWidths: false,
  sortButtonsScreenReaderText: {
    asc: 'sort ascending',
    desc: 'sort descending',
    defaultText: 'click to sort'
  }
};
export default withDeprecatedProps(Table, 'TableDeprecated', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: function expect(value) {
      return typeof value === 'string';
    },
    transform: function transform(value) {
      return Array.isArray(value) ? value.join(' ') : value;
    },
    message: 'It should be a string.'
  }
});
//# sourceMappingURL=index.js.map