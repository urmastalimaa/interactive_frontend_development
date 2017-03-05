# Webpack example

## Running the application

```
npm install
npm run build
open index.html
```

#### Expected behaviour

* A title in the center of a greenish background is seen on the page

## Explanation

CSS imports are being managed by the css-loader plugin.
extract-text-plugin is just used to take the CSS bundle and output it to different file. In webpack it is also possible to _import_ CSS files in JS and extract-text-plugin would output all the CSS imports in the JS to a separate file. But as CSS imports in JS are not in ES6 spec, but are webpack-specific, they won't be used.
