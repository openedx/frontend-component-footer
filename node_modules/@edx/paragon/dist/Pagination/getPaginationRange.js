import { ELLIPSIS } from './constants';

var getPaginationRange = function getPaginationRange(_ref) {
  var currentIndex = _ref.currentIndex,
      count = _ref.count,
      length = _ref.length,
      _ref$requireFirstAndL = _ref.requireFirstAndLastPages,
      requireFirstAndLastPages = _ref$requireFirstAndL === void 0 ? true : _ref$requireFirstAndL;
  var boundedLength = Math.min(count, length);
  var unboundedStartIndex = currentIndex - Math.ceil(boundedLength / 2);
  var zeroBoundedStartIndex = Math.max(0, unboundedStartIndex); // Bind maximum value of zeroBoundedStartIndex to avoid running past the count of pages

  var boundedStartIndex = Math.min(zeroBoundedStartIndex, count - boundedLength);
  var range = Array.from({
    length: boundedLength
  }, function (el, i) {
    return boundedStartIndex + i;
  });
  var isFirstPageInRange = range[0] === 0;
  var isLastPageInRange = range[range.length - 1] === count - 1;

  if (requireFirstAndLastPages && !isFirstPageInRange) {
    range[0] = 0;
    range[1] = ELLIPSIS;
  }

  if (requireFirstAndLastPages && !isLastPageInRange) {
    range[range.length - 1] = count - 1;
    range[range.length - 2] = ELLIPSIS;
  }

  return range;
};

export default getPaginationRange;
//# sourceMappingURL=getPaginationRange.js.map