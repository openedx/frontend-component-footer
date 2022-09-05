import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getInputType } from './utils';
var INPUT_TYPES = ['radio', 'checkbox'];
var DEFAULT_COLUMNS_NUMBER = 2;
var SelectableBoxSet = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      name = _ref.name,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      onChange = _ref.onChange,
      type = _ref.type,
      columns = _ref.columns,
      className = _ref.className;
  var inputType = getInputType('SelectableBoxSet', type);
  return /*#__PURE__*/React.createElement(inputType, {
    name: name,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    ref: ref,
    className: classNames('pgn__selectable_box-set', "pgn__selectable_box-set--".concat(columns || DEFAULT_COLUMNS_NUMBER), className)
  }, children);
});
SelectableBoxSet.propTypes = {
  /** Specifies a name for the group of `SelectableBox`'es. */
  name: PropTypes.string.isRequired,

  /** Content of the `SelectableBoxSet`. */
  children: PropTypes.node,

  /** A function that receives event of the clicked `SelectableBox` and can be used to handle the value change. */
  onChange: PropTypes.func,

  /** Indicates selected `SelectableBox`'es. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),

  /** Specifies default values for the `SelectableBox`'es. */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Indicates the input type: checkbox or radio. */
  type: PropTypes.oneOf(INPUT_TYPES),

  /**
   * Specifies number of `SelectableBox`'es in a row.
   *
   * Class that is responsible for the columns number: `pgn__selectable_box-set--{columns}`.
   * Max number of columns: `12`.
   */
  columns: PropTypes.number,

  /** A class that is be appended to the base element. */
  className: PropTypes.string
};
SelectableBoxSet.defaultProps = {
  children: undefined,
  onChange: function onChange() {},
  value: undefined,
  defaultValue: undefined,
  type: 'radio',
  columns: DEFAULT_COLUMNS_NUMBER,
  className: undefined
};
export default SelectableBoxSet;
//# sourceMappingURL=SelectableBoxSet.js.map