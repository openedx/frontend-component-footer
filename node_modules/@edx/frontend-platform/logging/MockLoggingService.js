function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The MockLoggingService implements both logInfo and logError as jest mock functions via
 * jest.fn().  It has no other functionality.
 *
 * @implements {LoggingService}
 * @memberof module:Logging
 */
var MockLoggingService = /*#__PURE__*/_createClass(function MockLoggingService() {
  _classCallCheck(this, MockLoggingService);

  _defineProperty(this, "logInfo", jest.fn());

  _defineProperty(this, "logError", jest.fn());
});

export default MockLoggingService;
//# sourceMappingURL=MockLoggingService.js.map