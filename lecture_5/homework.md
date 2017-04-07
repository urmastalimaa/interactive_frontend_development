# Use [Game Lobby Server version 1.0.7](https://www.npmjs.com/package/game_lobby_server) to play games

[Endpoint definitions](https://bitbucket.org/urmastalimaa/game_lobby_server/src/5c9b2405479dbb59bb28992774939921b9e59549/README.md?at=v1.0.7&fileviewer=file-view-default).

* Use a POST request to Game Lobby Server `/games` path to create a game 
  * Use _application/json;charset=UTF-8_ content type for the request
  * React to the request being in flight (free to choose how to display it to the user)
  * Handle **both** requests succeeding and failing
* Use a POST request to Game Lobby Server `/games/:gameId/moves` path to create moves 
  * Use _application/json;charset=UTF-8_ content type for the request
  * React to the request being in flight (free to choose how to display it to the user)
  * Handle **both** requests succeeding and failing
* Implement a middleware that uses an asynchronous action creator to interact
  with the server (check _async_process_with_middleware_ example)
  * Do not dispatch actions that interact with the server directly from the react-redux container.
  * Let the middleware interact with the server when a request is desired from the user interface

* Test new logic in presentational components (in-flight / failed requests)
* Test added / changed reducers
* Test the asynchronous action creator that sends XMLHttpRequests and
  translates responses to actions using mocked XMLHttpRequests (e.g the one
  provided by _sinon_)
* Make sure Redux chrome dev tools integration works
* Make sure failures are handled!
