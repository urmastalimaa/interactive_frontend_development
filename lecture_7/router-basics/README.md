# Routing and history in React

To use:
```
npm install
npm run start-server
npm start
```

## Explanation

* [React Router](https://reacttraining.com/react-router)

_async_process_with_middleware_ example is continued from.

### React Router

React Router abstract [DOM history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and provides declarative links and routing.

All routes and links must be enclosed in a `Router` component which provides _context_ to children similary to redux `Provider`.

`Link` elements render anchors (<a>) to URLs which navigate without triggering a page refresh. Links use the DOM history API to achieve this.

`Route` elements map URLs to components and provide URL parameters (if any) to those components.

`Route` elements can be at any level of the application.

### Webpack and History API

Add the following configuration to webpack.config.js
```
  devServer: {
    historyApiFallback: true
  }
```

This instructs webpack dev server to not look for static files, but to show the landing page when an unknown URL is encountered.

### Changed/added files

Check
* containers/App
* containers/CommentContainer
* components/CommentList
* containers/CommentFormContainer
* webpack.config.js
