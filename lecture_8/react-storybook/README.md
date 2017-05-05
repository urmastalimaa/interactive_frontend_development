# React Storybook

To use:
```
npm install
npm run storybook
```

## Explanation

* [React Storybook](https://github.com/storybooks/storybook), [documentation](https://storybooks.js.org/docs/react-storybook/basics/introduction/)

_connected_react_router_ example is continued from.

### React Storybook

As an application grows it can get harder to develop React components by using the full application through a browser.
Unit tests are an obvious tool to help validate basic properties of a component, but they don't help in developing the look and feel.

React Storybook (and similar tools) allow developing React Components in isolation.
Components that only require props (and not redux, react-router context etc) for rendering are good candidates.
React Storybook just provides a convenient interface (using the familiar web browser) to render components in different states.

#### Configuration
React Storybook does not reuse the whole application setup.
It has a separate webpack server running the storybook application.
It reuses babel configuration from the root directory if present.
Note that you might need to change how ES6 modules are handled in babel configuration, 
depending on the webpack configuration of react storybook.
In this example, we added a different babel configuration to .storybook/ which transpiles ES6 modules.

### Changed/added files

Check
* .storybook/config.js
* src/stories/*
