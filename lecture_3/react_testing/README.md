# React testing

To use:
```
npm install && npm test
```

## Explanation

[enzyme](https://github.com/airbnb/enzyme) and its chai integration
[chai-enzyme](https://github.com/producthunt/chai-enzyme) are used to test
React components.

[sinon](http://sinonjs.org/) is used to create stub callbacks which are
provided to React components that are under test.
[sinon-chai](https://github.com/domenic/sinon-chai) is used to assert when and
with what arguments callbacks are called.

```js
let myFunc = sinon.stub();
// ...
expect(myFunc).to.have.been.calledOnce;
expect(myFunc).to.have.been.calledWith(sinon.match.number, {my: 'object'});
```

See `TestHelper.js` for how _sinon_ and _enzyme_ integration is set up.

## Debugging NodeJS tests
Put a `debugger` keyword to the test you want to debug

In another terminal window, run
```
npm run test-debug
```

Open chrome on the provided URL.
Chrome console should stop execution on the first line.
Set breakpoints or continue if there are `debugger` statements in your tests.
All chrome debugging options are available.
