# Optimization of Redux selector functions

To use:
```
npm install
npm run start-server
npm start
```

## Explanation

* [Computing derived data](http://redux.js.org/docs/recipes/ComputingDerivedData.html<Paste>)
* [reselect](https://github.com/reactjs/reselect)

_connected_react_router_ example is continued from.

### Redux selector functions and `shouldComponentUpdate`

Components created by using `connect` from react-redux implement
`shouldComponentUpdate` by comparing previous and new parameters using shallow
equality.

Selector functions create new objects from objects in state which break shallow
equality check.

Hand-writing `shouldComponentUpdate` is tedious and error-prone.

`reselect` provides a way to create and compose memoized selector functions.

`console.count` is used in CommentList to count renders of CommentList.

### Changed/added files

Check
* containers/CommentListContainer
* components/CommentList
