[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/email-prop-type.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/jaebradley/email-prop-type.svg?branch=master)](https://travis-ci.org/jaebradley/email-prop-type)
[![codecov](https://codecov.io/gh/jaebradley/email-prop-type/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/email-prop-type)
[![npm](https://img.shields.io/npm/v/email-prop-type.svg)](https://www.npmjs.com/package/email-prop-type)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/email-prop-type)
[![npm-total-downloads](https://img.shields.io/npm/dt/email-prop-type.svg)](https://www.npmjs.com/package/email-prop-type)
![GitHub](https://img.shields.io/github/license/jaebradley/email-prop-type)

# `email-prop-type`

## Introduction

This package is used to validate if a React Prop value is a valid email address.

Currently, there is no email prop type defined by [the `prop-types` package](https://www.npmjs.com/package/prop-types). While using `PropType.string` works, why not be as specific as possible when validating your props?

Additionally, though [it's relatively straightforward to create a custom prop type validator](https://www.ian-thomas.net/custom-proptype-validation-with-react/), if you need to implement similar prop type checking in multiple packages, you might not want to repeat yourself.

Depends on [the `email-validator` package](https://github.com/Sembiance/email-validator).

## Installation

```bash
npm install --save email-prop-type
```

As mentioned above, `email-prop-type` depends on the `email-validator` package. You need to install this package as a peer dependency of `email-prop-type`.

## Example Usage

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';

// Create a basic Hyperlink Component with a mailto href value
const Hyperlink = props => (
  <a href={`${mailto:props.emailAddress}`>{props.text}</a>
);

Hyperlink.propTypes = {
  text: PropTypes.string.isRequired,
  emailAddress: emailPropType.isRequired, // can also specify emailPropType if it is not required
};
```

## Alternatives

I didn't see many alternatives:

* It doesn't look like [the `airbnb/prop-types` project](https://github.com/airbnb/prop-types) has email validation.
* There's also [the `react-validator-prop-types` library](https://www.npmjs.com/package/react-validator-prop-types) but if you just want email validation, it might be too heavyweight.
