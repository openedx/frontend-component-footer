"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldPolyfill = void 0;
var intl_localematcher_1 = require("@formatjs/intl-localematcher");
var supported_locales_1 = require("./supported-locales");
function supportedLocalesOf(locale) {
    if (!locale) {
        return true;
    }
    var locales = Array.isArray(locale) ? locale : [locale];
    return (Intl.RelativeTimeFormat.supportedLocalesOf(locales).length ===
        locales.length);
}
function hasResolvedOptionsNumberingSystem(locale) {
    try {
        return ('numberingSystem' in
            new Intl.RelativeTimeFormat(locale || 'en', {
                numeric: 'auto',
            }).resolvedOptions());
    }
    catch (_) {
        return false;
    }
}
function shouldPolyfill(locale) {
    if (locale === void 0) { locale = 'en'; }
    if (!('RelativeTimeFormat' in Intl) ||
        !supportedLocalesOf(locale) ||
        !hasResolvedOptionsNumberingSystem(locale)) {
        return (0, intl_localematcher_1.match)([locale], supported_locales_1.supportedLocales, 'en');
    }
}
exports.shouldPolyfill = shouldPolyfill;
