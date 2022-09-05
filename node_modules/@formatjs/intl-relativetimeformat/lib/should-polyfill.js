import { match } from '@formatjs/intl-localematcher';
import { supportedLocales } from './supported-locales';
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
export function shouldPolyfill(locale) {
    if (locale === void 0) { locale = 'en'; }
    if (!('RelativeTimeFormat' in Intl) ||
        !supportedLocalesOf(locale) ||
        !hasResolvedOptionsNumberingSystem(locale)) {
        return match([locale], supportedLocales, 'en');
    }
}
