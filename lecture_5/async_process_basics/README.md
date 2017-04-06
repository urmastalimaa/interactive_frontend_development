# Asynchronous processes and Redux

To use:
```
npm install
npm test
npm run start-server
npm start
```

## Explanation

* [Redux async actions](http://redux.js.org/docs/advanced/AsyncActions.html).
* [redux-thunk](https://github.com/gaearon/redux-thunk)

A simple server is implemented in server.js which is started by 
```
npm run start-server
```

The server has simulated latency and intermittently fails to retrieve comments
to simulate problems that can occur in real environments.

Redux application has been changed to fetch comments from the server and to
post comments to the server using `XMLHttpRequest` with JSON content type.

### Redux thunk

The fetching action creators are implement as asynchronous action creators
which are enabled by _redux-thunk_ middleware.

_redux-thunk_ allows writing actions that return functions that will be passed
the `store.dispatch` function which can be called at a later time (and multiple
times).

Said action creators usually use other, ordinary actions creators to dispatch
actions.

```js
let timer;
export const fetchComments = () => {
  return dispatch => {
    timer = setTimeout(
      () => dispatch(receivedComments(['comment1', 'comment2'])),
      1000
    )
  }
}
```

### Asynchronous processes

Every asynchronous processes has 3 stages: in-flight, succeeded, failed. All of
these must be handled by the user interface.

Asynchronous processes are much more complex than synchronous processes.
Redux helps a lot, but you still need to think and design.

### Changed files

Check
* JSONAjaxRequest
* actions/index.js
* components/CommentList
* components/Comment
* reducers/CommentListReducer

and associated tests.

## Testing

Sinon provides facilities to mock `XMLHttpRequest`, through
[useFakeXMLHttpRequest](http://sinonjs.org/releases/v2.1.0/fake-xhr-and-server/).
