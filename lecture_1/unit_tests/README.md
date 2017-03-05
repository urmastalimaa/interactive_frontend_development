# Unit tests

## Running tests

```
npm install
npm run test
```

#### Expected behaviour

* 4 passing tests

## Explanation

`npm run test` refers to a script in `package.json` which runs `mocha`.

### Mocha

Mocha is a test-runner. It defines how tests are defined (`describe`, `beforeEach`, `it`), how they are run and what the output looks like.

_mocha_ is configured in test/mocha.opts.
It specified the output format and instructs all test suites to require test/TestHelper JS file.

TestHelper is used to perform setup that is needed for all tests.

It uses _babel_ to transform source files into ES5 that can be interpreted in NodeJS. NodeJS has pretty good ES6 support, but modules are defined using spec. As we don't want to change our source files, _babel_ is used to inline modules.

### Chai

Chai is an assertion library that allows testing for properties of objects or functions. _expect_ style assertions are made available thorugh a global `expect` function in TestHelper.js.


### Tests

Check out test/PureFunctionsTests.js for example tests. It also demonstrates how `beforeEach` can be use to extract common setup code.


### transform-object-rest-spread plugin

ES6 defines spread syntax for arrays `[...myArray, newElem]`, but does not do so for objects. Object.assign can be used to create a new object with an additional property (`Object.assign({}, myObj, {newKey: newValue})`, but it is rather long for such a common  operation. 

transform-object-rest-spread enables `{...myObj, newKey: newValue}` syntax.
