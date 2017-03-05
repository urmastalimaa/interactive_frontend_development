# Webpack example

## Running the application

```
npm install
npm run start
```

#### Expected behaviour

* A title in the center of a greenish background is seen on the page

## Explanation

`npm run start` points to a script in `package.json`
That script runs `webpack-dev-server --open --config webpack.config.js`. The `open` flag opens the default browser on the specified port (default 8080) on localhost. Browser will look for index.html and require the specified JavaScript file(dist/bundle.js) from there.

Try changing src/index.js and see that the browser pages refreshes automatically once you save your change.

## Source Maps

_webpack.config.js_ defines `devtool: "inline-source-map"` which instructs webpack to add a link to our source code definition to the end of bundle.js. This link is call a _source map_.

A _source map_ is a file which maps the transformed source (bundle.js) to the original source (multiple files in src.js). In the current case, a _source map_ isn't an URL to a file, but a base64 encoding of the whole source definition in base64. A web-browser will map the generated file (bundle.js) to the original source. This allows both the browser to execute JavaScript that it supports and the developer to debug their original, unchanged source code.
