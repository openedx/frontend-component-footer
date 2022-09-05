'use strict';
const { publishSourcemap } = require('@newrelic/publish-sourcemap');

module.exports = opts => assets => {
    const {
        staticAssetUrlBuilder,
        publicPath,
        outputPath,
        applicationId,
        apiKey,
        url,
        releaseName,
        releaseId,
    } = opts;

    const javascriptUrl = staticAssetUrlBuilder(url, publicPath, assets.fileName);
    const sourcemapPath = outputPath + '/' + assets.mapName;

    return new Promise((resolve, reject) => {
        publishSourcemap(
            {
                sourcemapPath,
                javascriptUrl,
                applicationId,
                apiKey,
                releaseName,
                releaseId,
            },
            err => {
                if (err) {
                    reject(err);
                }
                resolve(javascriptUrl);
            }
        );
    });
};
