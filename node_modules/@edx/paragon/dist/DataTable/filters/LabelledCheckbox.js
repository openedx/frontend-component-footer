import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from '../..';
import { newId } from '../../utils';

var LabelledCheckbox = function LabelledCheckbox(_ref) {
  var onChange = _ref.onChange,
      checked = _ref.checked,
      label = _ref.label,
      id = _ref.id;
  var idRef = useRef(newId(id));
  return /*#__PURE__*/React.createElement("div", {
    key: idRef.current,
    className: "pgn__checkbox-filter"
  }, /*#__PURE__*/React.createElement(Form.Check, {
    id: idRef.current,
    checked: checked,
    onChange: onChange,
    label: label
  }));
};

LabelledCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  id: PropTypes.string.isRequired
};
export default LabelledCheckbox;
//# sourceMappingURL=LabelledCheckbox.js.map