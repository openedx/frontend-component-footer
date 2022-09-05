import { LDMLPluralRule, PluralRulesLocaleData, PluralRulesData, NumberFormatDigitInternalSlots } from '@formatjs/ecma402-abstract';
export interface PluralRulesInternal extends NumberFormatDigitInternalSlots {
    initializedPluralRules: boolean;
    locale: string;
    type: 'cardinal' | 'ordinal';
}
export declare class PluralRules implements Intl.PluralRules {
    constructor(locales?: string | string[], options?: Intl.PluralRulesOptions);
    resolvedOptions(): any;
    select(val: number): LDMLPluralRule;
    toString(): string;
    static supportedLocalesOf(locales?: string | string[], options?: Pick<Intl.PluralRulesOptions, 'localeMatcher'>): string[];
    static __addLocaleData(...data: PluralRulesLocaleData[]): void;
    static localeData: Record<string, PluralRulesData>;
    static availableLocales: Set<string>;
    static __defaultLocale: string;
    static getDefaultLocale(): string;
    static relevantExtensionKeys: never[];
    static polyfilled: boolean;
}
//# sourceMappingURL=index.d.ts.map