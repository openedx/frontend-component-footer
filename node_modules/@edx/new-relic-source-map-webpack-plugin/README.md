## new-relic-source-map-webpack-plugin
Upload source maps to new relic as part of a webpack build.


## Install

`npm install @edx/new-relic-source-map-webpack-plugin --save-dev`

## Setup

Instantiate the plugin and add it to your plugins array.

`applicationId`, `apiKey`, and `staticAssetUrl` are required unless `noop` is `true`.  Full list of options in the next section.

```js
const NewRelicSourceMapPlugin = require('new-relic-source-map-webpack-plugin');

module.exports = {
    ...webpackConfig,
    plugins: [
        ...yourPlugins,
        new NewRelicSourceMapPlugin({
            applicationId: 'YOUR NEW RELIC APP ID',
            apiKey: process.env.NEW_RELIC_ADMIN_KEY,
            staticAssetUrl: 'http://examplecdn.com',
            noop: typeof process.env.NEW_RELIC_ADMIN_KEY === 'undefined', // upload source maps in prod builds only
        })
    ]   
}
```

If you're using `releaseName` and `releaseId`, make sure one or both are unique per build and
that you use the [`newrelic.addRelease`](https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/add-release) method in your code to identify the release.

## Customize

| Property       | Type           | Description  |
| ------------- |:-------------:| -----:|
| applicationId     | string | applicationId as defined [here](https://docs.newrelic.com/docs/browser/new-relic-browser/installation-configuration/copy-browser-monitoring-license-key-app-id) |
| apiKey         | string |   API Key as defined [here](https://docs.newrelic.com/docs/apis/rest-api-v2/requirements/api-keys) |
| staticAssetUrl | string | the domain your production assets are served from. Written as a complete url. Example: "https://www.examplecdn.com" |
| staticAssetUrlBuilder | function | A function for building the production url your js file is built from.  Will be called for every javascript file with four arguments: staticAssetUrl, the public path from your webpack config, the filename, and the [webpack stats instance](https://github.com/webpack/webpack/blob/master/lib/Stats.js).  Defaults to `${removeLastCharIfSlash(url)}${removeLastCharIfSlash(publicPath)}/${file}` |
| extensionRegex | regex | a regex used to find js files. Defaults to `/\.js$/` |
| noop | boolean | control boolean that decides whether or not to run the plugin. Set to true for builds where you don't want to upload assets to new relic. |
| releaseName | string | [Optional] unique identifier for the release name |
| releaseId | string | [Optional] unique version for the release identifier |
| errorCallback | function | [Optional] A function for error callback. Default is ```console.warn(`New Relic sourcemap upload error: ${err}`)``` |
