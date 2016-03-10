# Browserify server example

To use:
```
npm install
npm install beefy -g
beefy main.js:bundle.js 3000 --live
```

Open http://localhost:3000 in your browser
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

npm install beefy -g installs the server on your computer to a global directory, which means it can be used outside of this folder. Note that in the homeworks, we do not want to install anything globally.

beefy uses watchify underneath, which uses browserify underneath, which bundles the javascript files. Watchify then starts watching the bundled fules and beefy creates a server that serves the file.

When you make changes to the main.js, then the watchify automatically detects changes and browserify re-bundles the files, causing beefy to serve new files.
