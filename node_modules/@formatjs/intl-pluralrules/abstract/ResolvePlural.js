"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolvePlural = void 0;
var ecma402_abstract_1 = require("@formatjs/ecma402-abstract");
var GetOperands_1 = require("./GetOperands");
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-resolveplural
 * @param pl
 * @param n
 * @param PluralRuleSelect Has to pass in bc it's implementation-specific
 */
function ResolvePlural(pl, n, _a) {
    var getInternalSlots = _a.getInternalSlots, PluralRuleSelect = _a.PluralRuleSelect;
    var internalSlots = getInternalSlots(pl);
    (0, ecma402_abstract_1.invariant)((0, ecma402_abstract_1.Type)(internalSlots) === 'Object', 'pl has to be an object');
    (0, ecma402_abstract_1.invariant)('initializedPluralRules' in internalSlots, 'pluralrules must be initialized');
    (0, ecma402_abstract_1.invariant)((0, ecma402_abstract_1.Type)(n) === 'Number', 'n must be a number');
    if (!isFinite(n)) {
        return 'other';
    }
    var locale = internalSlots.locale, type = internalSlots.type;
    var res = (0, ecma402_abstract_1.FormatNumericToString)(internalSlots, n);
    var s = res.formattedString;
    var operands = (0, GetOperands_1.GetOperands)(s);
    return PluralRuleSelect(locale, type, n, operands);
}
exports.ResolvePlural = ResolvePlural;
