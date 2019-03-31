# Elder Score

[![CircleCI](https://circleci.com/gh/wabilin/elder-score.js/tree/master.svg?style=svg)](https://circleci.com/gh/wabilin/elder-score.js/tree/master)
[![codecov](https://codecov.io/gh/wabilin/elder-score.js/branch/master/graph/badge.svg)](https://codecov.io/gh/wabilin/elder-score.js)


A lightweight, underscore/lodash like libray.
Use ES6 standard to minimize package size. (Do not support ES5)

## NOTE
**This library is still not completed.**

## Usage

```js
import _ from 'elder-score';
```

or

```js
var _ = require('elder-score').default
```

then

```js
_.union([1 , 2], [2, 3], [1, 3, 5])); // => [1, 2, 3, 5]
```
