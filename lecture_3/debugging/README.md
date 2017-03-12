# Debugging example

To use:
```
npm install && npm start
```

* Open console in your browser.
* Type your name into the author field and click submit.
* JavaScript evaluation should stop in App.handleCommentSubmit on the line with `debugger`
* Try stepping to the next line and out of the current function
* Try setting breakpoints elsewhere in index.js

## Explanation

Sourcemaps map the bundle.js back to source files. This allows us to debug and step through original soure code.
We can also set breakpoints by using browser developer tools (usually by clicking on line numbers on left-hand side).
