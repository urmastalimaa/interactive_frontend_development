# Routing and history in React

To use:
```
npm install
npm run start-server
npm start
```

## Explanation

* [React Router](https://reacttraining.com/react-router)
* [Connected React Router](https://github.com/supasate/connected-react-router)

_react_router_basics_ example is continued from.

### Connected React Router

Connected React Router provides 
* `ConnectedRouter` (as a replacement for `Router` from React Router) which keeps React Router synced with Redux state.
* `connectRouter` function to add routing action reducing to a (root) reducer, 
* `routerMiddleware` to integrate routing actions with history API
* `push` (as an replacement for `push` from React Router) which dispatches actions instead of modifying history directly

Those replacements/integrations are used to sync Redux and history API state while not changing close to anything about React Router usage.

### Changed/added files

Check
* index.js
* containers/App
* containers/CommentFormContainer
