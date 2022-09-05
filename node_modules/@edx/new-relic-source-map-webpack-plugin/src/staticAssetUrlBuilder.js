'use strict';
const removeLastCharIfSlash = s => (s ? s.replace(/\/$/, '') : '');

module.exports = (url, publicPath, file) => {
    const parsedPublicPath = publicPath === 'auto' ? '' : publicPath;
    return `${removeLastCharIfSlash(url)}${removeLastCharIfSlash(parsedPublicPath)}/${file}`;
};
