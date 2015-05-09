Strategy for implementing contracts in a production JavaScript project.

Uses `contracts-js` for the contracts library. `contracts-js` is built on top of `sweetjs`, and as such certain build considerations much be taken into account.

Raw uncompiled code lives in `src/`, and gets compiled to `compiled/` via a `gulp` task. Compiled code should probably be git-ignored, and compiled on-demand via post-installs.

The gulp task watches for any changes in the `src/` directory, and upon change recompiles the raw code.

The unit tests all must run against the compiled code, and are therefore pointed toward the `compiled/` directory.

```js
var Registry = require('../compiled/registry');
```

Notes:

#### Linting.

Files using contracts should follow the below format:

```js
// Contract Imports
/* jshint ignore:start */
import @ from 'contracts.js'

var types = require('./types');

var Eid    = types.Eid,
    Entity = types.Entity;
/* jshint ignore:end */

// Begin core module code
// Must be below the contract imports
'use strict';
```

* Ignore the contract import
* Ignore any type imports (they will be marked as unsed vars, since only used in contracts)
* `use-strict` must be below contract imports

Even with this, the contract signatures will still be marked as illegal syntax.

#### Types

Types should be defined with function syntax. This lets the contract library give more explicit contract errors:

```js
var isEid = R.both(R.is(String), hasTwoOrMoreSegments);

function Eid(val) {
  return isEid(val);
}
```

Will result in an error output like:

```
expected: Eid
given: ...
...
```

Using composed or anonymous functions like this:

```js
var Eid = R.both(R.is(String), hasTwoOrMoreSegments);
```

Will result in strange contract errors:

```
expected: _both
given: ...
...
```
