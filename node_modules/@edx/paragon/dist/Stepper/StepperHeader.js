var _excluded = ["label"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StepperHeaderStep from './StepperHeaderStep';
import { StepperContext } from './StepperContext';
import { useWindowSize } from '..';

var StepListSeparator = function StepListSeparator() {
  return /*#__PURE__*/React.createElement("li", {
    "aria-hidden": "true",
    className: "pgn__stepper-header-line"
  });
};

var StepList = function StepList(_ref) {
  var steps = _ref.steps,
      activeKey = _ref.activeKey;
  return /*#__PURE__*/React.createElement("ul", {
    className: "pgn__stepper-header-step-list"
  }, steps.map(function (_ref2, index) {
    var label = _ref2.label,
        stepProps = _objectWithoutProperties(_ref2, _excluded);

    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: stepProps.eventKey
    }, index !== 0 && /*#__PURE__*/React.createElement(StepListSeparator, null), /*#__PURE__*/React.createElement(StepperHeaderStep, _extends({}, stepProps, {
      index: index,
      isActive: activeKey === stepProps.eventKey
    }), label));
  }));
};

var PageCount = function PageCount(_ref3) {
  var activeStepIndex = _ref3.activeStepIndex,
      totalSteps = _ref3.totalSteps;
  return "Step ".concat(activeStepIndex + 1, " of ").concat(totalSteps);
};

var StepperHeader = function StepperHeader(_ref4) {
  var className = _ref4.className,
      PageCountComponent = _ref4.PageCountComponent;

  var _useContext = useContext(StepperContext),
      steps = _useContext.steps,
      activeKey = _useContext.activeKey;

  var windowDimensions = useWindowSize(); // assume about 200px per step

  var isCompactView = windowDimensions.width < steps.length * 200;

  if (isCompactView) {
    var activeStepIndex = steps.findIndex(function (step) {
      return step.eventKey === activeKey;
    });
    var activeStep = steps[activeStepIndex];
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('pgn__stepper-header', className)
    }, /*#__PURE__*/React.createElement(StepperHeaderStep, _extends({}, activeStep, {
      index: activeStepIndex,
      isActive: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-grow-1"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageCountComponent, {
      activeStepIndex: activeStepIndex,
      totalSteps: steps.length
    })));
  } // Show all steps


  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__stepper-header', className)
  }, /*#__PURE__*/React.createElement(StepList, {
    steps: steps,
    activeKey: activeKey
  }));
};

StepperHeader.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,

  /** A component that receives `activeStepIndex` and `totalSteps` props to display them. */
  PageCountComponent: PropTypes.elementType
};
StepperHeader.defaultProps = {
  className: null,
  PageCountComponent: PageCount
};
StepList.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    eventKey: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    hasError: PropTypes.bool
  })),
  activeKey: PropTypes.string.isRequired
};
StepList.defaultProps = {
  steps: []
};
StepperHeader.Step = StepperHeaderStep;
export default StepperHeader;
//# sourceMappingURL=StepperHeader.js.map