import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CollapsibleContext } from './CollapsibleAdvanced';

function CollapsibleVisible(_ref) {
  var children = _ref.children,
      visibleWhenOpen = _ref.whenOpen,
      visibleWhenClosed = _ref.whenClosed;

  var _useContext = useContext(CollapsibleContext),
      isOpen = _useContext.isOpen;

  var isVisible = isOpen && visibleWhenOpen || !isOpen && visibleWhenClosed;

  if (isVisible) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }

  return null;
}

CollapsibleVisible.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,

  /** Specifies whether the content should be visible when `Collapsible` is open. */
  whenOpen: PropTypes.bool,

  /** Specifies whether the content should be visible when `Collapsible` is closed. */
  whenClosed: PropTypes.bool
};
CollapsibleVisible.defaultProps = {
  children: undefined,
  whenOpen: false,
  whenClosed: false
};
export default CollapsibleVisible;
//# sourceMappingURL=CollapsibleVisible.js.map