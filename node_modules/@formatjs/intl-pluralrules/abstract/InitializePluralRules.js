"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializePluralRules = void 0;
var ecma402_abstract_1 = require("@formatjs/ecma402-abstract");
var intl_localematcher_1 = require("@formatjs/intl-localematcher");
function InitializePluralRules(pl, locales, options, _a) {
    var availableLocales = _a.availableLocales, relevantExtensionKeys = _a.relevantExtensionKeys, localeData = _a.localeData, getDefaultLocale = _a.getDefaultLocale, getInternalSlots = _a.getInternalSlots;
    var requestedLocales = (0, ecma402_abstract_1.CanonicalizeLocaleList)(locales);
    var opt = Object.create(null);
    var opts = (0, ecma402_abstract_1.CoerceOptionsToObject)(options);
    var internalSlots = getInternalSlots(pl);
    internalSlots.initializedPluralRules = true;
    var matcher = (0, ecma402_abstract_1.GetOption)(opts, 'localeMatcher', 'string', ['best fit', 'lookup'], 'best fit');
    opt.localeMatcher = matcher;
    internalSlots.type = (0, ecma402_abstract_1.GetOption)(opts, 'type', 'string', ['cardinal', 'ordinal'], 'cardinal');
    (0, ecma402_abstract_1.SetNumberFormatDigitOptions)(internalSlots, opts, 0, 3, 'standard');
    var r = (0, intl_localematcher_1.ResolveLocale)(availableLocales, requestedLocales, opt, relevantExtensionKeys, localeData, getDefaultLocale);
    internalSlots.locale = r.locale;
    return pl;
}
exports.InitializePluralRules = InitializePluralRules;
