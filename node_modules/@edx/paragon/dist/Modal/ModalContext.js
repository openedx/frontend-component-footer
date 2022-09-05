import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
var ModalContext = /*#__PURE__*/React.createContext({
  onClose: function onClose() {}
});

var ModalContextProvider = function ModalContextProvider(_ref) {
  var onClose = _ref.onClose,
      isOpen = _ref.isOpen,
      isBlocking = _ref.isBlocking,
      children = _ref.children;
  var modalContextValue = useMemo(function () {
    return {
      onClose: onClose,
      isOpen: isOpen,
      isBlocking: isBlocking
    };
  }, [onClose, isOpen, isBlocking]);
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: modalContextValue
  }, children);
};

ModalContextProvider.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  isBlocking: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired
};
ModalContextProvider.defaultProps = {
  children: null,
  isBlocking: false
};
export { ModalContextProvider };
export default ModalContext;
//# sourceMappingURL=ModalContext.js.map