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


_async_process_basic_ example is continued from.

### Middleware

A `CommentServerMiddleware` middleware is created. Middlewares are called whenever an action is dispatched to a store and they can inspect the action, call the next middleware (up to the reducer) or dispatch a different action now or at a later time. They are very flexible.

Care must be taken not to implement very _magical_ middlewares which remove the clarity and explicity of Redux.

`CommentServerMiddleware` listens for two specific actions:
* `GET_COMMENTS_REQUESTED`,
* `COMMENT_POST_REQUESTED`
and initiates a corresponding `XMLHttpRequest`.
The `XMLHttpRequest` is sent from an asynchronous action creator in `CommentServerActions`.

### Benefit of the separation

The react-redux container only dispatches a basic action - a request to fetch comments or post a comment. This makes sure that the container code is not tied to a specific back-end implementation.

The middleware can track in-flight requests and avoid making another request when one is already in flight.

The middleware can also hold other state related to the backend server.

### Changed files

Check
* middlewares/CommentServerMiddleware
* actions/CommentServerActions
