import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var CardHeader = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var actions = _ref.actions,
      className = _ref.className,
      size = _ref.size,
      subtitle = _ref.subtitle,
      title = _ref.title;
  var cloneActions = useCallback(function (Action) {
    if ( /*#__PURE__*/React.isValidElement(Action)) {
      var children = Action.props.children;
      var addtlActionProps = {
        size: size,
        children: Array.isArray(children) ? children.map(cloneActions) : cloneActions(children)
      };
      return /*#__PURE__*/React.cloneElement(Action, addtlActionProps);
    }

    return Action;
  }, [size]);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__card-header', className),
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-header-content"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-header-title-".concat(size)
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-header-subtitle-".concat(size)
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-header-actions"
  }, size !== 'md' ? cloneActions(actions) : actions));
});
CardHeader.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: PropTypes.node,

  /** The class name for the CardHeader component */
  className: PropTypes.string,

  /** The title for the CardHeader component */
  title: PropTypes.node,

  /** The size of the CardHeader component */
  size: PropTypes.oneOf(['sm', 'md']),

  /** The subtitle of the CardHeader component */
  subtitle: PropTypes.node
};
CardHeader.defaultProps = {
  actions: null,
  className: null,
  size: 'md',
  title: null,
  subtitle: null
};
export default CardHeader;
//# sourceMappingURL=CardHeader.js.map