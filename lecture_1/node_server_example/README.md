# Node server example

This is a simple server which serves data to the client

Make sure you have nodejs installed
```
which node // should not be nil
```

Usage:
```
npm install
node app.js
```

Now navigate to http://localhost:3000

If everything is working, you should see a message "this is data from server"

## Explanation

Check out public/index.html

You can see that body has "Data not from server" and after body there is a script which does a simple Ajax request to the server.

The request is done to url http://localhost:3000/data. You can check out the response by navigating to that url in the browser.

Check out app.js. You can see that the server is set up on port 3000, it starts serving static assets on the url "/", which means http://localhost:3000/. The static assets are fetched from `public` folder.

Next you can see that it accepts get requests on `/data`. When somebody makes a request on `/data` it returns a simple data response.

Finally the server is started

When you first open the page, the static assets are served from `public` folder and by convention, it defaults to `index.html`. When `index.html` is loaded in your browser, the request to server is made. On a successful response, the `body` is overwritten with whatever data was sent from the server.
