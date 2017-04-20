# Connect to [Game Lobby Server](https://www.npmjs.com/package/game_lobby_server) version 1.1.1 WebSocket API

[WebSocket API documentation](https://bitbucket.org/urmastalimaa/game_lobby_server/src/641a82fcfd1f3e4f6c3a1901ab5fc80e369cc92c/README.md?at=v1.1.1&fileviewer=file-view-default#markdown-header-websocket-api).

* Test all created presentational components (same rules as for previous homeworks)
* Test all created reducers (same rules as for previous homeworks)
* WebSocket protocol usage is not required to be tested.

## Connect button

* When Game Lobby is opened, show the header and a "Connect" button with an input field for player name
* When "Connect" is clicked, initiate a WebSocket connection, passing player name as `playerName` parameter in the query string
* The WebSocket server is started on localhost port 8081
* While connecting to the Server, show "Connecting..." to the user
* When connected to the Server, show disconnect button, online players, create game buttons and ongoing games
* When disconnected from the Server, revert to showing only the header and a "Connect" button with input
* Show a human readable error message when connection was closed with code 4000.

## Disconnect button

* Close the current WebSocket connection
* When disconnected from the Server, show only the header and a "Connect" button again

## Online players list

* Show a list of player names that correspond to the last players received via 'online-players' event from the WebSocket
* When disconnected from the Server, clear the player list (even if it is not visible!)

## Bonus point (1p) :
* Show '(you)' next to the current player, make sure this works even when multiple players with the same name are allowed to connect.
