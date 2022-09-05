[![Build Status](https://api.travis-ci.org/edx/eslint-config.svg?branch=master)](https://travis-ci.org/edx/eslint-config)
[![NPM Version](https://img.shields.io/npm/v/@edx/eslint-config.svg)](https://www.npmjs.com/package/@edx/eslint-config)
[![npm_downloads](https://img.shields.io/npm/dt/@edx/eslint-config.svg)](https://www.npmjs.com/package/@edx/eslint-config)
[![license](https://img.shields.io/npm/l/@edx/eslint-config.svg)](https://github.com/edx/eslint-config/blob/master/LICENSE)
[![semantic release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# eslint-config

## Installation

If you're using @edx/frontend-build, then you'll get this package for free. Otherwise, you can install it via:

```
npx install-peerdeps --dev @edx/eslint-config
```

This will install the package and all of its peer dependencies.

Then, once it's installed, create an `.eslintrc.js` file in the top-level directory of your project with the following contents:

```
module.exports = {
  extends: "@edx/eslint-config",
}

```
