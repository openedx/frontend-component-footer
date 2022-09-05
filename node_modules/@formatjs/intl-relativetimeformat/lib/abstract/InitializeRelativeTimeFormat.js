import { CanonicalizeLocaleList, CoerceOptionsToObject, GetOption, invariant, } from '@formatjs/ecma402-abstract';
import { ResolveLocale } from '@formatjs/intl-localematcher';
var NUMBERING_SYSTEM_REGEX = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;
export function InitializeRelativeTimeFormat(rtf, locales, options, _a) {
    var getInternalSlots = _a.getInternalSlots, availableLocales = _a.availableLocales, relevantExtensionKeys = _a.relevantExtensionKeys, localeData = _a.localeData, getDefaultLocale = _a.getDefaultLocale;
    var internalSlots = getInternalSlots(rtf);
    internalSlots.initializedRelativeTimeFormat = true;
    var requestedLocales = CanonicalizeLocaleList(locales);
    var opt = Object.create(null);
    var opts = CoerceOptionsToObject(options);
    var matcher = GetOption(opts, 'localeMatcher', 'string', ['best fit', 'lookup'], 'best fit');
    opt.localeMatcher = matcher;
    var numberingSystem = GetOption(opts, 
    // @ts-expect-error TS option is wack
    'numberingSystem', 'string', undefined, undefined);
    if (numberingSystem !== undefined) {
        if (!NUMBERING_SYSTEM_REGEX.test(numberingSystem)) {
            throw new RangeError("Invalid numbering system ".concat(numberingSystem));
        }
    }
    opt.nu = numberingSystem;
    var r = ResolveLocale(availableLocales, requestedLocales, opt, relevantExtensionKeys, localeData, getDefaultLocale);
    var locale = r.locale, nu = r.nu;
    internalSlots.locale = locale;
    internalSlots.style = GetOption(opts, 'style', 'string', ['long', 'narrow', 'short'], 'long');
    internalSlots.numeric = GetOption(opts, 'numeric', 'string', ['always', 'auto'], 'always');
    var fields = localeData[r.dataLocale];
    invariant(!!fields, "Missing locale data for ".concat(r.dataLocale));
    internalSlots.fields = fields;
    internalSlots.numberFormat = new Intl.NumberFormat(locales);
    internalSlots.pluralRules = new Intl.PluralRules(locales);
    internalSlots.numberingSystem = nu;
    return rtf;
}
