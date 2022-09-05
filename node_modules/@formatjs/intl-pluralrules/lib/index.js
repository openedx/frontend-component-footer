import { __spreadArray } from "tslib";
import { SupportedLocales, ToNumber, CanonicalizeLocaleList, } from '@formatjs/ecma402-abstract';
import { InitializePluralRules } from './abstract/InitializePluralRules';
import { ResolvePlural } from './abstract/ResolvePlural';
import getInternalSlots from './get_internal_slots';
function validateInstance(instance, method) {
    if (!(instance instanceof PluralRules)) {
        throw new TypeError("Method Intl.PluralRules.prototype.".concat(method, " called on incompatible receiver ").concat(String(instance)));
    }
}
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-pluralruleselect
 * @param locale
 * @param type
 * @param _n
 * @param param3
 */
function PluralRuleSelect(locale, type, _n, _a) {
    var IntegerDigits = _a.IntegerDigits, NumberOfFractionDigits = _a.NumberOfFractionDigits, FractionDigits = _a.FractionDigits;
    return PluralRules.localeData[locale].fn(NumberOfFractionDigits
        ? "".concat(IntegerDigits, ".").concat(FractionDigits)
        : IntegerDigits, type === 'ordinal');
}
var PluralRules = /** @class */ (function () {
    function PluralRules(locales, options) {
        // test262/test/intl402/RelativeTimeFormat/constructor/constructor/newtarget-undefined.js
        // Cannot use `new.target` bc of IE11 & TS transpiles it to something else
        var newTarget = this && this instanceof PluralRules ? this.constructor : void 0;
        if (!newTarget) {
            throw new TypeError("Intl.PluralRules must be called with 'new'");
        }
        return InitializePluralRules(this, locales, options, {
            availableLocales: PluralRules.availableLocales,
            relevantExtensionKeys: PluralRules.relevantExtensionKeys,
            localeData: PluralRules.localeData,
            getDefaultLocale: PluralRules.getDefaultLocale,
            getInternalSlots: getInternalSlots,
        });
    }
    PluralRules.prototype.resolvedOptions = function () {
        validateInstance(this, 'resolvedOptions');
        var opts = Object.create(null);
        var internalSlots = getInternalSlots(this);
        opts.locale = internalSlots.locale;
        opts.type = internalSlots.type;
        [
            'minimumIntegerDigits',
            'minimumFractionDigits',
            'maximumFractionDigits',
            'minimumSignificantDigits',
            'maximumSignificantDigits',
        ].forEach(function (field) {
            var val = internalSlots[field];
            if (val !== undefined) {
                opts[field] = val;
            }
        });
        opts.pluralCategories = __spreadArray([], PluralRules.localeData[opts.locale].categories[opts.type], true);
        return opts;
    };
    PluralRules.prototype.select = function (val) {
        var pr = this;
        validateInstance(pr, 'select');
        var n = ToNumber(val);
        return ResolvePlural(pr, n, { getInternalSlots: getInternalSlots, PluralRuleSelect: PluralRuleSelect });
    };
    PluralRules.prototype.toString = function () {
        return '[object Intl.PluralRules]';
    };
    PluralRules.supportedLocalesOf = function (locales, options) {
        return SupportedLocales(PluralRules.availableLocales, CanonicalizeLocaleList(locales), options);
    };
    PluralRules.__addLocaleData = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
            var _b = data_1[_a], d = _b.data, locale = _b.locale;
            PluralRules.localeData[locale] = d;
            PluralRules.availableLocales.add(locale);
            if (!PluralRules.__defaultLocale) {
                PluralRules.__defaultLocale = locale;
            }
        }
    };
    PluralRules.getDefaultLocale = function () {
        return PluralRules.__defaultLocale;
    };
    PluralRules.localeData = {};
    PluralRules.availableLocales = new Set();
    PluralRules.__defaultLocale = '';
    PluralRules.relevantExtensionKeys = [];
    PluralRules.polyfilled = true;
    return PluralRules;
}());
export { PluralRules };
try {
    // IE11 does not have Symbol
    if (typeof Symbol !== 'undefined') {
        Object.defineProperty(PluralRules.prototype, Symbol.toStringTag, {
            value: 'Intl.PluralRules',
            writable: false,
            enumerable: false,
            configurable: true,
        });
    }
    try {
        // https://github.com/tc39/test262/blob/master/test/intl402/PluralRules/length.js
        Object.defineProperty(PluralRules, 'length', {
            value: 0,
            writable: false,
            enumerable: false,
            configurable: true,
        });
    }
    catch (error) {
        // IE 11 sets Function.prototype.length to be non-configurable which will cause the
        // above Object.defineProperty to throw an error.
    }
    // https://github.com/tc39/test262/blob/master/test/intl402/RelativeTimeFormat/constructor/length.js
    Object.defineProperty(PluralRules.prototype.constructor, 'length', {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true,
    });
    // https://github.com/tc39/test262/blob/master/test/intl402/RelativeTimeFormat/constructor/supportedLocalesOf/length.js
    Object.defineProperty(PluralRules.supportedLocalesOf, 'length', {
        value: 1,
        writable: false,
        enumerable: false,
        configurable: true,
    });
}
catch (ex) {
    // Meta fixes for test262
}
