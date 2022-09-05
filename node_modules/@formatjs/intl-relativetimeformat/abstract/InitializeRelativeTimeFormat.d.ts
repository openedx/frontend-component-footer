import { RelativeTimeFormatInternal, LocaleFieldsData } from '@formatjs/ecma402-abstract';
export declare function InitializeRelativeTimeFormat(rtf: Intl.RelativeTimeFormat, locales: string | string[] | undefined, options: Intl.RelativeTimeFormatOptions | undefined, { getInternalSlots, availableLocales, relevantExtensionKeys, localeData, getDefaultLocale, }: {
    getInternalSlots(rtf: Intl.RelativeTimeFormat): RelativeTimeFormatInternal;
    availableLocales: Set<string>;
    relevantExtensionKeys: string[];
    localeData: Record<string, LocaleFieldsData | undefined>;
    getDefaultLocale(): string;
}): Intl.RelativeTimeFormat;
//# sourceMappingURL=InitializeRelativeTimeFormat.d.ts.map