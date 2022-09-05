function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
export var StepperContext = /*#__PURE__*/React.createContext({
  activeKey: ''
});

var stepsReducer = function stepsReducer(stepsState, action) {
  var newStepsState = [];

  switch (action.type) {
    case 'remove':
      return stepsState.filter(function (step) {
        return step.eventKey !== action.eventKey;
      });

    case 'register':
    default:
      // If is existing step
      if (stepsState.some(function (step) {
        return step.eventKey === action.step.eventKey;
      })) {
        newStepsState = stepsState.map(function (step) {
          if (step.eventKey === action.step.eventKey) {
            return action.step;
          }

          return step;
        });
      } else {
        newStepsState = [].concat(_toConsumableArray(stepsState), [action.step]);
      } // If using the index prop


      if (stepsState.some(function (step) {
        return step.index;
      })) {
        return newStepsState.sort(function (a, b) {
          return a.index > b.index ? 1 : -1;
        });
      }

      return newStepsState;
  }
};

export function StepperContextProvider(_ref) {
  var children = _ref.children,
      activeKey = _ref.activeKey;

  var _useReducer = useReducer(stepsReducer, []),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      steps = _useReducer2[0],
      dispatch = _useReducer2[1];

  var registerStep = useCallback(function (step) {
    return dispatch({
      step: step,
      type: 'register'
    });
  }, []);
  var removeStep = useCallback(function (eventKey) {
    return dispatch({
      eventKey: eventKey,
      type: 'remove'
    });
  }, []);

  var getIsComplete = function getIsComplete(eventKey) {
    var activeIndex = steps.findIndex(function (step) {
      return step.eventKey === activeKey;
    });
    var thisIndex = steps.findIndex(function (step) {
      return step.eventKey === eventKey;
    });
    return thisIndex < activeIndex;
  };

  return /*#__PURE__*/React.createElement(StepperContext.Provider, {
    value: {
      activeKey: activeKey,
      registerStep: registerStep,
      steps: steps,
      removeStep: removeStep,
      getIsComplete: getIsComplete
    }
  }, children);
}
StepperContextProvider.propTypes = {
  /** Specifies the content of the `ContextProvider`. */
  children: PropTypes.node.isRequired,

  /** Specifies the current step of the `Stepper`. */
  activeKey: PropTypes.node.isRequired
};
export { stepsReducer };
//# sourceMappingURL=StepperContext.js.map