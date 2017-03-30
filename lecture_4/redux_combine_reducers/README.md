# Redux comment list example

To use:
```
npm install
npm test
npm start
```

## Explanation

Redux basic example is continued from. A filter box is added which filters
comments based on either author or text.

`combineReducers` is used to create multiple state slices.

Multiple containers are used to avoid collecting all properties and callbacks
in the root component. Note that container components are not reusable as they
are tied to specific state.
