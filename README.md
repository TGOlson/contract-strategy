Strategy for implementing contracts in a production JavaScript project.

Uses `contracts-js` for the contracts library. `contracts-js` is built on top of `sweetjs`, and as such certain build considerations much be taken into account.

Raw uncompiled code lives in `src/`, and gets compiled to `compiled/` via a `gulp` task.

The gulp task watches for any changes in the `src/` directory, and upon change recompiles the raw code.

The unit tests all must run against the compiled code, and are therefore pointed toward the `compiled/` directory.

[es-lint](http://eslint.org/)
[es-lint rules](http://eslint.org/docs/rules/)

Lastly, because the macros introduce a non-standard syntax, a more dynamic linter must be used. In this case, `es-lint`. Custom rules WIP.
