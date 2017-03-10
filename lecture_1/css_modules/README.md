# CSS modules example.

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
extract-text-plugin is just used to take the CSS bundle and output it to different file. In webpack it is also possible to _import_ CSS files in JS and extract-text-plugin would extract the CSS imports from JavaScript and collect the CSS into a separate file. But as CSS imports in JavaScript are webpack-specific and not in ES6 specification, they won't be used.
