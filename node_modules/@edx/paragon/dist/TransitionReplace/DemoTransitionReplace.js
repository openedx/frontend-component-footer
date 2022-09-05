function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import TransitionReplace from './index';
export default function DemoTransitionReplace() {
  var contentOptions = [/*#__PURE__*/React.createElement("blockquote", {
    className: "h2 m-0",
    key: 0
  }, /*#__PURE__*/React.createElement("p", null, "You know the golden rule, don\u2019t you boy? Those who have the gold make the rules."), /*#__PURE__*/React.createElement("footer", null, "\u2014 Crazy hunch-backed old guy in Aladdin")), /*#__PURE__*/React.createElement("blockquote", {
    className: "m-0",
    key: 1
  }, /*#__PURE__*/React.createElement("p", null, "People say nothing is impossible, but I do nothing every day."), /*#__PURE__*/React.createElement("footer", null, "\u2014 A. A. Milne")), /*#__PURE__*/React.createElement("blockquote", {
    className: "h2 m-0",
    key: 2
  }, /*#__PURE__*/React.createElement("p", null, "I won\u2019t go into a big spiel about reincarnation, but the first time I was in the Gucci store in Chicago was the closest I\u2019ve ever felt to home."), /*#__PURE__*/React.createElement("footer", null, "\u2014 Kanye")), /*#__PURE__*/React.createElement("blockquote", {
    className: "m-0",
    key: 3
  }, /*#__PURE__*/React.createElement("p", null, "The first time I see a jogger smiling, I\u2019ll consider it."), /*#__PURE__*/React.createElement("footer", null, "\u2014 Joan Rivers"))];

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentContentIndex = _useState2[0],
      setCurrentContentIndex = _useState2[1];

  var changeContent = function changeContent() {
    setCurrentContentIndex((currentContentIndex + 1) % contentOptions.length);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary mb-2",
    onClick: changeContent
  }, "Next Quote"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#eee',
      padding: '1rem',
      maxWidth: '15rem'
    }
  }, /*#__PURE__*/React.createElement(TransitionReplace, null, contentOptions[currentContentIndex])));
}
//# sourceMappingURL=DemoTransitionReplace.js.map