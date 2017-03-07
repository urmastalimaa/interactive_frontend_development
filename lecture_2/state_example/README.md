# React State example

To use:
```
npm install && npm run start
```

## Explanation

### CommentList

CommentList has been updated to receive `comments` as props.
An instance of `Comment` component is created for each comment in `comments` array.
When dealing with lists of elements, each unique element must have a _special_ `key` property.
This allows React to distinguish between elements that changed vs elements that were removed and replaced with a different element.

### App
`App` component now has state: inserted comments.
Initial comments state is set to empty array in constructor.

In the constructor we also mimic receiving new components using `setInterval`, every 5 seconds 2 new components are 'received' and added to state.

We pass down the state as props to `CommentList`. Whenever state change, `App` and all its children are re-rendered.
