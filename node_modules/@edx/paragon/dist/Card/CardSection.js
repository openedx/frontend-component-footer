import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var CardSection = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      actions = _ref.actions,
      muted = _ref.muted;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__card-section', className, {
      'is-muted': muted
    }),
    ref: ref
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-section-title"
  }, title), children, actions && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-section-actions"
  }, actions));
});
CardSection.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,

  /** Specifies title of the `Section`. */
  title: PropTypes.node,

  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: PropTypes.node,

  /** Specifies whether to display `Section` with muted styling. */
  muted: PropTypes.bool
};
CardSection.defaultProps = {
  className: undefined,
  title: undefined,
  actions: undefined,
  muted: false
};
export default CardSection;
//# sourceMappingURL=CardSection.js.map