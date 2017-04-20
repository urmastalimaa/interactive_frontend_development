# Redux comment list example

To use:
```
npm install
npm test
npm run start-server
npm start
```

## Explanation

* [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).
* [Redux middleware](http://redux.js.org/docs/advanced/Middleware.html)

_async_process_with_middleware_ example is continued from.

### Websocket server

The WebSocket server will accept all requests and start sending messages to connected WebSockets as UTF-8 encoded JSON strings.
It will send a message with _eventName_ `ping` and _payload_ `{pingCount::Integer}` every 5 seconds. 

### Websocket client

Browsers support WebSocket protocol natively through the `WebSocket` object.

An abstraction on top of the native object is implemented in src/WebSocket.
This abstraction interprets incoming messages as JSON, notifies callbacks when connection status changes and exposes the `close` method. `parameters` can be optionally passed which will be translated to query parameters.

src/index.js dispatches actions when connecting, connected or disconnected from the WebSocket server.
Listening for WebSocket status changes and messages from it could be put to a middleware.
Also the connection is usually initiated through an user interaction (same goes for disconnection).
src/index.js also maps the `ping` event to `RECEIVED_PING` action.

A simple reducer to handle the actions is created:`reducers/WebSocketReducer.js`
