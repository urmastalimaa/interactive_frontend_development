Add routing to game lobby application using [React Router](https://reacttraining.com/react-router) version 4 (e.g 4.1.1).

Integrate React Router with Redux using [connected react router](https://github.com/supasate/connected-react-router).
Make sure that time travelling works in Redux dev tools with regards to URL changes!

### /createGame

When URL matches /createGame, show only create game buttons

When any create game button is clicked, automatically navigate to `/ongoingGames`.

### /players

When URL matches /players, show only online players

### /ongoingGames

When URL matches /ongoingGames, show a list of games (only type and status) with `status !== 'finished'`

### /finishedGames

When URL matches /finishedGames, show a list of games (only type and status) with `status == 'finished'`

### /games/:gameId

When URL matches /games/:gameId, show game (playing area with input) with ID that matches URL parameter `gameId`.
If no such game exists, display "Game not found".
