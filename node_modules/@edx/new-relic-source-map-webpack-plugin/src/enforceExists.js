'use strict';
module.exports = (opts, name) => {
    if (opts[name] === undefined) {
        throw new Error(`${name} is required`);
    }
    return opts[name];
};
