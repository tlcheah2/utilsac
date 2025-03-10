# Utility functions

## Installation

[`npm i utilsac`](https://www.npmjs.com/package/utilsac)

## utilsac

## utility.js

```js
import {
    createDebounced,
    createThrottled,
    throttledWithLast,
    chainPromises,
    chainRequestAnimationFrame,
    doNTimes,
    chainPromiseNTimes,
    timeFunction,
    timePromise,
    memoizeAsStrings,
    createTemplateTag,
    bytesLengthFromString,
} from "utilsac";
```

## deep.js

```js
import {
    deepCopy,
    deepCopyAdded,
    deepAssign,
    deepAssignAdded,
    deepEqual,
} from "utilsac/deep.js";
```


## typeCast.js

```js
import {
    stringFromArrayBuffer,
    arrayBufferFromBlob,
    stringFromBlob,
} from "utilsac/typeCast.js";
```


## evalGlobal.js

```js
import { evalGlobal } from "utilsac/evalGlobal.js";
```

```js
evalGlobal(`window.x = 2 ** 10`);
```

After the Promise is resolved the code has executed in global scope.


```js
evalGlobal(`
import sin form "./x.js";
window.x = sin(Math.PI)
`, `module`);
```

Use optional second argument with `module` to be able to use static imports

## blobs.js

```js
import { downloadBlob } from "utilsac/blobs.js";
```

## About

### Changelog

[Changelog](./changelog.md)


### License

[CC0](./license.txt)

### Related

 * [fnk](https://github.com/seanohue/fnk)
 * jQuery
 * lodash
 * ramda
 * [slugify](https://github.com/sindresorhus/slugify)
