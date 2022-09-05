import { __assign, __extends } from "tslib";
export function getLocaleHierarchy(locale) {
    var results = [locale];
    var localeParts = locale.split('-');
    for (var i = localeParts.length; i > 1; i--) {
        results.push(localeParts.slice(0, i - 1).join('-'));
    }
    return results;
}
var MissingLocaleDataError = /** @class */ (function (_super) {
    __extends(MissingLocaleDataError, _super);
    function MissingLocaleDataError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'MISSING_LOCALE_DATA';
        return _this;
    }
    return MissingLocaleDataError;
}(Error));
export function isMissingLocaleDataError(e) {
    return e.type === 'MISSING_LOCALE_DATA';
}
export function unpackData(locale, localeData, 
/** By default shallow merge the dictionaries. */
reducer) {
    if (reducer === void 0) { reducer = function (all, d) { return (__assign(__assign({}, all), d)); }; }
    var localeHierarchy = getLocaleHierarchy(locale);
    var dataToMerge = localeHierarchy
        .map(function (l) { return localeData.data[l]; })
        .filter(Boolean);
    if (!dataToMerge.length) {
        throw new MissingLocaleDataError("Missing locale data for \"" + locale + "\", lookup hierarchy: " + localeHierarchy.join(', '));
    }
    dataToMerge.reverse();
    return dataToMerge.reduce(reducer, {});
}
