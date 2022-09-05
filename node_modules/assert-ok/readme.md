# assert-ok [![Build Status](https://travis-ci.org/bendrucker/assert-ok.svg?branch=master)](https://travis-ci.org/bendrucker/assert-ok)

> Assert that a value is truthy


## Install

```
$ npm install --save assert-ok
```


## Usage

```js
var assertOk = require('assert-ok')

assertOk(true)
//=> noop

assertOk(false, 'My message')
//=> Error: My message
```

## API

#### `assertOk(input)` -> `undefined`

##### input

*Required*  
Type: `any`

An input to check for truthiness.


## License

MIT © [Ben Drucker](http://bendrucker.me)
