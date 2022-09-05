var lastId = 0;

var newId = function newId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
  lastId += 1;
  return "".concat(prefix).concat(lastId);
};

export default newId;
//# sourceMappingURL=newId.js.map