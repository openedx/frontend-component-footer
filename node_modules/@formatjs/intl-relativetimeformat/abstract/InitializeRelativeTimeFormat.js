"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializeRelativeTimeFormat = void 0;
var ecma402_abstract_1 = require("@formatjs/ecma402-abstract");
var intl_localematcher_1 = require("@formatjs/intl-localematcher");
var NUMBERING_SYSTEM_REGEX = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;
function InitializeRelativeTimeFormat(rtf, locales, options, _a) {
    var getInternalSlots = _a.getInternalSlots, availableLocales = _a.availableLocales, relevantExtensionKeys = _a.relevantExtensionKeys, localeData = _a.localeData, getDefaultLocale = _a.getDefaultLocale;
    var internalSlots = getInternalSlots(rtf);
    internalSlots.initializedRelativeTimeFormat = true;
    var requestedLocales = (0, ecma402_abstract_1.CanonicalizeLocaleList)(locales);
    var opt = Object.create(null);
    var opts = (0, ecma402_abstract_1.CoerceOptionsToObject)(options);
    var matcher = (0, ecma402_abstract_1.GetOption)(opts, 'localeMatcher', 'string', ['best fit', 'lookup'], 'best fit');
    opt.localeMatcher = matcher;
    var numberingSystem = (0, ecma402_abstract_1.GetOption)(opts, 
    // @ts-expect-error TS option is wack
    'numberingSystem', 'string', undefined, undefined);
    if (numberingSystem !== undefined) {
        if (!NUMBERING_SYSTEM_REGEX.test(numberingSystem)) {
            throw new RangeError("Invalid numbering system ".concat(numberingSystem));
        }
    }
    opt.nu = numberingSystem;
    var r = (0, intl_localematcher_1.ResolveLocale)(availableLocales, requestedLocales, opt, relevantExtensionKeys, localeData, getDefaultLocale);
    var locale = r.locale, nu = r.nu;
    internalSlots.locale = locale;
    internalSlots.style = (0, ecma402_abstract_1.GetOption)(opts, 'style', 'string', ['long', 'narrow', 'short'], 'long');
    internalSlots.numeric = (0, ecma402_abstract_1.GetOption)(opts, 'numeric', 'string', ['always', 'auto'], 'always');
    var fields = localeData[r.dataLocale];
    (0, ecma402_abstract_1.invariant)(!!fields, "Missing locale data for ".concat(r.dataLocale));
    internalSlots.fields = fields;
    internalSlots.numberFormat = new Intl.NumberFormat(locales);
    internalSlots.pluralRules = new Intl.PluralRules(locales);
    internalSlots.numberingSystem = nu;
    return rtf;
}
exports.InitializeRelativeTimeFormat = InitializeRelativeTimeFormat;
