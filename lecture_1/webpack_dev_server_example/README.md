# Webpack-dev-server example

To use:
```
npm install
npm install webpack-dev-server -g
webpack-dev-server
open index.html // On Mac, this is valid command in terminal
```

Open the console in your browser, you should see:
```
Boop!
```

Now open main.js and add a line:
```
console.log("Beep!')
```

Refresh the page and you should now see in the browser console
```
Boop!
Beep!
```

## Explanation
npm install installs all the package dependencies

npm install webpack-dev-server -g installs the dev server on your computer to a global directory, which means it can be used outside of this folder. Note that in the homeworks, we do not want to install anything globally.

webpack-dev-server bundles the javascript files, starts watching them and creates a server that server the file.

When you make changes to the main.js, then the webpack-dev-server automatically detects changes and re-bundles the files, serving new files.
